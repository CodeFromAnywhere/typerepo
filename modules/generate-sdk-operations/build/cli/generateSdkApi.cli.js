#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_path_1 = require("get-path");
var generateSdkApi_1 = require("../generateSdkApi");
var generateSdkApiCli = function () {
    var customProjectRoot = process.argv.slice(2)[0];
    var defaultProjectRoot = (0, get_path_1.getProjectRoot)(process.cwd());
    (0, generateSdkApi_1.generateSdkApi)({
        manualProjectRoot: customProjectRoot || defaultProjectRoot,
    });
};
generateSdkApiCli();
//# sourceMappingURL=generateSdkApi.cli.js.map