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
exports.removeOptionalKeysFromObject = exports.removeOptionalKeysFromObjectStrings = void 0;
var removeOptionalKeysFromObjectStrings = function (object, keys) {
    var newObject = keys.reduce(function (objectNow, key) {
        var _a;
        return __assign(__assign({}, objectNow), (_a = {}, _a[key] = undefined, _a));
    }, object);
    return newObject;
};
exports.removeOptionalKeysFromObjectStrings = removeOptionalKeysFromObjectStrings;
var removeOptionalKeysFromObject = function (object, keys) {
    return (0, exports.removeOptionalKeysFromObjectStrings)(object, keys);
};
exports.removeOptionalKeysFromObject = removeOptionalKeysFromObject;
//# sourceMappingURL=removeOptionalKeysFromObject.js.map