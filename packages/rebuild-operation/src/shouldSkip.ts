import { db } from "database";
import { buildFolderName, databaseFolderName } from "filename-conventions";
import { folderGetUpdatedAt } from "folder-get-updated-at";
import { fs, getLastFolder, path } from "fs-util";
import { isOperationBuildNeeded } from "./isOperationBuildNeeded";

/**
if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped

 **/
export const shouldSkip = async (config: {
  operationBasePath: string;
  debug?: boolean;
  force?: boolean;
  rebuildUpdatedAt?: number;
}) => {
  const { operationBasePath, debug, force, rebuildUpdatedAt } = config;
  const operationName = getLastFolder(operationBasePath);

  if (force) {
    console.log("Not skipping (force)");
    return false;
  }

  const operationIndex = (await db.get("OperationIndex", { operationName }))[0];
  if (!operationIndex) {
    console.log("Not skipping because no operationIndex ");
    return false;
  }

  if (
    rebuildUpdatedAt &&
    operationIndex &&
    operationIndex.updatedAt <= rebuildUpdatedAt
  ) {
    console.log("Not skipping because rebuild updated");
    return false;
  }

  const srcPath = path.join(operationBasePath, "src");
  const srcUpdatedAt = await folderGetUpdatedAt({ folderPath: srcPath });

  if (operationIndex && operationIndex.updatedAt <= srcUpdatedAt) {
    console.log("Not skipping because src updated");
    return false;
  }

  const hasIndexFolder = fs.existsSync(
    path.join(operationBasePath, databaseFolderName)
  );
  if (!hasIndexFolder) {
    console.log("Not skipping because has no db folder ");
    return false;
  }

  const noBuildFolder = !fs.existsSync(
    path.join(operationBasePath, buildFolderName)
  );

  const isBuildNeeded = isOperationBuildNeeded(operationBasePath);

  if (noBuildFolder && isBuildNeeded) {
    console.log("Not skipping because noBuildFolder");
    return false;
  }

  return true;
};
