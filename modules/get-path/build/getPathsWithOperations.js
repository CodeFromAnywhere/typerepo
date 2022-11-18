"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathsWithOperations = void 0;
var fs_util_1 = require("fs-util");
var log_1 = require("log");
var getProjectRoot_1 = require("./getProjectRoot");
var isBundle_1 = require("./isBundle");
/**
 * returns an array of all (absolute) paths containing operations
 *
 * for a bundled project, that means /apps, /packages, /modules
 *
 * for the OS project, that means /operations/tools and /operations/niches
 */
var getPathsWithOperations = function (config) {
    var rootPath = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, getProjectRoot_1.getProjectRoot)();
    if (!rootPath) {
        (0, log_1.log)("no rootpath found!", { type: "error" });
        process.exit(1);
    }
    if ((0, isBundle_1.isBundle)(rootPath)) {
        var pathsWithOperations = ["apps", "packages", "modules"]
            .map(function (folderName) { return fs_util_1.path.join(rootPath, folderName); })
            .filter(function (fullPath) { return fs_util_1.fs.existsSync(fullPath); });
        if (pathsWithOperations.length === 0) {
            (0, log_1.log)("Couldn't find any operations in ".concat(rootPath));
            process.exit(1);
        }
        return pathsWithOperations;
    }
    var toolsPath = fs_util_1.path.join(rootPath, "operations/tools");
    var bundlesPath = fs_util_1.path.join(rootPath, "operations/niches");
    if (!fs_util_1.fs.existsSync(toolsPath) || !fs_util_1.fs.existsSync(bundlesPath)) {
        (0, log_1.log)("Couldn't find tools or bundles folder in ".concat(rootPath));
        process.exit(1);
    }
    return [toolsPath, bundlesPath];
};
exports.getPathsWithOperations = getPathsWithOperations;
//# sourceMappingURL=getPathsWithOperations.js.map