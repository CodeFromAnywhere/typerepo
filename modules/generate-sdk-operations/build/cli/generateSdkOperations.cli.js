#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var generateSdkOperations_1 = require("../generateSdkOperations");
var generateSdkOperationsCli = function () {
    var _a = process.argv.slice(2), dryrunString = _a[0], customProjectRoot = _a[1];
    var dryrun = dryrunString ? Boolean(dryrunString) : undefined;
    var defaultProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
    (0, generateSdkOperations_1.generateSdkOperations)(undefined, {
        dryrun: dryrun,
        yarnInstallAfter: true,
        manualProjectRoot: customProjectRoot || defaultProjectRoot,
    });
    if (dryrun) {
        console.log("Check new-operation/assets");
    }
    else {
        console.log("Check generated");
    }
};
generateSdkOperationsCli();
//# sourceMappingURL=generateSdkOperations.cli.js.map