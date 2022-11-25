"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCodespans = void 0;
var marked_1 = require("marked");
var js_util_1 = require("js-util");
var findCodespansFromTokenRecursively_1 = require("./findCodespansFromTokenRecursively");
/**
 * find all backtick-blocks
 */
var findCodespans = function (sectionContent) {
    var result = marked_1.marked
        .lexer(sectionContent)
        .map(findCodespansFromTokenRecursively_1.findCodespansFromTokenRecursively)
        .filter(js_util_1.notEmpty)
        .flat();
    return result;
};
exports.findCodespans = findCodespans;
//# sourceMappingURL=findCodespans.js.map