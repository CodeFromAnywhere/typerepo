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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { api } from "api";
import { ClickableIcon } from "clickable-icon";
import { showStandardResponse } from "cool-toast";
import * as React from "react";
import { Div, P } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { Select } from "react-with-native-select";
import { useStore } from "./store";
import { useAdmin } from "./useAdmin";
import { useVariantResult } from "./useVariant";
export var VariantSelector = function (props) {
    var contextualPromptResults = props.contextualPromptResults, folderPath = props.folderPath, isFolder = props.isFolder, filename = props.filename;
    var router = useRouter();
    var _a = useStore("generativeWeb.defaultVariant"), defaultVariant = _a[0], setDefaultVariant = _a[1];
    var _b = useStore("generativeWeb.isEditing"), isEditing = _b[0], setIsEditing = _b[1];
    var admin = useAdmin();
    var variantResult = useVariantResult(contextualPromptResults);
    var resultItems = (contextualPromptResults === null || contextualPromptResults === void 0 ? void 0 : contextualPromptResults.map(function (x) {
        var item = {
            label: "".concat(x.isFake ? "🧪" : "").concat(x.isFavorite ? "⭐️" : "").concat(x.contextualPromptSlug),
            value: x.contextualPromptSlug,
        };
        return item;
    })) || [];
    var items = __spreadArray([
        { label: "Original", value: "___NONE___" }
    ], resultItems, true);
    var withValue = function (value) {
        var query = {
            queryPath: router.query.queryPath,
        };
        if (value && value.value && value.value !== "___NONE___") {
            query.variant = value.value;
        }
        if ((value === null || value === void 0 ? void 0 : value.value) === "___NONE___") {
            setDefaultVariant(null);
        }
        router.push({ query: query }, undefined, { shallow: true });
    };
    return (React.createElement(Div, { className: " \n    lg:flex-row lg:w-full w-min" },
        React.createElement(Div, { className: "dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md border border-black p-2 m-1 cursor-pointer flex flex-row" },
            React.createElement(P, null, "Variant:"),
            React.createElement(Select, { className: "bg-transparent", title: "Test", onChange: withValue, value: items.find(function (x) { return x.value === (variantResult === null || variantResult === void 0 ? void 0 : variantResult.contextualPromptSlug); }), options: items }),
            ((variantResult === null || variantResult === void 0 ? void 0 : variantResult.contextualPromptSlug) || null) !== defaultVariant ? (React.createElement(ClickableIcon, { emoji: "\uD83D\uDCCC", onClick: function () {
                    return setDefaultVariant((variantResult === null || variantResult === void 0 ? void 0 : variantResult.contextualPromptSlug) || null);
                } })) : null,
            variantResult && admin.isAdminActive ? (
            // delete, star/unstar
            React.createElement(Div, { className: "flex flex-row" },
                React.createElement(ClickableIcon, { emoji: "\uD83D\uDDD1", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResult;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!variantResult.prompt_projectRelativePath)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, api.deletePromptResult(variantResult.prompt_projectRelativePath, variantResult.id)];
                                case 1:
                                    apiResult = _c.sent();
                                    showStandardResponse(apiResult);
                                    if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                        (_b = admin.refetch) === null || _b === void 0 ? void 0 : _b.call(admin);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); } }),
                React.createElement(ClickableIcon, { emoji: variantResult.isFavorite ? "💩" : "⭐️", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var apiResult;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!variantResult.prompt_projectRelativePath)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, api.setIsFavoritePromptResult(variantResult.prompt_projectRelativePath, variantResult.id, !variantResult.isFavorite)];
                                case 1:
                                    apiResult = _c.sent();
                                    showStandardResponse(apiResult);
                                    if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccessful) {
                                        (_b = admin.refetch) === null || _b === void 0 ? void 0 : _b.call(admin);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); } }))) : null)));
};
//# sourceMappingURL=VariantSelector.js.map