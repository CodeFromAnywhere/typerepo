#!/usr/bin/env node
import { db } from "database";
import { notEmpty, onlyUnique2 } from "js-util";
import { TsInterface } from "code-types";
import { newOperationWithFiles, getOperationConfig } from "new-operation";
export const generateDbSdk = async (config?: {
  manualProjectRoot?: string;
  skipYarnInstall?: boolean;
  dryrun?: boolean;
}) => {
  // const dependants = await findDependantsRecursively("sdk-db");

  const manualProjectRoot = config?.manualProjectRoot;
  const skipYarnInstall = config?.skipYarnInstall;
  const dryrun = config?.dryrun;
  const allDbModels = (await db.get("TsInterface", { manualProjectRoot }))
    .filter(
      (x) => x.isDbModel && x.dbStorageMethod && x.isExported && !x.hasGeneric
    )
    .filter((x) => x.operationName !== "database")
    .filter((x) => !!x.operationName) // && !dependants.includes(x.operationName)
    .filter(onlyUnique2<TsInterface>((a, b) => a.name === b.name));

  const typeImportsString = allDbModels
    .map((tsInterface) => {
      return `import type { ${tsInterface.name} } from "${tsInterface.operationName}";`;
    })
    .filter(notEmpty)
    .join("\n")
    .concat("\n");

  const exportDbTypesString = `export type DbModels = { ${allDbModels
    .map((x) => `${x.name}: ${x.name}`)
    .join(",")} };\n`;

  const exportDbKeysString = `export const dbModelKeys = [ ${allDbModels
    .map((x) => `"${x.name}"`)
    .join(",")} ] as const;\n`;

  const exportDbModelEnumString =
    "export type DbModelEnum = typeof dbModelKeys[number];\n";

  const exportModelQueryConfigString = `export const modelQueryConfig = {
    ${allDbModels
      ?.map((model) => {
        if (!model.dbStorageMethod) return;
        return `${model.name}: {
          dbStorageMethod: "${model.dbStorageMethod}",
          ${
            model.operationStorageLocationRelativeFilePath
              ? `operationRelativePath: "${model.operationStorageLocationRelativeFilePath}",`
              : ""
          }
        }`;
      })
      .filter(notEmpty)
      .join(",\n")}
  };`;

  // console.log({ dbLength: allDbModels.length });
  // PART 3) Aggreagating all scripts into one big string

  const indexationString = "// THIS FILE HAS BEEN GENERATED\n"
    .concat("\n")
    // all imports
    .concat(typeImportsString)
    .concat("\n\n")
    // all exports
    .concat(exportDbTypesString)
    .concat(exportDbKeysString)
    .concat(exportDbModelEnumString)
    .concat(exportModelQueryConfigString)
    .concat("\n")
    .concat("// THANK YOU\n");

  const operationConfig = await getOperationConfig(
    "sdk-db",
    "This is the operation where all Db models are comprised"
  );

  await newOperationWithFiles(
    operationConfig,
    { "src/sdk-db.ts": indexationString },
    { overwriteIfExists: true, skipYarnInstall, manualProjectRoot, dryrun }
  );
};
