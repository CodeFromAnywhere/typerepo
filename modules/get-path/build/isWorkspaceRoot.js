"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkspaceRoot = void 0;
var fs_util_1 = require("fs-util");
var try_parse_json_1 = require("try-parse-json");
/**
 * simple sync function to check if a folder is the root of a workspace (not operation but a workspace)
 */
var isWorkspaceRoot = function (folderPath) {
    var _a;
    var packageJsonPath = fs_util_1.path.join(folderPath, "package.json");
    var existsPackageJson = fs_util_1.fs.existsSync(packageJsonPath);
    if (!existsPackageJson)
        return;
    var packageJson = (0, try_parse_json_1.tryParseJson)(fs_util_1.fs.readFileSync(packageJsonPath, "utf8"));
    if (!packageJson || !packageJson.workspaces) {
        return;
    }
    return {
        isBundle: ((_a = packageJson.operation) === null || _a === void 0 ? void 0 : _a.isBundle) || false,
        isWorkspaceRoot: true,
    };
};
exports.isWorkspaceRoot = isWorkspaceRoot;
//# sourceMappingURL=isWorkspaceRoot.js.map