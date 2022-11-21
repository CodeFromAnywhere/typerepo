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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clickable_icon_1 = require("clickable-icon");
var react_with_native_1 = require("react-with-native");
var fancy_loader_1 = require("fancy-loader");
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var renderParameterTitle_1 = require("./renderParameterTitle");
var js_util_1 = require("js-util");
/**
 * This component renders an input to select an item to reference from another model (or multiple)
 */
var ReferenceInput = function (props) {
    var _a, _b, _c, _d;
    var isDebug = props.isDebug, parameter = props.parameter, parameterValue = props.parameterValue, onChangeParameter = props.onChangeParameter, defaultInputFields = props.defaultInputFields, referencedModelDataItem = props.referencedModelDataItem;
    var isLoading = referencedModelDataItem.isLoading;
    var addModelItem = function () {
        return ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2795", onClick: function () {
                if (typeof window === undefined)
                    return;
                window.open("upsert/".concat(referencedModelDataItem.interfaceName), "_blank");
            } }));
    };
    // selectbox, if referencedModelData is available
    if (referencedModelDataItem.isReferenceMultipleParameter) {
        // select multiple
        var value = (parameterValue || []);
        var onChangeMultiple = function (selected) {
            var newValue = selected.length === 0 && !parameter.required
                ? undefined
                : selected.map(function (x) { return x.value; });
            onChangeParameter(newValue);
        };
        var options_1 = ((_a = referencedModelDataItem.data) === null || _a === void 0 ? void 0 : _a.map(function (x) {
            var label = x.name || x.id;
            var value = referencedModelDataItem.keyInModel
                ? x[referencedModelDataItem.keyInModel]
                : undefined;
            if (!value)
                return;
            return {
                value: value,
                label: label,
            };
        }).filter(js_util_1.notEmpty)) || [];
        var selectedValues = value
            .map(function (v) { return options_1.find(function (x) { return x.value === v; }); })
            .filter(js_util_1.notEmpty);
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug, false, addModelItem), isLoading ? ((0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, {})) : ((0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SelectMultipleInput, __assign({}, defaultInputFields, { onChange: onChangeMultiple, value: selectedValues, extra: {
                        options: options_1,
                        autoSuggest: options_1.length > 10,
                    }, config: {} })))] }));
    }
    else {
        // select single
        // If a referenced model contains the `categoryStackCalculated` parameter, this data should be used to group the selectbox. Without categoryStackCalculated parameter, simply use the name.
        var value_1 = parameterValue;
        var onChangeSingle = function (selected) {
            var newValue = !selected && !parameter.required ? undefined : selected === null || selected === void 0 ? void 0 : selected.value;
            onChangeParameter(newValue);
        };
        var options = ((_b = referencedModelDataItem.data) === null || _b === void 0 ? void 0 : _b.map(function (x) {
            var categoryStackCalculated = x.categoryStackCalculated;
            var value = referencedModelDataItem.keyInModel
                ? x[referencedModelDataItem.keyInModel]
                : undefined;
            if (!value)
                return;
            /**
             * This must be something. Name is not always there, but ID should be!
             */
            var identifier = x.name || x.id;
            var label = categoryStackCalculated
                ? categoryStackCalculated.concat(identifier).join(" › ")
                : identifier;
            return {
                value: value,
                label: label,
            };
        }).filter(js_util_1.notEmpty)) || [];
        var selectValue = value_1
            ? {
                label: ((_d = (_c = referencedModelDataItem.data) === null || _c === void 0 ? void 0 : _c.find(function (x) {
                    return referencedModelDataItem.keyInModel
                        ? x[referencedModelDataItem.keyInModel] === value_1
                        : false;
                })) === null || _d === void 0 ? void 0 : _d.name) || "Select an option",
                value: value_1,
            }
            : null;
        var optionsAndFirst = [
            { label: "Select an option", value: "" },
        ].concat(options);
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderParameterTitle_1.renderParameterTitle)(parameter, isDebug, false, addModelItem), isLoading ? ((0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, {})) : ((0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SelectInput, __assign({}, defaultInputFields, { onChange: onChangeSingle, value: selectValue, extra: {
                        options: optionsAndFirst,
                        autoSuggest: optionsAndFirst.length > 10,
                    }, config: {} })))] }));
    }
};
exports.ReferenceInput = ReferenceInput;
//# sourceMappingURL=ReferenceInput.js.map