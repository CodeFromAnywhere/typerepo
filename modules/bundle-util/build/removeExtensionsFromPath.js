"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeExtensionsFromPath=exports.availableExtensions=void 0;var removeNumberPrefix_1=require("./removeNumberPrefix");exports.availableExtensions=["md"];
/**
 * - Removes numbers from file or foldernames in a path.
 * - Removes extension of files
 * - Returns the new path without numbers and without extension
 *
 * Works for files and folders
 */
var removeExtensionsFromPath=function(e){var r=e.split("/").map(removeNumberPrefix_1.removeNumberPrefix),o=r[r.length-1].split("."),t=o[o.length-1];return exports.availableExtensions.includes(t)&&(
// remove extension
o.pop(),r[r.length-1]=o.join(".")),r.join("/")};exports.removeExtensionsFromPath=removeExtensionsFromPath;
//# sourceMappingURL=removeExtensionsFromPath.js.map