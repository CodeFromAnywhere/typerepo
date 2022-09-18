import { pickWatcher } from "watch-folders";
import { getAllOperationSourcePaths } from "get-all-operation-source-paths";
import { log } from "log";
import { rebuildOperation } from "rebuild-operation";
import realFs from "fs";
import gracefulFs from "graceful-fs";
import path from "path";
import { exitIfOperationsChange, gitCommitAllCron } from "./general";
import { getProjectRoot } from "get-path";
/**
 * watches all operations and does much more
 */ //
export const watchOperations = async (config?: {
  manualProjectRoot?: string;
}) => {
  const manualProjectRoot = config?.manualProjectRoot;
  const projectRoot = manualProjectRoot || getProjectRoot();
  // NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
  gracefulFs.gracefulify(realFs);

  const allOperationSourcePaths = await getAllOperationSourcePaths({
    manualProjectRoot,
  });

  exitIfOperationsChange(allOperationSourcePaths);
  gitCommitAllCron();

  log(`Watching 👁 👁  at ${projectRoot}`, { type: "success" });

  const watchFunction = pickWatcher();
  watchFunction({
    folders: allOperationSourcePaths,
    debug: true,
    onChange: async ({ eventType, filePaths, operationBasePath }) => {
      if (filePaths.length === 0) {
        return;
      }

      log(
        `OnChange triggered! ${filePaths
          .map((f) => path.parse(f).name)
          .join(",")}`,
        {
          type: "warning",
        }
      );

      const filteredFilePaths = filePaths.filter(
        (x) => !x.endsWith("/index.ts")
      );

      if (filteredFilePaths.length === 0) {
        return;
      }
      await rebuildOperation({
        operationBasePath,
        manualProjectRoot,
        filePaths: filteredFilePaths,
      });
    },
  });
};
