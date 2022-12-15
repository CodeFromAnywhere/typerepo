"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbStorageMethodExtension = void 0;
var getDbStorageMethodExtension = function (dbStorageMethod) {
    if (dbStorageMethod === "csv")
        return ".csv";
    if (dbStorageMethod === "jsonMultiple")
        return ".json";
    if (dbStorageMethod === "jsonSingle")
        return ".json";
    if (dbStorageMethod === "keyValueMarkdown")
        return ".md";
    return ".md";
};
exports.getDbStorageMethodExtension = getDbStorageMethodExtension;
//# sourceMappingURL=getDbStorageMethodExtension.js.map