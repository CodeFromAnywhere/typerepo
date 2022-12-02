"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putReadmeOnTop = void 0;
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
/**
 * Takes an array of items (`explore` results) and checks them to put readme at the start
 *
 * DEPRECATED: After writing this, I found that `explore` also has `readmeOnTop` possibility, so this whole thing is not needed
 */
var putReadmeOnTop = function (items) {
    var itemsReadmesFirst = items.reduce(function (previous, item, index, array) {
        if (!item.path.toLowerCase().endsWith("readme.md")) {
            return previous;
        }
        var folderIndex = array.findIndex(function (x) { return x.isFolder && x.path === (0, fs_util_1.getFolder)(item.path); });
        if (folderIndex === -1) {
            return previous;
        }
        return (0, js_util_1.putIndexAtIndex)(previous, index, folderIndex + 1);
    }, items);
    return itemsReadmesFirst;
};
exports.putReadmeOnTop = putReadmeOnTop;
//# sourceMappingURL=putReadmeOnTop.js.map