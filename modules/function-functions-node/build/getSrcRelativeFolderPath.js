"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSrcRelativeFolderPath = void 0;
var fs_util_js_1 = require("fs-util-js");
var getSrcRelativeFolderPath = function (operationRelativeSourcePath) {
    // 1) remove src/
    var withouSrc = operationRelativeSourcePath.startsWith("src/")
        ? operationRelativeSourcePath.slice("src/".length)
        : undefined;
    var folder = (0, fs_util_js_1.getFolderJs)(withouSrc);
    if (folder === "")
        return undefined;
    return folder;
};
exports.getSrcRelativeFolderPath = getSrcRelativeFolderPath;
//# sourceMappingURL=getSrcRelativeFolderPath.js.map