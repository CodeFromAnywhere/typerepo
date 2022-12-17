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
exports.findLoggedinPersonsWithContext = void 0;
var database_1 = require("database");
var encrypt_password_1 = require("encrypt-password");
/**
 * This finds all persons you should be logged in as according to all your device's Authentication Methods.
 *
 * Does not update your device to add the found persons.
 */
var findLoggedinPersonsWithContext = function (functionContext) { return __awaiter(void 0, void 0, void 0, function () {
    var device, allPersons, persons;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                device = functionContext.device;
                if (!device) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Couldn't find that device",
                        }];
                }
                return [4 /*yield*/, database_1.db.get("Person")];
            case 1:
                allPersons = _a.sent();
                persons = allPersons.filter(function (person) {
                    var _a;
                    var matchingMethods = person.authenticationMethods.filter(function (authenticationMethod) {
                        // NB: finds the method with the same handle and credential
                        var matchingMethod = device.authenticationMethods.find(function (method) {
                            var sameMethod = method.method === authenticationMethod.method;
                            var sameHandle = method.handle === authenticationMethod.handle;
                            var isCredentialCorrect = method.credential &&
                                authenticationMethod.encryptedCredential &&
                                (0, encrypt_password_1.comparePassword)(method.credential, authenticationMethod.encryptedCredential);
                            return sameMethod && sameHandle && isCredentialCorrect;
                        });
                        return !!matchingMethod;
                    });
                    var hasEnoughMethods = (person.amountAuthenticationMethodsRequired || 1) <=
                        matchingMethods.length;
                    var hasMissingMethod = !!((_a = person.requiredAuthenticationMethods) === null || _a === void 0 ? void 0 : _a.find(function (method) {
                        var isMethodMissing = !device.authenticationMethods.find(function (x) { return x.method === method; });
                        return isMethodMissing;
                    }));
                    if (hasEnoughMethods && !hasMissingMethod) {
                        // if you have authenticated with enough methods, and aren't missing a method
                        return true;
                    }
                    return false;
                });
                if (!persons || persons.length === 0) {
                    console.log({ methods: device.authenticationMethods });
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Couldn't find anyone with those credentials",
                        }];
                }
                return [2 /*return*/, { isSuccessful: true, persons: persons, message: "Found the persons" }];
        }
    });
}); };
exports.findLoggedinPersonsWithContext = findLoggedinPersonsWithContext;
//# sourceMappingURL=findLoggedInPersonsWithContext.js.map