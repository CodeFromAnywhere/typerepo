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
exports.ObjectForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var js_util_1 = require("js-util");
// relative
var SimplifiedSchemaForm_1 = require("./SimplifiedSchemaForm");
var react_1 = require("react");
var renderParameterTitle_1 = require("./renderParameterTitle");
var clickable_icon_1 = require("clickable-icon");
/**
 * Component to render a parameter that holds an object
 *
 * This is simply a wrapper around another SimplifiedSchemaForm where the onChange and values are slightly different
 */
var ObjectForm = function (props) {
    var modelName = props.modelName, itemNameOrId = props.itemNameOrId, parameterNameStack = props.parameterNameStack, projectRelativeStorageFilePath = props.projectRelativeStorageFilePath, parameter = props.parameter, onChangeParameter = props.onChangeParameter, parameterValue = props.parameterValue, isDebug = props.isDebug, id = props.id, referencableModelData = props.referencableModelData, referencedModelDataIsLoading = props.referencedModelDataIsLoading;
    /**
     * By default, the thing is expanded if the parameter is required, or if there is already a parameter value. If it is "true" by default, you can also not minimise
     */
    var defaultExpandedState = parameter.required ? true : !!parameterValue;
    var _a = (0, react_1.useState)(defaultExpandedState), isExpanded = _a[0], setIsExpanded = _a[1];
    if (!parameter.simplifiedSchema) {
        return null;
    }
    // we can only render the object if it has properties...
    if (!parameter.simplifiedSchema.properties ||
        parameter.simplifiedSchema.properties.length === 0) {
        // console.log("Object without properties", { parameter });
        return isDebug ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ className: "text-red-500" }, { children: ["Object without properties ", parameter.name, " ", JSON.stringify(parameter.simplifiedSchema)] }))) : null;
    }
    // for each parameter, recurse this form builder
    var onChangeSubset = function (objectParameterValues) {
        var _a, _b;
        // NB: every item in the array is linked with a parameter in the object
        var objectParts = (_b = (_a = parameter.simplifiedSchema) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.map(function (x, i) {
            var _a;
            return (_a = {},
                _a[x.name] = objectParameterValues[i],
                _a);
        });
        var objectOrNot = objectParts
            ? (0, js_util_1.mergeObjectsArray)(objectParts)
            : undefined;
        onChangeParameter(objectOrNot);
    };
    var valuesSubset = parameter.simplifiedSchema.properties.map(function (x) { return parameterValue === null || parameterValue === void 0 ? void 0 : parameterValue[x.name]; });
    var parameters = parameter.simplifiedSchema.properties.map(function (x) { return ({
        name: x.name,
        required: x.required,
        simplifiedSchema: x.schema,
        isDbModel: parameter.isDbModel,
    }); });
    // console.log({ parameters, parameter, isExpanded });
    var renderExpandButton = function () {
        if (defaultExpandedState)
            return null;
        return ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { onClick: function () { return setIsExpanded(!isExpanded); }, emoji: isExpanded ? "-" : "+" }));
    };
    var hasName = parameter.name ? parameter.name.length > 0 : false;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "ml-2 pl-2 my-4 border-l border-gray-900 dark:border-gray-100" }, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug, true, function () {
                return renderExpandButton();
            }), isExpanded ? ((0, jsx_runtime_1.jsx)(SimplifiedSchemaForm_1.SimplifiedSchemaForm, { modelName: modelName, itemNameOrId: itemNameOrId, parameterNameStack: hasName
                    ? parameterNameStack
                        ? __spreadArray(__spreadArray([], parameterNameStack, true), [parameter.name], false) : [parameter.name]
                    : parameterNameStack, projectRelativeStorageFilePath: projectRelativeStorageFilePath, isDebug: isDebug, parameters: parameters, onChange: onChangeSubset, values: valuesSubset, 
                // just passing this
                referencableModelData: referencableModelData, id: id })) : null] })));
};
exports.ObjectForm = ObjectForm;
//# sourceMappingURL=ObjectForm.js.map