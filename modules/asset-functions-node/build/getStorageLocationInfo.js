"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStorageLocationInfo = void 0;
var filename_conventions_1 = require("filename-conventions");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var convert_case_1 = require("convert-case");
/**
 * returns the  type of file the asset is referenced from, and the `baseFolderPath` where the `asset` should be stored
 */
var getStorageLocationInfo = function (absoluteReferencingFilePath, config) {
    if (absoluteReferencingFilePath.includes("/".concat(filename_conventions_1.sourceFolderName, "/"))) {
        /**
         *In typescript, the asset can be stored in the `/assets` folder of the operation. The alt is in the markdown.
         */
        var operationBasePath = (0, get_path_1.findOperationBasePath)(absoluteReferencingFilePath);
        if (operationBasePath) {
            var assetsPath = fs_util_1.path.join(operationBasePath, "assets");
            return { type: "typescript", absoluteAssetBaseFolderPath: assetsPath };
        }
    }
    if (config.modelName &&
        absoluteReferencingFilePath.includes("/".concat(filename_conventions_1.databaseFolderName, "/"))) {
        var databaseFolderBasePath = absoluteReferencingFilePath
            .split("/".concat(filename_conventions_1.databaseFolderName, "/"))[0]
            .concat("/".concat(filename_conventions_1.databaseFolderName));
        var databaseFolderRelativeReferenceLocationPath = (0, get_path_1.makeRelative)(absoluteReferencingFilePath, databaseFolderBasePath);
        var isStoredInFolder = databaseFolderRelativeReferenceLocationPath.split("/").length > 1;
        var absoluteAssetBaseFolderPath = isStoredInFolder
            ? fs_util_1.path.parse(absoluteReferencingFilePath).dir
            : fs_util_1.path.join(databaseFolderBasePath, "".concat((0, convert_case_1.kebabCase)(config.modelName), "-assets"));
        /**
         * In database models, the asset can be stored in
         *
         * - in `[modelName]-assets` folder inside of `db` if the data is stored in the root of the db
         * - in the same folder as the data itself if the data is stored in folders and more separated files
         */
        return { type: "database", absoluteAssetBaseFolderPath: absoluteAssetBaseFolderPath };
    }
    /**
     * In markdown, the asset can be stored in the same folder as the markdown file. The alt is in the markdown. The filename can be something else, should be kept original unless changed
     */
    return {
        type: "markdown",
        absoluteAssetBaseFolderPath: fs_util_1.path.parse(absoluteReferencingFilePath).dir,
    };
};
exports.getStorageLocationInfo = getStorageLocationInfo;
//# sourceMappingURL=getStorageLocationInfo.js.map