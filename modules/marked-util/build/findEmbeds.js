"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmbeds = void 0;
var marked_1 = require("marked");
var js_util_1 = require("js-util");
var findEmbedsFromTokenRecursively_1 = require("./findEmbedsFromTokenRecursively");
/**
 * find all embedded assets
 */
var findEmbeds = function (markdownString) {
    var result = marked_1.marked
        .lexer(markdownString)
        .map(findEmbedsFromTokenRecursively_1.findEmbedsFromTokenRecursively)
        .filter(js_util_1.notEmpty)
        .flat();
    return result;
};
exports.findEmbeds = findEmbeds;
//# sourceMappingURL=findEmbeds.js.map