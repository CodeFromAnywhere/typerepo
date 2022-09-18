// monorepo
import { getOperationPath } from "get-path";
import { fs, path } from "fs-util";
import { log } from "log";
// internal
import { runTests } from "./runTests";
import { Test } from "./types";

/**
 * runTestsForOperation(operationName) runs all tests that can be found in an operation. nicely logs and returns which funtions are working or not and why
 *
 * this assumes the index file exports all tests under the `test` constant, which should be done using this framework
 *
 * this also assumes your tests are exported from build/index.js (which means you need to build your code, not transpile, so it's not possible for every type of operation)
 */
export const runTestsForOperation = async (
  operationName: string,
  writeResultsToIndex?: boolean,
  manualProjectRoot?: string
) => {
  // console.log(`TESTING ${operationName}`);
  const operationBasePath = await getOperationPath(operationName, {
    manualProjectRoot,
  });
  if (!operationBasePath) {
    console.log("k-test:Couldn't find operation base path...", {
      operationName,
    });
    return;
  }

  const operationIndexJsPath = path.join(operationBasePath, "build/index.js");

  if (!fs.existsSync(operationIndexJsPath)) {
    console.log("Couldn't find operation build/index.js file", {
      operationName,
      operationIndexJsPath,
    });
    return;
  }

  const tests: Test | undefined = require(operationIndexJsPath).test;

  if (!tests) {
    log(`No tests found for ${operationName}`, { type: "debug" });
    return;
  }

  return runTests(tests, operationName);
};
