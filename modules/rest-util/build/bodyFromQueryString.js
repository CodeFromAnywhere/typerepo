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
exports.bodyFromQueryString = void 0;
var js_util_1 = require("js-util");
/**
 * converts a query string into an object that can be used as a body
 */
var bodyFromQueryString = function (
/**
 * NB: everything AFTER The "?", so this should be the format: x=x&y=y&z=z&z=z2
 */
query) {
    var _a;
    if (!query)
        return;
    var keyValueObjectArray = (_a = query.split("&")) === null || _a === void 0 ? void 0 : _a.map(function (x) {
        var _a = x.split("="), key = _a[0], value = _a[1];
        return { key: key, value: value };
    });
    var all = keyValueObjectArray === null || keyValueObjectArray === void 0 ? void 0 : keyValueObjectArray.reduce(function (object, keyValue) {
        var _a;
        // NB: if that key already exists, let's make it an array and add this new value
        if (object[keyValue.key]) {
            object[keyValue.key] = __spreadArray(__spreadArray([], (0, js_util_1.makeArray)(object[keyValue.key]), true), [
                keyValue.value,
            ], false);
            return object;
        }
        // Otherwise, just add the new key/value to the object.
        return __assign(__assign({}, object), (_a = {}, _a[keyValue.key] = keyValue.value, _a));
    }, {});
    return all;
};
exports.bodyFromQueryString = bodyFromQueryString;
//# sourceMappingURL=bodyFromQueryString.js.map