#!/usr/bin/env node
import { getAllOperationSourcePaths } from "get-all-operation-source-paths";
import { log } from "log";
import { execSync } from "child_process";
import { getProjectRoot } from "get-path";
/**
 * every 5 seconds compares if the operationsourcepaths have changed. If so, exits the process
 */
export const exitIfOperationsChange = (allOperationSourcePaths: string[]) => {
  setInterval(async () => {
    const newOperationSourcePaths = await getAllOperationSourcePaths();

    const isSame = allOperationSourcePaths.reduce(
      (same, p, i) => (newOperationSourcePaths[i] === p ? same : false),
      true
    );

    //TODO: if you change a folder name, it's not detected now.
    if (!isSame) {
      log("new package? ok bye", { type: "error" });
      process.exit();
    }
  }, 5000);
};

/*

const pushPosition = async () => {
  const position = await getLocation();
  if (position) {
    push("Position", {
      ...position,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      createdFirstAt: Date.now(),
      deletedAt: 0,
      id: generateId(),
    });
  }
};

const pushLight = async () => {
  const light = 1;
  if (light) {
    push("Light", {
      id: generateId(),
      createdFirstAt: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deletedAt: 0,
      light,
    });
  }
};

const watchLocation = async () => {
  pushPosition();
  setInterval(() => {
    pushPosition();
  }, 60000);
};

const watchLight = async () => {
  pushLight();
  setInterval(() => {
    pushLight();
  }, 60000);
};*/

export const gitCommitAllCron = () => {
  setInterval(() => {
    try {
      // NB: This doesn't work well with nested .git folders!
      execSync(
        "[[ `git status --porcelain .` ]] && git add . && git commit -m 'Automatic commit'",
        { cwd: getProjectRoot(), stdio: "inherit" }
      );
    } catch {}
  }, 1000 * 3600);
};
