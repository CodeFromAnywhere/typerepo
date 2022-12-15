"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeDescriptorRecursive = void 0;
var schema_util_1 = require("schema-util");
var noNewlines_1 = require("./util/noNewlines");
/**
 * Returns a single line descriptor of the type of a json schema. Can be used in markdown tables.
 */
var getTypeDescriptorRecursive = function (schema, 
/**
 * If true, references will be links, otherwise, just the name of the referred interface
 */
isMarkdown) {
    var refLink = (0, schema_util_1.getRefLink)(schema.$ref);
    // console.log({ $ref: schema.$ref, refLink });
    var type = Array.isArray(schema.type) ? schema.type[0] : schema.type;
    if (refLink) {
        return isMarkdown ? "`".concat(refLink, "`") : refLink;
    } //(#${getImplicitId(refLink)})
    if (schema.enum) {
        var enumString = "".concat(schema.enum.map(String).join(" / "));
        return type === "number" ? "".concat(enumString, " (number)") : enumString;
    }
    if (type === "boolean")
        return "boolean";
    if (type === "string")
        return "string";
    if (type === "number" || type === "integer")
        return "number";
    if (type === "null")
        return "null";
    if (type === "array") {
        var items = (0, schema_util_1.getSchemaItems)(schema);
        var itemsString = items
            .map(function (item) { return (0, exports.getTypeDescriptorRecursive)(item, true); })
            .join(" | ");
        return "".concat(items.length > 1 ? "(".concat(itemsString, ")") : itemsString, "[]");
    }
    //   NB: only type object is left now
    var properties = (0, schema_util_1.getProperties)(schema);
    var additionalProperties = (0, schema_util_1.getSchema)(schema.additionalProperties);
    var additionalPropertiesString = additionalProperties
        ? "[key: string]: ".concat((0, exports.getTypeDescriptorRecursive)(additionalProperties, isMarkdown))
        : "";
    var propertyStrings = properties
        .map(function (property) {
        var propertyString = "".concat(property.name).concat((property === null || property === void 0 ? void 0 : property.required) ? ":" : "?:", " ").concat((0, exports.getTypeDescriptorRecursive)(property.schema, isMarkdown));
        return propertyString;
    })
        .concat(additionalPropertiesString);
    return isMarkdown
        ? (0, noNewlines_1.noNewlines)("{ ".concat(propertyStrings.join(", \n"), " }"))
        : propertyStrings.join(", ");
};
exports.getTypeDescriptorRecursive = getTypeDescriptorRecursive;
//# sourceMappingURL=getTypeDescriptorRecursive.js.map