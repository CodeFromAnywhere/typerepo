"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeHeaderPrefix = void 0;
var make_test_1 = require("make-test");
/**
 * removes header prefix (##### etc) and trims whats behind that
 */
var removeHeaderPrefix = function (string) {
    var trimmed = string.split("").reduce(function (cum, letter) {
        var isHeaderPrefix = cum.isHeaderPrefix && letter === "#";
        return {
            string: isHeaderPrefix ? "" : cum.string.concat(letter),
            isHeaderPrefix: isHeaderPrefix,
        };
    }, { string: "", isHeaderPrefix: true });
    return trimmed.string.trim();
};
exports.removeHeaderPrefix = removeHeaderPrefix;
var test = (0, make_test_1.makeTest)(function () { return (0, exports.removeHeaderPrefix)("#### Header"); }, function (result) { return result === "Header"; });
//# sourceMappingURL=removeHeaderPrefix.js.map