import { nodemon } from "nodemon";

/**
 * Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))
 */
export const dev = (
  /**
   * manual project root for finding the operations
   */
  manualProjectRoot?: string
): void => {
  const vars = manualProjectRoot ? [manualProjectRoot] : undefined;
  nodemon("watch-operations", "watchOperations", vars);
};
