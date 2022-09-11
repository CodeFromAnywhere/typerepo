"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkspaceRoot = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
/**
 * simple sync function to check if a folder is the root of a workspace (not operation but a workspace)
 */
var isWorkspaceRoot = function (folderPath) {
    var packageJsonPath = fs_util_1.path.join(folderPath, "package.json");
    var existsPackageJson = fs_util_1.fs.existsSync(packageJsonPath);
    if (!existsPackageJson)
        return;
    var packageJson = (0, read_json_file_1.tryParseJson)(fs_util_1.fs.readFileSync(packageJsonPath, "utf8"));
    var sensibleConfig = packageJson === null || packageJson === void 0 ? void 0 : packageJson.sensible;
    var isSensibleProject = (sensibleConfig === null || sensibleConfig === void 0 ? void 0 : sensibleConfig.isSensibleProject) || false;
    if (!packageJson || !packageJson.workspaces) {
        return;
    }
    return { isSensibleProject: isSensibleProject, isWorkspaceRoot: true };
};
exports.isWorkspaceRoot = isWorkspaceRoot;
//# sourceMappingURL=isWorkspaceRoot.js.map