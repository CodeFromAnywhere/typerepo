"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOutline = exports.printNestedTitles = exports.getTitlesRecursively = void 0;
/**
 * helper function to get a nested array of the titles and its subtitles
 */
var getTitlesRecursively = function (chunk) {
    var _a;
    var childrenTitles = (_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(exports.getTitlesRecursively);
    var returnStatement = [];
    if (chunk.title)
        returnStatement.push(chunk.title);
    if (childrenTitles === null || childrenTitles === void 0 ? void 0 : childrenTitles.length)
        returnStatement.push(childrenTitles);
    return returnStatement;
};
exports.getTitlesRecursively = getTitlesRecursively;
/**
 * helper function (recursive) that prints nested titles with .. as prefix and a newline after every title
 *
 * TODO: allow for numbering titles
 */
var printNestedTitles = function (nestedTitles, depth) {
    var realDepth = depth || 0;
    var prefix = "..".repeat(realDepth);
    var printedTogether = nestedTitles === null || nestedTitles === void 0 ? void 0 : nestedTitles.map(function (nestedTitle) {
        return Array.isArray(nestedTitle)
            ? (0, exports.printNestedTitles)(nestedTitle, realDepth + 1)
            : "".concat(prefix).concat(nestedTitle, "\n");
    }).join("\n");
    return printedTogether;
};
exports.printNestedTitles = printNestedTitles;
/**
 * low-level function that gets the outline for MarkdownParse
 *
 * NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.
 */
var getOutline = function (markdownParse) {
    var _a;
    var titles = (_a = markdownParse.content) === null || _a === void 0 ? void 0 : _a.map(exports.getTitlesRecursively).flat();
    var outlineString = (0, exports.printNestedTitles)(titles);
    return outlineString;
};
exports.getOutline = getOutline;
//# sourceMappingURL=outline.js.map