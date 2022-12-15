"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbStorageMethod = void 0;
var convert_case_1 = require("convert-case");
var getFrontmatterDbStorageMethod_1 = require("./getFrontmatterDbStorageMethod");
var getSpecialExtensionDbStorageMethod_1 = require("./getSpecialExtensionDbStorageMethod");
/**
 * Gets db storage method for indexation
 *
 * 1) Frontmatter overrules everything
 * 2) Special extensions are looked at
 *
 */
var getDbStorageMethod = function (config) {
    var typeName = config.typeName, frontmatter = config.frontmatter, extensions = config.extensions;
    var frontmatterResult = (0, getFrontmatterDbStorageMethod_1.getFrontmatterDbStorageMethod)(frontmatter);
    // NB: can also become null if isDbModel is specifically set to false!
    if (frontmatterResult !== undefined)
        return frontmatterResult || undefined;
    var specialExtensionStorageMethod = (0, getSpecialExtensionDbStorageMethod_1.getSpecialExtensionDbStorageMethod)(extensions);
    if (specialExtensionStorageMethod) {
        return specialExtensionStorageMethod;
    }
    var typeWords = (0, convert_case_1.lowerCaseArray)(typeName);
    var isModelTypeName = typeWords.length >= 2 && ["model", "db"].includes(typeWords.pop());
    var dbStorageMethodFromModelTypeName = isModelTypeName
        ? "jsonMultiple"
        : null;
    if (dbStorageMethodFromModelTypeName) {
        return dbStorageMethodFromModelTypeName;
    }
    return;
};
exports.getDbStorageMethod = getDbStorageMethod;
//# sourceMappingURL=getDbStorageMethod.js.map