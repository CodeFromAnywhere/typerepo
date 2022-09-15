// node wrappers
import { runChildProcess } from "run-child-process";
// monorepo
import { log } from "log";
import { cleanupTsDatabase } from "cleanup-typescript-database";
import { db } from "database";
import { generateSimpleIndex } from "generate-index";
import { isAllTrue, notEmpty, onlyUnique } from "js-util";
import { recalculateOperationIndexJson } from "operation-util";
import { operationToMarkdown } from "markdown-parsings";
import { oneByOne } from "one-by-one";
import { getPackageSourcePaths } from "get-package-source-paths";
import { preIndexLint } from "lint";
import { getOperationPath } from "get-path";
import { getLastFolder } from "fs-util";
import { isGeneratedOperation } from "filename-conventions";

// relative
import { shouldSkip } from "./shouldSkip";
import { isOperationBuildNeeded } from "./isOperationBuildNeeded";
import { yarnBuild } from "./yarnBuild";
import { exitIfProcessDependenciesChanged } from "./exitIfProcessDependenciesChange";
import { executeCommandQuietUnlessFail } from "./executeCommandQuietUnlessFail";
import { isSdkOperation } from "./isSdkOperation";

/**
 * This function rebuilds an operation and re-indexes (part of) its files.
 */
export const rebuildOperation = async ({
  operationBasePath,
  manualProjectRoot,
  filePaths,
  force,
  debug,
  noExit,
  stack = [],
  updatedAt,
  noUnresolvedRebuilding,
}: {
  /** last date when the rebuild-operation operation was updated (or any of its dependencies) */
  updatedAt?: number;
  /** if given, uses this as project root instead of the calculatable one */
  manualProjectRoot?: string;
  /** Full path to operation folder or any file therein */
  operationBasePath: string;
  /** If not given, explores all files in src folder of the operation. if given, must be an array of absolute file paths. it is not supported to index index files, as this creates duplicate and incorrect interfaces.  */
  filePaths?: string[];
  /** used for stopping recursion */
  noUnresolvedRebuilding?: boolean;
  /** if true, will not skip if nothing changed */
  force?: boolean;
  /** show logs */
  debug?: boolean;
  /** normally, it exits if the operation that was rebuilt was itself or one of its dependencies. Handy for watchOperations in combination with nodemon. If we don't want this behavior, provide noExit  */
  noExit?: boolean;
  /** stack of recursion of module names */
  stack?: string[];
}): Promise<boolean> => {
  const operationName = getLastFolder(operationBasePath);

  if (
    isSdkOperation(operationBasePath) ||
    isGeneratedOperation(operationBasePath)
  ) {
    console.log(`not going to rebuild sdk operation: ${operationName}`);
    return false;
  }

  const stackPrefix = `${stack.map(() => `--`).join("")}${operationName}: `;
  log(
    `${stackPrefix}Rebuilding${
      stack.length > 0 ? `(coming from ${stack.join(", ")})` : ""
    }`,
    {
      type: "important",
    }
  );

  log(`${stackPrefix}Pre-index lint`, { type: "important" });
  const lintProblems = await preIndexLint({
    operationFolderPath: operationBasePath,
  });

  if (lintProblems.length > 0) {
    log(`${stackPrefix}Operation cannot be built, we've got problem(s)`, {
      type: "warning",
    });
    log(lintProblems.join("\n"), { type: "warning" });

    await db.update(
      "OperationIndex",
      () => true,
      (operationIndex) => ({ ...operationIndex, lintProblems }),
      { operationName }
    );

    return false;
  }

  const skip = await shouldSkip({
    operationBasePath,
    debug,
    force,
    rebuildUpdatedAt: updatedAt,
  });
  if (skip) {
    log(`Skipping ${operationName}`);
    return true;
  }

  const result = await cleanupTsDatabase(operationName);

  log(
    result?.amountRemoved
      ? `Removed ${result?.amountRemoved} ts db instances`
      : "Nothing to clean up",
    { type: "success" }
  );

  executeCommandQuietUnlessFail({
    command: "yarn --offline",
    cwd: operationBasePath,
    description: `${stackPrefix}Installing`,
  });

  // 2a) finding imports/exports and writing them to index
  // TODO: we can also just check if build folder and index.js exist before looking at the import statements. These are easy to detect and when that happens we don't need to do the things below.
  log(`${stackPrefix}Getting imports/exports`, { type: "important" });

  await runChildProcess({
    operationFolderName: "get-imports-exports",
    scriptFileName: "findAndWriteImportsExports.cli",
    args: manualProjectRoot
      ? [operationBasePath, manualProjectRoot]
      : [operationBasePath],
  });

  /// SDK SHIT

  if (operationName !== "sdk") {
    // get all newly generated imports through the db (NB: old index files have just been removed)
    const imports = await db.get("TsImport", {
      operationName: operationName,
      manualProjectRoot,
    });
    // find the ones that are unresolved
    const unresolvedModules = imports
      .filter(
        (x) => x.isAbsolute && x.isModuleFromMonorepo && !x.isModuleResolved
      )
      .map((x) => x.module)
      .filter(onlyUnique);

    // console.log({
    //   imports: imports.length,
    //   unresolvedModules: unresolvedModules.length,
    // });

    // if there are any, we need to rebuildOperation for those modules and then rebuild ourselves again
    // NB: we can't do this if we already did this before
    if (unresolvedModules.length > 0) {
      if (noUnresolvedRebuilding) {
        log(
          `rebuilding the unresolved modules didn't work. Probably some indexation fails!`,
          { type: "error" }
        );

        await db.update(
          "OperationIndex",
          () => true,
          (operationIndex) => ({
            ...operationIndex,
            dependenciesBuildsFailed: true,
          }),
          { operationName }
        );

        return false;
      }

      log(
        `${stackPrefix}We need to rebuild ${
          unresolvedModules.length
        } operations because they have conflicts (${unresolvedModules.join(
          ", "
        )})`,
        { type: "warning" }
      );
      const succeededArray = await oneByOne(
        unresolvedModules,
        async (unresolvedOperationName) => {
          const fullPath = await getOperationPath(unresolvedOperationName, {
            manualProjectRoot,
          });
          if (!fullPath) {
            log(`${stackPrefix}${unresolvedOperationName} not found`, {
              type: "warning",
            });
            return false;
          }

          if (
            unresolvedOperationName === operationName ||
            stack.includes(unresolvedOperationName)
          ) {
            log(`${stackPrefix}cyclic dep`, { type: "warning" });
            return false;
          }

          console.log(`${stackPrefix}diving into new rebuildOperation `, {
            operationName,
            stack,
            unresolvedOperationName,
          });
          return rebuildOperation({
            manualProjectRoot,
            operationBasePath,
            stack: stack.concat([unresolvedOperationName]),
            debug,
            // can't skip this one because it is a dependency
            // however, skipping is very well defined. we can skip if shouldSkip is true!
            // force: true,
            noExit,
          });
        }
      );

      // NB: we don't rebuild this operation again if one of the dependency builds failed...
      if (!isAllTrue(succeededArray)) {
        log(`${stackPrefix}something failed! returning`);

        await db.update(
          "OperationIndex",
          () => true,
          (operationIndex) => ({
            ...operationIndex,
            dependenciesBuildsFailed: true,
          }),
          { operationName }
        );

        return false;
      }

      log(`${stackPrefix}rebuilding ourselves again`);
      // NB: all files on purpose...
      return rebuildOperation({
        manualProjectRoot,
        operationBasePath,
        debug,
        force,
        noExit,
        noUnresolvedRebuilding: true,
        stack: stack.concat([operationName]),
      });
    } else {
      log(`${stackPrefix}all imports were resolved`);
    }
  }

  // 2b) compiling and writing build errors to index
  log(`${stackPrefix}writing build errors to index`, {
    type: "important",
  });

  await runChildProcess({
    operationFolderName: "compile-typescript",
    scriptFileName: "writeBuildErrors.cli",
    args: manualProjectRoot
      ? [operationBasePath, manualProjectRoot]
      : [operationBasePath],
  });
  // read errors...
  // TODO: if this returns errors, don't continue

  // 3. creating remaining operation index files
  if (!filePaths) {
    //files from src
    filePaths = (
      await Promise.all(
        await getPackageSourcePaths({
          operationBasePath,
          ignoreIndexFiles: true,
        })
      )
    ).filter(notEmpty);
  }

  if (filePaths.length === 0) {
    log(`${stackPrefix}No files found for operation ${operationName}`, {
      type: "error",
    });
  } else {
    log(`${stackPrefix}${filePaths.length} files to index:`, {
      type: "important",
    });
  }

  await runChildProcess({
    operationFolderName: "index-typescript",
    scriptFileName: "cli",
    args: [...filePaths, manualProjectRoot || "null"],
  });

  const indexPath = await generateSimpleIndex({
    operationName,
    manualProjectRoot,
  });

  // // because we generated a new index, let's also reindex that file!
  // TODO: Figure out if this is REALLY NEEDED... I guess we can also infer which things are in the index, and we don't want to index things here except maybe the imports/exports!
  // if (indexPath) {
  //   await runChildProcess({
  //     operationFolderName: "index-typescript",
  //     scriptFileName: "cli",
  //     args: manualProjectRoot ? [indexPath, manualProjectRoot] : [indexPath],
  //   });

  //   log(`indexed index :)`, {
  //     type: "success",
  //   });
  // }

  const isBuildNeeded = isOperationBuildNeeded(operationBasePath);

  let buildSucceeded = true;
  // NB: no build, no tests (for now)
  if (isBuildNeeded) {
    buildSucceeded = await yarnBuild(operationBasePath, {
      rmFirst: false,
    });

    // TESTING EVERYTHING, including all dependant packages

    const imports = await db.get("TsImport", {
      manualProjectRoot,
    });
    // find the ones that are unresolved
    const dependantOperationNames = imports
      .filter((x) => x.isModuleFromMonorepo && x.module === operationName)
      .map((x) => x.operationName)
      .filter(onlyUnique)
      .filter(notEmpty);

    const testableOperations = [operationName, ...dependantOperationNames];
    const testPromises = testableOperations.map((operationName) =>
      // NB: we need this to be a child process because it requires the tests from the index, and that file changes, while normally a require will be cached. We can't easily invalidate the cache because it can come from many files.
      runChildProcess({
        operationFolderName: "k-test",
        scriptFileName: "runTestsForOperation.cli",
        args: manualProjectRoot
          ? [operationName, manualProjectRoot]
          : [operationName],
      })
    );

    await Promise.all(testPromises);
  }

  await db.update(
    "OperationIndex",
    () => true,
    (operationIndex) => ({
      ...operationIndex,
      buildSucceeded,
    }),
    { operationName }
  );

  // make a readme of the new index
  await operationToMarkdown({
    operationName: operationName,
    mergeDocsInline: true,
    manualProjectRoot,
    returnType: "save",
  });

  await db.update(
    "OperationIndex",
    () => true,
    (operationIndex) => ({
      ...operationIndex,
      indexImportExportError: "",
      lintProblems,
    }),
    { operationName }
  );

  await recalculateOperationIndexJson(operationBasePath);

  if (!noExit) {
    await exitIfProcessDependenciesChanged(operationName, manualProjectRoot);
  }

  return true;
};
