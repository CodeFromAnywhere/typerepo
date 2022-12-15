"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenNestedObject = void 0;
/**
 * Flattens a nested object by returning an object that hasa the nested path as the key and the leaf as the value
 *
 * TODO: Finish, if needed. seems hard!
 */
var flattenNestedObject = function (nestedObject, isLeaf) {
    Object.keys(nestedObject).map(function (key) {
        var value = nestedObject[key];
        var isValueLeaf = isLeaf ? isLeaf(value) : typeof value !== "object";
        return;
    });
};
exports.flattenNestedObject = flattenNestedObject;
//# sourceMappingURL=flattenNestedObject.js.map