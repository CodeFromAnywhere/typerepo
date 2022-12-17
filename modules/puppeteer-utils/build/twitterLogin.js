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
exports.twitterLogin = void 0;
var typeInTheInputField_1 = require("./typeInTheInputField");
/**
 * Method that help to login into twitter
 */
var twitterLogin = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var page, email, phoneNo, password;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                page = props.page, email = props.email, phoneNo = props.phoneNo, password = props.password;
                return [4 /*yield*/, page.goto("https://twitter.com/login")];
            case 1:
                _a.sent();
                // Adding listener for console
                page.on("console", function (message) { return console.log("".concat(message.text())); });
                // wait for username input field to appear
                return [4 /*yield*/, (0, typeInTheInputField_1.typeInTheInputField)({
                        page: page,
                        selector: 'input[autocomplete="username"]',
                        value: phoneNo,
                    })];
            case 2:
                // wait for username input field to appear
                _a.sent();
                // clicking next button
                return [4 /*yield*/, page.click('div[class="css-18t94o4 css-1dbjc4n r-sdzlij r-1phboty r-rs99b7 r-ywje51 r-usiww2 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr r-13qz1uu"]')];
            case 3:
                // clicking next button
                _a.sent();
                // wait for the password field to appear
                return [4 /*yield*/, (0, typeInTheInputField_1.typeInTheInputField)({
                        page: page,
                        selector: 'input[autocomplete="current-password"]',
                        value: password,
                    })];
            case 4:
                // wait for the password field to appear
                _a.sent();
                // waiting and clicking on the login button
                return [4 /*yield*/, page.waitForSelector('div[class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]')];
            case 5:
                // waiting and clicking on the login button
                _a.sent();
                return [4 /*yield*/, page.click('div[class="css-901oao r-1awozwy r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]')];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.twitterLogin = twitterLogin;
//# sourceMappingURL=twitterLogin.js.map