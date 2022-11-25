"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChunkParagraphsRecursively = void 0;
var js_util_1 = require("js-util");
/**
 * Get all paragraphs (`content` values) recursively from a `MarkdownChunk`
 */
var getChunkParagraphsRecursively = function (chunk) {
    var _a;
    var childrenParagraphs = ((_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(exports.getChunkParagraphsRecursively).flat()) || [];
    var thisParagraph = chunk.content;
    var paragraphs = __spreadArray([thisParagraph], childrenParagraphs, true).filter(js_util_1.notEmpty);
    return paragraphs;
};
exports.getChunkParagraphsRecursively = getChunkParagraphsRecursively;
//# sourceMappingURL=getChunkParagraphsRecursively.js.map