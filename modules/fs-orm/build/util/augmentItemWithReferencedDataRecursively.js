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
Object.defineProperty(exports, "__esModule", { value: true });
exports.augmentItemWithReferencedDataRecursively = void 0;
var schema_util_1 = require("schema-util");
var js_util_1 = require("js-util");
var augmentItemWithReferencedDataRecursively = function (item, includeArray, 
/**
 * Final includeData object to take items from
 */
includeData) {
    // basecase
    if (includeArray.length === 0) {
        return item;
    }
    var newItem = includeArray.reduce(function (itemNow, include) {
        var _a;
        if (!include.referenceKey)
            return itemNow;
        var parameterInfo = (0, schema_util_1.getReferenceParameterInfo)(include.referenceKey);
        if (!parameterInfo.interfaceName)
            return itemNow;
        var referencedItems = includeData[parameterInfo.interfaceName];
        if (!referencedItems)
            return itemNow;
        if (!parameterInfo.dataParameterName)
            return itemNow;
        if (!parameterInfo.keyInModel)
            return itemNow;
        var referenceItems = referencedItems.filter(function (x) {
            var _a;
            if (!parameterInfo.keyInModel)
                return false;
            var itemReference = itemNow[parameterInfo.parameterName];
            var referenceItemReference = x[parameterInfo.keyInModel];
            var isMatchingReference = parameterInfo.isReferenceSingleParameter
                ? itemReference === referenceItemReference
                : parameterInfo.isReferenceMultipleParameter
                    ? ((_a = itemReference === null || itemReference === void 0 ? void 0 : itemReference.includes) === null || _a === void 0 ? void 0 : _a.call(itemReference, referenceItemReference)) || false
                    : false;
            return isMatchingReference;
        });
        var augmentedReferenceData = parameterInfo.isReferenceSingleParameter
            ? (0, exports.augmentItemWithReferencedDataRecursively)(referenceItems[0], (0, js_util_1.makeArray)(include.include), includeData)
            : parameterInfo.isReferenceMultipleParameter
                ? referenceItems.map(function (i) {
                    return (0, exports.augmentItemWithReferencedDataRecursively)(i, (0, js_util_1.makeArray)(include.include), includeData);
                })
                : undefined;
        var newItemNow = __assign(__assign({}, itemNow), (_a = {}, _a[parameterInfo.dataParameterName] = augmentedReferenceData, _a));
        return newItemNow;
    }, item);
    return newItem;
};
exports.augmentItemWithReferencedDataRecursively = augmentItemWithReferencedDataRecursively;
//# sourceMappingURL=augmentItemWithReferencedDataRecursively.js.map