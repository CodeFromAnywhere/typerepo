"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsFunctionIsIndexable = void 0;
var filename_conventions_1 = require("filename-conventions");
var get_path_1 = require("get-path");
/**
 * The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!
 */
var tsFunctionIsIndexable = function (tsFunction) {
    var fileId = (0, get_path_1.getSrcRelativeFileId)(tsFunction.operationRelativeTypescriptFilePath);
    return (0, filename_conventions_1.isIndexableFileId)(fileId);
};
exports.tsFunctionIsIndexable = tsFunctionIsIndexable;
//# sourceMappingURL=tsFunctionIsIndexable.js.map