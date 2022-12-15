"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMinimizedSectionMarkdown = exports.createMinimizedSection = void 0;
var markdown_parse_js_1 = require("markdown-parse-js");
var createMinimizedSection = function (markdown, title, expandTitle) {
    if (!markdown)
        return;
    return (0, markdown_parse_js_1.mdToJsonParse)((0, exports.createMinimizedSectionMarkdown)(markdown, expandTitle), title);
};
exports.createMinimizedSection = createMinimizedSection;
var createMinimizedSectionMarkdown = function (markdown, expandTitle) {
    return "<details><summary>".concat(expandTitle, "</summary>\n    \n  ").concat(markdown, "\n  </details>");
};
exports.createMinimizedSectionMarkdown = createMinimizedSectionMarkdown;
//# sourceMappingURL=createMinimisedSection.js.map