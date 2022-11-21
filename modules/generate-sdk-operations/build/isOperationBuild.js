"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperationBuild = void 0;
var fs_util_js_1 = require("fs-util-js");
var isOperationBuild = function (eventName, path) {
    // for indexation we don't care about any other event than adding or changing a file
    if (!["add", "change"].includes(eventName))
        return false;
    // in order to index a file, it must be in an operation, which means it must be in src
    if (!path.includes("/build/"))
        return false;
    // only ts and tsx files matter, the rest doesn't need to be indexed
    if (!["js"].includes((0, fs_util_js_1.getExtension)(path)))
        return false;
    return true;
};
exports.isOperationBuild = isOperationBuild;
//# sourceMappingURL=isOperationBuild.js.map