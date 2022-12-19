"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeInfo = void 0;
var log_1 = require("log");
var schema_util_1 = require("schema-util");
var typeToSchema_1 = require("./typeToSchema");
/** takes a ts morph type and returns all info about it
 *
 * if available, a schema should be provided about the type because it's hard to infer it (probably buggy)
 */
var getTypeInfo = function (type, schema) {
    var rawType = type.getApparentType().getText();
    var isArray = type.isArray();
    var isEnum = type.isEnum();
    var isEnumLiteral = type.isEnumLiteral();
    var isPrimitive = type.isString() || type.isNumber() || type.isBoolean();
    var isObject = type.isObject();
    var typeDefinition = undefined;
    try {
        typeDefinition = schema || (0, typeToSchema_1.typeToSchema)(type);
    }
    catch (e) {
        (0, log_1.log)("Type to schema failed with error: ".concat(e), { type: "debug" });
    }
    var typeInfo = {
        rawType: rawType,
        typeDefinition: typeDefinition,
        // TODO:
        typeCoverage: 0,
        // this is easy to infer
        isArray: isArray,
        isEnum: isEnum,
        isObject: isObject,
        isPrimitive: isPrimitive,
        isEnumLiteral: isEnumLiteral,
        simplifiedSchema: typeDefinition
            ? (0, schema_util_1.simplifySchema)("type", typeDefinition, [], [])
            : undefined,
    };
    return typeInfo;
};
exports.getTypeInfo = getTypeInfo;
//# sourceMappingURL=getTypeInfo.js.map