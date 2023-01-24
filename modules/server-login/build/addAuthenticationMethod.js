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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAuthenticationMethod = void 0;
var model_types_1 = require("model-types");
var sms_1 = require("sms");
var mail_1 = require("mail");
var encrypt_password_1 = require("encrypt-password");
var isPhoneNumber_1 = require("./validation/isPhoneNumber");
var isValidPassword_1 = require("./validation/isValidPassword");
var findAuthenticatedPersonWithHandle_1 = require("./findAuthenticatedPersonWithHandle");
/**
 * sends an email or sms, or already confirms in case of emailPassword
 *
 * core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`
 */
var addAuthenticationMethod = function (method, handle, 
/**
 * TODO: check if it's unique before sending an email.
 * This is needed in case you are a person trying to add a method, because then there might be another person with the same handle.
 */
shouldBeUnique, credential) { return __awaiter(void 0, void 0, void 0, function () {
    var isAuthenticationMethodUnavaiable, otp, text, authenticationMethod, mailResult, isAuthenticationMethodUnavaiablePerson, otp, body, authenticationMethod, smsResult, encryptedCredential, authenticationMethod;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(method === "email")) return [3 /*break*/, 4];
                // send email to `handle`
                if (!(0, model_types_1.isEmail)(handle)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please provide a correct email",
                        }];
                }
                if (!shouldBeUnique) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, findAuthenticatedPersonWithHandle_1.findAuthenticatedPersonWithHandle)(method, handle)];
            case 1:
                isAuthenticationMethodUnavaiable = _a.sent();
                if (isAuthenticationMethodUnavaiable) {
                    console.log({ isAuthenticationMethodUnavaiable: isAuthenticationMethodUnavaiable });
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "That email is already taken",
                        }];
                }
                _a.label = 2;
            case 2:
                otp = Math.round(100000 + Math.random() * 900000);
                text = "Please verify your email with this code: ".concat(otp, ". You have 10 minutes.");
                authenticationMethod = {
                    method: "email",
                    handle: handle,
                    isAuthenticated: false,
                    otp: otp,
                };
                return [4 /*yield*/, (0, mail_1.sendMail)({
                        to: handle,
                        subject: "Verify your email",
                        text: text,
                    })];
            case 3:
                mailResult = _a.sent();
                if (!mailResult) {
                    return [2 /*return*/, { isSuccessful: false, message: "Couldn't send email" }];
                }
                return [2 /*return*/, {
                        isSuccessful: true,
                        message: "Code sent, please verify.",
                        authenticationMethod: authenticationMethod,
                    }];
            case 4:
                if (!(method === "phoneNumber")) return [3 /*break*/, 8];
                // send sms to `handle`
                if (!(0, isPhoneNumber_1.isPhoneNumber)(handle)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Please provide a correct phone number",
                        }];
                }
                if (!shouldBeUnique) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, findAuthenticatedPersonWithHandle_1.findAuthenticatedPersonWithHandle)(method, handle)];
            case 5:
                isAuthenticationMethodUnavaiablePerson = _a.sent();
                if (isAuthenticationMethodUnavaiablePerson) {
                    console.log({ isAuthenticationMethodUnavaiablePerson: isAuthenticationMethodUnavaiablePerson });
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "That phone number is already taken",
                        }];
                }
                _a.label = 6;
            case 6:
                otp = Math.round(100000 + Math.random() * 900000);
                body = "Please verify your phone number with this code: ".concat(otp, ". You have 10 minutes.");
                authenticationMethod = {
                    method: "phoneNumber",
                    handle: handle,
                    isAuthenticated: false,
                    otp: otp,
                };
                return [4 /*yield*/, (0, sms_1.sendSms)({ to: handle, body: body })];
            case 7:
                smsResult = _a.sent();
                if (!smsResult) {
                    return [2 /*return*/, { isSuccessful: false, message: "Couldn't send sms" }];
                }
                return [2 /*return*/, {
                        isSuccessful: true,
                        message: "Code sent, please verify.",
                        authenticationMethod: authenticationMethod,
                    }];
            case 8:
                if (method === "usernamePassword") {
                    // add username and password to the authenticated methods
                    if (!credential || !(0, isValidPassword_1.isValidPassword)(credential)) {
                        return [2 /*return*/, {
                                isSuccessful: false,
                                message: "Please provide a valid password",
                            }];
                    }
                    encryptedCredential = (0, encrypt_password_1.encryptPassword)(credential);
                    authenticationMethod = {
                        method: "usernamePassword",
                        handle: handle,
                        encryptedCredential: encryptedCredential,
                        credential: credential,
                        isAuthenticated: true,
                    };
                    return [2 /*return*/, {
                            isSuccessful: true,
                            message: "Username/password has been set.",
                            authenticationMethod: authenticationMethod,
                        }];
                }
                return [2 /*return*/, { isSuccessful: false, message: "method not implemented yet" }];
        }
    });
}); };
exports.addAuthenticationMethod = addAuthenticationMethod;
//# sourceMappingURL=addAuthenticationMethod.js.map