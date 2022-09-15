// external
import { SourceFile } from "ts-morph";

//monorepo

import { db } from "database";
import { isAbsoluteImport } from "get-imported-dependencies";
import { notEmpty } from "js-util";
import { Creation } from "model-types";
import { TsInterface } from "code-types";

// relative
import { generateSchema } from "./generateSchema";
import { MorphInterfaceInfo } from "./types";
import { findOperationBasePath, getOperationRelativePath } from "get-path";
import { getTsMorphProject, getHasGeneric } from "ts-morph-util";

export const findAndUpsertTsInterfaces = async ({
  filePath,
  operationName,
  sourceFile,
}: {
  /**
   * If not provided, will load the project at the operation base path of the filepath, and get the source file at the filePath
   */
  sourceFile?: SourceFile;
  operationName: string;
  /**
   * path of the file to find TsInterfaces in
   */
  filePath: string;
}): Promise<undefined | Creation<TsInterface>[]> => {
  const operationBasePath = findOperationBasePath(filePath);
  if (!operationBasePath) return;

  if (!sourceFile) {
    const project = getTsMorphProject(operationBasePath);
    if (!project) return;
    sourceFile = project.getSourceFile(filePath);
  }

  if (!sourceFile) {
    console.log("Filepath not existing");
    return;
  }

  // NB: we need to get the named absolute import names because there may be type interfaces in there that we should add into our database!
  const namedAbsoluteImportNames = sourceFile
    .getImportDeclarations()
    .map((importDeclaration) => {
      const module = String(
        importDeclaration.getModuleSpecifier().getLiteralText()
      );
      if (isAbsoluteImport(module)) {
        const namedImports: string[] = importDeclaration
          .getNamedImports()
          .map((x) => x.getName());

        return namedImports;
      }
    })
    .filter(notEmpty)
    .flat();

  const morphInterfaceInfo: MorphInterfaceInfo[] = sourceFile
    .getInterfaces()
    .map((x) => ({
      hasGeneric: getHasGeneric(x),
      raw: x.getFullText(),
      name: x.getName(),
      isExported: x.isExported(),
      description: x
        .getLeadingCommentRanges()
        .map((x) => x.getText())
        .join("\n\n"),
      extensions: x.getExtends().map((x) => x.getText()),
    }));

  const morphTypeInfo: MorphInterfaceInfo[] = sourceFile
    .getTypeAliases()
    .map((x) => {
      const isExported = x.isExported();
      const name = x.getName();
      return {
        hasGeneric: getHasGeneric(x),
        raw: x.getFullText(),
        isExported,
        description: x
          .getLeadingCommentRanges()
          .map((x) => x.getText())
          .join("\n\n"),
        name,
        extensions: [],
      };
    });

  const morphTypesAndInterfacesInfo = morphTypeInfo.concat(morphInterfaceInfo);

  const tsInterfaces = await generateSchema(
    filePath,
    morphTypesAndInterfacesInfo,
    namedAbsoluteImportNames
  );

  const operationRelativeTypescriptFilePath = getOperationRelativePath(
    filePath,
    operationBasePath
  );
  // console.log({
  //   morphTypeNames: morphTypesAndInterfacesInfo.map((x) => x.name),
  //   namedAbsoluteImportNames,
  //   tsInterfacesLength: tsInterfaces.length,
  // });

  // @ts-ignore
  await db.remove(
    "TsInterface",
    (i) =>
      i.operationRelativeTypescriptFilePath ===
        operationRelativeTypescriptFilePath &&
      !tsInterfaces.map((x) => x.name).includes(i.name),
    { operationName }
  );
  // @ts-ignore
  const result = await db.upsert("TsInterface", tsInterfaces, {
    operationName,
    removeUntouched: true,
  });

  // log(`Done`, { type: "debug" }, result);
  return tsInterfaces;
};
