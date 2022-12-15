"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmbeds = void 0;
var js_util_1 = require("js-util");
var flattenMarkdownString_1 = require("./flattenMarkdownString");
var asset_functions_js_1 = require("asset-functions-js");
/**
 * find all embedded assets
 */
var findEmbeds = function (markdownString) {
    var result = (0, flattenMarkdownString_1.flattenMarkdownString)(markdownString, function (token) { return token.type === "image"; });
    var embeds = result
        .map(function (token) {
        if (token.type !== "image")
            return;
        var markdownEmbed = {
            alt: token.text || "",
            src: token.href,
            type: (0, asset_functions_js_1.getTypeFromUrlOrPath)(token.href),
        };
        return markdownEmbed;
    })
        .filter(js_util_1.notEmpty);
    return embeds;
};
exports.findEmbeds = findEmbeds;
//# sourceMappingURL=findEmbeds.js.map