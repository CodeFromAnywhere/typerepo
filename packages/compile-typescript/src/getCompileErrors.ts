import { log } from "log";
import { getOperationPackageName, getPackageJson } from "get-package-json";
import { getTsConfig } from "get-ts-config";
import { getTypescriptErrorsFromFiles } from "./getTypescriptErrorsFromFiles";
import { TsBuildError } from "code-types";
import { db } from "database";
import { notEmpty, onlyUnique } from "js-util";
import { getPackageSourcePaths } from "get-package-source-paths";
import { Creation } from "model-types";

/**
 * gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one
 * 
 * 1) get buildErrors for all src files of current operation
   2) if build doesn't succeed, only check for build errors in current operation
   3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

   TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there
 */
export const getCompileErrors = async (
  operationBasePath: string,
  onlyDependants?: boolean
): Promise<Creation<TsBuildError>[]> => {
  const moduleName = await getOperationPackageName(operationBasePath);

  if (onlyDependants) {
    log("Getting compilation errors for all dependants", { type: "important" });

    // should get all operations that have this module in their imports
    // in the beginning, no indexes for this will exist, so that's fine...
    const allImports = await db.get("TsImport");
    const dependants: string[] = allImports
      .filter((imp) => imp.module === moduleName)
      .map((imp) => imp?.operationName)
      .filter(notEmpty)
      .filter(onlyUnique);

    log(`Dependants ${dependants.join(", ")} (now skipping)`, {
      type: "important",
    });
    // const stuff = (
    //   await Promise.all(
    //     dependants.map(async (dep) => {
    //       const operationFolderPath = await getOperationPath(dep);
    //       if (!operationFolderPath) return null;

    //       const filePaths: string[] = await getPackageSourcePaths({
    //         packageFolder: operationFolderPath,
    //       });
    //       const tsConfig = await getTsConfig(operationFolderPath);
    //       const packageJson = await getPackageJson({ operationFolderPath });

    //       if (!tsConfig) return null;
    //       if (!packageJson) return null;

    //       return {
    //         basePath: operationFolderPath,
    //         packageJson,
    //         compilerOptions: tsConfig.compilerOptions,
    //         filePaths,
    //       };
    //     })
    //   )
    // ).filter(notEmpty);

    const allBuildErrors = [].map(getTypescriptErrorsFromFiles).flat();

    return allBuildErrors;
  } else {
    const tsConfig = await getTsConfig(operationBasePath);
    const compilerOptions = tsConfig?.compilerOptions;
    if (!compilerOptions) {
      log(
        `Couldn't find tsConfig compilerOptions for this operation (${operationBasePath}`,
        { type: "error" }
      );
      return [];
    }

    const filePaths = await getPackageSourcePaths({
      operationBasePath,
    });

    const packageJson = await getPackageJson({
      operationFolderPath: operationBasePath,
    });

    if (!packageJson) return [];

    const buildErrorsHere = getTypescriptErrorsFromFiles({
      packageJson,
      basePath: operationBasePath,
      filePaths,
      compilerOptions,
    });

    // const buildErrorsHere: TsBuildError[] = [];
    if (buildErrorsHere.length > 0) {
      return buildErrorsHere;
    } else if (!onlyDependants) {
      // do the same for all dependants, but only if this is not already a dependant (just 1 level of recursion)...
      return getCompileErrors(operationBasePath, true);
    } else {
      return [];
    }
  }
};
