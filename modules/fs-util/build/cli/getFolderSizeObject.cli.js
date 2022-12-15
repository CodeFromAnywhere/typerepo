"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFolderSizeObject_1 = require("../getFolderSizeObject");
var write_to_assets_1 = require("write-to-assets");
(0, getFolderSizeObject_1.getFolderSizeObject)(process.cwd(), 1).then(function (result) {
    return (0, write_to_assets_1.writeToAssets)(__filename, result, "foldersizeobject.json");
});
//# sourceMappingURL=getFolderSizeObject.cli.js.map