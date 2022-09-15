#!/usr/bin/env node

import { log } from "log";
import { db } from "database";
import { getAllTsMorphSourceFiles } from "ts-morph-util";
import { getLastFolder } from "fs-util";
//
import { getImportsExports } from "./getImportsExports";
import { calculatePackageJsonDependencies } from "./calculatePackageJsonDependencies";
import { writeResult } from "./writeResult";
import { SensibleConfig } from "code-types";

/**
 * takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes
 *
 * NB: has a side effect: it also updates the package.json to include all needed dependencies.
 */
export const findAndWriteImportsExports = async (
  operationBasePath: string,
  manualProjectRoot?: string
): Promise<void> => {
  const operationName = getLastFolder(operationBasePath);
  const sourceFiles = await getAllTsMorphSourceFiles(operationBasePath);

  if (!sourceFiles || sourceFiles.length === 0) {
    const problem = `couldn't load any SourceFiles for ${operationBasePath} (sourceFiles=${sourceFiles})`;
    log(problem, { type: "error" });
    await writeResult({ success: false, message: problem, operationName });
    return;
  }

  const importsAndExports = await getImportsExports({
    sourceFiles,
    manualProjectRoot,
  });

  if (!importsAndExports) {
    const problem = "Something went wrong creating imports/exports";
    log(problem, { type: "error" });
    await writeResult({ success: false, message: problem, operationName });

    return;
  }

  const { exports, imports } = importsAndExports;

  // When rebuilding operations, add `packageJson.dependencies` according to imports found.

  const packageJsons = await db.get("PackageJson");

  await db.update(
    "PackageJson",
    // NB: this should always be true, but this extra check will make sure it doesn't update too much...
    (x) => x.name === operationName,
    (packageJson) => {
      const { newDependencies, hasGeneratedDependencies } =
        calculatePackageJsonDependencies(
          packageJson.dependencies,
          imports,
          packageJsons
        );

      const newSensibleObject: SensibleConfig = packageJson.sensible
        ? { ...packageJson.sensible, hasGeneratedDependencies }
        : { hasGeneratedDependencies };

      return {
        ...packageJson,
        sensible: newSensibleObject,
        dependencies: newDependencies,
      };
    },
    { operationName }
  );

  await db.clear("TsImport", { operationName });
  await db.clear("TsExport", { operationName });
  // @ts-ignore
  await db.upsert("TsImport", imports, { operationName });
  // @ts-ignore
  await db.upsert("TsExport", exports, { operationName });

  await writeResult({
    success: true,
    message: "Succesfully created imports and exports",
    operationName,
  });
};
