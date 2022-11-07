"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifiedSchemaToMarkdownString = void 0;
var js_util_1 = require("js-util");
var markdown_parse_js_1 = require("markdown-parse-js");
var makePropertiesTable_1 = require("./util/makePropertiesTable");
var noNewlines_1 = require("./util/noNewlines");
/**
 * Should render a string with one or more markdown tables to represent the simplifiedSchema
 *
 */
var simplifiedSchemaToMarkdownString = function (simplifiedSchema, 
/**
 * if not given, no title is printed
 */
name, isRequired, 
/** the headers level, defaults to 1 */
level) {
    if (!simplifiedSchema)
        return "";
    var refLinkString = simplifiedSchema.circularRefName
        ? "[".concat(simplifiedSchema.circularRefName, "](#").concat((0, markdown_parse_js_1.getImplicitId)(simplifiedSchema.circularRefName), ")")
        : "";
    var enumString = simplifiedSchema.enum
        ? "(Enum: ".concat(simplifiedSchema.enum.map(String).join(" | "), ") ")
        : "";
    var optionalSubtitle = "".concat(isRequired ? "" : " (optional)");
    var nameWithoutNewlines = name ? name.replaceAll("\n", "") : undefined;
    var type = "".concat(simplifiedSchema.type).concat(enumString).concat(refLinkString);
    var title = name
        ? "".concat("#".repeat(level || 1), " ").concat(nameWithoutNewlines).concat(optionalSubtitle, ": ").concat(type)
        : undefined;
    var arrayString = simplifiedSchema.items
        ? simplifiedSchema.items
            .map(function (item) {
            var itemString = "- ".concat(item.name, ": ").concat(item.schema.type);
            return itemString;
        })
            .join("\n")
        : "";
    var description = simplifiedSchema.description
        ? "> ".concat((0, noNewlines_1.noNewlines)(simplifiedSchema.description))
        : "";
    var objectString = (0, makePropertiesTable_1.makePropertiesTable)(simplifiedSchema.properties);
    var togetherString = [title, arrayString, description, objectString]
        .filter(js_util_1.notEmpty)
        .join("\n\n");
    return togetherString;
};
exports.simplifiedSchemaToMarkdownString = simplifiedSchemaToMarkdownString;
//# sourceMappingURL=simplifiedSchemaToMarkdownString.js.map