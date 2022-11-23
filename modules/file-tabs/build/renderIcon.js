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
exports.renderIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
//<Svg src={svgSrc} className="w-4 h-4 text-gray-900 dark:text-gray-200" />
var renderIcon = function (item, index) {
    var onClick = item.onClick, emoji = item.emoji;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ onClick: onClick, className: "hover:bg-yellow-100 rounded-sm m-0.5 p-0.5" }, { children: emoji }), "icon".concat(index)));
};
exports.renderIcon = renderIcon;
//# sourceMappingURL=renderIcon.js.map