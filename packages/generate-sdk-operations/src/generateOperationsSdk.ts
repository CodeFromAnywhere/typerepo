import { getPathsWithOperations, getProjectRoot, makeRelative } from "get-path";
import { getLastFolder } from "fs-util";
import { exploreOperationFolders } from "k-explore";
import { newOperationWithFiles, getOperationConfig } from "new-operation";

/**
 * `sdk-operations` indexes all operations and builds an object containing all operations.
 */
export const generateOperationsSdk = async (config?: {
  manualProjectRoot?: string;
  skipYarnInstall?: boolean;
  dryrun?: boolean;
}) => {
  const skipYarnInstall = config?.skipYarnInstall;
  const dryrun = config?.dryrun;
  const manualProjectRoot = config?.manualProjectRoot;
  const projectRoot = manualProjectRoot || getProjectRoot();
  if (!projectRoot) return;

  const operationFolderPaths = await exploreOperationFolders({
    basePath: getPathsWithOperations({ manualProjectRoot }),
  });

  const operationNamePathRows = operationFolderPaths.map(
    (operationFolderPath) => {
      const operationName = getLastFolder(operationFolderPath);

      return `"${operationName}": "${makeRelative(
        operationFolderPath,
        projectRoot
      )}"`;
    }
  );
  const operationObjectString = `export const operations = { ${operationNamePathRows.join(
    ",\n"
  )} };`;

  const operationConfig = await getOperationConfig(
    "sdk-operations",
    "This is the operation where all operations are comprised"
  );

  await newOperationWithFiles(
    operationConfig,
    { "src/sdk-operations.ts": operationObjectString },
    { overwriteIfExists: true, skipYarnInstall, manualProjectRoot, dryrun }
  );
};
