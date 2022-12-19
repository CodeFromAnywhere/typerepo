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
exports.getSubsetFromObject = void 0;
/**
 * takes an object and a subset of its keys and returns a subset of that object
 *
 * input: { x: "a", y: "b", z: "c" } and ["x"]
 *
 * output: { x: "a" }
 */
var getSubsetFromObject = function (object, keys) {
    var subsetObject = keys.reduce(function (obj, key) {
        var _a;
        return __assign(__assign({}, obj), (_a = {}, _a[key] = object[key], _a));
    }, {});
    return subsetObject;
};
exports.getSubsetFromObject = getSubsetFromObject;
//const result = getSubsetFromObject({a:"hi",b:9,c:true}, ["a"])
//# sourceMappingURL=getSubsetFromObject.js.map