"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkdownIntro = void 0;
/**
 This function takes a markdown parse and gets the first paragraph and a title from it, if available.

 Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.
 */
var getMarkdownIntro = function (markdownParse) {
    var _a, _b, _c;
    var firstChunk = (_a = markdownParse === null || markdownParse === void 0 ? void 0 : markdownParse.content) === null || _a === void 0 ? void 0 : _a[0];
    var title = firstChunk === null || firstChunk === void 0 ? void 0 : firstChunk.title;
    var firstParagraph = (firstChunk === null || firstChunk === void 0 ? void 0 : firstChunk.title)
        ? ((_c = (_b = firstChunk === null || firstChunk === void 0 ? void 0 : firstChunk.children) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.content) || null
        : (firstChunk === null || firstChunk === void 0 ? void 0 : firstChunk.content) || null;
    return { title: title, firstParagraph: firstParagraph };
};
exports.getMarkdownIntro = getMarkdownIntro;
//# sourceMappingURL=getMarkdownIntro.js.map