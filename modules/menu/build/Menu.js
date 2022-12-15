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
exports.Menu = exports.getLegacyMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fancy_loader_1 = require("fancy-loader");
var nested_menu_1 = require("nested-menu");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var file_search_1 = require("file-search");
var clickable_icon_1 = require("clickable-icon");
var store_1 = require("./store");
var hotkeys_1 = require("hotkeys");
var recursive_util_1 = require("recursive-util");
var getLegacyMenu = function (queryPaths) {
    var projectNestedPathObject = queryPaths
        ? (0, recursive_util_1.queryPathsArrayToNestedPathObject)(queryPaths)
        : undefined;
    /**
     * This one too
     */
    var nestedMenu = projectNestedPathObject
        ? (0, recursive_util_1.nestedPathObjectToNestedMenuRecursive)(projectNestedPathObject, [], {
            getHref: function (fullPath) {
                return fullPath;
            },
        })
        : undefined;
    var result = nestedMenu === null || nestedMenu === void 0 ? void 0 : nestedMenu.map(function (item) {
        var webPage = {
            queryPath: item.title,
            menuTitleTooltip: "Should be replaced with WebPage model",
            pageData: null,
        };
        return webPage;
    });
    return result;
};
exports.getLegacyMenu = getLegacyMenu;
/**
 * `"wise"` component that lets you render a menu easily, including search

-----

TODO:

- provide menu with NestedWebPage<unknown>[]
 */
var Menu = function (props) {
    var queryPaths = props.queryPaths, isLoading = props.isLoading, message = props.message, augmentedWords = props.augmentedWords, webPagesNested = props.webPagesNested, webPagesFlat = props.webPagesFlat, menuHeader = props.menuHeader;
    var realWebPages = !webPagesNested && queryPaths
        ? (0, exports.getLegacyMenu)(queryPaths) || []
        : webPagesNested || [];
    var _a = (0, store_1.useStore)("menu.showMenu"), showMenu = _a[0], setShowMenu = _a[1];
    (0, hotkeys_1.useHotkey)(hotkeys_1.isCtrlP, function () { return setShowMenu(true); }, []);
    (0, hotkeys_1.useHotkey)(hotkeys_1.isAltB, function () { return setShowMenu(!showMenu); }, [showMenu]);
    var _b = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _b[0], setIsMobileMenuEnabled = _b[1];
    /**
     * This is a slow function to calculate for a lot of paths, needs to be optimised
     */
    var _c = (0, react_1.useState)(""), search = _c[0], setSearch = _c[1];
    var isSearching = search.length > 0;
    var closeMenu = ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2573", onClick: function () {
                    setIsMobileMenuEnabled(false);
                } }) }) })));
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between w-full" }, { children: [menuHeader === null || menuHeader === void 0 ? void 0 : menuHeader(), closeMenu] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { value: search, placeholder: "Search", onChange: function (e) { return setSearch(e.target.value); }, className: "border px-2 border-white bg-transparent w-full rounded-lg h-9 focus:outline-none", autoComplete: "off" }), isLoading ? ((0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, {})) : isSearching && webPagesFlat ? ((0, jsx_runtime_1.jsx)(file_search_1.PathSearchResults, { search: search, paths: webPagesFlat.map(function (x) { return x.queryPath; }), augmentedWords: augmentedWords })) : !isSearching && realWebPages ? ((0, jsx_runtime_1.jsx)(nested_menu_1.NestedMenu, { items: realWebPages, headersClickable: true })) : ((0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: [message || "Menu.tsx: Something's wrong, no message given", ") "] }))] }));
};
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map