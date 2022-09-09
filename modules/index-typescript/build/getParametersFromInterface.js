"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParametersFromInterfaces = void 0;
var js_util_1 = require("js-util");
var schema_util_1 = require("schema-util");
var getPossibleRefs_1 = require("./getPossibleRefs");
var getParametersFromInterfaces = function (functionName, interfaces) {
    var _a;
    var parametersInterface = interfaces.find(function (x) { return x.name === "NamedParameters<typeof ".concat(functionName, ">"); });
    /*
      NB: this is how a named parameters typeDefinition looks for a function with 2 arguments
      {
        "type": "object",
        "properties": {
          "markdownString": { "type": "string" },
          "level": { "type": "number" }
        },
        "required": ["markdownString", "level"],
        "additionalProperties": false
      }
      */
    var properties = (_a = parametersInterface === null || parametersInterface === void 0 ? void 0 : parametersInterface.type.typeDefinition) === null || _a === void 0 ? void 0 : _a.properties;
    var parameters = properties
        ? Object.keys(properties)
            .map(function (name) {
            var _a, _b, _c, _d;
            var propertySchema = (0, schema_util_1.getSchema)((_b = (_a = parametersInterface.type.typeDefinition) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b[name]);
            var required = ((_d = (_c = parametersInterface.type.typeDefinition) === null || _c === void 0 ? void 0 : _c.required) === null || _d === void 0 ? void 0 : _d.includes(name)) ||
                false;
            return propertySchema
                ? {
                    name: name,
                    schema: propertySchema,
                    simplifiedSchema: (0, schema_util_1.simplifySchema)(name, propertySchema, (0, getPossibleRefs_1.getPossibleRefs)(interfaces), []),
                    required: required,
                }
                : undefined;
        })
            .filter(js_util_1.notEmpty)
        : [];
    return parameters;
};
exports.getParametersFromInterfaces = getParametersFromInterfaces;
//# sourceMappingURL=getParametersFromInterface.js.map