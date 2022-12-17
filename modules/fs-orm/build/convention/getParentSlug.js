"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentSlug = void 0;
/**
 * get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)
 *
 * can be undefined if the item has no parent
 */
var getParentSlug = function (item) {
    var parentSlug = item.categoryStackCalculated[item.categoryStackCalculated.length - 1];
    return parentSlug;
};
exports.getParentSlug = getParentSlug;
//# sourceMappingURL=getParentSlug.js.map