// external
import realFs from "fs";
import gracefulFs from "graceful-fs";
import { path } from "fs-util";
import { getTsMorphProject } from "ts-morph-util";

//monorepo
import { notEmpty } from "js-util";
import { PackageJson } from "code-types";
import { findOperationBasePath, getProjectRoot } from "get-path";
import { log } from "log";
import { readJsonFile } from "read-json-file";
import { writeKeyToOperationIndexJson } from "operation-util";

import { getValidatedOperationPathParse } from "./getValidatedOperationPathParse";
import { indexTypescriptFile } from "./indexTypescriptFile";
import { oneByOne } from "one-by-one";

/**
 * Creates a typescript file index in 3 steps
 * 1) Introspects the file
 * 2) Calculates all needed information about it
 * 3) Saves the result to /db/******.json in the operation root

 NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

 NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?
 
 TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.

 */
export const indexTypescript = async ({
  filePaths,
  manualProjectRoot,
}: {
  /**
   * filepaths of files to index. must be files from the same operation.
   */
  filePaths: string[];
  manualProjectRoot: string | null;
}): Promise<void> => {
  // NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
  gracefulFs.gracefulify(realFs);

  const firstFilePath = filePaths[0];
  if (!firstFilePath) {
    log("Please provide some file paths");
  }

  // NB: we can assume all files are from the same operation
  const operationBasePath = findOperationBasePath(firstFilePath);
  if (!operationBasePath) {
    log("Operation must have a basepath to be indexed", { type: "error" });
    return;
  }
  const projectRoot = manualProjectRoot || getProjectRoot(firstFilePath);
  if (!projectRoot) {
    log("No project root found", { type: "error" });
    return;
  }
  const packageJson = await readJsonFile<PackageJson>(
    path.join(operationBasePath, "package.json")
  );

  if (!packageJson) {
    log("Operation must have a package.json to be indexed", { type: "error" });
    return;
  }

  const operationName = packageJson.name;

  if (!operationName) {
    log("Operation must have a name to be indexed", { type: "error" });
    return;
  }

  const problems: string[] = [];

  // TODO: this takes a long time. I should probably execute everything for every file after this and use the same project

  //create tsmorph project for full operation
  const project = getTsMorphProject(operationBasePath);

  if (!project) {
    const problem = "couldn't load project";
    problems.push(problem);
    await writeKeyToOperationIndexJson(filePaths[0], "indexErrors", problems);
    log(problem, { type: "error" });
    return;
  }

  const filePathsToIndex = filePaths
    .map(getValidatedOperationPathParse)
    .filter(notEmpty);

  // NB: one by one because if you do multiple at once, writing commets goes corrupt because concurrent writing.
  await oneByOne(filePathsToIndex, async (file, index) => {
    process.stdout.write(`${index + 1}) ${file.srcFileId} `);
    const result = await indexTypescriptFile(project, file);
    console.log("✅");
    return result;
  });
};
