"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecialExtensionDbStorageMethod = void 0;
/** returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod */
var getSpecialExtensionDbStorageMethod = function (extensions) {
    if (!extensions)
        return;
    /**
     * put any models here that should, if they are used as extension, have a db model generated
     */
    var specialExtensions = {
        TsIndexModelType: "jsonMultiple",
        OperationIndexModelType: "jsonMultiple",
        DefaultModelType: "jsonMultiple",
        SlugModelType: "jsonMultiple",
        CsvModelType: "csv",
        KeyValueMarkdownModelType: "keyValueMarkdown",
        CategoryModelType: "jsonMultiple",
        MarkdownModelType: "markdown",
    };
    var specialExtensionKeys = Object.keys(specialExtensions);
    var specialExtension = extensions.find(function (x) {
        return specialExtensionKeys.includes(x);
    });
    if (!specialExtension)
        return;
    var dbStorageMethod = specialExtensions[specialExtension];
    return dbStorageMethod;
};
exports.getSpecialExtensionDbStorageMethod = getSpecialExtensionDbStorageMethod;
//# sourceMappingURL=getSpecialExtensionDbStorageMethod.js.map