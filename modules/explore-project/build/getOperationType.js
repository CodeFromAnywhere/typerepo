"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExplorationType = void 0;
var fs_util_1 = require("fs-util");
/**
 * gets the exploration type from an absolute type
 */
var getExplorationType = function (absolutePath, operationFolders) {
    var parsedPath = fs_util_1.path.parse(absolutePath);
    if ([".ts", ".tsx"].includes(parsedPath.ext)) {
        return "typescript";
    }
    if ([".md", ".mdx"].includes(parsedPath.ext)) {
        return "markdown";
    }
    if (parsedPath.ext.length > 0) {
        // NB: based on where this function is used, this should never happen
        return undefined;
    }
    if (operationFolders.includes(absolutePath)) {
        return "operation";
    }
    if (operationFolders.find(function (x) { return absolutePath.startsWith(x); })) {
        return "operationFolder";
    }
    return "folder";
};
exports.getExplorationType = getExplorationType;
//# sourceMappingURL=getOperationType.js.map