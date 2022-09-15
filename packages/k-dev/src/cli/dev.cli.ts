#!/usr/bin/env node
import { path, writeJsonToFile } from "fs-util";
import { readJsonFile } from "read-json-file";
import { dev } from "../dev";

/**
 * The dev-cli
 * - runs the `dev` command which watches your operations with restarts
 * - stores your last choice in `dev.json`
 */
const devCli = async () => {
  const [customManualProjectRoot] = process.argv.slice(2);
  const devConfigPath = path.join(__dirname, "../..", "dev.json");
  const devConfig = await readJsonFile<{ manualProjectRoot: string }>(
    devConfigPath
  );

  const manualProjectRoot: string | undefined =
    customManualProjectRoot || devConfig?.manualProjectRoot;

  if (devConfig?.manualProjectRoot !== manualProjectRoot) {
    writeJsonToFile(devConfigPath, { manualProjectRoot });
  }

  dev(manualProjectRoot);
};

devCli();
