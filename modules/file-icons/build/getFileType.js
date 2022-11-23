"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileType = void 0;
var getFileType = function (fullPath) {
    var _a;
    if (fullPath.endsWith(".ts"))
        return "typescript";
    if (fullPath.endsWith(".tsx"))
        return "typescript";
    if (fullPath.endsWith(".js"))
        return "javascript";
    if (fullPath.endsWith(".jsx"))
        return "javascript";
    if (fullPath.endsWith(".md"))
        return "markdown";
    if (fullPath.endsWith(".mdx"))
        return "markdown";
    if (fullPath.endsWith(".json"))
        return "json";
    if (!((_a = fullPath.split("/").pop()) === null || _a === void 0 ? void 0 : _a.includes(".")))
        return "folder";
    return "other";
};
exports.getFileType = getFileType;
//# sourceMappingURL=getFileType.js.map