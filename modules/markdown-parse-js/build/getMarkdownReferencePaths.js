"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkdownReferencePaths = void 0;
var getMarkdownParseParagraphs_1 = require("./getMarkdownParseParagraphs");
var getMarkdownReferencesFromParagraph_1 = require("./getMarkdownReferencesFromParagraph");
var mdToJsonParse_1 = require("./mdToJsonParse");
var getMarkdownReferencePaths = function (markdownString) {
    var markdownParse = (0, mdToJsonParse_1.mdToJsonParse)(markdownString);
    var paragraphs = (0, getMarkdownParseParagraphs_1.getMarkdownParseParagraphs)(markdownParse);
    var references = paragraphs.map(getMarkdownReferencesFromParagraph_1.getMarkdownReferencesFromParagraph).flat();
    var paths = references.map(function (x) { return x.path; });
    return paths;
};
exports.getMarkdownReferencePaths = getMarkdownReferencePaths;
//# sourceMappingURL=getMarkdownReferencePaths.js.map