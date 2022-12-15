"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkToStringRecursively = exports.markdownParseToMarkdownStringFromContent = void 0;
var frontmatter_util_1 = require("frontmatter-util");
var markdownParseToMarkdownStringFromContent = function (markdownParse) {
    var _a;
    var contentResult = (_a = markdownParse.content) === null || _a === void 0 ? void 0 : _a.map(exports.chunkToStringRecursively).join("\n\n");
    var frontMatterString = (0, frontmatter_util_1.frontmatterParseToString)(markdownParse.parameters);
    return "".concat(frontMatterString, "\n").concat(contentResult);
};
exports.markdownParseToMarkdownStringFromContent = markdownParseToMarkdownStringFromContent;
var chunkToStringRecursively = function (chunk) {
    var _a;
    return "".concat("#".repeat(chunk.level), " ").concat(chunk.title || "", "\n\n").concat(chunk.content || "", "\n\n").concat((_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(exports.chunkToStringRecursively), "\n\n");
};
exports.chunkToStringRecursively = chunkToStringRecursively;
//# sourceMappingURL=markdownParseToMarkdownStringFromContent.js.map