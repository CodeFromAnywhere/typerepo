import { spawnSync } from "child_process";
import { buildFolderName } from "filename-conventions";
import { fs, getLastFolder, path } from "fs-util";
import { log } from "log";
import { minifyBuild } from "minify-build";
import { executeCommandQuietUnlessFail } from "./executeCommandQuietUnlessFail";
type Success = boolean;

/**
 * Builds and minifies the src
 */
export const yarnBuild = async (
  operationBasePath: string,
  config?: {
    /**
     * if true, build folder will be removed first
     */
    rmFirst?: boolean;
  }
): Promise<Success> => {
  if (config?.rmFirst && fs.existsSync(path.join(operationBasePath, "build"))) {
    const removed = spawnSync(`rm -rf build`, {
      cwd: operationBasePath,
      encoding: "utf8",
      stdio: "inherit",
      shell: true,
    });
  }

  if (!fs.existsSync(operationBasePath)) {
    return false;
  }

  // TODO:
  // this should only happen conditionally but for now we'll always try
  // later we can add the option to not build if any dependant builds break because of our code changes, but this is quite complex.
  const success = executeCommandQuietUnlessFail({
    command: "yarn build",
    cwd: operationBasePath,
    description: `Compiling source ${operationBasePath}`,
  });

  if (!success) {
    log(`Build failed for ${getLastFolder(operationBasePath)}`, {
      type: "error",
    });
    return false;
  } //

  const minified = await minifyBuild({
    buildFolderPath: path.join(operationBasePath, buildFolderName),
  });

  return minified || false;
};
