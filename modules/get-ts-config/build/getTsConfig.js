#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTsConfig=void 0;var read_json_file_1=require("read-json-file"),fs_util_1=require("fs-util"),getTsConfig=function(e){var i=fs_util_1.path.join(e,"tsconfig.json");return(0,read_json_file_1.readJsonFile)(i)};exports.getTsConfig=getTsConfig;
//# sourceMappingURL=getTsConfig.js.map