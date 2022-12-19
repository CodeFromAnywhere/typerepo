"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBundle = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var getProjectRoot_1 = require("./getProjectRoot");
var isBundle = function (folderPath) {
    var _a;
    var realFolderPath = folderPath || (0, getProjectRoot_1.getProjectRoot)();
    if (!realFolderPath)
        return false;
    // get package-json and check operation config
    var packageJson = (0, read_json_file_1.readJsonFileSync)(fs_util_1.path.join(realFolderPath, "package.json"));
    var isBundle = ((_a = packageJson === null || packageJson === void 0 ? void 0 : packageJson.operation) === null || _a === void 0 ? void 0 : _a.isBundle) || false;
    return isBundle;
};
exports.isBundle = isBundle;
//# sourceMappingURL=isBundle.js.map