#!/usr/bin/env node
import { spawn } from "child_process";
import { fs, path } from "fs-util";
import { getOperationPath } from "get-path";
import { log } from "log";

export const nodemon = async (
  operationName: string,
  /**
   * name of the function that you want to run the cli from
   *
   * by convention, we are going to execute the `build/cli/[fnName].cli.js` file
   */
  cliFunctionName: string,
  /**
   * vars that need to be passed to the cli
   */
  vars?: string[],
  /**
   * manual project root for the operation to run
   */
  manualProjectRoot?: string
): Promise<void> => {
  const operationPath = await getOperationPath(operationName, {
    manualProjectRoot,
  });

  if (!operationPath) {
    console.log(`${operationName} not found`);
    return;
  }

  const cliPath = `build/cli/${cliFunctionName}.cli.js`;
  const absoluteCliPath = path.join(operationPath, cliPath);

  if (!fs.existsSync(absoluteCliPath)) {
    log(`${absoluteCliPath} not found (nodemon)`, { type: "error" });
    return;
  }
  const command = `node ${cliPath} ${vars ? ` ${vars.join(" ")}` : ""}`;

  const process = spawn(command, {
    cwd: operationPath,
    shell: true,
    stdio: "inherit",
  });
  //
  process
    .on("exit", (code) => {
      log(
        `Process ${cliFunctionName} has ended with code ${code}, restarting...`,
        { type: "important" }
      );

      nodemon(operationName, cliFunctionName, vars, manualProjectRoot);
    })
    .on("data", (message) => {
      log(message);
    })
    .on("error", (err) => {
      log(`${err.name} Error: ${err.message}`, { type: "error" });
    });
};
