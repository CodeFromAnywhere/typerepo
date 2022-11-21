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
exports.renderParameterTitle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var convert_case_1 = require("convert-case");
var schema_util_1 = require("schema-util");
var renderParameterTitle = function (parameter, isDebug, isBolded, renderAdditionalButtons) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var info = (0, schema_util_1.getReferenceParameterInfo)(parameter.name);
    var title = ((_a = parameter.simplifiedSchema) === null || _a === void 0 ? void 0 : _a.title) ||
        (info.isReferenceParameter
            ? (0, convert_case_1.humanCase)("".concat(info.descriptor || "", " ").concat(info.interfaceName))
            : (0, convert_case_1.humanCase)(parameter.name));
    var descriptionIndicator = ((_b = parameter.simplifiedSchema) === null || _b === void 0 ? void 0 : _b.description)
        ? " ℹ️"
        : "";
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [((_c = parameter.simplifiedSchema) === null || _c === void 0 ? void 0 : _c.section) ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold underline" }, { children: (_d = parameter.simplifiedSchema) === null || _d === void 0 ? void 0 : _d.section }))) : null, (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full flex flex-row justify-between" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ "data-tip": (_e = parameter.simplifiedSchema) === null || _e === void 0 ? void 0 : _e.description, className: "".concat(((_f = parameter.simplifiedSchema) === null || _f === void 0 ? void 0 : _f.description)
                            ? "cursor-context-menu"
                            : "cursor-default").concat(isBolded ? " font-bold" : "") }, { children: [title, descriptionIndicator] })), (_g = parameter.renderButtons) === null || _g === void 0 ? void 0 : _g.call(parameter, parameter), renderAdditionalButtons === null || renderAdditionalButtons === void 0 ? void 0 : renderAdditionalButtons()] })), isDebug ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ className: "italic text-gray-400" }, { children: ["[", (_h = parameter.simplifiedSchema) === null || _h === void 0 ? void 0 : _h.type, "]:", " ", (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "text-gray-600" }, { children: (_j = parameter.simplifiedSchema) === null || _j === void 0 ? void 0 : _j.fullComment }))] }))) : null] }));
};
exports.renderParameterTitle = renderParameterTitle;
//# sourceMappingURL=renderParameterTitle.js.map