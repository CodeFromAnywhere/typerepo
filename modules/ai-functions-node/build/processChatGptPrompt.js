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
exports.processChatGptPrompt = exports.controlChatGptWrapper = void 0;
var ai_types_1 = require("ai-types");
var fs_orm_1 = require("fs-orm");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var fs_util_js_1 = require("fs-util-js");
var chatgpt_controller_1 = require("chatgpt-controller");
var model_types_1 = require("model-types");
var controlChatGpt_1 = require("./controlChatGpt");
var getContextualPrompt_1 = require("./getContextualPrompt");
var getContextualPromptResultJsonFilePath_1 = require("./getContextualPromptResultJsonFilePath");
var controlChatGptWrapper = function (prompt, isHeadless, thread, controller) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!(controller === "playwright")) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, controlChatGpt_1.controlChatGpt)(prompt, isHeadless)];
            case 1:
                _a = _c.sent();
                return [3 /*break*/, 6];
            case 2:
                if (!(controller === "puppeteer")) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, chatgpt_controller_1.openAIChat)({ prompt: prompt, isHeadless: isHeadless, thread: thread })];
            case 3:
                _b = _c.sent();
                return [3 /*break*/, 5];
            case 4:
                _b = {
                    isSuccessful: true,
                    message: "Done test",
                    result: {
                        text: "Lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum",
                        thread: "",
                    },
                };
                _c.label = 5;
            case 5:
                _a = _b;
                _c.label = 6;
            case 6:
                result = _a;
                return [2 /*return*/, result];
        }
    });
}); };
exports.controlChatGptWrapper = controlChatGptWrapper;
var processChatGptPrompt = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var contextContent, contextualPromptSlug, customPromptContent, saveNewPromptWithName, prompt_projectRelativePath, selectionContent, isHeadless, isDeferred, thread, extension, contextType, projectRoot, prompt_absolutePath, exists, contextualPrompt, finalPrompt, useChatGpt, promiseResult, processPromptFunctionResult, _a, result;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                contextContent = config.contextContent, contextualPromptSlug = config.contextualPromptSlug, customPromptContent = config.customPromptContent, saveNewPromptWithName = config.saveNewPromptWithName, prompt_projectRelativePath = config.prompt_projectRelativePath, selectionContent = config.selectionContent, isHeadless = config.isHeadless, isDeferred = config.isDeferred, thread = config.thread;
                extension = prompt_projectRelativePath
                    ? fs_util_1.path.parse(prompt_projectRelativePath).ext.slice(1)
                    : undefined;
                contextType = ai_types_1.fileTypePerExtension[extension];
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, { isSuccessful: false, message: "no projectroot" }];
                prompt_absolutePath = prompt_projectRelativePath
                    ? fs_util_1.path.join(projectRoot, prompt_projectRelativePath)
                    : undefined;
                exists = prompt_absolutePath
                    ? fs_util_1.fs.existsSync(prompt_absolutePath)
                    : undefined;
                if (prompt_absolutePath && !exists) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "You gave a path that doesn't exist:".concat(prompt_absolutePath),
                        }];
                }
                return [4 /*yield*/, (0, getContextualPrompt_1.getContextualPrompt)(contextualPromptSlug, customPromptContent, saveNewPromptWithName || null, contextType)];
            case 1:
                contextualPrompt = _c.sent();
                if (!contextualPrompt) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Couldn't create or find a contextual prompt",
                        }];
                }
                finalPrompt = __assign({}, contextualPrompt).promptContent
                    .replaceAll("%context", contextContent || "")
                    .replaceAll("%selection", selectionContent || "")
                    .replaceAll("%any", selectionContent || contextContent || "");
                useChatGpt = true;
                promiseResult = (0, exports.controlChatGptWrapper)(finalPrompt, isHeadless, thread, "puppeteer").then(function (promptFunctionResult) { return __awaiter(void 0, void 0, void 0, function () {
                    var newResult, contextualPromptResultsJsonPath, upsertResult, _a;
                    var _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                newResult = {
                                    createdAt: Date.now(),
                                    updatedAt: Date.now(),
                                    createdFirstAt: Date.now(),
                                    deletedAt: 0,
                                    id: (0, model_types_1.generateId)(),
                                    resultAssets: [],
                                    resultText: (_b = promptFunctionResult.result) === null || _b === void 0 ? void 0 : _b.text,
                                    prompt: finalPrompt,
                                    selectionString: selectionContent || undefined,
                                    prompt_projectRelativePath: prompt_projectRelativePath,
                                    thread: (_c = promptFunctionResult.result) === null || _c === void 0 ? void 0 : _c.thread,
                                    contextualPromptSlug: contextualPrompt.slug,
                                    isFake: !useChatGpt,
                                };
                                return [4 /*yield*/, (0, getContextualPromptResultJsonFilePath_1.getContextualPromptResultJsonFilePath)(prompt_projectRelativePath)];
                            case 1:
                                contextualPromptResultsJsonPath = _d.sent();
                                if (!contextualPromptResultsJsonPath) return [3 /*break*/, 3];
                                return [4 /*yield*/, (0, fs_orm_1.alterJsonMultiple)({
                                        absolutePath: contextualPromptResultsJsonPath,
                                        modelName: "ContextualPromptResult",
                                        operationName: null,
                                        projectRelativePath: (0, fs_util_js_1.makeRelative)(contextualPromptResultsJsonPath, projectRoot),
                                    }, function (storedData) {
                                        var result = (0, fs_orm_1.upsert)(storedData, newResult);
                                        return result;
                                    })];
                            case 2:
                                _a = _d.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                _a = undefined;
                                _d.label = 4;
                            case 4:
                                upsertResult = _a;
                                return [2 /*return*/, {
                                        upsertResult: upsertResult,
                                        promptFunctionResult: promptFunctionResult === null || promptFunctionResult === void 0 ? void 0 : promptFunctionResult.result,
                                    }];
                        }
                    });
                }); });
                if (!isDeferred) return [3 /*break*/, 2];
                _a = undefined;
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, promiseResult];
            case 3:
                _a = _c.sent();
                _c.label = 4;
            case 4:
                processPromptFunctionResult = _a;
                result = isDeferred || !processPromptFunctionResult
                    ? undefined
                    : processPromptFunctionResult.promptFunctionResult;
                return [2 /*return*/, {
                        isSuccessful: isDeferred ? true : !!(result === null || result === void 0 ? void 0 : result.text) || false,
                        message: isDeferred
                            ? "Prompt is now being executed"
                            : ((_b = processPromptFunctionResult === null || processPromptFunctionResult === void 0 ? void 0 : processPromptFunctionResult.upsertResult) === null || _b === void 0 ? void 0 : _b.message) || "WentWrong",
                        result: result,
                    }];
        }
    });
}); };
exports.processChatGptPrompt = processChatGptPrompt;
//# sourceMappingURL=processChatGptPrompt.js.map