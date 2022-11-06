#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var generateOperationsSdk_1 = require("../generateOperationsSdk");
var generateOperationsSdkCli = function () {
    var customProjectRoot = process.argv.slice(2)[0];
    var defaultProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
    (0, generateOperationsSdk_1.generateOperationsSdk)({
        manualProjectRoot: customProjectRoot || defaultProjectRoot,
    });
};
generateOperationsSdkCli();
//# sourceMappingURL=generateOperationsSdk.cli.js.map