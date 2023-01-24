"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlock = void 0;
var fs_util_1 = require("fs-util");
/**
 * Removes lockfile based on the filepath of the file that shoul've been locked
 * NB: don't provide the path to the lockfile but the path to the file that the lock should be removed from
 */
var unlock = function (absoluteLockedFilePath) {
    var parsedPath = fs_util_1.path.parse(absoluteLockedFilePath);
    var lockFilePath = fs_util_1.path.join(parsedPath.dir, "".concat(parsedPath.name, ".lock"));
    if (!fs_util_1.fs.existsSync(lockFilePath)) {
        return;
    }
    return fs_util_1.fs.rm(lockFilePath);
};
exports.unlock = unlock;
//# sourceMappingURL=unlock.js.map