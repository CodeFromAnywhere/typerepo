"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExtension=exports.withoutSubExtensions=exports.withoutExtension=exports.getSubExtension=exports.removeTrailingSlash=exports.isPathRelative=exports.getFileOrFolderName=exports.getFolderJs=void 0;var getFolderJs=function(t){if(void 0!==t){var e=t.split("/");return e.pop(),e.join("/")}};exports.getFolderJs=getFolderJs;var getFileOrFolderName=function(t){if(t)return t.split("/").pop()};exports.getFileOrFolderName=getFileOrFolderName;var isPathRelative=function(t){return t.startsWith("./")||t.startsWith("../")};exports.isPathRelative=isPathRelative;var removeTrailingSlash=function(t){return"/"===t.charAt(0)?t.slice(1):t};exports.removeTrailingSlash=removeTrailingSlash;
/**
 * Provide a filename including its extension, to get the subextension.
 */
var getSubExtension=function(t){var e=t.split(".");
//removes extension
return e.pop(),e.pop()};exports.getSubExtension=getSubExtension;
/**
 * removes extension from the filename
 *
 */
var withoutExtension=function(t){var e=t.split(".");return e.pop(),e.join(".")};exports.withoutExtension=withoutExtension;
/**
 * Removes all subextensions from the filename (if any) including main extension.
 *
 * Only returns everything before the first dot (.)
 */
var withoutSubExtensions=function(t){return t.split(".")[0]};exports.withoutSubExtensions=withoutSubExtensions;
/**
 * returns the extension of the filename or path WITHOUT dot
 *
 * NB: not sure, but could be nice to replace this with path.extname(pathString)
 */
var getExtension=function(t){return t.split(".").pop()};exports.getExtension=getExtension;
//# sourceMappingURL=js.js.map