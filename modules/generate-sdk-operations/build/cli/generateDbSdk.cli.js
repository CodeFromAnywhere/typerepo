#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var generateDbSdk_1 = require("../generateDbSdk");
var generateDbSdkCli = function () {
    var customProjectRoot = process.argv.slice(2)[0];
    var defaultProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
    (0, generateDbSdk_1.generateDbSdk)({ manualProjectRoot: customProjectRoot || defaultProjectRoot });
};
generateDbSdkCli();
//# sourceMappingURL=generateDbSdk.cli.js.map