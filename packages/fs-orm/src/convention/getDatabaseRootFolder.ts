import { getOperationPath, getProjectRoot } from "get-path";
import { log } from "log";

/**
 * Tries to get the root folder where the database folder can be found.
 *
 * If an operationName is specified, this will be the operation base path
 * If not, this will be the project root.
 */
export const getDatabaseRootFolder = async (
  operationName: string | null | undefined,
  manualProjectRoot?: string
): Promise<string | undefined> => {
  const projectRoot = manualProjectRoot || getProjectRoot();
  if (!projectRoot) {
    log("getDatabaseRootFolder: No project root found");
    process.exit(1);
  }

  if (!operationName) {
    return projectRoot;
  }

  const operationBasePath = await getOperationPath(operationName, {
    manualProjectRoot: projectRoot,
  });

  if (!operationBasePath) {
    log("Couldn't find operation base path", { type: "error" });
  }

  return operationBasePath;
};
