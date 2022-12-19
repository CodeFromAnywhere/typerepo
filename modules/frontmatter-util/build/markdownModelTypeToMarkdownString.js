"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownModelTypeToMarkdownString = void 0;
var frontmatterParseToString_1 = require("./frontmatterParseToString");
var markdownModelTypeToMarkdownString = function (markdownModelType) {
    var markdown = markdownModelType.markdown, parameters = __rest(markdownModelType, ["markdown"]);
    var frontmatterString = (0, frontmatterParseToString_1.frontmatterParseToString)(parameters);
    return "".concat(frontmatterString, "\n").concat(markdown);
};
exports.markdownModelTypeToMarkdownString = markdownModelTypeToMarkdownString;
//# sourceMappingURL=markdownModelTypeToMarkdownString.js.map