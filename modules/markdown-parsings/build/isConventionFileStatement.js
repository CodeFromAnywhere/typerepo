"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConventionFileStatement = void 0;
var filename_conventions_1 = require("filename-conventions");
var get_path_1 = require("get-path");
var isConventionFileStatement = function (item, conventionFile) {
    var fileId = (0, get_path_1.getSrcRelativeFileId)(item.operationRelativeTypescriptFilePath);
    return (0, filename_conventions_1.hasSubExtension)(fileId, [conventionFile], true);
};
exports.isConventionFileStatement = isConventionFileStatement;
//# sourceMappingURL=isConventionFileStatement.js.map