"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkdownReferencesFromParagraph = void 0;
var js_util_1 = require("js-util");
var parseMarkdownParagraph_1 = require("./parseMarkdownParagraph");
/**
 * Gets all markdown references from a paragraph
 */
var getMarkdownReferencesFromParagraph = function (paragraph) {
    var references = (0, parseMarkdownParagraph_1.parseMarkdownParagraph)(paragraph)
        .map(function (x) { return x.reference; })
        .filter(js_util_1.notEmpty);
    return references;
};
exports.getMarkdownReferencesFromParagraph = getMarkdownReferencesFromParagraph;
//# sourceMappingURL=getMarkdownReferencesFromParagraph.js.map