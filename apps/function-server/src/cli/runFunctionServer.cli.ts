#!/usr/bin/env node
import { runFunctionServer } from "../runFunctionServer";

/**
 * Argument:
 * - pass true if you want the server to be watching
 * - pass true true if you want the server to be watching and this is a restart (so don't launch things like browser)
 * - if you pass nothing, there will be no browser start and no watcher
 */
const runFunctionServerCli = () => {
  const [isWatchingString, isRestartString] = process.argv.slice(2);

  runFunctionServer(
    isWatchingString === "true" ? true : false,
    isRestartString === "true" ? true : false
  );
};

runFunctionServerCli();
