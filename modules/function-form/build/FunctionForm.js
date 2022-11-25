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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var react_with_native_1 = require("react-with-native");
var simplified_schema_form_1 = require("simplified-schema-form");
var react_1 = require("react");
var cool_toast_1 = require("cool-toast");
/**
FunctionForm is a very easy way to create a frontend component that is connected with an api that is connected with a function on your backend (that can do anything)

All you need to provide is a `TsFunction`

This component only works if your `api` is up-to-date and your function is succesfully indexed using `typerepo`. For authentication, the `api` convention is used. See the `api` docs.

@see TsFunction
 */
var FunctionForm = function (props) {
    var _a;
    var initialValues = props.initialValues, modelName = props.modelName, projectRelativeStorageFilePath = props.projectRelativeStorageFilePath, tsFunction = props.tsFunction, submitFunction = props.submitFunction, withResult = props.withResult, withApiResult = props.withApiResult, showResult = props.showResult;
    var parameters = tsFunction.parameters, name = tsFunction.name;
    var isFirstParameterFunctionContext = ((_a = parameters === null || parameters === void 0 ? void 0 : parameters[0]) === null || _a === void 0 ? void 0 : _a.name) === "functionContext";
    var slicedParameters = isFirstParameterFunctionContext
        ? parameters === null || parameters === void 0 ? void 0 : parameters.slice(1)
        : parameters;
    var _b = (0, react_1.useState)(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = (0, react_1.useState)(slicedParameters === null || slicedParameters === void 0 ? void 0 : slicedParameters.map(function (_, index) { return initialValues === null || initialValues === void 0 ? void 0 : initialValues[index]; })), values = _c[0], setValues = _c[1];
    var _d = (0, react_1.useState)(undefined), result = _d[0], setResult = _d[1];
    if (!slicedParameters) {
        console.log({
            tsFunction: tsFunction,
            parameters: parameters,
            slicedParameters: slicedParameters,
            isFirstParameterFunctionContext: isFirstParameterFunctionContext,
        });
        return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: "No parameters found, please find the tsFunction in console" }));
    }
    var renderResult = function () {
        var _a;
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(result === null || result === void 0 ? void 0 : result.isUnauthorized) ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-red-500 font-bold" }, { children: "Unauthorized!" }))) : null, (_a = result === null || result === void 0 ? void 0 : result.errors) === null || _a === void 0 ? void 0 : _a.map(function (error) { return ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-red-500" }, { children: error.error }))); }), (result === null || result === void 0 ? void 0 : result.message) ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: result.isSuccessful ? "text-green-500" : "text-red-500" }, { children: result.message }))) : null, (result === null || result === void 0 ? void 0 : result.result) ? ((0, jsx_runtime_1.jsx)("textarea", { className: "w-full h-[300px]", value: JSON.stringify(result.result, undefined, 2) })) : null] }));
    };
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsxs)(simplified_schema_form_1.FormContainer, __assign({ isLoading: isLoading, onSubmit: function () { return __awaiter(void 0, void 0, void 0, function () {
                var result_1, apiFunction, apiResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setIsLoading(true);
                            if (!submitFunction) return [3 /*break*/, 2];
                            return [4 /*yield*/, submitFunction.apply(void 0, values)];
                        case 1:
                            result_1 = _a.sent();
                            withResult === null || withResult === void 0 ? void 0 : withResult(result_1);
                            setIsLoading(false);
                            return [2 /*return*/];
                        case 2:
                            apiFunction = api_1.api[name];
                            if (!apiFunction || typeof apiFunction !== "function") {
                                (0, cool_toast_1.showStandardResponse)({
                                    isSuccessful: false,
                                    message: "Could not find this function in the SDK",
                                });
                                setIsLoading(false);
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, apiFunction.apply(void 0, values)];
                        case 3:
                            apiResult = _a.sent();
                            setResult(apiResult);
                            if (withApiResult) {
                                withApiResult(apiResult);
                            }
                            else {
                                (0, cool_toast_1.showStandardResponse)(apiResult);
                            }
                            setIsLoading(false);
                            return [2 /*return*/];
                    }
                });
            }); } }, { children: [showResult ? renderResult() : null, (0, jsx_runtime_1.jsx)(simplified_schema_form_1.SimplifiedSchemaForm, { projectRelativeStorageFilePath: projectRelativeStorageFilePath, modelName: modelName, parameters: slicedParameters, id: name, onChange: function (values) {
                        setValues(values);
                    }, values: values, referencableModelData: {} })] })) }));
};
exports.FunctionForm = FunctionForm;
//# sourceMappingURL=FunctionForm.js.map