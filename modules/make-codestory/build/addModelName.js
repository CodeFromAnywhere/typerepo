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
exports.addModelName = void 0;
var addModelName = function (item, modelName) {
    return __assign(__assign({}, item), { slug: modelName, modelName: "lol" });
};
exports.addModelName = addModelName;
//# sourceMappingURL=addModelName.js.map