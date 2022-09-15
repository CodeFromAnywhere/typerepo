// external
import { fs } from "fs-util";
import { Project } from "ts-morph";

//monorepo

import { db } from "database";
import { TsComment, TsLintWarning } from "code-types";
import { log } from "log";
import { writeKeyToOperationIndexJson } from "operation-util";
import { calculatePathMetaData } from "path-util";

// relative
import { getAllComments } from "./getAllComments";
import { CompleteOperationPathParse } from "./getValidatedOperationPathParse";
import { getTsStatements } from "./getTsStatements";
import { Creation } from "model-types";
import { findAndUpsertTsInterfaces } from "./findAndUpsertTsInterfaces";

export const indexTypescriptFile = async (
  project: Project,
  file: CompleteOperationPathParse
) => {
  const problems: string[] = [];

  const { filePath, operationName, operationRelativeTypescriptFilePath } = file;
  if (!operationName) return;

  // END VALIDATION

  const fileContent = await fs.readFile(filePath, "utf8");

  //select correct SourceFile from tsmorph project
  const sourceFile = project.getSourceFile(filePath);

  if (!sourceFile) {
    const problem = `couldn't load file ${filePath}`;
    problems.push(problem);
    await writeKeyToOperationIndexJson(filePath, "indexErrors", problems);
    log(problem, { type: "error" });
    return;
  }

  const tsInterfaces = await findAndUpsertTsInterfaces({
    filePath,
    sourceFile,
    operationName,
  });

  if (!tsInterfaces) {
    log("Shouldn't happen but tsInterfaces is undefined here...");
    return;
  }

  // NB: interfaces are a prerequisite for function...

  // TODO:
  const tsLintWarnings: TsLintWarning[] = [];

  // TODO: get main comment from top of file or associated md
  const mainComment = undefined;
  const pathMetaData = await calculatePathMetaData(filePath);

  const { tsFunctions, tsVariables } = await getTsStatements(
    sourceFile,
    tsInterfaces,
    operationRelativeTypescriptFilePath,
    fileContent
  );

  // gets all top level statements
  const topLevelComments: Creation<TsComment>[] = sourceFile
    .getStatementsWithComments()
    .map((x) => {
      const comments = getAllComments(
        x,
        fileContent,
        operationRelativeTypescriptFilePath
      );
      return comments;
    })
    .flat();

  const functionComments: Creation<TsComment>[] = tsFunctions
    .map((f) => f.commentsInside)
    .flat();
  const interfaceComments: Creation<TsComment>[] = tsInterfaces
    .map((f) => f.commentsInside)
    .flat();
  const variableComments: Creation<TsComment>[] = tsVariables
    .map((f) => f.comments)
    .flat();

  // TODO: get all top level comments from the statements, but also get all comments already found in functions, variables, and interfaces, put together.
  const tsComments: Creation<TsComment>[] = [
    topLevelComments,
    functionComments,
    interfaceComments,
    variableComments,
  ].flat();

  // Inserting all results into the database...

  // @ts-ignore
  await db.remove(
    "TsFunction",
    (fn) =>
      fn.operationRelativeTypescriptFilePath ===
        operationRelativeTypescriptFilePath &&
      !tsFunctions.map((x) => x.name).includes(fn.name),
    { operationName }
  );
  // @ts-ignore
  await db.upsert("TsFunction", tsFunctions, { operationName });

  await db.remove(
    "TsVariable",
    (v) =>
      v.operationRelativeTypescriptFilePath ===
        operationRelativeTypescriptFilePath &&
      !tsVariables.map((x) => x.name).includes(v.name),
    { operationName }
  );
  await db.upsert("TsVariable", tsVariables, {
    operationName,
    removeUntouched: true,
  });

  await db.remove(
    "TsComment",
    (c) =>
      c.operationRelativeTypescriptFilePath ===
      operationRelativeTypescriptFilePath,
    { operationName }
  );
  await db.upsert("TsComment", tsComments, {
    operationName,
    removeUntouched: true,
  });
};
