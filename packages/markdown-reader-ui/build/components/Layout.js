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
exports.MenuWrapper = exports.Layout = exports.Header = exports.Search = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var nested_menu_1 = require("nested-menu");
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var sdk_env_public_1 = require("sdk-env-public");
var react_with_native_router_1 = require("react-with-native-router");
var store_1 = require("../store");
var clickable_icon_1 = require("clickable-icon");
var next_a_link_1 = require("next-a-link");
/**
 * This is shit....
 */
var Search = function (props) {
    var results = props.results;
    var router = (0, react_with_native_router_1.useRouter)();
    var options = results.map(function (result) { return ({
        label: result.spoiler || result.word,
        value: result.word,
    }); });
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SelectInput, { config: {}, extra: { autoSuggest: true, options: options }, fieldName: "search", onChange: function (select) {
                var _a;
                var path = (_a = results.find(function (x) { return x.word === (select === null || select === void 0 ? void 0 : select.value); })) === null || _a === void 0 ? void 0 : _a.queryPath;
                if (path) {
                    router.push("/".concat(path));
                }
            }, uniqueFieldId: "search", value: null }) }));
};
exports.Search = Search;
var Header = function (props) {
    var _a, _b, _c, _d;
    var publicBundleConfig = props.publicBundleConfig;
    var title = sdk_env_public_1.publicLocalEnvironmentVariables.markdownReaderTitle ||
        sdk_env_public_1.publicEnvironmentVariables.markdownReaderTitle ||
        (publicBundleConfig === null || publicBundleConfig === void 0 ? void 0 : publicBundleConfig.name);
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ style: {
            backgroundColor: (_a = props.publicBundleConfig) === null || _a === void 0 ? void 0 : _a.primaryColor,
            justifyContent: "space-between",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        } }, { children: [(0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: typeof window !== "undefined"
                    ? location.protocol + "//" + location.host
                    : "#", style: { fontSize: 32 } }, { children: (_b = props.publicBundleConfig) === null || _b === void 0 ? void 0 : _b.emoji })), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-white " }, { children: title })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-xs text-white italic" }, { children: (_c = props.publicBundleConfig) === null || _c === void 0 ? void 0 : _c.description }))] }), ((_d = props.publicBundleConfig) === null || _d === void 0 ? void 0 : _d.isGitRepoPublic) &&
                props.publicBundleConfig.gitRepoUrl ? ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ target: "_blank", href: props.publicBundleConfig.gitRepoUrl }, { children: "\uD83D\uDC31" }))) : null] })));
};
exports.Header = Header;
var Layout = function (props) {
    var pages = props.pages, children = props.children, augmentedWordObject = props.augmentedWordObject, publicBundleConfig = props.publicBundleConfig;
    var queryPaths = pages.filter(function (x) { return x.isMenuItem; }).map(function (x) { return x.queryPath; });
    var nestedPathObject = (0, nested_menu_1.queryPathsArrayToNestedPathObject)(queryPaths);
    var menu = (0, nested_menu_1.nestedPathObjectToNestedMenuRecursive)(nestedPathObject);
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(exports.Header, { publicBundleConfig: publicBundleConfig }), (0, jsx_runtime_1.jsx)(exports.MenuWrapper, __assign({ augmentedWordObject: augmentedWordObject, menu: menu }, { children: children }))] }));
};
exports.Layout = Layout;
/**

TODO: This is a good start, but it can be generalised more.

 */
var MenuWrapper = function (props) {
    var children = props.children, menu = props.menu, augmentedWordObject = props.augmentedWordObject;
    var _a = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _a[0], setIsMobileMenuEnabled = _a[1];
    var results = augmentedWordObject
        ? Object.keys(augmentedWordObject).map(function (key) { return augmentedWordObject[key]; })
        : [];
    var renderMenu = function () {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-1" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: (0, jsx_runtime_1.jsx)(exports.Search, { results: results }) })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2573", onClick: function () {
                                    setIsMobileMenuEnabled(false);
                                } }) }))] })), menu ? ((0, jsx_runtime_1.jsx)(nested_menu_1.NestedMenu, { menu: menu, headersClickable: true })) : ("Menu couldn't be found")] }));
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isMobileMenuEnabled ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: renderMenu() }))) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:h-screen lg:grid lg:grid-rows-6" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "lg:row-span-6 lg:grid lg:grid-cols-5" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white", textClassName: "dark:text-white" }, { children: children })), (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "invisible lg:visible border-l lg:col-span-1 lg:overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400" }, { children: renderMenu() }))] })) }))) }));
};
exports.MenuWrapper = MenuWrapper;
//# sourceMappingURL=Layout.js.map