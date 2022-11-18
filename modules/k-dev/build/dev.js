"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dev = void 0;
var fs_util_1 = require("fs-util");
var nodemon_1 = require("nodemon");
/**
 * Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))
 */
var dev = function (
/**
 * manual project root for finding the operations
 */
manualProjectRoot) {
    if (manualProjectRoot && !fs_util_1.fs.existsSync(manualProjectRoot)) {
        console.log("Please enter a manualProjectRoot that exists");
        return;
    }
    var vars = manualProjectRoot ? [manualProjectRoot] : undefined;
    (0, nodemon_1.nodemon)("watch-operations", "watchOperations", vars);
};
exports.dev = dev;
//# sourceMappingURL=dev.js.map