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
exports.PictureWithInfoDropdown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var react_with_native_2 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var react_1 = require("react");
var fancy_loader_1 = require("fancy-loader");
var asset_functions_js_1 = require("asset-functions-js");
/**
 *
 * Dumb (presentational) component for a picture with info and a dropdown
 */
var PictureWithInfoDropdown = function (props) {
    var current = props.current, dropdown = props.dropdown, isLoading = props.isLoading, onClickCurrent = props.onClickCurrent, onSelectDropdownItem = props.onSelectDropdownItem, extraItems = props.extraItems;
    var router = (0, react_with_native_router_1.useRouter)();
    var _a = (0, react_1.useState)(false), showDropdown = _a[0], setShowDropdown = _a[1];
    var toggleDropdown = function () {
        setShowDropdown(!showDropdown);
    };
    var pictureUrl = current.pictureUrl ||
        (0, asset_functions_js_1.getAssetDirectlyApiUrl)("public/frontend/default-profile-picture.png");
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "relative" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "cursor-pointer flex flex-row justify-end pr-2 items-center gap gap-2", onClick: onClickCurrent || toggleDropdown }, { children: [isLoading ? ((0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, {})) : ((0, jsx_runtime_1.jsx)(react_with_native_2.Image, { src: pictureUrl, className: "rounded-full w-8 h-8 border border-black p-0.5 bg-gray-400" })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: current.info })] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "relative" }, { children: showDropdown ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "absolute top-0 right-0 bg-slate-400 min-w-[200px] rounded-md" }, { children: [(0, jsx_runtime_1.jsx)("b", { children: "Your accounts" }), dropdown.map(function (item) {
                            return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "".concat(item.isCurrent
                                    ? "bg-slate-600"
                                    : "hover:rounded-md hover:bg-slate-600", " px-2 cursor-pointer py-1"), onClick: function () {
                                    if (item.isCurrent)
                                        return;
                                    if (item.url) {
                                        router.push(item.url);
                                        return;
                                    }
                                    toggleDropdown();
                                    onSelectDropdownItem(item.data);
                                } }, { children: item.info })));
                        }), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { className: "h-4" }), (0, jsx_runtime_1.jsx)("b", { children: "More" }), extraItems === null || extraItems === void 0 ? void 0 : extraItems.map(function (item) {
                            return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "hover:bg-slate-600 hover:rounded-md text-xs cursor-pointer p-2", onClick: function () {
                                    toggleDropdown();
                                    item.onClick();
                                } }, { children: item.text })));
                        })] }))) : null }))] })));
};
exports.PictureWithInfoDropdown = PictureWithInfoDropdown;
//# sourceMappingURL=PictureWithInfoDropdown.js.map