#!/usr/bin/env node
import { makeTest } from "make-test";
import { Test } from "./types";

// NB: Tried, but doesn't work, probably because it only invalidates cache for one file, not all the files that are required by that file... we need a separate process
// const requireWithoutCache = (filePath: string) => {
//   delete require.cache[path.resolve(filePath)];
//   return require(filePath);
// };

/**
 * example function that can be tested
 */
const sum = (a: number, b: number): number => a + b;

/**
 * test for example function
 */
export const test: Test = [
  makeTest(
    () => sum(1, 2),
    (result) => result === 3
  ),
  makeTest(
    () => sum(0, 0),
    (result) => result === 0
  ),

  makeTest(
    () => sum(5, 5),
    (result) => result === 10
  ),
];
