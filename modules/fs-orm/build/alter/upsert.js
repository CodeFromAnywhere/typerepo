"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsert = void 0;
var js_util_1 = require("js-util");
var log_1 = require("log");
/**
 * Takes stored data and an item
 *
 * - updates the data and sets some rows to "item" if the item is found (through the id or slug)
 * - otherwise inserts
 *
 * NB: this function works for any storage method except for key value markdown
 */
var upsert = function (
/**
 * The items that were already there
 */
storedData, 
/**
 * The items that need to be overwritten or inserted
 */
storingItems, 
/**
 * If true, the upserting will fail if there are occuring items with equal slugs/ids
 */
onlyInsert) {
    var storingItemsArray = (0, js_util_1.makeArray)(storingItems);
    var amountUpdated = 0;
    var newStoredData = storedData
        .map(function (i) {
        if (!i)
            return;
        // NB: for every item in the stored data, try to find one that matches
        var storingIndex = storingItemsArray.findIndex(function (x) {
            if (!x) {
                (0, log_1.log)("weird item found in your data, replacing", { type: "debug" });
                return true;
            }
            var matchId = x.id === i.id;
            // NB: sometimes slug can be undefined for some models.
            var matchSlug = x.slug !== undefined && x.slug === i.slug;
            return matchId || matchSlug;
        });
        if (storingIndex !== -1) {
            // NB: it needs to be updated, so simply remove it because the new item is going to be concatenated
            amountUpdated++;
            return;
        }
        return i;
    })
        .filter(js_util_1.notEmpty)
        .concat(storingItems);
    if (onlyInsert && amountUpdated > 0) {
        return {
            amountUpdated: 0,
            amountInserted: 0,
            newStoredData: storedData,
            amountRemoved: 0,
            isSuccesful: false,
            message: "The creation failed because you already have an item with this name",
        };
    }
    return {
        amountUpdated: amountUpdated,
        amountInserted: amountUpdated === 0 ? 1 : 0,
        newStoredData: newStoredData,
    };
};
exports.upsert = upsert;
//# sourceMappingURL=upsert.js.map