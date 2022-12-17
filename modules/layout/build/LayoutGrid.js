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
exports.LayoutGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var menu_1 = require("menu");
var react_with_native_1 = require("react-with-native");
var store_1 = require("./store");
/**
 * Style for creating a grid for the layout that is mobile friendly and has menu support
 *
 *
 *
   * I run into this problem all the time
   *
   * https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working
   *
   * final solution came from here
   *
   * https://stackoverflow.com/questions/47094742/fullscreen-flex-layouts-necessity-of-intermediate-flex-boxes
   *
   * Unfortunately, I can't seem to hide stuff anymore for some reason on non-mobile. "lg:flex hidden" just doesn't work, just hides!
   *
   * My elegant solution was to just use visible/invisible and make the mobile layout hover over the invisible one in case of a small screen, it works!
  
 */
var LayoutGrid = function (props) {
    var children = props.children, header = props.header, menu = props.menu;
    var isMobileMenuEnabled = (0, store_1.useStore)("menu.isMobileMenuEnabled")[0];
    var renderMenu = function () {
        return menu ? (0, jsx_runtime_1.jsx)(menu_1.Menu, __assign({}, menu, { message: undefined })) : null;
    };
    return ((0, jsx_runtime_1.jsxs)("main", __assign({ className: "dark:bg-zinc-900 dark:text-white relative" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "lg:invisible absolute overflow-y-scroll top-0 left-0 w-screen h-screen" }, { children: [header, isMobileMenuEnabled ? (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: renderMenu() }) : children] })), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-screen h-screen flex flex-1 invisible lg:visible flex-col" }, { children: [header, (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "h-full overflow-hidden flex-1 flex ".concat((menu === null || menu === void 0 ? void 0 : menu.menuPosition) === "left" ? "flex-row-reverse" : "flex-row") }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "min-h-0 overflow-y-scroll w-full h-full inline-block" }, { children: children })), menu ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "inline-block min-h-0 overflow-y-scroll h-full w-80" }, { children: renderMenu() }))) : null] }))] }))] })));
};
exports.LayoutGrid = LayoutGrid;
//# sourceMappingURL=LayoutGrid.js.map