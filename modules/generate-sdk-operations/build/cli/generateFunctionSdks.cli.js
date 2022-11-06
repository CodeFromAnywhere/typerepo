#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var generateFunctionSdks_1 = require("../generateFunctionSdks");
var generateFunctionSdksCli = function () {
    var customProjectRoot = process.argv.slice(2)[0];
    var defaultProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
    (0, generateFunctionSdks_1.generateFunctionSdks)({
        manualProjectRoot: customProjectRoot || defaultProjectRoot,
    });
};
generateFunctionSdksCli();
//# sourceMappingURL=generateFunctionSdks.cli.js.map