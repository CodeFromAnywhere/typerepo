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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAIChat = void 0;
var puppeteer_utils_1 = require("puppeteer-utils");
var chatGPTAuth_1 = require("./chatGPTAuth");
var detectChatGptPage_1 = require("./detectChatGptPage");
var html_to_md_1 = __importDefault(require("html-to-md"));
/**
 * Send the propt to chatgpt and return the chatgpt response
 */
var openAIChat = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var prompt, thread, isHeadless, _a, page, pageId, sendMessageButton, isTextAreaExist, pageType, authResponse, result, finalResult;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                prompt = props.prompt, thread = props.thread, isHeadless = props.isHeadless;
                console.log("openAIChat Called", props);
                return [4 /*yield*/, (0, puppeteer_utils_1.openPage)(thread)];
            case 1:
                _a = _b.sent(), page = _a.page, pageId = _a.pageId;
                if (!page)
                    return [2 /*return*/, { isSuccess: false, result: "Faild to create page." }];
                if (!(thread !== pageId)) return [3 /*break*/, 3];
                return [4 /*yield*/, page.goto("https://chat.openai.com/chat", {
                        waitUntil: "domcontentloaded",
                    })];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3: return [4 /*yield*/, page.$('button[class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"]')];
            case 4:
                sendMessageButton = _b.sent();
                return [4 /*yield*/, page.$("textarea")];
            case 5:
                isTextAreaExist = _b.sent();
                if (!(!isTextAreaExist || !sendMessageButton)) return [3 /*break*/, 9];
                return [4 /*yield*/, (0, detectChatGptPage_1.detectChatGptPage)(page)];
            case 6:
                pageType = _b.sent();
                console.log({ pageType: pageType });
                if (!(pageType === "Login")) return [3 /*break*/, 9];
                return [4 /*yield*/, (0, chatGPTAuth_1.chatGPTAuth)(page)];
            case 7:
                authResponse = _b.sent();
                console.log({ authResponse: authResponse });
                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5000); })];
            case 8:
                _b.sent();
                _b.label = 9;
            case 9: 
            // Wating and typing the prompt in the textarea field
            return [4 /*yield*/, page.waitForSelector("textarea", { timeout: 60000 })];
            case 10:
                // Wating and typing the prompt in the textarea field
                _b.sent();
                return [4 /*yield*/, page.waitForSelector('button[class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"]', { timeout: 60000 })];
            case 11:
                _b.sent();
                return [4 /*yield*/, page.$('button[class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"]')];
            case 12:
                sendMessageButton = _b.sent();
                return [4 /*yield*/, page.$("textarea")];
            case 13:
                isTextAreaExist = _b.sent();
                console.log({ isTextAreaExist: isTextAreaExist, sendMessageButton: sendMessageButton });
                if (!(isTextAreaExist && sendMessageButton)) return [3 /*break*/, 17];
                console.log("inside of set value");
                return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    console.log("inside promise");
                                    _a = resolve;
                                    return [4 /*yield*/, page.evaluate(function (evPrompt) {
                                            var promtTextAreaField = document.getElementsByTagName("textarea");
                                            console.log({ promtTextAreaField: promtTextAreaField });
                                            if (promtTextAreaField[0]) {
                                                //@ts-ignore
                                                promtTextAreaField[0].focus();
                                                promtTextAreaField[0].click();
                                                promtTextAreaField[0].value = evPrompt;
                                                var button = document.querySelector('button[class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"]');
                                                //@ts-ignore
                                                button === null || button === void 0 ? void 0 : button.click();
                                                return true;
                                            }
                                            console.log("TEXT AREA NOT FOUND");
                                        }, prompt)];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 14:
                _b.sent();
                // Waiting for re-appear send message button that show current prompt is completed
                return [4 /*yield*/, page.waitForSelector('button[class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"]', { timeout: 300000 })];
            case 15:
                // Waiting for re-appear send message button that show current prompt is completed
                _b.sent();
                console.log("ANSWER IS COMPLETED");
                return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = resolve;
                                    return [4 /*yield*/, page.evaluate(function () {
                                            // document.title = "bhagya 1234";
                                            var allAnswer = document.querySelectorAll('div[class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]"]');
                                            console.log({ allAnswer: allAnswer });
                                            var lastAnswer = "";
                                            if (allAnswer.length > 0) {
                                                lastAnswer = allAnswer[allAnswer.length - 1].outerHTML;
                                                console.log({ lastAnswer: lastAnswer });
                                            }
                                            return lastAnswer;
                                        })];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 16:
                result = _b.sent();
                if (!result) {
                    return [2 /*return*/, { isSuccess: false, result: "Empty result found" }];
                }
                finalResult = (0, html_to_md_1.default)(result);
                return [2 /*return*/, {
                        isSuccess: true,
                        result: finalResult,
                        thread: pageId,
                    }];
            case 17: return [2 /*return*/, { isSuccess: false, result: "Text area not found", thread: thread }];
        }
    });
}); };
exports.openAIChat = openAIChat;
//# sourceMappingURL=openAIChat.js.map