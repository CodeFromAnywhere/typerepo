#!/usr/bin/env node
import { fs, path } from "fs-util";
import { log } from "log";
import { getOperationPath, getSrcRelativeFileId, makeRelative } from "get-path";
import { getPackageSourcePaths } from "get-package-source-paths";
import { isIndexableFileId } from "filename-conventions";
/**
generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

 */
export const generateSimpleIndex = async ({
  operationName,
  manualProjectRoot,
}: {
  /**
   * if given, just exports * from those
   */
  operationName: string;
  manualProjectRoot?: string;
}) => {
  if (!operationName) {
    log("No operation name, can't create index", { type: "error" });
    return;
  }
  const operationBasePath = await getOperationPath(operationName, {
    manualProjectRoot,
  });

  if (!operationBasePath) {
    log(`operationPath not found ${operationName}`, { type: "error" });
    return;
  }
  const outputPath = path.join(operationBasePath, "src", "index.ts");

  const files = await getPackageSourcePaths({ operationBasePath });

  const srcRelativeFileIds = files.map((fullPath) =>
    getSrcRelativeFileId(makeRelative(fullPath, operationBasePath))
  );

  const indexationString = srcRelativeFileIds
    .filter(isIndexableFileId)
    .map((id) => `export * from "./${id}";`)
    .join("\n");

  await fs.writeFile(outputPath, indexationString, { encoding: "utf8" });

  return outputPath;
};
