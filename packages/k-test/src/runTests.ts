import { isAllTrue, makeArray } from "js-util";
import { Test } from "./types";

/**
 * run tests and log the results.
 *
 * input: Test
 *
 * output: isAllValid (boolean)
 */
export const runTests = async (
  test: Test,
  operationName?: string
): Promise<boolean> => {
  const tests = makeArray(test);
  if (tests.length === 0) return true;
  const testsValid = await Promise.all(
    // NB: doing an extra check on the type of the test in the array here, because it may contain a corrupt value
    tests.map((t) => (typeof t === "function" ? t() : true))
  );
  const passedAmount = testsValid.filter((x) => x).length;
  const failedAmount = testsValid.filter((x) => !x).length;

  /**
   * TODO:
   * - makeTest should return the reuslts of the test, not only a boolean
   * - save test results into operationIndex if operationName is given
   */

  console.log(
    `${
      operationName ? `${operationName}: ` : ""
    }✅ ${passedAmount} tests passed, ${
      failedAmount === 0 ? "" : "❌ "
    }${failedAmount} tests failed`
  );
  return isAllTrue(testsValid);
};
