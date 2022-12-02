"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonSchemaSummary = void 0;
var getTypeDescriptorRecursive_1 = require("./getTypeDescriptorRecursive");
/**
 * Generates short markdown summary
 */
var getJsonSchemaSummary = function (schema, isMarkdown) {
    if (!schema)
        return;
    var typeDescriptor = (0, getTypeDescriptorRecursive_1.getTypeDescriptorRecursive)(schema, isMarkdown);
    return {
        typeDescriptor: typeDescriptor,
        description: schema.description,
    };
};
exports.getJsonSchemaSummary = getJsonSchemaSummary;
//# sourceMappingURL=getJsonSchemaSummary.js.map