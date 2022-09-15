#!/usr/bin/env node
import { fs, path } from "fs-util";
import { log } from "log";
import { lowerCaseArray } from "convert-case";
import { notEmpty } from "js-util";
import { getOperationPath } from "get-path";
import { db } from "database";
import { ImportStatement, isTestFn, mapToImportStatement } from "./util";

/**
 * Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.
 
NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

 */
export const generateNamedIndex = async ({
  operationName,
  manualProjectRoot,
}: {
  manualProjectRoot?: string;
  operationName: string;
}) => {
  if (!operationName) {
    log("No operation name, can't create index", { type: "error" });
    return;
  }
  const operationBasePath = await getOperationPath(operationName, {
    manualProjectRoot,
  });

  if (!operationBasePath) {
    log(`operationPath not found ${operationName}`, { type: "error" });
    return;
  }
  const outputPath = path.join(operationBasePath, "src", "index.ts");

  const functionArray = (
    await db.get("TsFunction", {
      operationName,
      manualProjectRoot,
    })
  )
    .filter(
      (x) =>
        x.isExported && x.operationRelativeTypescriptFilePath !== "src/index.ts"
    )
    .map((item) => mapToImportStatement(item, "function"));

  const variableArray = (
    await db.get("TsVariable", {
      operationName,
      manualProjectRoot,
    })
  )
    .filter(
      (x) =>
        x.isExported && x.operationRelativeTypescriptFilePath !== "src/index.ts"
    )
    .map((item) => mapToImportStatement(item, "variable"));

  const interfacesArray = (
    await db.get("TsInterface", {
      operationName,
      manualProjectRoot,
    })
  )
    .filter(
      (x) =>
        x.isExported && x.operationRelativeTypescriptFilePath !== "src/index.ts"
    )
    .map((item) => mapToImportStatement(item, "interface"));

  const importStatements: ImportStatement[] = [
    ...interfacesArray,
    ...functionArray,
    ...variableArray,
  ];
  // PART 1) mapping and filtering data

  const testStatements = importStatements.filter((x) => isTestFn(x));
  const otherStatements = importStatements.filter(
    (x) => lowerCaseArray(x.name).pop() !== "test"
  );

  const importStatementsString = importStatements
    // import all values (mostly functions, some consts)
    .map((statement) => {
      return `import { ${statement.name} } from "./${statement.srcRelativeFileId}";`;
    })
    .filter(notEmpty)
    .join("\n")
    .concat("\n");

  /**
   * this should return an array of all tests of all files
   */
  const exportTestString =
    testStatements.length > 0
      ? `export const test = [${testStatements
          .map((exp) => exp.name)
          .join(", ")}].flat();\n`
      : "";

  /**
   * export all values separately.
   */
  const exportStatementsString =
    otherStatements.length > 0
      ? `export { ${otherStatements.map((x) => x.name).join(", ")} };\n`
      : "";

  // PART 3) Aggreagating all scripts into one big string

  const indexationString = "// THIS FILE HAS BEEN GENERATED\n"
    .concat("\n")
    // all imports
    .concat(importStatementsString)
    .concat("\n\n")
    // all exports
    .concat(exportTestString)
    .concat(exportStatementsString)
    .concat("\n")
    .concat("// THANK YOU\n");

  await fs.writeFile(outputPath, indexationString, { encoding: "utf8" });

  log(`Created index for ${operationName}`, { type: "debug" });
};
