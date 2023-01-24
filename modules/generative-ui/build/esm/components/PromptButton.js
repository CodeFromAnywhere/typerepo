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
import * as React from "react";
import { api } from "api";
import { ClickableIcon } from "clickable-icon";
import { showStandardResponse, warningToast } from "cool-toast";
import { processPrompt, usePromptResultAlert } from "prompt-components";
import { Div, P } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { Tooltip } from "tooltip";
import { NavButton } from "./NavButton";
import { useAdmin } from "./useAdmin";
import { MarkdownContent } from "markdown";
import { useAlert } from "react-with-native-alert";
import { getFolderJs } from "fs-util-js";
export var PromptButton = function (props) {
    var item = props.item, markdown = props.markdown, projectRelativeFilePath = props.projectRelativeFilePath, contextSelection = props.contextSelection;
    var admin = useAdmin();
    var router = useRouter();
    var showPromptAlert = usePromptResultAlert();
    var alert = useAlert();
    var title = "".concat(item.isFavorite ? "⭐️ " : "").concat(item.title || item.name);
    var projectRelativeFolderPath = getFolderJs(projectRelativeFilePath);
    return (React.createElement(Tooltip, { hoverTimeout: 100, tooltip: React.createElement(Div, null,
            React.createElement(P, { className: "font-bold text-xl" }, title),
            item.description ? (React.createElement(MarkdownContent, { content: item.description, config: {} })) : null,
            React.createElement("br", null),
            React.createElement(ClickableIcon, { emoji: item.isFavorite
                    ? "⭐️ Favorite (click to change)"
                    : "💩 Not favorite (click to change)", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var apiResult;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, api.upsertDbModel("ContextualPrompt", __assign(__assign({}, item), { isFavorite: !item.isFavorite }))];
                            case 1:
                                apiResult = _b.sent();
                                showStandardResponse(apiResult);
                                (_a = admin.refetch) === null || _a === void 0 ? void 0 : _a.call(admin);
                                return [2 /*return*/];
                        }
                    });
                }); } }),
            React.createElement(ClickableIcon, { emoji: "\u270F\uFE0F Edit", onClick: function () {
                    if (!admin.isAdminActive) {
                        warningToast("You can't do this yet! You first need to install your server on your machine");
                        return;
                    }
                    // go to upsert ContextualPrompt db page.
                    router.push("/edit/ContextualPrompt?id=".concat(item.id));
                } }),
            React.createElement(ClickableIcon, { emoji: "\uD83D\uDDD1 Delete", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        alert === null || alert === void 0 ? void 0 : alert("Are you sure?", "You're going to remove this prompt from your database", [
                            {
                                text: "Do it",
                                style: "destructive",
                                onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                                    var apiResult;
                                    var _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0: return [4 /*yield*/, api.deleteDbModel("ContextualPrompt", item.id)];
                                            case 1:
                                                apiResult = _c.sent();
                                                showStandardResponse(apiResult);
                                                if ((_a = apiResult === null || apiResult === void 0 ? void 0 : apiResult.result) === null || _a === void 0 ? void 0 : _a.isSuccesful) {
                                                    (_b = admin.refetch) === null || _b === void 0 ? void 0 : _b.call(admin);
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); },
                            },
                            {
                                text: "Cancel",
                                style: "cancel",
                            },
                        ]);
                        return [2 /*return*/];
                    });
                }); } }),
            contextSelection ? null : (React.createElement(ClickableIcon, { emoji: "\uD83D\uDCA5 Apply on folder", onClick: function () {
                    if (!projectRelativeFolderPath)
                        return;
                    alert === null || alert === void 0 ? void 0 : alert("Apply on folder", "You're going to apply the prompt ".concat(item.name, " on all files in the folder. Are you sure?"), [
                        { style: "cancel", text: "cancel" },
                        {
                            style: "default",
                            text: "Yes",
                            onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                                var apiResult;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, api.processPromptOnFolderWithContext({
                                                projectRelativeFolderPath: projectRelativeFolderPath,
                                                promptSlug: item.slug,
                                                isRecursive: false,
                                            })];
                                        case 1:
                                            apiResult = _a.sent();
                                            showStandardResponse(apiResult);
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                        },
                        {
                            style: "destructive",
                            text: "Yes, recursive",
                            onPress: function () { return __awaiter(void 0, void 0, void 0, function () {
                                var apiResult;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, api.processPromptOnFolderWithContext({
                                                projectRelativeFolderPath: projectRelativeFolderPath,
                                                promptSlug: item.slug,
                                                isRecursive: true,
                                            })];
                                        case 1:
                                            apiResult = _a.sent();
                                            showStandardResponse(apiResult);
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                        },
                    ]);
                } }))), placement: "top" },
        React.createElement(NavButton, { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!markdown)
                                return [2 /*return*/];
                            return [4 /*yield*/, processPrompt({
                                    contextualPromptSlug: item.slug,
                                    showPromptAlert: showPromptAlert,
                                    contextualContent: {
                                        contextContent: markdown,
                                        contextSelection: contextSelection,
                                        context_projectRelativeFilePath: projectRelativeFilePath,
                                    },
                                })];
                        case 1:
                            _a.sent();
                            router.replace({
                                query: {
                                    queryPath: router.query.queryPath,
                                    variant: item.slug,
                                },
                            });
                            return [2 /*return*/];
                    }
                });
            }); }, title: item.title || item.name })));
};
//# sourceMappingURL=PromptButton.js.map