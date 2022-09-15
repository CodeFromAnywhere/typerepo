#!/usr/bin/env node
import { getOperationPath, makeRelative } from "get-path";
import { log } from "log";
import { fs, path } from "fs-util";
import { explore } from "k-explore";
import { minify } from "terser";

/**
 * takes an operation name or build folder path, then explores all ts files in src folder, finds the matching js file in the build folder, and executes terser from dependency, not from cli
 */
export const minifyBuild = async ({
  operationName,
  buildFolderPath,
}: {
  operationName?: string;
  buildFolderPath?: string;
}) => {
  if (operationName) {
    const operationFolderPath = await getOperationPath(operationName);

    if (!operationFolderPath) {
      log(`Can't find that operation`, { type: "error" });
      return;
    }

    buildFolderPath = path.join(operationFolderPath, "build");
  }

  if (!buildFolderPath) {
    log(
      `minifyBuild: Please provide an existing operationName or a buildFolderPath`,
      { type: "error" }
    );
    return;
  }

  const srcFolderPath = path.join(buildFolderPath, "..", "src");

  if (!fs.existsSync(srcFolderPath)) {
    log(`minifyBuild: ${srcFolderPath} not found, we can't minify`, {
      type: "error",
    });
    return;
  }

  if (!fs.existsSync(buildFolderPath)) {
    log(`minifyBuild: ${buildFolderPath} does not exist`, { type: "error" });
    return;
  }

  const tsFilesExploreResult = await explore({
    basePath: srcFolderPath,
    extension: ["ts", "tsx"],
  });
  /**
   * relative file paths from src, withtout extension
   */
  const absoluteJsPaths = tsFilesExploreResult
    .map((x) => {
      // get relative file path without extension
      const parsedPath = path.parse(x.path);
      const pathWithoutExtension = path.join(parsedPath.dir, parsedPath.name);

      const relativeFileId = makeRelative(pathWithoutExtension, srcFolderPath);

      return relativeFileId;
    })

    .map((relativeFilePath) => {
      // use that to get js file in the build folder

      const jsFilePath = path.join(
        // NB: it's strange that it thinks that buildFolderPath can still be undefined here.
        buildFolderPath!,
        relativeFilePath.concat(".js")
      );

      return jsFilePath;
    });

  try {
    await Promise.all(
      absoluteJsPaths.map(async (jsFilePath) => {
        const fileName = path.parse(jsFilePath).base;
        const fileContent = await fs.readFile(jsFilePath, { encoding: "utf8" });
        if (!fileContent || fileContent.length === 0) {
          log(`Empty file found at ${jsFilePath}`, { type: "error" });
          return;
        }

        // console.log(`minifying ${jsFilePath}`);

        const output = await minify(fileContent, {
          mangle: true,
          compress: true,
          format: { comments: "all" },
        });

        // console.log({ output });

        if (!output.code) {
          log(`No code generated for ${jsFilePath}`, { type: "error" });
          return;
        } else {
          await fs.writeFile(jsFilePath, output.code, {
            encoding: "utf8",
          });
        }

        // log("Written dist file", { type: "success" });
        return true;
      })
    );

    return true;
  } catch (e) {
    log(`something went wrong with minification: ${e}`, { type: "error" });
  }

  return;
};
