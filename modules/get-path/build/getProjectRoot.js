"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRoot = void 0;
var fs_util_1 = require("fs-util");
var findFolderWhereMatch_1 = require("./findFolderWhereMatch");
var isWorkspaceRoot_1 = require("./isWorkspaceRoot");
/**
 * returns project root folder path
 *
 * recursive. goes up until it finds a folder that's the project root
 *
 * if no source path is given, uses the directory name where the function is executed from as a starting point
 */
var getProjectRoot = function (fullSourcePath) {
    var _a;
    var matchFolder = (0, findFolderWhereMatch_1.findFolderWhereMatch)(fullSourcePath || __dirname, isWorkspaceRoot_1.isWorkspaceRoot);
    if (!matchFolder)
        return;
    /**
     * NB: for Sensible porjects, the project root is the same as the workspace root.
     * NB: For OS projects, the project root is one folder up from the workspace root
     */
    var realPath = ((_a = matchFolder.matchResult) === null || _a === void 0 ? void 0 : _a.isSensibleProject)
        ? matchFolder.folderPath
        : fs_util_1.path.join(matchFolder.folderPath, "..");
    return realPath;
};
exports.getProjectRoot = getProjectRoot;
//# sourceMappingURL=getProjectRoot.js.map