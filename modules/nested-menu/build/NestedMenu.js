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
exports.NestedMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var NestedMenuItem_1 = require("./NestedMenuItem");
/**
 * General purpose nested menu component
 *
 * TODO: support for expanded items
 */
var NestedMenu = function (props) {
    var menu = props.menu, headersClickable = props.headersClickable;
    var menuItems = menu === null || menu === void 0 ? void 0 : menu.map(function (menuItem, index) {
        return ((0, react_1.createElement)(NestedMenuItem_1.NestedMenuItem, __assign({}, menuItem, { headersClickable: headersClickable, key: "menu".concat(index) })));
    });
    return (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: menuItems }));
};
exports.NestedMenu = NestedMenu;
//# sourceMappingURL=NestedMenu.js.map