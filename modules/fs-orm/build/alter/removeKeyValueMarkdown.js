"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeKeyValueMarkdown = void 0;
var getParentSlug_1 = require("../convention/getParentSlug");
/**
 * Takes stored data and a slug to remove
 */
var removeKeyValueMarkdown = function (storedData, 
/** slug to remove */
slug) {
    // console.log("hummmmmm");
    // Base case
    var foundItem = storedData.find(function (item) { return item.slug === slug; });
    // console.log({ foundItem, storedData, slug });
    if (!foundItem) {
        return {
            newStoredData: storedData,
            amountRemoved: 0,
            message: "slug not found",
            isSuccesful: true,
        };
    }
    if (foundItem.isHeaderCalculated) {
        // console.log("is header calculated, remove all childs");
        // NB: remove all children (items of which the joined categoryStack starts with headerLocation)
        var headerLocation_1 = foundItem.categoryStack
            .concat(foundItem.slug)
            .join(",");
        var newStoredData_1 = storedData.filter(function (x) {
            var isHeaderCalculatedToRemove = x.slug === foundItem.slug;
            var isCategoryStackSubset = x.categoryStack
                .join(",")
                .startsWith(headerLocation_1);
            return !isHeaderCalculatedToRemove && !isCategoryStackSubset;
        });
        var amountRemoved_1 = storedData.length - newStoredData_1.length;
        return {
            newStoredData: newStoredData_1,
            amountRemoved: amountRemoved_1,
            isSuccesful: true,
            message: "removed header and all it's children",
        };
    }
    // console.log("ITS ITEM");
    // It's an item...
    var allItemsInThisCategory = storedData.filter(function (x) { return (0, getParentSlug_1.getParentSlug)(x) === (0, getParentSlug_1.getParentSlug)(foundItem); });
    if (allItemsInThisCategory.length === 0) {
        return {
            isSuccesful: false,
            message: "Tautology",
            newStoredData: storedData,
            amountRemoved: 0,
        };
    }
    // If the item is one of many in a category, we can simply remove it, because the category is still relevant
    if (allItemsInThisCategory.length > 1) {
        // console.log("More itesm in cateogry", storedData);
        var newStoredData_2 = storedData.filter(function (x) { return x.slug !== foundItem.slug; });
        var amountRemoved_2 = storedData.length - newStoredData_2.length;
        return {
            newStoredData: newStoredData_2,
            isSuccesful: true,
            amountRemoved: amountRemoved_2,
            message: "Removed item where item has more items in its category",
        };
    }
    // the item is the only one in a category (allItemsInThisCategory.length === 1)
    var item = allItemsInThisCategory[0];
    var category = storedData.find(function (x) { return x.slug === (0, getParentSlug_1.getParentSlug)(item); });
    var newStoredDataWithoutItemAndCategory = storedData.filter(function (x) { return x.slug !== item.slug && x.slug !== (0, getParentSlug_1.getParentSlug)(item); });
    if (!category) {
        // NB: empty categorystack for the item... this means it is a root item, no worries, we did not remove any category, so we don't need to place it back either
        var amountRemoved_3 = storedData.length - newStoredDataWithoutItemAndCategory.length;
        return {
            isSuccesful: true,
            amountRemoved: amountRemoved_3,
            message: "Removed it from the root",
            newStoredData: newStoredDataWithoutItemAndCategory,
        };
    }
    /**
    we need to make the category the first item of its parent (or the start of the file)
    
    first remove the item and the category, then add it in the right place
    */
    var parentSlug = (0, getParentSlug_1.getParentSlug)(category);
    var parentIndex = newStoredDataWithoutItemAndCategory.findIndex(function (x) { return x.slug === parentSlug; });
    var newItem = __assign(__assign({}, category), { isHeaderCalculated: false });
    if (parentIndex === -1) {
        // parent doesn't exist. This means the category should become an item at the root of the file
        var newStoredData_3 = __spreadArray([newItem], newStoredDataWithoutItemAndCategory, true);
        var amountRemoved_4 = storedData.length - newStoredData_3.length;
        return { isSuccesful: true, newStoredData: newStoredData_3, amountRemoved: amountRemoved_4 };
    }
    // parent exists, so, like I said before, we need to make the category the first item of its parent (or the start of the file)
    var before = newStoredDataWithoutItemAndCategory.slice(0, parentIndex);
    var after = newStoredDataWithoutItemAndCategory.slice(parentIndex + 1);
    var parent = newStoredDataWithoutItemAndCategory[parentIndex];
    var newStoredData = __spreadArray(__spreadArray(__spreadArray([], before, true), [parent, newItem], false), after, true);
    var amountRemoved = storedData.length - newStoredData.length;
    return { newStoredData: newStoredData, isSuccesful: true, amountRemoved: amountRemoved };
};
exports.removeKeyValueMarkdown = removeKeyValueMarkdown;
//# sourceMappingURL=removeKeyValueMarkdown.js.map