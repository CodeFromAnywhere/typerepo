#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var generateFunctionSdks_1 = require("../generateFunctionSdks");
var generateFunctionSdksCli = function () {
    var _a = process.argv.slice(2), dryrunString = _a[0], customProjectRoot = _a[1];
    var dryrun = dryrunString === "true";
    var defaultProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
    (0, generateFunctionSdks_1.generateFunctionSdks)({
        manualProjectRoot: customProjectRoot || defaultProjectRoot,
        dryrun: dryrun,
    });
};
generateFunctionSdksCli();
//# sourceMappingURL=generateFunctionSdks.cli.js.map