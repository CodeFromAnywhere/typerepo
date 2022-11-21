#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runFunctionServer_1 = require("../runFunctionServer");
/**
 * Argument:
 * - pass true if you want the server to be watching
 * - pass true true if you want the server to be watching and this is a restart (so don't launch things like browser)
 * - if you pass nothing, there will be no browser start and no watcher
 */
var runFunctionServerCli = function () {
    var _a = process.argv.slice(2), isWatchingString = _a[0], isRestartString = _a[1];
    (0, runFunctionServer_1.runFunctionServer)(isWatchingString === "true" ? true : false, isRestartString === "true" ? true : false);
};
runFunctionServerCli();
//# sourceMappingURL=runFunctionServer.cli.js.map