"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeExtensionsFromPath = exports.availableExtensions = void 0;
var removeNumberPrefix_1 = require("./removeNumberPrefix");
exports.availableExtensions = ["md"];
/**
 * - Removes numbers from file or foldernames in a path.
 * - Removes extension of files
 * - Returns the new path without numbers and without extension
 *
 * Works for files and folders
 */
var removeExtensionsFromPath = function (relativePath) {
    var chunks = relativePath.split("/");
    var chunksWithoutNumbers = chunks.map(removeNumberPrefix_1.removeNumberPrefix);
    // could be file
    var lastChunk = chunksWithoutNumbers[chunksWithoutNumbers.length - 1];
    var parts = lastChunk.split(".");
    var lastPart = parts[parts.length - 1];
    if (exports.availableExtensions.includes(lastPart)) {
        // remove extension
        parts.pop();
        chunksWithoutNumbers[chunksWithoutNumbers.length - 1] = parts.join(".");
    }
    var simplifiedPath = chunksWithoutNumbers.join("/");
    return simplifiedPath;
};
exports.removeExtensionsFromPath = removeExtensionsFromPath;
//# sourceMappingURL=removeExtensionsFromPath.js.map