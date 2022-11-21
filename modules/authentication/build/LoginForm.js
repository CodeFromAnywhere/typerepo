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
exports.LoginForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var router_1 = require("next/router");
var react_with_native_ui_1 = require("react-with-native-ui");
var react_with_native_1 = require("react-with-native");
var api_1 = require("api");
var store_1 = require("./store");
var big_button_1 = require("big-button");
var LoginForm = function () {
    var router = (0, router_1.useRouter)();
    var meQuery = api_1.queries.useGetMeWithContext();
    var _a = (0, store_1.useStore)("api.authToken"), pass = _a[0], setPass = _a[1];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-1 flex-col mx-10" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-4xl" }, { children: "Login" })), (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { className: react_with_native_ui_1.UI.textInput, placeholder: "Password", type: "password", value: pass, onChange: function (e) { return setPass(e.target.value); } }), (0, jsx_runtime_1.jsx)(big_button_1.BigButton, { title: "Login", onClick: function () { return router.reload(); } })] })));
};
exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map