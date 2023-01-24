"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripReadmeFromFolder = void 0;
/**
 * To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md
 */
var stripReadmeFromFolder = function (filePath) {
    var suffix = "/readme.md";
    if (filePath.toLowerCase().endsWith(suffix)) {
        var strippedPath = filePath.slice(0, filePath.length - suffix.length);
        return strippedPath;
    }
    return filePath;
};
exports.stripReadmeFromFolder = stripReadmeFromFolder;
//# sourceMappingURL=stripReadmeFromFolder.js.map