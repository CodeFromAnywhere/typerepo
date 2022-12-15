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
exports.SelectMultipleInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_ui_1 = require("react-with-native-ui");
var Select_1 = require("./Select");
var react_with_native_1 = require("react-with-native");
var SelectMultipleInput = function (props) {
    var onChange = props.onChange, options = props.options, className = props.className, value = props.value, autoSuggest = props.autoSuggest, noPlaceholder = props.noPlaceholder, placeholder = props.placeholder, title = props.title, uniqueFieldId = props.uniqueFieldId;
    //console.log({ value, extraOptions: extra.options });
    var defaultOption = {
        label: title || "Choose a value",
        value: "",
    };
    var optionsLeft = [defaultOption]
        .concat(options)
        .filter(function (x) { return !value.find(function (i) { return x.value === i.value; }); });
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: [value.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ onClick: function () {
                    var newValue = value.filter(function (x) { return x.value !== item.value; });
                    onChange(newValue);
                }, className: "mr-3 px-3 py-2 rounded-md border border-gray-400" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ className: "text-xs" }, { children: [item.label, " ", (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ textClassName: "text-red-500 text-xs" }, { children: "(x)" }))] })) }), "selected".concat(uniqueFieldId).concat(index))); }), optionsLeft.length > 1 ? ((0, jsx_runtime_1.jsx)(Select_1.Select, { placeholder: placeholder, noPlaceholder: noPlaceholder, autoSuggest: autoSuggest, className: className || react_with_native_ui_1.UI.selectInput, title: title || "", options: optionsLeft, onChange: function (selected) {
                    // console.log({ selected });
                    if (selected) {
                        var newValue = __spreadArray([], value, true);
                        newValue.push(selected);
                        // console.log({ value, newValue });
                        onChange(newValue);
                    }
                } })) : null] })));
};
exports.SelectMultipleInput = SelectMultipleInput;
//# sourceMappingURL=SelectMultiple.js.map