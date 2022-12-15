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
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatgptLogin = void 0;
var puppeteer_utils_1 = require("puppeteer-utils");
var chatgptLogin = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var pageUrl, isSecurePageApear, isCaptchaExistRes, isLoginPageApear, usernameInput, captchas, captchaSolveResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Chatgpt login chandler called");
                return [4 /*yield*/, page.goto("https://chat.openai.com/auth/login", {
                        waitUntil: "domcontentloaded",
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, page.url()];
            case 2:
                pageUrl = _a.sent();
                console.log({ pageUrl: pageUrl });
                return [4 /*yield*/, page.$x("//h2[contains(., 'Checking if the site connection is secure')]")];
            case 3:
                isSecurePageApear = _a.sent();
                if (!isSecurePageApear) return [3 /*break*/, 6];
                console.log("Need to captcha solution");
                return [4 /*yield*/, (0, puppeteer_utils_1.isCaptchaExist)(page)];
            case 4:
                isCaptchaExistRes = _a.sent();
                console.log({ isCaptchaExistRes: isCaptchaExistRes });
                return [4 /*yield*/, page.waitForSelector('button[class="btn flex justify-center gap-2 btn-primary"]')];
            case 5:
                _a.sent();
                console.log('"Login button appear');
                _a.label = 6;
            case 6: return [4 /*yield*/, page.$x("//button[contains(., 'Log in')]")];
            case 7:
                isLoginPageApear = _a.sent();
                if (!Boolean(isLoginPageApear[0])) return [3 /*break*/, 22];
                console.log("LOGIN PAGE DETECTED");
                //@ts-ignore
                isLoginPageApear[0].click();
                return [4 /*yield*/, page.waitForNavigation({ waitUntil: "domcontentloaded" })];
            case 8:
                _a.sent();
                return [4 /*yield*/, page.waitForSelector('input[id="username"]')];
            case 9:
                _a.sent();
                return [4 /*yield*/, page.$('input[id="username"]')];
            case 10:
                usernameInput = _a.sent();
                if (!usernameInput) return [3 /*break*/, 12];
                //@ts-ignore
                usernameInput.click();
                //@ts-ignore
                return [4 /*yield*/, page.keyboard.type("bhagyasah4u@gmail.com")];
            case 11:
                //@ts-ignore
                _a.sent();
                _a.label = 12;
            case 12: return [4 /*yield*/, (0, puppeteer_utils_1.isCaptchaExist)(page)];
            case 13:
                captchas = (_a.sent()).captchas;
                if (!(captchas.length > 0)) return [3 /*break*/, 22];
                console.log("CAPTDCHA DETECTED");
                return [4 /*yield*/, (0, puppeteer_utils_1.solveReptcha)(page)];
            case 14:
                captchaSolveResponse = _a.sent();
                console.log({
                    captchaSolveResponse: JSON.stringify(captchaSolveResponse),
                });
                if (!!captchaSolveResponse.error) return [3 /*break*/, 22];
                return [4 /*yield*/, page.waitForSelector('button[type="submit"]')];
            case 15:
                _a.sent();
                return [4 /*yield*/, page.click('button[type="submit"]')];
            case 16:
                _a.sent();
                return [4 /*yield*/, page.waitForSelector('input[name="password"]', {
                        timeout: 30000,
                    })];
            case 17:
                _a.sent();
                return [4 /*yield*/, page.focus('input[name="password"]')];
            case 18:
                _a.sent();
                return [4 /*yield*/, page.keyboard.type("openai@199201")];
            case 19:
                _a.sent();
                return [4 /*yield*/, page.waitForSelector('button[type="submit"]')];
            case 20:
                _a.sent();
                return [4 /*yield*/, page.click('button[type="submit"]')];
            case 21:
                _a.sent();
                page.waitForNavigation({ waitUntil: "domcontentloaded" });
                return [2 /*return*/, { isSuccessfull: true, message: "Login Succcessfull" }];
            case 22: return [2 /*return*/, { isSuccessfull: false, message: "Login faild" }];
        }
    });
}); };
exports.chatgptLogin = chatgptLogin;
//# sourceMappingURL=chatgptLogin.js.map