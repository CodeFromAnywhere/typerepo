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
exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var util_1 = require("./util");
/**
 * renders either a SelectDropdown or SelectDrawer, based on screensize
 */
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, value = _a.value, title = _a.title, containerClassName = _a.containerClassName, selectFirstOption = _a.selectFirstOption, autoSuggest = _a.autoSuggest, 
    //unused atm
    children = _a.children, className = _a.className, noPlaceholder = _a.noPlaceholder, placeholder = _a.placeholder, ios = _a.ios;
    var _b = (0, react_1.useState)(""), temporaryValue = _b[0], setTemporaryValue = _b[1];
    var id = (0, react_1.useState)("list".concat(String(Math.round(Math.random() * 100000))))[0];
    var realValue = (0, util_1.getRealValue)({ value: value, selectFirstOption: selectFirstOption, options: options, title: title });
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
    var onChangeSelect = function (event) {
        var value = event.target.value;
        var newValue = options.find(function (x) { return String(x.value) === value; }) || null;
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    var renderOptions = function () {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: options.map(function (option, index) {
                return ((0, jsx_runtime_1.jsx)("option", __assign({ value: String(option.value) }, { children: option.label }), index));
            }) }));
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: containerClassName }, { children: autoSuggest ? ((0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("input", { list: id, placeholder: !noPlaceholder ? placeholder || "Type or select one" : undefined, onChange: function (event) {
                        var value = event.target.value;
                        var foundOption = options.find(function (x) { return x.value === value; });
                        if (foundOption) {
                            onChange === null || onChange === void 0 ? void 0 : onChange(foundOption);
                            setTemporaryValue("");
                        }
                        else {
                            setTemporaryValue(value);
                        }
                    }, className: className, value: temporaryValue && temporaryValue.length > 0
                        ? temporaryValue
                        : (value === null || value === void 0 ? void 0 : value.value)
                            ? String(value === null || value === void 0 ? void 0 : value.value)
                            : "" }), (0, jsx_runtime_1.jsx)("datalist", __assign({ placeholder: title, id: id }, { children: renderOptions() }))] })) : ((0, jsx_runtime_1.jsx)("select", __assign({ onChange: onChangeSelect, className: className, value: String(value === null || value === void 0 ? void 0 : value.value) }, { children: renderOptions() }))) })));
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map