"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubExtensions = void 0;
var fs_util_1 = require("fs-util");
var getSubExtensions = function (absolutePath) {
    var fileName = fs_util_1.path.parse(absolutePath).name; // NB: extension is already removed here.
    var allSubExtensionsArray = (fileName === null || fileName === void 0 ? void 0 : fileName.split(".")) || [];
    var allSubExtensions = allSubExtensionsArray.slice(1);
    return allSubExtensions;
};
exports.getSubExtensions = getSubExtensions;
//# sourceMappingURL=getSubExtensions.js.map