"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenMarkdownChunks = void 0;
var getParagraphsRecursively_1 = require("./getParagraphsRecursively");
/**
 * Flatten markdown content into an array of paragraphs
 */
var flattenMarkdownChunks = function (markdownChunks) {
    var flatMarkdownChunks = markdownChunks
        .map(function (chunk) { return (0, getParagraphsRecursively_1.getParagraphsRecursively)(chunk); })
        .flat();
    return flatMarkdownChunks;
};
exports.flattenMarkdownChunks = flattenMarkdownChunks;
//# sourceMappingURL=flattenMarkdownChunks.js.map