"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativeLinkPath = void 0;
var fs_util_js_1 = require("fs-util-js");
var getCommonAncestor_1 = require("./getCommonAncestor");
/**
 * returns a relative link between two files
 */
var getRelativeLinkPath = function (absoluteFromFilePath, absoluteToFilePath, debug) {
    var commonAncestorPath = (0, getCommonAncestor_1.getCommonAncestor)(absoluteFromFilePath, absoluteToFilePath);
    //1 - go from `absoluteFromPath` to `commonAncestorPath`
    var commonAncestorRelativeFromPath = (0, fs_util_js_1.makeRelative)(absoluteFromFilePath, commonAncestorPath);
    var commonAncestorRelativeToPath = (0, fs_util_js_1.makeRelative)(absoluteToFilePath, commonAncestorPath);
    var foldersToGoBackAmount = commonAncestorRelativeFromPath.split("/").length - 1;
    var backOrStart = foldersToGoBackAmount === 0 ? "./" : "../".repeat(foldersToGoBackAmount);
    //2 - go from `commonAncestorPath` to `absoluteToPath`
    var relativeLinkPath = "".concat(backOrStart).concat(commonAncestorRelativeToPath);
    if (debug) {
        console.log({
            commonAncestorPath: commonAncestorPath,
            commonAncestorRelativeFromPath: commonAncestorRelativeFromPath,
            commonAncestorRelativeToPath: commonAncestorRelativeToPath,
        });
    }
    return relativeLinkPath;
};
exports.getRelativeLinkPath = getRelativeLinkPath;
//# sourceMappingURL=getRelativeLinkPath.js.map