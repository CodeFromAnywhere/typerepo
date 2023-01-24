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
import { showStandardResponse } from "cool-toast";
import { processPrompt, usePromptResultAlert } from "prompt-components";
import { Div, P } from "react-with-native";
import { useAlert } from "react-with-native-alert";
import { useLastSelection } from "share";
import { NavButton } from "./NavButton";
import { useAdmin } from "./useAdmin";
import { PromptButton } from "./PromptButton";
import { ClickableIcon } from "clickable-icon";
export var SelectionPrompts = function (props) {
    var showPromptAlert = usePromptResultAlert();
    var alert = useAlert();
    var selectionContextualPrompts = props.selectionContextualPrompts, contentString = props.contentString, projectRelativeFilePath = props.projectRelativeFilePath;
    var admin = useAdmin();
    var _a = useLastSelection(), contextSelection = _a.selection, reset = _a.reset;
    /**
     * TODO: also sort them here based on which selection you make (`.contextualContent.contextSelection`) and your settings (probably isFavorite first, but other sorting may be beneficial.
     */
    var promptItems = (selectionContextualPrompts === null || selectionContextualPrompts === void 0 ? void 0 : selectionContextualPrompts.map(function (prompt) {
        var item = {
            onClick: function () {
                return processPrompt({
                    contextualPromptSlug: prompt.slug,
                    contextualContent: {
                        contextSelection: contextSelection,
                        contextContent: contentString,
                        context_projectRelativeFilePath: projectRelativeFilePath,
                    },
                    showPromptAlert: showPromptAlert,
                });
            },
            title: prompt.name || "Noname",
            // TODO: not sure if this is the right level, but eventually we want to filter based on the selection, maybe
            isEnabled: true,
        };
        return item;
    })) || [];
    var selectionWordCount = contextSelection
        ? contextSelection.split(" ").length
        : 0;
    var isStatement = selectionWordCount > 1;
    var isWord = selectionWordCount <= 4;
    var selectionItems = [
        {
            onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                var apiResult;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!contextSelection) {
                                alert === null || alert === void 0 ? void 0 : alert("Select a word", "You didn't select a word or word-combination (up to 4 words)");
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, api.addWord(contextSelection, undefined)];
                        case 1:
                            apiResult = _b.sent();
                            showStandardResponse(apiResult);
                            (_a = admin.refetch) === null || _a === void 0 ? void 0 : _a.call(admin);
                            return [2 /*return*/];
                    }
                });
            }); },
            title: "🧠 Add word",
            isEnabled: isWord,
        },
        {
            onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                var apiResult;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!contextSelection) {
                                alert === null || alert === void 0 ? void 0 : alert("Select a statement", "You didn't select a statement (minimum 2 words)");
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, api.addStatement(contextSelection, undefined, undefined)];
                        case 1:
                            apiResult = _b.sent();
                            showStandardResponse(apiResult);
                            (_a = admin.refetch) === null || _a === void 0 ? void 0 : _a.call(admin);
                            return [2 /*return*/];
                    }
                });
            }); },
            title: "🧠 Add statement",
            isEnabled: isStatement,
        },
        {
            title: "🕊 Free-form prompt",
            isEnabled: true,
            onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                var question, name, realName, customPromptContent;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            question = prompt("What do you want to ask/prompt?");
                            if (!question || question === "") {
                                return [2 /*return*/];
                            }
                            name = prompt("How should we call the prompt? (empty for not storing)");
                            realName = name === "" ? null : name;
                            customPromptContent = "I am reading this file:\n\n```\n%context\n```\n\nMore specifically, I'm looking at this part: \n\n```\n%selection\n```\n\n".concat(question);
                            return [4 /*yield*/, processPrompt({
                                    contextualContent: {
                                        contextContent: contentString,
                                        context_projectRelativeFilePath: projectRelativeFilePath,
                                        contextSelection: contextSelection,
                                    },
                                    showPromptAlert: showPromptAlert,
                                    customPromptContent: customPromptContent,
                                    saveNewPromptWithName: realName,
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
        },
        {
            title: "🎤 Speak",
            isEnabled: true,
            onClick: function () {
                alert === null || alert === void 0 ? void 0 : alert("Coming soon!", React.createElement(Div, null,
                    React.createElement(P, null, "This button should let you record your voice so you can ask a question through human speech. The speech will be converted into text by whisper, it will then choose an existing prompt action, or if it can't find that, do a free-form prompt."),
                    React.createElement(P, null, "P.S. Would be nice if this option is there by default, also for other menus, or it's even accessible via other ways, but this is a great way to try it out first.")));
            },
        },
    ];
    return (React.createElement(Div, null,
        React.createElement(P, { className: "font-bold" }, "Apply a prompt on your selection"),
        React.createElement(Div, { className: "bg-black/20 dark:bg-white/20 flex flex-row justify-between rounded-md p-2 my-2" }, contextSelection ? (React.createElement(React.Fragment, null,
            React.createElement(P, null, contextSelection),
            React.createElement(ClickableIcon, { emoji: "\u274C", onClick: function () { return reset(); } }))) : (React.createElement(P, null, "Please select a piece of text first"))),
        contextSelection ? (React.createElement(Div, { className: "flex flex-row flex-wrap" },
            selectionItems
                .filter(function (selectionItem) { return selectionItem.isEnabled; })
                .map(function (item, index) {
                return (React.createElement(NavButton, { title: item.title, onClick: item.onClick, key: "sele".concat(index) }));
            }), selectionContextualPrompts === null || selectionContextualPrompts === void 0 ? void 0 :
            selectionContextualPrompts.map(function (prompt) {
                return (React.createElement(PromptButton, { key: "selectPrompt".concat(prompt.id), item: prompt, contextSelection: contextSelection, markdown: contentString, projectRelativeFilePath: projectRelativeFilePath }));
            }))) : null));
};
//# sourceMappingURL=SelectionPrompts.js.map