#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var get_path_1=require("get-path"),generateDbSdk_1=require("../generateDbSdk"),generateDbSdkCli=function(){var e=process.argv.slice(2)[0],t=(0,get_path_1.getProjectRoot)(process.cwd());(0,generateDbSdk_1.generateDbSdk)({manualProjectRoot:e||t})};generateDbSdkCli();
//# sourceMappingURL=generateDbSdk.cli.js.map