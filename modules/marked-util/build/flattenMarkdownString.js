"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenMarkdownString = void 0;
var marked_1 = require("marked");
var js_util_1 = require("js-util");
var flattenMarkedTokenRecursive_1 = require("./flattenMarkedTokenRecursive");
/**
 * find all items that match a token, recursively in all nested things
 */
var flattenMarkdownString = function (markdownString, findFunction) {
    var result = marked_1.marked
        .lexer(markdownString)
        .map(function (x) { return (0, flattenMarkedTokenRecursive_1.flattenMarkedTokenRecursive)(x, findFunction); })
        .filter(js_util_1.notEmpty)
        .flat();
    return result;
};
exports.flattenMarkdownString = flattenMarkdownString;
//# sourceMappingURL=flattenMarkdownString.js.map