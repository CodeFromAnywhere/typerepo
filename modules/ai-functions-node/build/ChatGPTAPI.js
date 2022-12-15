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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTAPI = void 0;
var delay_1 = __importDefault(require("delay"));
var html_to_md_1 = __importDefault(require("html-to-md"));
var playwright_1 = require("playwright");
var ChatGPTAPI = /** @class */ (function () {
    /**
     * @param opts.userDataDir — Path to a directory for storing persistent chromium session data
     * @param opts.chatUrl — OpenAI chat URL
     * @param opts.headless - Whether or not to use headless mode
     * @param opts.markdown — Whether or not to parse chat messages as markdown
     */
    function ChatGPTAPI(opts) {
        if (opts === void 0) { opts = {}; }
        var _a = opts.userDataDir, userDataDir = _a === void 0 ? "/tmp/chatgpt" : _a, _b = opts.chatUrl, chatUrl = _b === void 0 ? "https://chat.openai.com/" : _b, _c = opts.headless, headless = _c === void 0 ? false : _c, _d = opts.markdown, markdown = _d === void 0 ? true : _d;
        this._userDataDir = userDataDir;
        this._headless = !!headless;
        this._chatUrl = chatUrl;
        this._markdown = !!markdown;
    }
    ChatGPTAPI.prototype.init = function (opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, auth, _b, _c, modalSelector, err_1, isSignedIn;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = opts.auth, auth = _a === void 0 ? "eager" : _a;
                        _b = this;
                        return [4 /*yield*/, playwright_1.chromium
                                .launchPersistentContext(this._userDataDir, {
                                headless: this._headless,
                            })
                                .then(function (res) { return res; })
                                .catch(function (e) { return console.log(e); })];
                    case 1:
                        _b._browser = _d.sent();
                        if (!this._browser) {
                            console.log("WTF");
                            return [2 /*return*/];
                        }
                        _c = this;
                        return [4 /*yield*/, this._browser.newPage()];
                    case 2:
                        _c._page = _d.sent();
                        return [4 /*yield*/, this._page.goto(this._chatUrl)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        modalSelector = '[data-headlessui-state="open"]';
                        return [4 /*yield*/, this._page.$(modalSelector)];
                    case 5:
                        if (!(_d.sent())) {
                            return [3 /*break*/, 10];
                        }
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this._page.click("".concat(modalSelector, " button:last-child"), {
                                timeout: 1000,
                            })];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        err_1 = _d.sent();
                        // "next" button not found in welcome modal
                        return [3 /*break*/, 10];
                    case 9:
                        if (true) return [3 /*break*/, 4];
                        _d.label = 10;
                    case 10:
                        if (!(auth === "blocking")) return [3 /*break*/, 15];
                        _d.label = 11;
                    case 11: return [4 /*yield*/, this.getIsSignedIn()];
                    case 12:
                        isSignedIn = _d.sent();
                        if (isSignedIn) {
                            return [3 /*break*/, 15];
                        }
                        console.log("Please sign in to ChatGPT using the Chromium browser window and dismiss the welcome modal...");
                        return [4 /*yield*/, (0, delay_1.default)(1000)];
                    case 13:
                        _d.sent();
                        _d.label = 14;
                    case 14:
                        if (true) return [3 /*break*/, 11];
                        _d.label = 15;
                    case 15: return [2 /*return*/, this._page];
                }
            });
        });
    };
    ChatGPTAPI.prototype.getIsSignedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var inputBox, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._getInputBox()];
                    case 1:
                        inputBox = _a.sent();
                        return [2 /*return*/, !!inputBox];
                    case 2:
                        err_2 = _a.sent();
                        // can happen when navigating during login
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ChatGPTAPI.prototype.getLastMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMessages()];
                    case 1:
                        messages = _a.sent();
                        if (messages) {
                            return [2 /*return*/, messages[messages.length - 1]];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatGPTAPI.prototype.getPrompts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._page.$$('[class*="ConversationItem__Message"]:has([class*="ConversationItem__ActionButtons"]):has([class*="ConversationItem__Role"] [class*="Avatar__Wrapper"])')];
                    case 1:
                        messages = _a.sent();
                        // prompts are always plaintext
                        return [2 /*return*/, Promise.all(messages.map(function (a) { return a.innerText(); }))];
                }
            });
        });
    };
    ChatGPTAPI.prototype.getMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messages, htmlMessages, markdownMessages, plaintextMessages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._page.$$('[class*="ConversationItem__Message"]:has([class*="ConversationItem__ActionButtons"]):not(:has([class*="ConversationItem__Role"] [class*="Avatar__Wrapper"]))')];
                    case 1:
                        messages = _a.sent();
                        if (!this._markdown) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.all(messages.map(function (a) { return a.innerHTML(); }))];
                    case 2:
                        htmlMessages = _a.sent();
                        markdownMessages = htmlMessages.map(function (messageHtml) {
                            // parse markdown from message HTML
                            messageHtml = messageHtml.replace("Copy code</button>", "</button>");
                            return (0, html_to_md_1.default)(messageHtml, {
                                ignoreTags: [
                                    "button",
                                    "svg",
                                    "style",
                                    "form",
                                    "noscript",
                                    "script",
                                    "meta",
                                    "head",
                                ],
                                skipTags: ["button", "svg"],
                            });
                        });
                        return [2 /*return*/, markdownMessages];
                    case 3: return [4 /*yield*/, Promise.all(messages.map(function (a) { return a.innerText(); }))];
                    case 4:
                        plaintextMessages = _a.sent();
                        return [2 /*return*/, plaintextMessages];
                }
            });
        });
    };
    ChatGPTAPI.prototype.sendMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var inputBox, lastMessage, newLastMessage, isDifferentLastMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getInputBox()];
                    case 1:
                        inputBox = _a.sent();
                        if (!inputBox)
                            throw new Error("not signed in");
                        return [4 /*yield*/, this.getLastMessage()];
                    case 2:
                        lastMessage = _a.sent();
                        return [4 /*yield*/, inputBox.click({ force: true })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, inputBox.fill(message, { force: true })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, inputBox.press("Enter")];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, (0, delay_1.default)(1000)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.getLastMessage()];
                    case 8:
                        newLastMessage = _a.sent();
                        isDifferentLastMessage = (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.toLowerCase()) !== (newLastMessage === null || newLastMessage === void 0 ? void 0 : newLastMessage.toLowerCase());
                        // console.log({ newLastMessage, isDifferentLastMessage });
                        if (newLastMessage && isDifferentLastMessage) {
                            return [2 /*return*/, newLastMessage];
                        }
                        _a.label = 9;
                    case 9:
                        if (true) return [3 /*break*/, 6];
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ChatGPTAPI.prototype.close = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this._browser) === null || _a === void 0 ? void 0 : _a.close())];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ChatGPTAPI.prototype._getInputBox = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._page.$('div[class*="PromptTextarea__TextareaWrapper"] textarea')];
            });
        });
    };
    return ChatGPTAPI;
}());
exports.ChatGPTAPI = ChatGPTAPI;
//# sourceMappingURL=ChatGPTAPI.js.map