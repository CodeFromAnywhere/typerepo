import { getPathsWithOperations } from "get-path";
import { forAllFolders } from "all";
import { log } from "log";
import { path, writeJsonToFile } from "fs-util";
import { readJsonFile } from "read-json-file";
import { rebuildOperation } from "./rebuildOperation";
/**
Rebuilds all operations that are needed to be rebuilt
 */
export const rebuildAllOperations = async (
  /**
   * If true, you are indicating that the rebuilding process has changed and all operations should be rebuilt after this date.
   */
  isRebuildingProcessUpdated?: boolean
) => {
  const configPath = path.join(__dirname, "..", "config.json");

  if (isRebuildingProcessUpdated) {
    await writeJsonToFile(configPath, { updatedAt: Date.now() });
  }

  const config = await readJsonFile<{ updatedAt: number }>(configPath);

  forAllFolders({
    type: "operations",
    basePath: getPathsWithOperations(),
    callback: async (folderPath, index) => {
      log(`#${index}: Let's do ${folderPath}`, { type: "success" });

      await rebuildOperation({
        operationBasePath: folderPath,
        noExit: true,
        updatedAt: config?.updatedAt,
      });

      return;
    },
  });
};
