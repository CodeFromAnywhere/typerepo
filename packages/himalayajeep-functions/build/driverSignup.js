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
exports.driverSignup = void 0;
var database_1 = require("database");
var model_types_1 = require("model-types");
var server_login_1 = require("server-login");
/**
 * Driver signup
 */
var driverSignup = function (driverInfo) { return __awaiter(void 0, void 0, void 0, function () {
    var loginToken, email, name, phone, password, repeatPassword, encrypedPassword, allCurrentJeeps, foundEmailJeep, isEmailCorrect, foundPhoneJeep, isPhoneCorrect, data, config, upsertResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loginToken = (0, model_types_1.generateRandomString)(32);
                email = driverInfo.email, name = driverInfo.name, phone = driverInfo.phone, password = driverInfo.password, repeatPassword = driverInfo.repeatPassword;
                if (!name || name.length < 3) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "Please enter a name (at least 3 characters)",
                        }];
                }
                if (!email && !phone) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "Please enter a phone or email",
                        }];
                }
                if (phone && phone.length < 10) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "Please enter a correct phone number",
                        }];
                }
                if (email && !(0, model_types_1.isEmail)(email)) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "Please enter a correct email",
                        }];
                }
                if (password !== repeatPassword) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "Those passwords do not match",
                        }];
                }
                if (!password || !(0, server_login_1.isValidPassword)(password)) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "Please provide a safer password (min. 6 characters)",
                        }];
                }
                return [4 /*yield*/, (0, server_login_1.encryptPassword)(password)];
            case 1:
                encrypedPassword = _a.sent();
                return [4 /*yield*/, database_1.db.get("JeepType")];
            case 2:
                allCurrentJeeps = _a.sent();
                foundEmailJeep = allCurrentJeeps.find(function (jeep) { return jeep.email === email; });
                isEmailCorrect = !email || !foundEmailJeep;
                if (!isEmailCorrect) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "There is already a driver with that email. Please try logging in, or sign up with a different phone or email.",
                        }];
                }
                foundPhoneJeep = allCurrentJeeps.find(function (jeep) { return jeep.phone === phone; });
                isPhoneCorrect = !phone || !foundPhoneJeep;
                if (!isPhoneCorrect) {
                    return [2 /*return*/, {
                            isSuccesful: false,
                            message: "There is already a driver with that phone number. Please try logging in, or sign up with a different phone or email.",
                        }];
                }
                data = {
                    phone: phone,
                    name: name,
                    email: email,
                    note: "",
                    amountLuggageUnitsLeft: 0,
                    amountSeatsLeft: 0,
                    isVerified: false,
                    loginToken: loginToken,
                    encrypedPassword: encrypedPassword,
                };
                config = undefined;
                return [4 /*yield*/, database_1.db.upsert("JeepType", data, config)];
            case 3:
                upsertResult = _a.sent();
                if (upsertResult.isSuccesful === false) {
                    console.log({ upsertResult: upsertResult });
                    return [2 /*return*/, { isSuccesful: false, message: "Something went wrong" }];
                }
                return [2 /*return*/, {
                        isSuccesful: true,
                        message: "You have succesfully registered. Your account now needs to be verified before your jeep will appear on the app. Please hang on and drive safely.",
                    }];
        }
    });
}); };
exports.driverSignup = driverSignup;
//# sourceMappingURL=driverSignup.js.map