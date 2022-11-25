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
exports.markdownParseToMarkdownModelType = exports.parseMarkdownModelTimestamp = exports.tryParseDate = void 0;
var convert_case_1 = require("convert-case");
var model_types_1 = require("model-types");
/**
 * Tries to parse a date from a string
 * - implements default behavior of `new Date` with a try catch
 * - returns a unix timestamp (ms since 1970 AD)
 *
 * TODO: put in a better location... date-util?
 */
var tryParseDate = function (dateString) {
    try {
        return new Date(dateString).valueOf();
    }
    catch (_a) { }
};
exports.tryParseDate = tryParseDate;
/**
 * First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent
 *
 * If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system
 *
 * If that doesn't succeed, sometimes we'll set it to  the current timestamp
 */
var parseMarkdownModelTimestamp = function (parameters, markdownParse, parameterName) {
    var parameterValue = parameters[parameterName];
    var markdownParseValue = markdownParse[parameterName];
    var parsedParameterValue = typeof parameterValue === "number" && !isNaN(parameterValue)
        ? parameterValue
        : typeof parameterValue === "string"
            ? (0, exports.tryParseDate)(parameterValue)
            : undefined;
    var generatedValue = parameterName === "deletedAt" || parameterName === "openedAt"
        ? 0
        : Date.now();
    var parsedTimestamp = parsedParameterValue !== undefined
        ? parsedParameterValue
        : markdownParseValue !== undefined
            ? markdownParseValue
            : generatedValue;
    return parsedTimestamp;
};
exports.parseMarkdownModelTimestamp = parseMarkdownModelTimestamp;
/**
 * makes a markdownModelType from a markdownParse.
 */
var markdownParseToMarkdownModelType = function (markdownParse) {
    if (!markdownParse)
        return null;
    var parameters = markdownParse.parameters, raw = markdownParse.raw, fileName = markdownParse.fileName;
    var name = parameters.name ? String(parameters.name) : fileName;
    var slug = (0, convert_case_1.kebabCase)(name);
    var id = parameters.id ? String(parameters.id) : (0, model_types_1.generateId)();
    var createdAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "createdAt");
    var createdFirstAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "createdFirstAt");
    var updatedAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "updatedAt");
    var deletedAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "deletedAt");
    var openedAt = (0, exports.parseMarkdownModelTimestamp)(parameters, markdownParse, "openedAt");
    var markdownModelType = __assign(__assign({}, parameters), { id: id, createdAt: createdAt, createdFirstAt: createdFirstAt, deletedAt: deletedAt, updatedAt: updatedAt, openedAt: openedAt, markdown: raw, name: name, slug: slug });
    return markdownModelType;
};
exports.markdownParseToMarkdownModelType = markdownParseToMarkdownModelType;
//# sourceMappingURL=markdownParseToMarkdownModelType.js.map