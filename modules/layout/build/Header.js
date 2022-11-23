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
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var authentication_1 = require("authentication");
var clickable_icon_1 = require("clickable-icon");
var next_a_link_1 = require("next-a-link");
var react_with_native_1 = require("react-with-native");
var store_1 = require("./store");
var Header = function (props) {
    var _a;
    var publicBundleConfig = props.publicBundleConfig;
    var _b = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _b[0], setIsMobileMenuEnabled = _b[1];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "dark:bg-gray-800", style: {
            justifyContent: "space-between",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        } }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center" }, { children: [(0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: typeof window !== "undefined"
                            ? location.protocol + "//" + location.host
                            : "#", style: { fontSize: 32 } }, { children: publicBundleConfig === null || publicBundleConfig === void 0 ? void 0 : publicBundleConfig.emoji })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold pl-2" }, { children: publicBundleConfig === null || publicBundleConfig === void 0 ? void 0 : publicBundleConfig.name }))] })), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center" }, { children: [((_a = props.publicBundleConfig) === null || _a === void 0 ? void 0 : _a.isGitRepoPublic) &&
                        props.publicBundleConfig.gitRepoUrl ? ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ className: "pr-2", target: "_blank", href: props.publicBundleConfig.gitRepoUrl }, { children: "GitHub" }))) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDD0D", onClick: function () { return setIsMobileMenuEnabled(!isMobileMenuEnabled); } }) })), (0, jsx_runtime_1.jsx)(authentication_1.MeAuthenticationInfo, {})] }))] })));
};
exports.Header = Header;
//# sourceMappingURL=Header.js.map