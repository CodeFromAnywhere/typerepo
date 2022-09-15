// monorepo
import { DbFileLocation } from "model-types";
import { log } from "log";
import {
  getOperationPath,
  getPathsWithOperations,
  getProjectRoot,
  makeRelative,
} from "get-path";
import { operations } from "sdk-operations";
import { mergeObjectsArray, notEmpty } from "js-util";
import { fs, getLastFolder, path } from "fs-util";
import { explore, exploreOperationFolders } from "k-explore";

// relative
import { MergedQueryConfig, RootDbFolder } from "../types";
import { getDbStorageMethodExtension } from "./getDbStorageMethodExtension";
import { getLocationPattern } from "./getLocationPattern";

/**
 * Needed in case of manual project root, otherwise use SDK!
 *
 * Returns project relative operation base paths
 */
export const calculateOperationsObject = async (manualProjectRoot: string) => {
  const operationBasePaths = await exploreOperationFolders({
    basePath: getPathsWithOperations({ manualProjectRoot }),
  });

  const operationsObject = mergeObjectsArray(
    operationBasePaths.map((operationBasePath) => {
      return {
        [getLastFolder(operationBasePath)]: makeRelative(
          operationBasePath,
          manualProjectRoot
        ),
      };
    })
  );

  return operationsObject;
};
/**
This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method. 
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)

 */
export const getDatabaseFiles = async (
  modelName: string,
  mergedConfig: MergedQueryConfig
): Promise<DbFileLocation[]> => {
  const manualProjectRoot = mergedConfig?.manualProjectRoot;
  const projectRoot = manualProjectRoot || getProjectRoot();
  if (!projectRoot) return [];
  const dbStorageMethod = mergedConfig.dbStorageMethod;

  const shouldSearchOperations = mergedConfig.operationName !== null;
  const shouldSearchProject = !mergedConfig.operationName;

  const pattern = getLocationPattern(dbStorageMethod, modelName, mergedConfig);

  let operationPath: string | undefined = undefined;

  if (mergedConfig.operationName) {
    operationPath = await getOperationPath(mergedConfig.operationName, {
      manualProjectRoot,
      notUseSdk: !!manualProjectRoot,
    });

    if (operationPath === undefined) {
      log(`Operation wasn't found ${mergedConfig.operationName}`, {
        type: "warning",
      });
      return [];
    }
  }

  const realProjectRelativeOperationPathsObject = manualProjectRoot
    ? await calculateOperationsObject(manualProjectRoot)
    : operations;

  const operationFolders: RootDbFolder[] = shouldSearchOperations
    ? mergedConfig.operationName && operationPath
      ? [
          {
            basePath: operationPath,
            operationName: mergedConfig.operationName,
          },
        ]
      : Object.keys(realProjectRelativeOperationPathsObject).map(
          (operationName) => ({
            basePath: path.join(
              projectRoot,
              realProjectRelativeOperationPathsObject[operationName]
            ),
            operationName,
          })
        )
    : [];
  const projectFolder: RootDbFolder | undefined = shouldSearchProject
    ? { operationName: null, basePath: projectRoot }
    : undefined;

  const rootFolders: RootDbFolder[] = [
    projectFolder,
    ...operationFolders,
  ].filter(notEmpty);

  /**
  based on configuration and convention, we will fill this array with the files to get data from

  NB: this should contain the actual files, not the patterns
   */
  let dbFiles: DbFileLocation[] = [];

  const isOperationFile =
    !!mergedConfig.operationName &&
    !!operationPath &&
    !!mergedConfig.operationRelativePath;

  if (isOperationFile && !!operationPath) {
    const exactAbsoluteOperationFilePath = path.join(
      operationPath,
      mergedConfig.operationRelativePath!
    );
    //make sure that extension matches `dbStorageMethod`, warn otherwise
    const customExt = mergedConfig.operationRelativePath
      ? path.parse(mergedConfig.operationRelativePath).ext
      : undefined;
    const isWrongExtension =
      customExt !== getDbStorageMethodExtension(dbStorageMethod);

    if (isWrongExtension) {
      log(
        `Incorrect extension found in operationRelativePath, found ${customExt}`,
        { type: "warning" }
      );
    }

    const projectRelativePath = exactAbsoluteOperationFilePath.substring(
      projectRoot.length
    );
    const operationRelativePath = exactAbsoluteOperationFilePath.substring(
      operationPath.length
    );

    dbFiles.push({
      modelName,
      absolutePath: exactAbsoluteOperationFilePath,
      operationName: mergedConfig.operationName!,
      projectRelativePath,
      operationRelativePath,
    });
  }

  if (!isOperationFile && mergedConfig.projectRelativePath) {
    const absolutePath = path.join(
      projectRoot,
      mergedConfig.projectRelativePath
    );
    const operationName = null;
    const projectRelativePath = mergedConfig.projectRelativePath;

    dbFiles.push({
      modelName,
      absolutePath,
      operationName,
      projectRelativePath,
    });
  }

  if (!mergedConfig.projectRelativePath && !isOperationFile && pattern) {
    // no exact path

    const conventionedPaths: DbFileLocation[] = (
      await Promise.all(
        rootFolders.map(async (rootFolder) => {
          const absolutePathPattern = path.join(rootFolder.basePath, pattern);
          const projectRelativePath = absolutePathPattern.substring(
            projectRoot.length
          );
          const operationRelativePath = absolutePathPattern.substring(
            rootFolder.basePath.length
          );

          const parsedPath = path.parse(absolutePathPattern);
          const ext = parsedPath.ext;

          if (parsedPath.name === "*") {
            if (fs.existsSync(parsedPath.dir)) {
              const fileNames: DbFileLocation[] = (
                await fs.readdir(parsedPath.dir)
              )
                .filter((fileName) => fileName.endsWith(ext))
                .map((fileName) => {
                  const absolutePath = path.join(parsedPath.dir, fileName);
                  const projectRelativePath = absolutePath.substring(
                    projectRoot.length
                  );
                  const operationRelativePath = absolutePath.substring(
                    rootFolder.basePath.length
                  );
                  const dbFileLocation: DbFileLocation = {
                    modelName,
                    absolutePath,
                    operationName: rootFolder.operationName,
                    projectRelativePath,
                    operationRelativePath,
                  };

                  return dbFileLocation;
                });

              return fileNames;
            }

            return [];
          } else {
            const dbFileLocation: DbFileLocation = {
              modelName,
              absolutePath: absolutePathPattern,
              operationName: rootFolder.operationName,
              projectRelativePath,
              operationRelativePath,
            };
            return [dbFileLocation];
          }
        })
      )
    ).flat();

    dbFiles = dbFiles.concat(conventionedPaths);
  }

  return dbFiles;
};
