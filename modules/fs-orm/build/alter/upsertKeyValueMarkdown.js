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
exports.upsertKeyValueMarkdown = exports.findParent = void 0;
var log_1 = require("log");
var js_util_1 = require("js-util");
var getParentSlug_1 = require("../convention/getParentSlug");
/**
this location matches any category that equals the categorystack
*/
var findParent = function (arrayItem, newCategoryStack) {
    var categoryStackWithItself = arrayItem.categoryStack.concat(arrayItem.slug);
    var locationString = categoryStackWithItself.join(",");
    var newItemLocationString = newCategoryStack.join(",");
    var isSameLocation = locationString === newItemLocationString;
    return isSameLocation;
};
exports.findParent = findParent;
/**
 *
 * Takes stored data and an item
 *
 * - updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function
 *
 * - otherwise inserts, at the right category, in the right place in the array
 *
 * BEWARE:
 *
 * - the categoryStack must be existing in the markdownfile.
 * - you cannot insert a header, always insert an item with `isHeaderCalculated:false`
 */
var upsertKeyValueMarkdown = function (storedData, storingItem) {
    // First case: try to update if the slug is the same
    var amountUpdated = 0;
    var updatedData = storedData.map(function (i) {
        var needsUpdate = i.slug === storingItem.slug;
        if (needsUpdate) {
            amountUpdated++;
            // NB: you cannot change something to be a header or not, this is a calculated value
            return __assign(__assign({}, storingItem), { isHeaderCalculated: i.isHeaderCalculated });
        }
        return i;
    });
    if (amountUpdated > 0) {
        return {
            amountUpdated: amountUpdated,
            amountInserted: 0,
            newStoredData: updatedData,
        };
    }
    // If no "update", let's insert
    if (storingItem.isHeaderCalculated) {
        // Headers cannot be inserted.
        var errorMessage = "\n      This case is not supported.\n       \nYou cannot insert a header because it will not have any items, which is not what we want.\n\nIf you create items for a parent-item, the parent-item will convert into a header.\n";
        (0, log_1.log)("upsertKeyValueMarkdown: ".concat(errorMessage), {
            type: "warning",
        });
        return {
            isSuccesful: false,
            newStoredData: storedData,
            amountInserted: 0,
            amountUpdated: 0,
            message: errorMessage,
        };
    }
    // insert an item
    var parentIndex = storedData.findIndex(function (x) { return x.slug === (0, getParentSlug_1.getParentSlug)(storingItem); });
    var parent = storedData[parentIndex];
    // If there is no parent, insert it at the start of the file
    if (!parent) {
        var newStoredData_1 = __spreadArray([storingItem], storedData, true);
        return { isSuccesful: true, amountInserted: 1, newStoredData: newStoredData_1 };
    }
    if (parent.isHeaderCalculated) {
        /*
        the parent is a category. in this case, we simply put the item as the first item below that category
        */
        var newStoredData_2 = (0, js_util_1.insertAt)(storedData, (0, js_util_1.makeArray)(storingItem), parentIndex + 1);
        return {
            amountInserted: 1,
            newStoredData: newStoredData_2,
            isSuccesful: true,
            message: "Inserted the item in the header parent",
        };
    }
    /**
             
    The parent is an item. in this case:
  
    1) the parent needs to become a category
    2) the item needs to be placed under it
    3) the parent should be removed
    4) the last item that has the same categoryStack as the parent should be found
    5) This new category with its sole item needs to be placed as the last item value of its parent (below other items, but above sub categories)
  
    */
    // 1
    var parentHeader = __assign(__assign({}, parent), { isHeaderCalculated: true });
    // 2
    var newCategory = [parentHeader, storingItem];
    // WORKS console.log({ newCategory });
    // 3
    var storedDataWithoutParentItem = (0, js_util_1.removeIndexFromArray)(storedData, parentIndex);
    // WORKS console.log({ storedDataWithoutItem });
    // 4
    var finalItemIndex = (0, js_util_1.findLastIndex)(storedDataWithoutParentItem, function (item) {
        return item.categoryStack.join(",") === parentHeader.categoryStack.join(",") &&
            !item.isHeaderCalculated;
    }) ||
        // NB: not sure if this would fix all edgecases but if the only item in a category is the one that we removed, the finalItemIndex is the parentIndex -1 (but now it's a category)
        parentIndex - 1;
    // if (finalItemIndex === undefined) {
    //   console.log("Unsupported Edgecase... ", { storedData, storingItem });
    //   return {
    //     newStoredData: storedData,
    //     amountRemoved: 0,
    //     amountInserted: 0,
    //     amountUpdated: 0,
    //   };
    // }
    var newStoredData = (0, js_util_1.insertAt)(storedDataWithoutParentItem, newCategory, finalItemIndex + 1);
    return {
        amountUpdated: 1,
        amountInserted: 1,
        newStoredData: newStoredData,
        message: "Inserted into an item (made that item a category, moved it)",
    };
};
exports.upsertKeyValueMarkdown = upsertKeyValueMarkdown;
//# sourceMappingURL=upsertKeyValueMarkdown.js.map