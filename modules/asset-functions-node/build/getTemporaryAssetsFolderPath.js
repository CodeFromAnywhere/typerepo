"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemporaryAssetsFolderPath = void 0;
var fs_util_1 = require("fs-util");
var getTemporaryAssetsFolderPath = function () {
    return fs_util_1.path.join(__dirname, "..", "assets");
};
exports.getTemporaryAssetsFolderPath = getTemporaryAssetsFolderPath;
//# sourceMappingURL=getTemporaryAssetsFolderPath.js.map