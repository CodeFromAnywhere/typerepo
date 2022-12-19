"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonUiOperationBuild = void 0;
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var isNonUiOperationBuild = function (eventName, path) {
    // for indexation we don't care about any other event than adding or changing a file
    if (!["add", "change"].includes(eventName))
        return false;
    // in order to index a file, it must be in an operation, which means it must be in src
    if (!path.includes("/build/"))
        return false;
    // only ts and tsx files matter, the rest doesn't need to be indexed
    if (!["js"].includes((0, fs_util_js_1.getExtension)(path)))
        return false;
    // only for operations
    var operationPath = (0, get_path_1.findOperationBasePath)(path);
    if (!operationPath)
        return false;
    // we don't care about ui operations
    var classification = (0, get_path_1.getOperationClassification)(operationPath);
    if (!classification || classification.startsWith("ui-")) {
        return false;
    }
    return true;
};
exports.isNonUiOperationBuild = isNonUiOperationBuild;
//# sourceMappingURL=isNonUiOperationBuild.js.map