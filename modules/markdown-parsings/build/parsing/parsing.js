"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownChunksToMarkdownStringRecursive = exports.markdownChunkToMarkdownStringRecursive = exports.upMarkdownChunkLevelRecursively = void 0;
/**
 * Ups the levels of the markdownChunk array, recursively.
 *
 * Can be useful for merging multiple markdown sources
 */
var upMarkdownChunkLevelRecursively = function (markdownChunks) {
    if (!markdownChunks)
        return;
    var newMarkdownChunks = markdownChunks.map(function (chunk) { return (__assign(__assign({}, chunk), { level: chunk.level + 1, children: (0, exports.upMarkdownChunkLevelRecursively)(chunk.children) })); });
    return newMarkdownChunks;
};
exports.upMarkdownChunkLevelRecursively = upMarkdownChunkLevelRecursively;
var markdownChunkToMarkdownStringRecursive = function (markdownChunk) {
    var title = markdownChunk.title && markdownChunk.level !== 0
        ? "".concat("#".repeat(markdownChunk.level), " ").concat(markdownChunk.title)
        : undefined;
    var content = markdownChunk.content;
    var children = markdownChunk.children
        ? (0, exports.markdownChunksToMarkdownStringRecursive)(markdownChunk.children)
        : "";
    return "".concat(title ? "".concat(title, "\n\n") : "").concat(content ? "".concat(content, "\n\n") : "").concat(children);
};
exports.markdownChunkToMarkdownStringRecursive = markdownChunkToMarkdownStringRecursive;
var markdownChunksToMarkdownStringRecursive = function (markdownChunks) {
    var result = markdownChunks
        .map(exports.markdownChunkToMarkdownStringRecursive)
        .join("");
    return result;
};
exports.markdownChunksToMarkdownStringRecursive = markdownChunksToMarkdownStringRecursive;
//# sourceMappingURL=parsing.js.map