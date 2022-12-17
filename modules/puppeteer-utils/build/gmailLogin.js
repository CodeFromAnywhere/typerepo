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
exports.gmailLogin = void 0;
var setInputValue_1 = require("./setInputValue");
var clickOnSpanTag_1 = require("./clickOnSpanTag");
/* Helps to login into gmail account */
var gmailLogin = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var page, email, password;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = props.page, email = props.email, password = props.password;
                // setting email address
                return [4 /*yield*/, (0, setInputValue_1.setInputValue)({
                        page: page,
                        inputValue: email,
                        selector: "input[type=email]",
                    })];
            case 1:
                // setting email address
                _a.sent();
                // clicking on the next button after email input
                return [4 /*yield*/, (0, clickOnSpanTag_1.clickOnSpanTag)({ page: page, spanText: "Next" })];
            case 2:
                // clicking on the next button after email input
                _a.sent();
                return [4 /*yield*/, page.setBypassCSP(true)];
            case 3:
                _a.sent();
                // clicking on the next button after password input
                return [4 /*yield*/, page.waitForFunction("document.querySelector(\"body\").innerText.includes(\"Next\")")];
            case 4:
                // clicking on the next button after password input
                _a.sent();
                // waiting for the password field to load and set the password
                return [4 /*yield*/, (0, setInputValue_1.setInputValue)({
                        page: page,
                        inputValue: password,
                        selector: "input[type=password]",
                    })];
            case 5:
                // waiting for the password field to load and set the password
                _a.sent();
                // clicking next button after password entered
                return [4 /*yield*/, (0, clickOnSpanTag_1.clickOnSpanTag)({ page: page, spanText: "Next" })];
            case 6:
                // clicking next button after password entered
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.gmailLogin = gmailLogin;
//# sourceMappingURL=gmailLogin.js.map