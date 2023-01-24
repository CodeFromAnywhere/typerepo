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
exports.toolFunctionWithContext = void 0;
var database_1 = require("database");
var sdk_api_1 = require("sdk-api");
var server_login_1 = require("server-login");
/**
 * Function to be executed straight from the frontend, where details is replaced with actual parameters of the function you want to execute.
 *
 * `.functionContext` and `.functionName` to be stripped out of the form
 */
var toolFunctionWithContext = function (functionContext, functionName, email, 
/**
 * Needed in this format because we need to show it nicely in the form (maybe not needed, try without also)
 */
details) { return __awaiter(void 0, void 0, void 0, function () {
    var fn, isNoTool, emailAdded, parameters, queueItem, upsertResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fn = sdk_api_1.sdk[functionName];
                isNoTool = !fn || typeof fn !== "function" || !fn.domain;
                if (isNoTool) {
                    return [2 /*return*/, { isSuccessful: false, message: "This is no tool" }];
                }
                return [4 /*yield*/, (0, server_login_1.addDeviceAuthenticationMethodWithContext)(functionContext, "email", email)];
            case 1:
                emailAdded = _a.sent();
                if (!emailAdded.isSuccessful) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Couldn't add your email to device",
                        }];
                }
                parameters = Object.values(details);
                queueItem = {
                    functionName: functionName,
                    parameters: parameters,
                    executionAuthToken: functionContext.authToken,
                    notifyLateAfterSeconds: 60,
                    shouldNotifyOnResult: true,
                };
                return [4 /*yield*/, database_1.db.upsert("Queue", queueItem)];
            case 2:
                upsertResult = _a.sent();
                return [2 /*return*/, {
                        isSuccessful: upsertResult.isSuccesful,
                        message: upsertResult.isSuccesful
                            ? "Check your mail in a moment"
                            : "Couldn't add to queue ".concat(upsertResult.message),
                    }];
        }
    });
}); };
exports.toolFunctionWithContext = toolFunctionWithContext;
exports.toolFunctionWithContext.isPublic = true;
//# sourceMappingURL=toolFunctionWithContext.js.map