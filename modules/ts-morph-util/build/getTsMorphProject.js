#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTsMorphProject=void 0;var fs_1=require("fs"),fs_util_1=require("fs-util"),fs_util_2=require("fs-util"),log_1=require("log"),ts_morph_1=require("ts-morph"),getTsMorphProject=function(r){var e=fs_util_1.path.join(r,"tsconfig.json"),t=fs_util_2.fs.existsSync(e),o=(0,fs_1.existsSync)(fs_util_1.path.join(r,"src"));if(t&&o)return new ts_morph_1.Project({tsConfigFilePath:e,libFolderPath:"src"});(0,log_1.log)("This is not an operation: ".concat(r,". (src folder or tsconfig.json are not present)"),{type:"error"})};exports.getTsMorphProject=getTsMorphProject;
//# sourceMappingURL=getTsMorphProject.js.map