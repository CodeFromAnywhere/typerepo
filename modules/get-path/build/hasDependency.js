"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasDependency = void 0;
var getAllPackageJsonDependencies_1 = require("./getAllPackageJsonDependencies");
var hasDependency = function (operation, dependency) {
    return (0, getAllPackageJsonDependencies_1.getAllPackageJsonDependencies)(operation).includes(dependency);
};
exports.hasDependency = hasDependency;
//# sourceMappingURL=hasDependency.js.map