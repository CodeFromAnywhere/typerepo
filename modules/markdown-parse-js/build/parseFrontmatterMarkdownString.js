"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.parseFrontmatterMarkdownString = void 0;
var js_util_1 = require("js-util");
var make_test_1 = require("make-test");
var parse_primitive_1 = require("parse-primitive");
var exampleContents_1 = require("./exampleContents");
/**
 * splits a markdown string into its frontmatter object and the raw content (without frontmatter)
 */
var parseFrontmatterMarkdownString = function (markdownWithFrontmatter, config) {
    var lines = markdownWithFrontmatter.split("\n");
    var frontmatterStartIndex = lines.findIndex(function (x) { return x === "---"; });
    //console.log({ frontmatterStartIndex });
    if (frontmatterStartIndex === -1) {
        return { raw: markdownWithFrontmatter, parameters: {}, content: [] };
    }
    var linesAfterStart = lines.slice(frontmatterStartIndex + 1);
    var frontmatterEndIndex = linesAfterStart.findIndex(function (x) { return x === "---"; }) + frontmatterStartIndex + 1;
    //console.log({ frontmatterEndIndex });
    var frontmatterLines = lines.slice(frontmatterStartIndex + 1, frontmatterEndIndex);
    //   console.log({ frontmatterLines });
    var parameters = (0, js_util_1.mergeObjectsArray)(frontmatterLines.map(function (line) {
        var _a;
        var _b, _c, _d, _e;
        var needTrim = !(config === null || config === void 0 ? void 0 : config.noFinal);
        var key = (_b = line.split(":")[0]) === null || _b === void 0 ? void 0 : _b.trim();
        var value = line.split(":")[1];
        var finalValue = needTrim ? value === null || value === void 0 ? void 0 : value.trim() : value;
        var typeFromSchema = (_e = (_d = (_c = config === null || config === void 0 ? void 0 : config.frontmatterSchema) === null || _c === void 0 ? void 0 : _c.properties) === null || _d === void 0 ? void 0 : _d.find(function (x) { return x.name === key; })) === null || _e === void 0 ? void 0 : _e.schema;
        // console.dir(
        //   {
        //     frontmatterSchema: config?.frontmatterSchema,
        //     key,
        //     typeFromSchema,
        //   },
        //   { depth: 999 }
        // );
        return _a = {}, _a[key] = (0, parse_primitive_1.parsePrimitive)(finalValue, typeFromSchema), _a;
    }));
    var raw = lines.slice(frontmatterEndIndex + 1).join("\n");
    return { parameters: parameters, raw: raw, content: [] };
};
exports.parseFrontmatterMarkdownString = parseFrontmatterMarkdownString;
exports.test = (0, make_test_1.makeTest)(function () {
    return (0, exports.parseFrontmatterMarkdownString)(exampleContents_1.exampleMarkdownFileContents);
});
//# sourceMappingURL=parseFrontmatterMarkdownString.js.map