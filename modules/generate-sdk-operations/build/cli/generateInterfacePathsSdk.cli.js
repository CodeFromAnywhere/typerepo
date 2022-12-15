#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var path_sdks_1 = require("../path-sdks");
var generateInterfacePathsSdkCli = function () {
    var _a = process.argv.slice(2), dryrunString = _a[0], customProjectRoot = _a[1];
    var dryrun = dryrunString === "true";
    var defaultProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
    var manualProjectRoot = customProjectRoot || defaultProjectRoot;
    (0, path_sdks_1.generateInterfacePathsSdk)({ dryrun: dryrun, manualProjectRoot: manualProjectRoot });
};
generateInterfacePathsSdkCli();
//# sourceMappingURL=generateInterfacePathsSdk.cli.js.map