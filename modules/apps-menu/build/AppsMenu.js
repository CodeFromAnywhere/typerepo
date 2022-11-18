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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var api_1 = require("api");
var tooltip_1 = require("tooltip");
var markdown_1 = require("markdown");
var react_with_native_alert_1 = require("react-with-native-alert");
var fancy_loader_1 = require("fancy-loader");
var AppsMenu = function () {
    var _a, _b;
    var _c = (0, react_1.useState)({}), loading = _c[0], setLoading = _c[1];
    var appsQuery = api_1.queries.useGetAllAppOperations();
    var alert = (0, react_with_native_alert_1.useAlert)();
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-center gap gap-2" }, { children: (_b = (_a = appsQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.filter(function (x) { return x.name !== "function-server"; }).map(function (appOperation) {
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-col items-center cursor-pointer", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var goToSite, _a, result, isSuccessful, message;
                    var _b, _c;
                    var _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                goToSite = function () {
                                    var url = "http://localhost:".concat(appOperation.port);
                                    window.open(url, "_blank");
                                };
                                if (!!appOperation.isOnline) return [3 /*break*/, 2];
                                setLoading(__assign(__assign({}, loading), (_b = {}, _b[appOperation.name] = true, _b)));
                                return [4 /*yield*/, api_1.api.startApp(appOperation.name, true)];
                            case 1:
                                _a = _e.sent(), result = _a.result, isSuccessful = _a.isSuccessful, message = _a.message;
                                if (!isSuccessful || !(result === null || result === void 0 ? void 0 : result.isSuccessful)) {
                                    alert === null || alert === void 0 ? void 0 : alert("Error", ((_d = result === null || result === void 0 ? void 0 : result.error) === null || _d === void 0 ? void 0 : _d.message) || message || "No message");
                                    setLoading(__assign(__assign({}, loading), (_c = {}, _c[appOperation.name] = false, _c)));
                                    return [2 /*return*/];
                                }
                                // TODO: apparently we need to wait a second before the next.js project is really start up... we can easily improve this by watching the stdout on the server and look for a message that says "it's running on http://localhost:PORT"
                                setTimeout(function () {
                                    var _a;
                                    goToSite();
                                    appsQuery.refetch();
                                    setLoading(__assign(__assign({}, loading), (_a = {}, _a[appOperation.name] = false, _a)));
                                }, 1000);
                                return [2 /*return*/];
                            case 2:
                                // if the app is already turned on, don't load, don't open api, just go there...
                                goToSite();
                                return [2 /*return*/];
                        }
                    });
                }); } }, { children: [(0, jsx_runtime_1.jsx)(tooltip_1.Tooltip, __assign({ placement: "top", tooltip: (0, markdown_1.renderMarkdownContent)(appOperation.description || appOperation.name, {
                            projectRelativeBaseFolderPath: "",
                            projectRelativeMarkdownFilePath: "",
                        }) }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "bg-white border border-black mb-2 rounded-lg w-12 h-12 flex items-center justify-center hover:scale-150 transition-all" }, { children: loading[appOperation.name] === true ? ((0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, { medium: true })) : ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ title: appOperation.name, className: "text-4xl" }, { children: appOperation.emoji ||
                                    appOperation.name.charAt(0).toLocaleUpperCase() }))) })) })), appOperation.isOnline ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { className: "w-2 h-2 rounded-full bg-gray-700 dark:bg-gray-200" })) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { className: "w-2 h-2" }))] }), appOperation.name));
        }) })));
};
exports.AppsMenu = AppsMenu;
//# sourceMappingURL=AppsMenu.js.map