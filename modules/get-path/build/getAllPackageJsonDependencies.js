"use strict";
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
exports.getAllPackageJsonDependencies = void 0;
var getAllPackageJsonDependencies = function (operation) {
    var dependencies = operation.dependencies
        ? Object.keys(operation.dependencies)
        : [];
    var devDependencies = operation.devDependencies
        ? Object.keys(operation.devDependencies)
        : [];
    var peerDependencies = operation.peerDependencies
        ? Object.keys(operation.peerDependencies)
        : [];
    return __spreadArray(__spreadArray(__spreadArray([], dependencies, true), devDependencies, true), peerDependencies, true);
};
exports.getAllPackageJsonDependencies = getAllPackageJsonDependencies;
//# sourceMappingURL=getAllPackageJsonDependencies.js.map