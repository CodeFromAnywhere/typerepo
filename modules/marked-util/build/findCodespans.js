"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCodespans = void 0;
var js_util_1 = require("js-util");
var flattenMarkdownString_1 = require("./flattenMarkdownString");
/**
 * find all codespans
 */
var findCodespans = function (markdownString) {
    var result = (0, flattenMarkdownString_1.flattenMarkdownString)(markdownString, function (token) { return token.type === "codespan"; });
    var codespans = result
        .map(function (token) {
        if (token.type !== "codespan")
            return;
        return token.text;
    })
        .filter(js_util_1.notEmpty);
    return codespans;
};
exports.findCodespans = findCodespans;
//# sourceMappingURL=findCodespans.js.map