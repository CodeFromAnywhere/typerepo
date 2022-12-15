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
exports.NestedMenuItem = exports.getRealItemRecursive = exports.getTitle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var next_a_link_1 = require("next-a-link");
var useExpanded_1 = require("./useExpanded");
var store_1 = require("./store");
var fs_util_js_1 = require("fs-util-js");
var getTitle = function (item) {
    return item.menuTitle || (0, fs_util_js_1.getFileOrFolderName)(item.queryPath);
};
exports.getTitle = getTitle;
var getRealItemRecursive = function (item) {
    var getTitleExtension = function (item) {
        return item.children && item.children.length === 1
            ? (0, exports.getTitle)(item.children[0])
            : "";
    };
    // with exactly 1 child, the titles should be combined, the menu should be flattened
    return item.children && item.children.length === 1
        ? (0, exports.getRealItemRecursive)(__assign(__assign({}, item.children[0]), { menuTitle: (0, exports.getTitle)(item) + " ‣ " + getTitleExtension(item) }))
        : item;
};
exports.getRealItemRecursive = getRealItemRecursive;
/**
 * General purpose NestedMenuItem.
 ----

 TODO:

 - tooltip support
 
 */
var NestedMenuItem = function (props) {
    var onClick = props.onClick, onDoubleClick = props.onDoubleClick, onContextMenu = props.onContextMenu, item = props.item, level = props.level, headersClickable = props.headersClickable, mergeSingleChilds = props.mergeSingleChilds;
    var realItem = mergeSingleChilds
        ? (0, exports.getRealItemRecursive)(item)
        : item;
    var children = realItem.children, target = realItem.target, isMenuHidden = realItem.isMenuHidden, menuTitleAugmentation = realItem.menuTitleAugmentation, menuTitleTooltip = realItem.menuTitleTooltip, queryPath = realItem.queryPath;
    var shownChildren = children === null || children === void 0 ? void 0 : children.filter(function (x) { return !x.isMenuHidden; });
    var title = (0, exports.getTitle)(realItem);
    var router = (0, react_with_native_router_1.useRouter)();
    var currentPath = router.asPath.substring(1).split("?")[0];
    var _a = (0, useExpanded_1.useExpanded)(queryPath), isExpanded = _a[0], toggleExpanded = _a[1], setIsExpanded = _a[2], setNotExpanded = _a[3];
    var _b = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _b[0], setIsMobileMenuEnabled = _b[1];
    var isSelected = currentPath === queryPath;
    var realLevel = level || 0;
    var hasChildren = shownChildren && shownChildren.length > 0;
    var isClickable = headersClickable || !hasChildren;
    var textClassName = isClickable
        ? "".concat(isSelected ? "text-blue-500" : "", " hover:text-blue-800 ")
        : undefined;
    var href = isSelected
        ? undefined
        : isClickable
            ? !queryPath || queryPath.length === 0
                ? "/"
                : queryPath
            : undefined;
    var allChildrenWereHidden = (children === null || children === void 0 ? void 0 : children.length) && !(shownChildren === null || shownChildren === void 0 ? void 0 : shownChildren.length);
    return allChildrenWereHidden ? null : ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full flex flex-row justify-center items-center pr-4 ".concat(isClickable
                    ? "hover:bg-gray-200 hover:dark:bg-gray-800 ".concat(isSelected ? "bg-gray-200 dark:bg-gray-800 " : "")
                    : "") }, { children: [(0, jsx_runtime_1.jsxs)(next_a_link_1.ALink, __assign({ style: {
                            paddingLeft: realLevel * 10 + 5,
                            paddingBottom: 10,
                            paddingTop: 10,
                        }, className: "flex flex-row justify-between", textClassName: "flex flex-1 text-xs", href: href, target: target, onDoubleClick: function (event) { return event && (onDoubleClick === null || onDoubleClick === void 0 ? void 0 : onDoubleClick(event, realItem)); }, onContextMenu: function (event) { return onContextMenu === null || onContextMenu === void 0 ? void 0 : onContextMenu(event, realItem); }, onClick: function (event) {
                            if (isExpanded && isSelected) {
                                setNotExpanded();
                            }
                            else {
                                onClick === null || onClick === void 0 ? void 0 : onClick(event, realItem);
                                setIsExpanded();
                                if (!realItem.children) {
                                    setIsMobileMenuEnabled(false);
                                }
                            }
                        } }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Span
                            //line-clamp-1 truncate text-ellipsis
                            , __assign({ 
                                //line-clamp-1 truncate text-ellipsis
                                textClassName: textClassName }, { children: title })), (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "flex flex-row" }, { children: menuTitleAugmentation ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Span, { children: menuTitleAugmentation })) : null }))] })), hasChildren ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "text-3xl cursor-pointer", onClick: function () { return toggleExpanded(); } }, { children: isExpanded ? "▾" : "▸" }))) : null] })), hasChildren && isExpanded ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: shownChildren.map(function (child, i) {
                    return ((0, jsx_runtime_1.jsx)(exports.NestedMenuItem, { item: child, headersClickable: headersClickable, level: realLevel + 1 }, "menu-".concat(href, "-").concat(i)));
                }) }))) : null] })));
};
exports.NestedMenuItem = NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map