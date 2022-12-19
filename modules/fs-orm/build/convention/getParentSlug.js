"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentSlug = void 0;
/**
 * get a parent slug without the parent_xxxSlug reference (uses the categoryStack)
 *
 * can be undefined if the item has no parent
 */
var getParentSlug = function (item) {
    var parentSlug = item.categoryStack[item.categoryStack.length - 1];
    return parentSlug;
};
exports.getParentSlug = getParentSlug;
//# sourceMappingURL=getParentSlug.js.map