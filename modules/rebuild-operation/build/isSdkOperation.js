"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSdkOperation = void 0;
var fs_util_1 = require("fs-util");
var isSdkOperation = function (operationBasePath) {
    var operationName = (0, fs_util_1.getLastFolder)(operationBasePath);
    return operationName.split("-")[0] === "sdk";
};
exports.isSdkOperation = isSdkOperation;
//# sourceMappingURL=isSdkOperation.js.map