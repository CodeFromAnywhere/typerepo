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
exports.NestedMenuItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var next_a_link_1 = require("next-a-link");
/**
 * General purpose NestedMenuItem
 *
 * TODO: make style customizable
 */
var NestedMenuItem = function (props) {
    var title = props.title, children = props.children, icon = props.icon, onClick = props.onClick, onDoubleClick = props.onDoubleClick, onContextMenu = props.onContextMenu, rightIcon = props.rightIcon, target = props.target, href = props.href, showChildren = props.showChildren, level = props.level, headersClickable = props.headersClickable;
    var router = (0, react_with_native_router_1.useRouter)();
    var isSelected = router.asPath.substring(1) === href;
    var realLevel = level || 0;
    var hasChildren = children && children.length > 0 && showChildren;
    var isClickable = headersClickable || !hasChildren;
    var textClassName = isClickable
        ? "".concat(isSelected ? "text-blue-500" : "", " hover:text-blue-800 ")
        : undefined;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full ".concat(isClickable
                    ? "hover:bg-gray-200 ".concat(isSelected ? "bg-gray-200 " : "")
                    : "") }, { children: (0, jsx_runtime_1.jsxs)(next_a_link_1.ALink, __assign({ style: {
                        paddingLeft: realLevel * 10 + 5,
                        paddingBottom: 10,
                        paddingTop: 10,
                    }, textClassName: "flex flex-1 text-xs", href: isClickable ? (!href || href.length === 0 ? "/" : href) : undefined, target: target, onDoubleClick: onDoubleClick, onContextMenu: onContextMenu, onClick: onClick }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Span
                        //line-clamp-1 truncate text-ellipsis
                        , __assign({ 
                            //line-clamp-1 truncate text-ellipsis
                            textClassName: textClassName }, { children: [icon || "", title] })), rightIcon ? (0, jsx_runtime_1.jsx)(react_with_native_1.Span, { children: rightIcon }) : null] })) })), hasChildren ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: children.map(function (child, i) {
                    return ((0, jsx_runtime_1.jsx)(exports.NestedMenuItem, __assign({}, child, { level: realLevel + 1 }), "menu-".concat(href, "-").concat(i)));
                }) }))) : null] })));
};
exports.NestedMenuItem = NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map