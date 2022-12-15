"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicProfile = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var fancy_loader_1 = require("fancy-loader");
var js_util_1 = require("js-util");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var PublicPersonComponent_1 = require("./PublicPersonComponent");
var PublicProfile = function () {
    var _a, _b;
    var router = (0, react_with_native_router_1.useRouter)();
    var id = ((_a = router.query) === null || _a === void 0 ? void 0 : _a.id) ? (0, js_util_1.takeFirst)(router.query.id) : undefined;
    var publicPersonQuery = api_1.queries.useGetPublicPerson(id);
    var publicPerson = (_b = publicPersonQuery.data) === null || _b === void 0 ? void 0 : _b.result;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [publicPersonQuery.isLoading ? (0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, {}) : null, (0, jsx_runtime_1.jsx)(PublicPersonComponent_1.PublicPersonComponent, { publicPerson: publicPerson })] }));
};
exports.PublicProfile = PublicProfile;
//# sourceMappingURL=PublicProfile.js.map