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
exports.executeFunctionWithParameters = void 0;
// NB: uses SDK-api!
var sdk_api_1 = require("sdk-api");
var js_util_1 = require("js-util");
var db_recipes_1 = require("db-recipes");
var model_types_1 = require("model-types");
var getNewPerformance_1 = require("./getNewPerformance");
var getTsFunction_1 = require("./getTsFunction");
var storeFunctionExecution_1 = require("./storeFunctionExecution");
/**
steps for someone to use the API

1) auth
2) cache lookup
3) input validation
4) running function
5) store cache
6) store performance
7) returning result

TODO: make it possible to return result BEFORE storing cache and performance. we probably need to use the server.reply for this, which makes this function unusable in any other setting than an api, so let's make it optional
*/
var executeFunctionWithParameters = function (functionName, authToken, parameters, ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var executionId, performance, tsFunction, cacheLookupResult, validationResult, fn, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                executionId = (0, model_types_1.generateId)();
                performance = [];
                performance.push((0, getNewPerformance_1.getNewPerformance)("start", executionId, true));
                // 1) upsert device
                // const device = await upsertDevice(ctx);
                // if (false && !device) {
                //   return {
                //     isSuccessful: false,
                //     message: "Couldn't create device",
                //   };
                // }
                performance.push((0, getNewPerformance_1.getNewPerformance)("upsertDevice", executionId));
                return [4 /*yield*/, (0, getTsFunction_1.getTsFunction)(functionName)];
            case 1:
                tsFunction = _a.sent();
                if (!tsFunction) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "TsFunction file could not be found (".concat(functionName, ")"),
                        }];
                }
                performance.push((0, getNewPerformance_1.getNewPerformance)("getTsFunction", executionId));
                // const hasAuthorization = getHasAuthorization(device, tsFunction);
                // // 3) auth
                // if (false && !hasAuthorization) {
                //   return {
                //     isSuccessful: false,
                //     isUnauthorized: true,
                //     message:
                //       "You are not authorized to execute this function, you might need to login.",
                //   };
                // }
                performance.push((0, getNewPerformance_1.getNewPerformance)("auth", executionId));
                cacheLookupResult = (0, db_recipes_1.cacheLookup)(functionName, parameters);
                if (cacheLookupResult.hasValidCache) {
                    return [2 /*return*/, {
                            result: cacheLookupResult.result,
                            isSuccessful: true,
                            isCached: true,
                        }];
                }
                performance.push((0, getNewPerformance_1.getNewPerformance)("cacheLookup", executionId));
                validationResult = (0, db_recipes_1.validateInput)(functionName, parameters, tsFunction);
                if (!validationResult.isValid) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            errors: validationResult.errors,
                            message: "Your input has some errors",
                        }];
                }
                performance.push((0, getNewPerformance_1.getNewPerformance)("inputValidation", executionId));
                fn = sdk_api_1.sdk[functionName];
                if (typeof fn !== "function") {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Function not found",
                        }];
                }
                return [4 /*yield*/, fn.apply(void 0, parameters)];
            case 2:
                result = _a.sent();
                performance.push((0, getNewPerformance_1.getNewPerformance)("function", executionId));
                // 6) store performance
                (0, storeFunctionExecution_1.storeFunctionExecution)(tsFunction, parameters, result, performance.filter(js_util_1.notEmpty), false);
                if (result === undefined) {
                    return [2 /*return*/, {
                            isSuccessful: true,
                            isCached: false,
                            message: "Function was executed but did not give any response",
                            result: undefined,
                        }];
                }
                return [2 /*return*/, {
                        isSuccessful: true,
                        isCached: false,
                        result: result,
                    }];
        }
    });
}); };
exports.executeFunctionWithParameters = executeFunctionWithParameters;
//# sourceMappingURL=executeFunctionWithParameters.js.map