"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSizeSummary = void 0;
var path_util_1 = require("path-util");
/**
 * takes a string and simply returns the amount of characters, the amount of lines and the amount of bytes
 *
 * TODO: this is not the right place for this function
 */
var getSizeSummary = function (string) {
    var characters = string.length;
    var lines = string.split("\n").length;
    var bytes = (0, path_util_1.byteCount)(string);
    return {
        characters: characters,
        lines: lines,
        bytes: bytes,
        bytesPerCharacter: bytes / characters,
        charactersPerLine: Math.round(characters / lines),
        linesPerFile: lines,
        numberOfFiles: 1,
    };
};
exports.getSizeSummary = getSizeSummary;
//# sourceMappingURL=getSizeSummary.js.map