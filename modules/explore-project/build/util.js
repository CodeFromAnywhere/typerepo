"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileWithExtension = exports.hasSameProjectPath = exports.getInstanceNames = void 0;
var fs_util_1 = require("fs-util");
/**
 * returns the paths of instances in a file, like functions, variables or interfaces
 */
var getInstanceNames = function (array, 
// NB: I tried with  <T extends TsIndexModelType> but didn't work with a map over an object... strange...
relativePathFromProjectRoot) {
    var instances = array.filter((0, exports.hasSameProjectPath)(relativePathFromProjectRoot));
    var instancePaths = instances.map(function (x) { return x.name; });
    return instancePaths;
};
exports.getInstanceNames = getInstanceNames;
/**
 * function that returns a filter function that can check if some object (that extends an TsIndexModelType) has the same relative file path from the project root
 */
var hasSameProjectPath = function (projectRelativePath) {
    return function (x) {
        var isSame = x.projectRelativePath === projectRelativePath;
        return isSame;
    };
};
exports.hasSameProjectPath = hasSameProjectPath;
var getFileWithExtension = function (absolutePath) {
    return fs_util_1.path.parse(absolutePath).base;
};
exports.getFileWithExtension = getFileWithExtension;
//# sourceMappingURL=util.js.map