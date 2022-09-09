"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFrontmatterDbStorageMethod = void 0;
var code_types_1 = require("code-types");
/**
 * if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)
 */
var getFrontmatterDbStorageMethod = function (parameters) {
    if (!parameters)
        return;
    var dbStorageMethod = parameters.dbStorageMethod &&
        typeof parameters.dbStorageMethod === "string" &&
        code_types_1.dbStorageMethods.includes(parameters.dbStorageMethod)
        ? parameters.dbStorageMethod
        : undefined;
    if (dbStorageMethod)
        return dbStorageMethod;
    var isDbModel = parameters.isDbModel;
    if (isDbModel === true)
        return "jsonMultiple";
    if (isDbModel === false)
        return null;
};
exports.getFrontmatterDbStorageMethod = getFrontmatterDbStorageMethod;
//# sourceMappingURL=getFrontmatterDbStorageMethod.js.map