import os from "os";
import { watchFoldersChokidar } from "./chokidar";
import { watchFoldersFs } from "./fswatch";
// based on your os, pick either chokidar or fswatch

export const pickWatcher = () => {
  if (os.platform() === "linux") return watchFoldersChokidar;
  return watchFoldersFs;
};
