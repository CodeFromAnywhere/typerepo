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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var convert_case_1 = require("convert-case");
var clickable_icon_1 = require("clickable-icon");
var js_util_1 = require("js-util");
// relative
var SimplifiedSchemaForm_1 = require("./SimplifiedSchemaForm");
/**
 * Component to render a parameter that holds an array
 *
 * This is simply a wrapper around another `SimplifiedSchemaForm` where the `onChange` and `values` are slightly different
 *
 * This component renders a `SimplifiedSchemaForm` for every item in the array, and adds buttons to insert/remove new items.
 */
var ArrayForm = function (props) {
    var itemNameOrId = props.itemNameOrId, parameterNameStack = props.parameterNameStack, projectRelativeStorageFilePath = props.projectRelativeStorageFilePath, parameter = props.parameter, isDebug = props.isDebug, id = props.id, referencableModelData = props.referencableModelData, onChangeParameter = props.onChangeParameter, parameterValue = props.parameterValue, modelName = props.modelName;
    if (!parameter.simplifiedSchema) {
        return null;
    }
    // we can only render the array if it has items...
    if (!parameter.simplifiedSchema.items ||
        parameter.simplifiedSchema.items.length === 0) {
        console.log("Array without schema items", { parameter: parameter });
        return isDebug ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ className: "text-red-500" }, { children: ["Array without schema items (", parameter.name, ")", " ", JSON.stringify(parameter.simplifiedSchema)] }))) : null;
    }
    // TODO: make these actions work!
    var addItemAbove = function (index) {
        // insert into array
        if (!parameterValue)
            return;
        var newArray = (0, js_util_1.insertAt)(parameterValue, undefined, index);
        onChangeParameter(newArray);
    };
    var addItemBelow = function (index) {
        // insert into array
        if (!parameterValue)
            return;
        var newArray = (0, js_util_1.insertAt)(parameterValue, undefined, index + 1);
        onChangeParameter(newArray);
    };
    var removeItem = function (index) {
        if (!parameterValue)
            return;
        var newArray = (0, js_util_1.removeIndexFromArray)(parameterValue, index);
        onChangeParameter(newArray);
    };
    var createArray = function () {
        if (parameterValue && parameterValue.length > 0)
            return;
        onChangeParameter([undefined]);
    };
    var shouldShowClear = parameter.required
        ? parameterValue && parameterValue.length > 0
        : parameterValue !== undefined;
    var clearArray = function () {
        // NB: clearing will set it to undefined, unless the array is required, then we should just set it to an empty array.
        onChangeParameter(parameter.required ? [] : undefined);
    };
    var requiredText = parameter.required ? "(Required)" : "(Optional)";
    var arrayLengthText = parameterValue
        ? parameterValue.length > 0
            ? "Array (".concat(parameterValue.length, ")")
            : "Empty array"
        : "undefined";
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "ml-2 pl-2 my-4 border-l border-gray-900 dark:border-gray-100" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ className: "font-bold" }, { children: [(0, convert_case_1.humanCase)(parameter.name || ""), " "] })), requiredText, " ", arrayLengthText] }), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [shouldShowClear ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { onClick: clearArray, emoji: "\u274C" })) : null, parameterValue === undefined || parameterValue.length === 0 ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { onClick: createArray, emoji: "\u2795" })) : null] }))] })), isDebug ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "italic text-gray-600" }, { children: parameter.simplifiedSchema.description }))) : null, parameterValue === null || parameterValue === void 0 ? void 0 : parameterValue.map(function (arrayItem, arrayIndex) {
                var _a, _b, _c;
                var simplifiedSchema = (_c = (_b = (_a = parameter.simplifiedSchema) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.schema;
                var hasName = parameter.name ? parameter.name.length > 0 : false;
                return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(SimplifiedSchemaForm_1.SimplifiedSchemaForm, { modelName: modelName, itemNameOrId: itemNameOrId, projectRelativeStorageFilePath: projectRelativeStorageFilePath, isDebug: isDebug, parameterNameStack: hasName
                            ? parameterNameStack
                                ? __spreadArray(__spreadArray([], parameterNameStack, true), [parameter.name], false) : [parameter.name]
                            : parameterNameStack, parameters: [
                            {
                                name: "".concat(parameter.name, " item ").concat(arrayIndex + 1),
                                required: true,
                                simplifiedSchema: simplifiedSchema,
                                isDbModel: false,
                                renderButtons: function () {
                                    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [arrayIndex === 0 ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { onClick: function () { return addItemAbove(arrayIndex); }, emoji: "\u2191" })) : null, (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { onClick: function () { return addItemBelow(arrayIndex); }, emoji: "\u2193" }), (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { onClick: function () { return removeItem(arrayIndex); }, emoji: "\u02DF" })] })));
                                },
                            },
                        ], onChange: function (newArrayValues) {
                            var newArrayValue = newArrayValues[0];
                            // set this index of the array to the new value taken from the form
                            parameterValue[arrayIndex] = newArrayValue;
                            // only change the value that contains the array
                            onChangeParameter(parameterValue);
                        }, values: [arrayItem], 
                        // just passing this
                        referencableModelData: referencableModelData, id: "".concat(id, ".").concat(arrayIndex) }) }));
            })] })));
};
exports.ArrayForm = ArrayForm;
//# sourceMappingURL=ArrayForm.js.map