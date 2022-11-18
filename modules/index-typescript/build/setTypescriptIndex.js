"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setTypescriptIndex=void 0;var fs_util_js_1=require("fs-util-js"),setTypescriptIndex=function(e,s){console.log("Should index this typescript file",s)};exports.setTypescriptIndex=setTypescriptIndex,exports.setTypescriptIndex.filter=function(e,s){
// for indexation we don't care about any other event than adding or changing a file
return!!["add","change"].includes(e)&&(
// in order to index a file, it must be in an operation, which means it must be in src
!!s.includes("/src/")&&!!["ts","tsx"].includes((0,fs_util_js_1.getExtension)(s)))};
//# sourceMappingURL=setTypescriptIndex.js.map