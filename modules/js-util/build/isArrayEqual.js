"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayEqual = void 0;
var isArrayEqual = function (a, b) {
    return (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(function (val, index) { return val === b[index]; }));
};
exports.isArrayEqual = isArrayEqual;
//# sourceMappingURL=isArrayEqual.js.map