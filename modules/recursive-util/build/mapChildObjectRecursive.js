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
exports.mapChildObjectRecursive = void 0;
/**
 * maps a ChildObject and all it's children, recursively
 */
var mapChildObjectRecursive = function (childObject, mapFunction) {
    var _a;
    var newChildObject = mapFunction(childObject);
    return __assign(__assign({}, newChildObject), { children: (_a = childObject.children) === null || _a === void 0 ? void 0 : _a.map(function (child) {
            return (0, exports.mapChildObjectRecursive)(child, mapFunction);
        }) });
};
exports.mapChildObjectRecursive = mapChildObjectRecursive;
//# sourceMappingURL=mapChildObjectRecursive.js.map