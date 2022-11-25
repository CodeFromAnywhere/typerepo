"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmbedsFromTokenRecursively = void 0;
var asset_functions_js_1 = require("asset-functions-js");
var findEmbedsFromTokenRecursively = function (token) {
    if (token.type === "image") {
        return [
            {
                src: token.href,
                alt: token.title,
                type: (0, asset_functions_js_1.getTypeFromUrlOrPath)(token.href),
            },
        ];
    }
    if (token.type === "paragraph") {
        var result = token.tokens.map(exports.findEmbedsFromTokenRecursively).flat();
        return result;
    }
    // probably need to add more here because the images can be nested elsewhere too
    return [];
};
exports.findEmbedsFromTokenRecursively = findEmbedsFromTokenRecursively;
//# sourceMappingURL=findEmbedsFromTokenRecursively.js.map