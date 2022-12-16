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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { api } from "api";
import { useContextMenu } from "context-menu";
import { useAlert } from "react-with-native-alert";
import { processPrompt } from "./processPrompt";
import { usePromptResultAlert } from "./usePromptResultAlert";
import { showStandardResponse } from "cool-toast";
import { Div, P } from "react-with-native";
import { useLastSelection } from "share";
/**
 * Provides the props needed to render a context-menu that allows you to add prompts and other things into your database. All actions require api access.
 */
export var useSelectionPromptsMenu = function (selectionPrompts, contextualContent) {
    var showPromptAlert = usePromptResultAlert();
    var contextSelection = useLastSelection();
    /**
     * TODO: also sort them here based on which selection you make (`.contextualContent.contextSelection`) and your settings (probably isFavorite first, but other sorting may be beneficial.
     */
    var promptItems = selectionPrompts.map(function (prompt) {
        var item = {
            onClick: function () {
                return processPrompt({
                    contextualPromptSlug: prompt.slug,
                    contextualContent: __assign(__assign({}, contextualContent), { contextSelection: contextSelection }),
                    showPromptAlert: showPromptAlert,
                });
            },
            getTitle: function () { return prompt.name || "Noname"; },
            // TODO: not sure if this is the right level, but eventually we want to filter based on the selection, maybe
            getIsEnabled: function () { return true; },
        };
        return item;
    });
    var alert = useAlert();
    var selectionWordCount = contextSelection
        ? contextSelection.split(" ").length
        : 0;
    var isStatement = selectionWordCount > 1;
    var isWord = selectionWordCount <= 4;
    var _a = useContextMenu({
        items: __spreadArray([
            {
                onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var apiResult;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!contextSelection) {
                                    alert === null || alert === void 0 ? void 0 : alert("Select a word", "You didn't select a word or word-combination (up to 4 words)");
                                    return [2 /*return*/];
                                }
                                return [4 /*yield*/, api.addWord(contextSelection, undefined)];
                            case 1:
                                apiResult = _a.sent();
                                showStandardResponse(apiResult);
                                return [2 /*return*/];
                        }
                    });
                }); },
                getTitle: function () { return "🧠 Add word"; },
                getIsEnabled: function () { return isWord; },
            },
            {
                onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var apiResult;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!contextSelection) {
                                    alert === null || alert === void 0 ? void 0 : alert("Select a statement", "You didn't select a statement (minimum 2 words)");
                                    return [2 /*return*/];
                                }
                                return [4 /*yield*/, api.addStatement(contextSelection, undefined, undefined)];
                            case 1:
                                apiResult = _a.sent();
                                showStandardResponse(apiResult);
                                return [2 /*return*/];
                        }
                    });
                }); },
                getTitle: function () { return "🧠 Add statement"; },
                getIsEnabled: function () { return isStatement; },
            },
            {
                getTitle: function () { return "🕊 Free-form prompt"; },
                getIsEnabled: function () { return true; },
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
                                customPromptContent = "I am reading this file:\n\n```\n".concat(contextualContent.contextContent, "\n```\n\nMore specifically, I'm looking at this part: \n\n```\n").concat(contextualContent.contextSelection, "\n```\n\n").concat(question);
                                return [4 /*yield*/, processPrompt({
                                        contextualContent: contextualContent,
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
                getTitle: function () { return "🎤 Speak"; },
                getIsEnabled: function () { return true; },
                onClick: function () {
                    alert === null || alert === void 0 ? void 0 : alert("Coming soon!", React.createElement(Div, null,
                        React.createElement(P, null, "This button should let you record your voice so you can ask a question through human speech. The speech will be converted into text by whisper, it will then choose an existing prompt action, or if it can't find that, do a free-form prompt."),
                        React.createElement(P, null, "P.S. Would be nice if this option is there by default, also for other menus, or it's even accessible via other ways, but this is a great way to try it out first.")));
                },
            }
        ], promptItems, true),
    }), renderContextMenu = _a.renderContextMenu, openContextMenuProps = _a.openContextMenuProps, onClose = _a.onClose, isOpen = _a.isOpen;
    // ensure the thing only updates if the menu opens
    var result = {
        renderContextMenu: renderContextMenu,
        openContextMenuProps: openContextMenuProps,
        onClose: onClose,
        isOpen: isOpen,
    };
    return result;
};
//# sourceMappingURL=useSelectionPromptsMenu.js.map