import { getLastFolder } from "fs-util";
import { getCompileErrors } from "./getCompileErrors";
import realFs from "fs";
import gracefulFs from "graceful-fs";
import { getPathParse, getProjectRoot } from "get-path";
import { db } from "database";
export const writeBuildErrors = async (
  operationBasePath: string,
  manualProjectRoot?: string
) => {
  const operationName = getLastFolder(operationBasePath);
  const projectRoot = manualProjectRoot || getProjectRoot();
  if (!projectRoot) return;
  // NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
  gracefulFs.gracefulify(realFs);

  // NB: this does it for all files in the whole operation!
  const buildErrors = await getCompileErrors(operationBasePath);

  await db.clear("TsBuildError", { operationName });
  // @ts-ignore
  await db.upsert("TsBuildError", buildErrors, { operationName });

  // log(`Wrote ts-build-errors for ${operationFolder}`, { type: "success" });

  process.exit(0);
};
