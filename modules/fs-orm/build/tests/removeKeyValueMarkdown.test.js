"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_util_1 = require("fs-util");
var alter_functions_1 = require("../alter/alter-functions");
var removeKeyValueMarkdown_1 = require("../alter/removeKeyValueMarkdown");
var test = function () {
    var absolutePath = fs_util_1.path.join(__dirname, "../..", "assets", "test.md");
    var dbFileLocation = {
        absolutePath: absolutePath,
        modelName: "Test",
        operationName: "fs-orm",
        projectRelativePath: absolutePath,
        operationRelativePath: absolutePath,
    };
    (0, alter_functions_1.alterKeyValueMarkdown)(dbFileLocation, function (storedData) {
        var realStoredData = storedData;
        var result = (0, removeKeyValueMarkdown_1.removeKeyValueMarkdown)(realStoredData, "toremove");
        var newStoredData = result.newStoredData, rest = __rest(result, ["newStoredData"]);
        console.log({ rest: rest });
        return result;
    });
};
test();
//# sourceMappingURL=removeKeyValueMarkdown.test.js.map