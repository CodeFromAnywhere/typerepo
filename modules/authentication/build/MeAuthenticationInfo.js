"use strict";
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
exports.MeAuthenticationInfo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var js_util_1 = require("js-util");
var router_1 = require("next/router");
var PictureWithInfoDropdown_1 = require("./PictureWithInfoDropdown");
var react_with_native_notification_1 = require("react-with-native-notification");
var cool_toast_1 = require("cool-toast");
var asset_view_1 = require("asset-view");
/** little component for in banner that shows your info on top, and links to signup/login etc*/
var MeAuthenticationInfo = function () {
    var _a, _b, _c, _d, _e;
    var meQuery = api_1.queries.useGetMeWithContext();
    var personInfo = (0, js_util_1.destructureOptionalObject)((_b = (_a = meQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.device);
    var router = (0, router_1.useRouter)();
    // if no persons are connected, show circle with ? in front of user icon, with menu "sign up" and "login" next to it
    // if person is connected, that icon becomes your currentaPerson picture, the text your name. if you click on it, it drops down to show the other persons connected to your device, but also "login and sign up"
    var nobodyOrCurrent = personInfo.currentPersonCalculated
        ? {
            pictureUrl: (0, asset_view_1.itemGetBackendAssetUrl)({
                item: personInfo.currentPersonCalculated,
                backendAsset: personInfo.currentPersonCalculated.pictureImage,
            }),
            info: (_c = personInfo.currentPersonCalculated) === null || _c === void 0 ? void 0 : _c.name,
            data: personInfo.currentPersonCalculated,
        }
        : {
            info: "Sign in",
            pictureUrl: undefined,
        };
    var dropdown = ((_d = personInfo.persons) === null || _d === void 0 ? void 0 : _d.map(function (x) {
        return {
            pictureUrl: (0, asset_view_1.itemGetBackendAssetUrl)({
                item: x,
                backendAsset: x.pictureImage,
            }),
            info: x.name,
            data: x,
            isCurrent: x.id === personInfo.currentPersonId,
        };
    })) || [];
    return ((0, jsx_runtime_1.jsx)(PictureWithInfoDropdown_1.PictureWithInfoDropdown, { current: nobodyOrCurrent, dropdown: dropdown, extraItems: [
            {
                text: "2FA Settings",
                onClick: function () { return router.push("/2fa"); },
            },
            {
                text: "Edit your profile",
                onClick: function () { return router.push("/edit-profile"); },
            },
            {
                text: "See your profile",
                onClick: function () {
                    return router.push("/profile?id=".concat(personInfo.currentPersonId));
                },
            },
            {
                text: "Login into another account",
                onClick: function () { return router.push("/login"); },
            },
            { text: "Create a new account", onClick: function () { return router.push("/signup"); } },
            {
                text: "Logout from ".concat((_e = personInfo.currentPersonCalculated) === null || _e === void 0 ? void 0 : _e.name),
                onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, result, isSuccessful, message;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, api_1.api.logoutWithContext()];
                            case 1:
                                _a = _b.sent(), result = _a.result, isSuccessful = _a.isSuccessful, message = _a.message;
                                meQuery.refetch();
                                (0, cool_toast_1.successToast)((result === null || result === void 0 ? void 0 : result.message) || message || "something went wrong (no message)");
                                return [2 /*return*/];
                        }
                    });
                }); },
            },
        ], isLoading: meQuery.isLoading, onClickCurrent: personInfo.currentPersonCalculated
            ? undefined
            : function () { return router.push("/signup"); }, onSelectDropdownItem: function (item) { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item === null || item === void 0 ? void 0 : item.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, api_1.api.switchCurrentPersonWithContext(item === null || item === void 0 ? void 0 : item.id)];
                    case 1:
                        result = (_a.sent()).result;
                        (0, react_with_native_notification_1.toast)({
                            title: (result === null || result === void 0 ? void 0 : result.isSuccessful) ? "Done" : "Error",
                            body: (result === null || result === void 0 ? void 0 : result.message) || "Somethign went wrong",
                        }, { hideProgressBar: true, position: "bottom-right", type: "success" });
                        meQuery.refetch();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); } }));
};
exports.MeAuthenticationInfo = MeAuthenticationInfo;
//# sourceMappingURL=MeAuthenticationInfo.js.map