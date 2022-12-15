"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.frontmatterParseToString = void 0;
var make_test_1 = require("make-test");
var js_util_1 = require("js-util");
/**
 * Parses frontmatter object into a frontmatter string
 */
var frontmatterParseToString = function (frontmatter) {
    var keys = Object.keys(frontmatter);
    var keyValueLines = keys
        .map(function (key) {
        var value = frontmatter[key];
        var parsedFrontmatterLine = "".concat(key, ": ").concat(value);
        return parsedFrontmatterLine;
    })
        .filter(js_util_1.notEmpty);
    return keyValueLines.length === 0
        ? ""
        : "---\n".concat(keyValueLines.join("\n"), "\n---\n");
};
exports.frontmatterParseToString = frontmatterParseToString;
exports.test = [
    (0, make_test_1.makeTest)(function () {
        return (0, exports.frontmatterParseToString)({
            a: "1",
            b: "2",
            c: "true",
            d: "string",
        });
    }, function (result) { return result === "---\na: 1\nb: 2\nc: true\nd: string\n---\n"; }),
    (0, make_test_1.makeTest)(function () {
        return (0, exports.frontmatterParseToString)({});
    }, function (result) { return result === ""; }),
];
//# sourceMappingURL=frontmatterParseToString.js.map