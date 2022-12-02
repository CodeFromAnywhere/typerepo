"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
var ajv_1 = __importDefault(require("ajv"));
var js_util_1 = require("js-util");
var log_1 = require("log");
var ajv = new ajv_1.default();
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
var validateInput = function (functionName, parameters, tsFunction) {
    var _a;
    var invalidParameters = ((_a = tsFunction.parameters) === null || _a === void 0 ? void 0 : _a.map(function (parameter, index) {
        if (!parameter.schema)
            return;
        var validate = ajv.compile(parameter.schema);
        var value = parameters === null || parameters === void 0 ? void 0 : parameters[index];
        var isValid = validate(value);
        if (isValid)
            return;
        return { isValid: isValid, parameter: parameter, value: value };
    }).filter(js_util_1.notEmpty)) || [];
    var isValid = invalidParameters.length === 0;
    if (!isValid) {
        (0, log_1.log)("According to the schema, you have given invalid arguments to the function", { type: "warning" });
        console.dir({ invalidParameters: invalidParameters }, { depth: 99 });
    }
    return { isValid: isValid };
};
exports.validateInput = validateInput;
//# sourceMappingURL=validateInput.js.map