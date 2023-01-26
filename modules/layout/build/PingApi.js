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
exports.PingApi = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var next_a_link_1 = require("next-a-link");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var react_with_native_store_1 = require("react-with-native-store");
var timeBeforeNotOffline = 10000;
var PingApi = function () {
    // ping every time the user returns to the screen. this way the api gets checked
    var pingResult = api_1.queries.usePing();
    var _a = (0, react_1.useState)(undefined), isOffline = _a[0], setIsOffline = _a[1];
    (0, react_1.useEffect)(function () {
        var intervalId = setInterval(function () {
            // every second, check the localstorage for this thing.
            (0, react_with_native_store_1.getItem)(api_1.API_NO_RESPONSE_TIME_KEY).then(function (value) {
                if (value === undefined) {
                    if (isOffline) {
                        setIsOffline(false);
                        return;
                    }
                }
                var lastNoResponse = Number(value);
                console.log({ lastNoResponse: lastNoResponse });
                if (lastNoResponse === 0) {
                    // last time we got a response...
                    setIsOffline(false);
                    return;
                }
                var timeAgo = Date.now() - lastNoResponse;
                if (timeAgo > timeBeforeNotOffline) {
                    // long ago, let's wait for loading it again
                    setIsOffline(undefined);
                    return;
                }
                // last 10 seconds we tried but itseems to have an error during that time
                setIsOffline(true);
            });
        }, 1000);
        return function () { return clearInterval(intervalId); };
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mx-4" }, { children: (0, jsx_runtime_1.jsxs)(next_a_link_1.ALink, __assign({ href: "/settings" }, { children: [isOffline === undefined ? "🟠" : isOffline === true ? "❌" : "✅", " API status:", " ", isOffline === true
                    ? "down"
                    : isOffline === undefined
                        ? "loading"
                        : "up"] })) })));
};
exports.PingApi = PingApi;
//# sourceMappingURL=PingApi.js.map