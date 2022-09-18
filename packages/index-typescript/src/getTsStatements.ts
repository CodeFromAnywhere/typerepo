import { SourceFile, SyntaxKind, VariableDeclaration } from "ts-morph";

//monorepo
import { notEmpty } from "js-util";
import { kebabCase } from "convert-case";
import { TsVariable, TsFunction, TsComment, TsInterface } from "code-types";
import { Creation } from "model-types";
import { log } from "log";
import { stripComment } from "comment-util";

// relative
import { getParametersFromInterfaces } from "./getParametersFromInterface";
import { getAllComments } from "./getAllComments";
import { getTypeInfo } from "./getTypeInfo";
import { getMaxIndentationDepth } from "./getMaxIndexationDepth";
import { getSizeSummary } from "./getSizeSummary";

export type VariableDeclarationInfo = {
  isExported: boolean;
  variableDeclarations: VariableDeclaration[];
  kindName: string;
  isArrowFunction: boolean;
  names: string[];
  comments: string[];
};

/**
 Gets functions and variables from a tsmorph sourcefile
 */
export const getTsStatements = async (
  sourceFile: SourceFile,
  tsInterfaces: Creation<TsInterface>[],
  operationRelativeTypescriptFilePath: string,
  fileContent: string
) => {
  const morphVars: VariableDeclarationInfo[] = sourceFile
    .getStatements()
    .map((x) => {
      const variableDeclarations = x
        .asKind(SyntaxKind.VariableStatement)
        ?.getDeclarations();

      if (!variableDeclarations || variableDeclarations.length === 0) return;

      return {
        isExported: variableDeclarations[0].isExported(),
        variableDeclarations,
        // NB: if this is a VariableStatement
        kindName: x.getKindName(),

        // NB: this is how we can check if it's an arrow function (declaration Initializer Kind Names Includes Arrow Function)
        isArrowFunction: variableDeclarations
          .map((v) => v.getInitializer())
          .map((x) => x?.getKindName())
          .includes("ArrowFunction"),

        // NB: if it's a variable, we can get the name like this
        names: variableDeclarations.map((x) => x.getName()),

        comments: x
          .getLeadingCommentRanges()
          .map((x) => x.getText())
          .map(stripComment),
      };
    })
    .filter(notEmpty);

  const stringLiterals = morphVars.filter((v) => !v.isArrowFunction);

  const tsVariables: Creation<TsVariable>[] = stringLiterals
    .map((v) => {
      const inits = v.variableDeclarations
        .map((x) => x.getInitializer())
        .filter(notEmpty);
      const name = v.names[0] || "__NO_NAME__";
      const slug = kebabCase(name);
      const value =
        inits.map((x) => x.getText()).filter(notEmpty)[0] || "__NO_VALUE__";

      // TODO: TEST, should return const, var or let
      const classification = v.variableDeclarations[0]
        .getVariableStatement()
        ?.getDeclarationKind()
        .toString()
        .toLowerCase() as TsVariable["classification"];

      const variableDeclaration = v.variableDeclarations?.[0];

      if (!variableDeclaration) {
        return;
      }

      const variableComments = getAllComments(
        variableDeclaration,
        fileContent,
        operationRelativeTypescriptFilePath
      );

      const statementComments: Creation<TsComment>[] = variableDeclaration
        .getDescendantStatements()
        .map((x) => {
          const allComments = getAllComments(
            x,
            fileContent,
            operationRelativeTypescriptFilePath
          );
          return allComments;
        })
        .flat();

      const comments = variableComments
        ? [...variableComments, ...statementComments]
        : statementComments;

      const isExported = v.isExported;
      const variable: Creation<TsVariable> = {
        isExported,
        operationRelativeTypescriptFilePath,
        comments,
        name,
        slug,
        value,
        // NB: still using typeToSchema here, is there another way?
        type: getTypeInfo(variableDeclaration.getType()),
        classification,
      };
      return variable;
    })
    .filter(notEmpty);

  const morphFunctions = sourceFile.getFunctions();
  const arrowFunctionVars = morphVars.filter((v) => v.isArrowFunction);

  const arrowFunctions: Creation<TsFunction>[] = arrowFunctionVars
    .map((v) => {
      const isExported = v.isExported;

      const arrowFunction = v.variableDeclarations?.map((x) =>
        x.getInitializer()?.asKind(SyntaxKind.ArrowFunction)
      )[0];

      if (!arrowFunction) {
        log("Should never get here, arrow function not found", {
          type: "error",
        });
        return;
      }

      const description = v.comments.join("\n\n");
      const name = v.names?.[0] || "no name";

      const returnType = getTypeInfo(
        arrowFunction.getReturnType().getApparentType()
      );
      const functionText = arrowFunction.getFullText();
      const fullText = functionText.concat(description);

      // TODO: make a convention for this
      const apiAuthenticationStrategy = "admin";
      // TODO: make a convention for this
      const isApiExposed = true;

      const fn: Creation<TsFunction> = {
        apiAuthenticationStrategy,
        isApiExposed,
        isExported,
        operationRelativeTypescriptFilePath,

        // TODO:
        commentsInside: [],
        rawText: functionText,
        name,
        slug: kebabCase(name),
        parameters: getParametersFromInterfaces(name, tsInterfaces),
        description,
        returnType,
        maxIndentationDepth: getMaxIndentationDepth(functionText),

        // TODO: isolate the size calculations...

        // size of function including comments
        size: getSizeSummary(fullText),

        // split it up
        //codeSize: {},
        //commentSize:{},

        // cumulativeCodeSize:{},
        // cumulativeCommentSize:{},
        // cumulativeSize:{},
      };

      return fn;
    })
    .filter(notEmpty);

  const regularFunctions: Creation<TsFunction>[] = morphFunctions.map(
    (functionDeclaration) => {
      const returnType = getTypeInfo(
        functionDeclaration.getReturnType().getApparentType()
      );

      const functionText = functionDeclaration.getFullText();

      const description = functionDeclaration
        .getJsDocs()
        .map((x) => x.getFullText())
        .join("\n\n");

      const fullText = functionText.concat(description);

      const name = functionDeclaration.getName() || "__anonymous__";

      const fn: Creation<TsFunction> = {
        name,
        slug: kebabCase(name),
        // TODO: add convention
        apiAuthenticationStrategy: "admin",
        isApiExposed: true,
        //
        isExported: functionDeclaration.isExported(),
        operationRelativeTypescriptFilePath,

        // TODO:
        commentsInside: [],
        // function metadata
        // function info
        description,
        parameters: getParametersFromInterfaces(name, tsInterfaces),
        returnType,
        size: getSizeSummary(fullText),
        rawText: functionText,
        maxIndentationDepth: getMaxIndentationDepth(functionText),
      };

      return fn;
    }
  );

  const tsFunctions = arrowFunctions.concat(regularFunctions);

  return { tsFunctions, tsVariables };
};
