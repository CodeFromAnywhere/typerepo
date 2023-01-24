"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocked = void 0;
var fs_util_1 = require("fs-util");
var read_json_file_1 = require("read-json-file");
var lock_system_1 = require("lock-system");
var isLocked = function (absolutePath) {
    var parsedPath = fs_util_1.path.parse(absolutePath);
    var potentialLockFilePath = fs_util_1.path.join(parsedPath.dir, "".concat(parsedPath.name, ".lock"));
    if (fs_util_1.fs.existsSync(potentialLockFilePath)) {
        var lock = (0, read_json_file_1.readJsonFileSync)(potentialLockFilePath);
        // there's a lockfile
        if ((lock === null || lock === void 0 ? void 0 : lock.updatedAt) && Date.now() - lock.updatedAt < lock_system_1.maximumLockTime) {
            // status has recently enough been updated
            return true;
        }
        else {
            // status has been updated too long ago, assuming server has been stopped, lockfile should be removed
            fs_util_1.fs.rm(potentialLockFilePath);
        }
    }
    return false;
};
exports.isLocked = isLocked;
//# sourceMappingURL=isLocked.js.map