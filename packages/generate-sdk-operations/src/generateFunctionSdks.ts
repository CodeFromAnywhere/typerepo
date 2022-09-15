import { OperationClassification, TsFunction } from "code-types";
import { db } from "database";
import { getLastFolder } from "fs-util";
import { log } from "log";
import {
  getOperationClassification,
  getProjectRoot,
  getSrcRelativeFileId,
} from "get-path";
import { operationClassificationConst } from "code-types";
import { findDependantsRecursively } from "find-all-dependency-operations";
import { newOperationWithFiles, getOperationConfig } from "new-operation";
import { mergeObjectsArray, notEmpty, onlyUnique2 } from "js-util";
import { exploreOperationFolders } from "k-explore";
import { isIndexableFileId } from "filename-conventions";
// relative

export type FunctionsPerClassification = {
  [operationClassification in OperationClassification]: TsFunction[];
};

/**
 * The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!
 */
export const isTsFunctionIndexable = (tsFunction: TsFunction) => {
  const fileId = getSrcRelativeFileId(
    tsFunction.operationRelativeTypescriptFilePath
  );
  return isIndexableFileId(fileId);
};

export type OperationClassificationObject = {
  [operationName: string]: OperationClassification;
};

export const tsFunctionIsSdkable = (
  tsFunction: TsFunction,
  operationClassificationObject: OperationClassificationObject,
  operationClassification: OperationClassification
) => {
  const { operationName } = tsFunction;
  if (!operationName) return false;

  const functionClassification = operationClassificationObject[operationName];
  const isSdkable = functionClassification === operationClassification;

  return isSdkable;
};
/**
 * returns all sdk functions grouped by operation classification
 */
export const getSdkFunctions = async (config?: {
  manualProjectRoot?: string;
}): Promise<FunctionsPerClassification | undefined> => {
  const manualProjectRoot = config?.manualProjectRoot;
  const projectRoot = manualProjectRoot || getProjectRoot();
  if (!projectRoot) return;

  const sdkDependants = await findDependantsRecursively("sdk");

  const tsFunctions = await db.get("TsFunction", { manualProjectRoot });

  console.log({ tsFunctions: tsFunctions.length, manualProjectRoot });

  const exportedFunctions = tsFunctions
    .filter((x) => x.isExported)
    .filter(isTsFunctionIndexable)
    .filter((x) => {
      return x.operationName && !sdkDependants.includes(x.operationName);
    })
    .filter(onlyUnique2<TsFunction>((a, b) => a.name === b.name));

  console.log({ exportedFunctions: exportedFunctions.length });

  const operationFolders = await exploreOperationFolders({});
  const operationClassificationObject: OperationClassificationObject =
    mergeObjectsArray(
      operationFolders
        .map((operationBasePath) => {
          const operationClassification =
            getOperationClassification(operationBasePath);
          if (!operationClassification) return;
          const operationName = getLastFolder(operationBasePath);
          return { [operationName]: operationClassification };
        })
        .filter(notEmpty)
    );

  const sdkFunctionsPerClassification = mergeObjectsArray(
    operationClassificationConst.map((operationClassification) => {
      const sdkFunctions = exportedFunctions
        .filter((x) =>
          tsFunctionIsSdkable(
            x,
            operationClassificationObject,
            operationClassification
          )
        )
        .filter(onlyUnique2<TsFunction>((a, b) => a.name === b.name));

      log(
        `for ${operationClassification} we found ${sdkFunctions.length} functions`,
        { type: "debug" }
      );
      if (sdkFunctions.length === 0)
        log(
          `Warning: 0 functions found for ${operationClassification} operations`,
          { type: "warning" }
        );

      return { [operationClassification]: sdkFunctions };
    })
  ) as FunctionsPerClassification;

  return sdkFunctionsPerClassification;
};

/**
 * Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised
 */
export const newSdkOperation = async (
  operationName: string,
  tsFunctions: TsFunction[],
  config?: {
    manualProjectRoot?: string;
    skipYarnInstall?: boolean;
    dryrun?: boolean;
  }
) => {
  log(`${operationName} should contain ${tsFunctions.length} functions`, {
    type: "debug",
  });
  const skipYarnInstall = config?.skipYarnInstall;
  const manualProjectRoot = config?.manualProjectRoot;
  const dryrun = config?.dryrun;
  const importsString = tsFunctions
    .map((fn) => `import { ${fn.name} } from "${fn.operationName}";`)
    .join("\n");
  const sdkConstString = `export const sdk = { ${tsFunctions
    .map((fn) => `${fn.name}`)
    .join(",\n")}};`;

  const sdkTypeString = `export type SdkType = typeof sdk;`;

  const sdkTypescriptFileString = `${importsString}\n\n${sdkConstString}\n\n${sdkTypeString}`;

  const operationConfig = await getOperationConfig(operationName);

  const filesObject = { [`src/${operationName}.ts`]: sdkTypescriptFileString };
  const result = await newOperationWithFiles(operationConfig, filesObject, {
    overwriteIfExists: true,
    manualProjectRoot,
    skipYarnInstall,
    dryrun,
  });

  return result;
};

export const newSdkKeysOperation = async (
  operationName: string,
  tsFunctions: TsFunction[],
  config?: {
    manualProjectRoot?: string;
    skipYarnInstall?: boolean;
    dryrun?: boolean;
  }
) => {
  const keysConstString = `export const keys = [ ${tsFunctions
    .map((fn) => `"${fn.name}"`)
    .join(",\n")}];`;

  const result = await newOperationWithFiles(
    await getOperationConfig(operationName),
    { [`src/${operationName}.ts`]: keysConstString },
    { overwriteIfExists: true, ...config }
  );

  return result;
};

/**
Creates 
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system
*/
export const generateFunctionSdks = async (config?: {
  manualProjectRoot?: string;
  skipYarnInstall?: boolean;
  dryrun?: boolean;
}) => {
  const manualProjectRoot = config?.manualProjectRoot;

  const functionsPerClassification = await getSdkFunctions({
    manualProjectRoot,
  });

  if (!functionsPerClassification) return;
  const sdkFunctions = functionsPerClassification.node
    .concat(functionsPerClassification.js)
    .filter(onlyUnique2<TsFunction>((a, b) => a.name === b.name));

  const promises = [
    // sdks
    newSdkOperation("sdk", sdkFunctions, config),
    newSdkOperation("sdk-api", functionsPerClassification.node, config),
    newSdkOperation("sdk-js", functionsPerClassification.js, config),
    // sdk-keys
    newSdkKeysOperation("sdk-keys", sdkFunctions, config),
    newSdkKeysOperation(
      "sdk-api-keys",
      functionsPerClassification.node,
      config
    ),
    newSdkKeysOperation("sdk-js-keys", functionsPerClassification.js, config),
  ];

  await Promise.all(promises);
};
