"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLinks = void 0;
var js_util_1 = require("js-util");
var flattenMarkdownString_1 = require("./flattenMarkdownString");
var asset_functions_js_1 = require("asset-functions-js");
/**
 * find all links
 */
var findLinks = function (markdownString) {
    var result = (0, flattenMarkdownString_1.flattenMarkdownString)(markdownString, function (token) { return token.type === "link"; });
    var links = result
        .map(function (token) {
        if (token.type !== "link")
            return;
        var markdownEmbed = {
            alt: token.text || "",
            href: token.href,
            type: (0, asset_functions_js_1.getTypeFromUrlOrPath)(token.href),
        };
        return markdownEmbed;
    })
        .filter(js_util_1.notEmpty);
    return links;
};
exports.findLinks = findLinks;
//# sourceMappingURL=findLinks.js.map