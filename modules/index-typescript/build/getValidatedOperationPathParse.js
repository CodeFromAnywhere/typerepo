"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidatedOperationPathParse = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var log_1 = require("log");
var getValidatedOperationPathParse = function (filePath) {
    var fileParse = fs_util_1.path.parse(filePath);
    if (![".ts", ".tsx"].includes(fileParse.ext)) {
        (0, log_1.log)("Incorrect extension ".concat(fileParse.ext), { type: "warning" });
        return;
    }
    // NB: filename is not only a name here but a relative path
    if (!fs_util_1.fs.existsSync(filePath)) {
        (0, log_1.log)("couldn't retreive filepath ".concat(filePath), { type: "error" });
        return;
    }
    var operationPathParse = (0, get_path_1.getOperationPathParse)(filePath);
    if (!operationPathParse) {
        (0, log_1.log)("Operation must have a pathparse to be indexed", { type: "error" });
        return;
    }
    return __assign(__assign({}, operationPathParse), { filePath: filePath });
};
exports.getValidatedOperationPathParse = getValidatedOperationPathParse;
//# sourceMappingURL=getValidatedOperationPathParse.js.map