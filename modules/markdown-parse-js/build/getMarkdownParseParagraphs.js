"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkdownParseParagraphs = void 0;
var getChunkParagraphsRecursively_1 = require("./getChunkParagraphsRecursively");
/**
 * Gets all paragraphs (recursively) from a `MarkdownParse`
 */
var getMarkdownParseParagraphs = function (markdownParse) {
    var _a;
    var paragraphs = ((_a = markdownParse.content) === null || _a === void 0 ? void 0 : _a.map(getChunkParagraphsRecursively_1.getChunkParagraphsRecursively).flat()) || [];
    return paragraphs;
};
exports.getMarkdownParseParagraphs = getMarkdownParseParagraphs;
//# sourceMappingURL=getMarkdownParseParagraphs.js.map