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
exports.AuthenticationLayout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var authentication_1 = require("authentication");
var api_1 = require("api");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var Header_1 = require("./Header");
var LayoutGrid_1 = require("./LayoutGrid");
/**
 * Layout that includes default pages and header for authentication
 *
 *
 */
var AuthenticationLayout = function (props) {
    var _a;
    var publicBundleConfig = (_a = api_1.queries.useGetPublicBundleConfig().data) === null || _a === void 0 ? void 0 : _a.result;
    var nextPage = props.nextPage, pageProps = props.pageProps, menu = props.menu, customHeader = props.customHeader, custom404Page = props.custom404Page;
    var router = (0, react_with_native_router_1.useRouter)();
    var path = router.asPath.substring(1).split("?")[0];
    var pages = {
        login: authentication_1.LoginForm,
        signup: authentication_1.SignupForm,
        "edit-profile": authentication_1.UpdateMeForm,
        profile: authentication_1.PublicProfile,
        "2fa": authentication_1.AuthenticationMethodsCrud,
    };
    var NextPage = nextPage;
    // seems unneeded
    // const hasQueryPath = !!menu?.queryPaths?.includes(path);
    // const hasWebPage = !!menu?.webPagesFlat?.find((x) => x.queryPath === path);
    // const hasWebPageInThisFolder = !!menu?.webPagesFlat?.find((x) =>
    //   x.queryPath.startsWith(path)
    // );
    // const shouldRenderCustom =
    //   hasQueryPath || hasWebPage || path === "" || hasWebPageInThisFolder;
    var DefaultPage = pages[path] ? pages[path] : undefined;
    var hasPage = (nextPage === null || nextPage === void 0 ? void 0 : nextPage.name) !== "Error";
    var children = DefaultPage && !hasPage ? (0, jsx_runtime_1.jsx)(DefaultPage, {}) : (0, jsx_runtime_1.jsx)(NextPage, __assign({}, pageProps));
    var header = ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: customHeader !== undefined ? (customHeader) : ((0, jsx_runtime_1.jsx)(Header_1.Header, { publicBundleConfig: publicBundleConfig })) }));
    return ((0, jsx_runtime_1.jsx)(authentication_1.LoginWrapper, { children: (0, jsx_runtime_1.jsx)(LayoutGrid_1.LayoutGrid, __assign({ header: header, menu: menu }, { children: children })) }));
};
exports.AuthenticationLayout = AuthenticationLayout;
//# sourceMappingURL=AuthenticationLayout.js.map