"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMergedMarkdownOutlineUrl = void 0;
var markdown_parse_js_1 = require("markdown-parse-js");
var getMergedMarkdownOutlineUrl = function (title) {
    return { title: title, hashtagPath: (0, markdown_parse_js_1.getImplicitId)(title) };
};
exports.getMergedMarkdownOutlineUrl = getMergedMarkdownOutlineUrl;
//# sourceMappingURL=getMergedMarkdownOutlineUrl.js.map