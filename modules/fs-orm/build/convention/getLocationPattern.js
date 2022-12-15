"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultLocationPattern = exports.getLocationPattern = void 0;
var convert_case_1 = require("convert-case");
var pluralize_1 = require("pluralize");
/**
 * Returns the pattern or an exact relative path that the file(s) should be stored at.
 *
 * If a pattern contains a star at the place of the filename, it will search the folder recursively for all files with the extension in the pattern.
 *
 * Returning relative path has no preceding slash
 */
var getLocationPattern = function (dbStorageMethod, modelName, mergedConfig) {
    var operationRelativePath = mergedConfig.operationRelativePath, projectRelativePath = mergedConfig.projectRelativePath;
    if (operationRelativePath)
        return operationRelativePath;
    if (projectRelativePath)
        return projectRelativePath;
    return (0, exports.getDefaultLocationPattern)(dbStorageMethod, modelName);
};
exports.getLocationPattern = getLocationPattern;
/**
 * DB main storage convention
 */
var getDefaultLocationPattern = function (dbStorageMethod, modelName) {
    var fileOrFolderName = (0, pluralize_1.pluralize)((0, convert_case_1.kebabCase)(modelName));
    if (dbStorageMethod === "jsonMultiple")
        return "db/".concat(fileOrFolderName, ".json");
    if (dbStorageMethod === "keyValueMarkdown")
        return "db/".concat(fileOrFolderName, ".md");
    if (dbStorageMethod === "csv")
        return "db/".concat(fileOrFolderName, ".csv");
    if (dbStorageMethod === "jsonSingle")
        return "db/".concat(fileOrFolderName, "/*.json");
    if (dbStorageMethod === "markdown")
        return "db/".concat(fileOrFolderName, "/*.md");
};
exports.getDefaultLocationPattern = getDefaultLocationPattern;
//# sourceMappingURL=getLocationPattern.js.map