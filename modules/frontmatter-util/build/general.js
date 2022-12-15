"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotedOrNot = exports.getFrontmatterValueString = exports.stringifyNewlines = void 0;
var stringifyNewlines = function (string) {
    return string.replaceAll("\n", "\\n");
};
exports.stringifyNewlines = stringifyNewlines;
var getFrontmatterValueString = function (value) {
    if (value === undefined)
        return null;
    if (value === null)
        return "null";
    if (typeof value === "number")
        return String(value);
    if (typeof value === "boolean")
        return String(value);
    if (typeof value === "boolean")
        return String(value);
    if (Array.isArray(value))
        return value.map(exports.quotedOrNot).map(exports.stringifyNewlines).join(", ");
    if (typeof value === "string")
        return (0, exports.stringifyNewlines)((0, exports.quotedOrNot)(value));
    // NB: according to current support this should never happen
    if (typeof value === "object")
        return "\"".concat(JSON.stringify(value), "\"");
    return null;
};
exports.getFrontmatterValueString = getFrontmatterValueString;
/**
 * For now, simply quote a string if it contains commas
 *
 * There are probably more edgecases that need to be fixed here
 */
var quotedOrNot = function (string) {
    var returnString = (string === null || string === void 0 ? void 0 : string.includes(",")) ? "\"".concat(string, "\"") : string;
    return returnString;
};
exports.quotedOrNot = quotedOrNot;
//# sourceMappingURL=general.js.map