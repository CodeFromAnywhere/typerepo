"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dev=void 0;var fs_util_1=require("fs-util"),nodemon_1=require("nodemon"),dev=function(
/**
 * manual project root for finding the operations
 */
e){if(!e||fs_util_1.fs.existsSync(e)){var o=e?[e]:void 0;(0,nodemon_1.nodemon)("watch-operations","watchOperations",o)}else console.log("Please enter a manualProjectRoot that exists")};exports.dev=dev;
//# sourceMappingURL=dev.js.map