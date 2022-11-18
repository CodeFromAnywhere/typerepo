"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeTypescriptIndex=void 0;var fs_util_js_1=require("fs-util-js"),removeTypescriptIndex=function(e,s){console.log(e,s,"Should remove all indexations we had on this path",s)};exports.removeTypescriptIndex=removeTypescriptIndex,exports.removeTypescriptIndex.filter=function(e,s){
// for indexation we don't care about any other event than adding or changing a file
return"unlink"===e&&(
// in order to index a file, it must be in an operation, which means it must be in src
!!s.includes("/src/")&&!!["ts","tsx"].includes((0,fs_util_js_1.getExtension)(s)))};
//# sourceMappingURL=removeTypescriptIndex.js.map