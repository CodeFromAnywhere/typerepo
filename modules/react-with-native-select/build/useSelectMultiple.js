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
exports.useSelectMultiple = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var SelectMultiple_1 = require("./SelectMultiple");
/**
Create a value selector in a single line of code, including its state!
 */
var useSelectMultiple = function (items, initialValue, 
/**
 * Optionally you can do other things with the value as well, like setting it to a global store
 */
withValue, config) {
    var realItems = items || [];
    var _a = (0, react_1.useState)(initialValue || []), value = _a[0], setValue = _a[1];
    var realOnChange = function (v) {
        setValue(v);
        if (v) {
            withValue === null || withValue === void 0 ? void 0 : withValue(v);
        }
    };
    var Component = function () { return ((0, jsx_runtime_1.jsx)(SelectMultiple_1.SelectMultipleInput, __assign({}, config, { onChange: realOnChange, value: value, options: realItems }))); };
    return [Component, value, realOnChange];
};
exports.useSelectMultiple = useSelectMultiple;
//# sourceMappingURL=useSelectMultiple.js.map