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
exports.scheduleCronJobs = exports.scheduleObject = exports.executeCronFunction = void 0;
var one_by_one_1 = require("one-by-one");
var log_1 = require("log");
var sdk_api_1 = require("sdk-api");
var node_cron_1 = require("node-cron");
var js_util_1 = require("js-util");
var database_1 = require("database");
/**
 * NB: cron functions cannot have parameters
 */
var executeCronFunction = function (tsFunction) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        if (tsFunction.parameters &&
            tsFunction.parameters.length > 0 &&
            tsFunction.parameters.find(function (x) { return x.required; })) {
            (0, log_1.log)("CRON Functions cannot have required parameters", { type: "error" });
            process.exit();
        }
        //@ts-ignore
        (_a = sdk_api_1.sdk[tsFunction.name]) === null || _a === void 0 ? void 0 : _a.call(sdk_api_1.sdk);
        return [2 /*return*/];
    });
}); };
exports.executeCronFunction = executeCronFunction;
/**
 * For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`
 */
exports.scheduleObject = {
    minute: "* * * * *",
    "5-minutes": "0,5,10,15,20,25,30,35,40,45,50,55 * * * *",
    "quarter-hour": "0,15,30,45 * * * *",
    hour: "0 * * * *",
    "6-hours": "0 0,6,12,18 * * *",
    midnight: "0 0 * * *",
    week: "0 0 * * 1",
    month: "0 0 1 * *",
    "3-months": "0 0 1 1,4,7,10 *",
    year: "0 0 1 1 *",
};
var scheduleCronJobs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tsFunctions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("TsFunction")];
            case 1:
                tsFunctions = _a.sent();
                (0, log_1.log)("Scheduling CRON jobs", { type: "important" });
                (0, js_util_1.getObjectKeysArray)(exports.scheduleObject).map(function (interval) {
                    var cronExpression = exports.scheduleObject[interval];
                    var functionsToExecute = tsFunctions.filter(function (x) { return x.runEveryPeriod === interval; });
                    if (functionsToExecute.length > 0) {
                        console.log("- ".concat(functionsToExecute.length, " functions for ").concat(interval, " cron"));
                        (0, node_cron_1.schedule)(cronExpression, function () {
                            (0, one_by_one_1.oneByOne)(functionsToExecute, exports.executeCronFunction);
                        }, { name: interval });
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
exports.scheduleCronJobs = scheduleCronJobs;
//# sourceMappingURL=scheduleCronJobs.js.map