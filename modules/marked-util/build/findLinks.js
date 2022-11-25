"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLinks = void 0;
var marked_1 = require("marked");
var js_util_1 = require("js-util");
var findLinksFromTokenRecursively_1 = require("./findLinksFromTokenRecursively");
/**
 * find all embedded assets
 */
var findLinks = function (markdownString) {
    var result = marked_1.marked
        .lexer(markdownString)
        .map(findLinksFromTokenRecursively_1.findLinksFromTokenRecursively)
        .filter(js_util_1.notEmpty)
        .flat();
    return result;
};
exports.findLinks = findLinks;
//# sourceMappingURL=findLinks.js.map