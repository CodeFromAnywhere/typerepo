"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperationBuildNeeded = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
/**
 * returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification
 */
var isOperationBuildNeeded = function (operationBasePath) {
    var classification = (0, get_path_1.getOperationClassification)(operationBasePath);
    console.log("".concat((0, fs_util_1.getLastFolder)(operationBasePath), ": ").concat(classification));
    // NB: server, web, app and ui-es6 have different ways to keep the build up-to-date
    var buildNeededOperatons = [
        "js",
        "node",
        "ui-es5",
    ];
    var isBuildNeeded = buildNeededOperatons.includes(classification);
    return isBuildNeeded;
};
exports.isOperationBuildNeeded = isOperationBuildNeeded;
//# sourceMappingURL=isOperationBuildNeeded.js.map