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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var login_with_password_with_context_json_1 = __importDefault(require("server-login/db/ts-functions/login-with-password-with-context.json"));
var function_form_1 = require("function-form");
var router_1 = require("next/router");
var react_with_native_1 = require("react-with-native");
var api_1 = require("api");
var cool_toast_1 = require("cool-toast");
var next_a_link_1 = require("next-a-link");
var LoginForm = function () {
    var router = (0, router_1.useRouter)();
    var meQuery = api_1.queries.useGetMeWithContext();
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-1 flex-col mx-10" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-4xl" }, { children: "Login" })), (0, jsx_runtime_1.jsx)(function_form_1.FunctionForm, { tsFunction: login_with_password_with_context_json_1.default, withApiResult: function (result) {
                    var _a;
                    if (result.isSuccessful && ((_a = result.result) === null || _a === void 0 ? void 0 : _a.isSuccessful)) {
                        router.push("/");
                    }
                    meQuery.refetch();
                    (0, cool_toast_1.showStandardResponse)(result);
                } }), (0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "/signup" }, { children: "Or click here to sign up" }))] })));
};
exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map