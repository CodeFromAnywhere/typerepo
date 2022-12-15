"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownParseToMarkdownString = void 0;
var frontmatter_util_1 = require("frontmatter-util");
var make_test_1 = require("make-test");
var exampleContents_1 = require("./exampleContents");
/**
 * NB: this just uses RAW!
 *
 * Use `markdownParseToMarkdownStringFromContent` for the real deal
 */
var markdownParseToMarkdownString = function (markdownParse) {
    var frontMatterString = (0, frontmatter_util_1.frontmatterParseToString)(markdownParse.parameters);
    return "".concat(frontMatterString).concat(markdownParse.raw);
};
exports.markdownParseToMarkdownString = markdownParseToMarkdownString;
var test = (0, make_test_1.makeTest)(function () {
    return (0, exports.markdownParseToMarkdownString)({
        parameters: { a: "1", b: "2", c: "true", d: "string" },
        raw: exampleContents_1.exampleMarkdownFileContents,
    });
}, 
// NB: simplified check, because only the parameters need to be added
function (result) { return result.length > exampleContents_1.exampleMarkdownFileContents.length; });
//# sourceMappingURL=markdownParseToMarkdownString.js.map