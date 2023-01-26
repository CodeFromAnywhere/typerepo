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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkQueue = exports.MAX_REGULAR_ITEMS_AMOUNT = void 0;
var database_1 = require("database");
var one_by_one_1 = require("one-by-one");
var is_online_1 = require("is-online");
var is_system_busy_1 = require("is-system-busy");
var sdk_api_1 = require("sdk-api");
var js_util_1 = require("js-util");
exports.MAX_REGULAR_ITEMS_AMOUNT = 300;
/**
---
runEveryPeriod: minute
---


Cron that runs every minute for executing queue items.

Regular items: It will execute max `MAX_REGULAR_ITEMS_AMOUNT`

Browser items: You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.

Heavy items: functions with `.isHeavy: true` inside. Will execute max 1 every minute if the system isn't busy already.

- sort on priority high first
- filter out internet items if we are offline
- find single heavy item if it's there and if we're not busy
- find up to N (amount tabs available) queue items that require browser


 */
var checkQueue = function () { return __awaiter(void 0, void 0, void 0, function () {
    var isOffline, isBusy, startTime, allQueueItems, regularQueueItems, heavyItems, idlePages, browserQueueItems, browserRunnableNowAmount, browserItemsToExecute, queueItemsToExecute, lateQueueItemsToNotify;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, is_online_1.isOnline)()];
            case 1:
                isOffline = !(_a.sent());
                return [4 /*yield*/, (0, is_system_busy_1.isSystemBusy)()];
            case 2:
                isBusy = _a.sent();
                startTime = Date.now();
                return [4 /*yield*/, database_1.db.get("Queue")];
            case 3:
                allQueueItems = (_a.sent()).sort(function (a, b) {
                    return a.priority === "high" ? 1 : -1;
                });
                regularQueueItems = allQueueItems
                    .filter(function (x) {
                    var _a, _b, _c;
                    var fn = sdk_api_1.sdk[x.functionName];
                    if (isOffline && ((_a = fn === null || fn === void 0 ? void 0 : fn.config) === null || _a === void 0 ? void 0 : _a.isInternetRequired)) {
                        return false;
                    }
                    if (((_b = fn === null || fn === void 0 ? void 0 : fn.config) === null || _b === void 0 ? void 0 : _b.isHeavy) || ((_c = fn === null || fn === void 0 ? void 0 : fn.config) === null || _c === void 0 ? void 0 : _c.isBrowserRequired)) {
                        return false;
                    }
                    return true;
                })
                    .slice(0, exports.MAX_REGULAR_ITEMS_AMOUNT);
                heavyItems = isBusy
                    ? []
                    : allQueueItems.filter(function (x) {
                        var _a, _b;
                        var fn = sdk_api_1.sdk[x.functionName];
                        return (((_a = fn === null || fn === void 0 ? void 0 : fn.config) === null || _a === void 0 ? void 0 : _a.isHeavy) && (!isOffline || !((_b = fn === null || fn === void 0 ? void 0 : fn.config) === null || _b === void 0 ? void 0 : _b.isBrowserRequired)));
                    });
                return [4 /*yield*/, database_1.db.get("BrowserPage")];
            case 4:
                idlePages = (_a.sent()).filter(function (p) { return p.isIdle; });
                browserQueueItems = allQueueItems.filter(function (x) {
                    var _a, _b;
                    var fn = sdk_api_1.sdk[x.functionName];
                    return (((_a = fn === null || fn === void 0 ? void 0 : fn.config) === null || _a === void 0 ? void 0 : _a.isBrowserRequired) &&
                        (!isOffline || !((_b = fn === null || fn === void 0 ? void 0 : fn.config) === null || _b === void 0 ? void 0 : _b.isBrowserRequired)));
                });
                browserRunnableNowAmount = 1;
                browserItemsToExecute = browserQueueItems.slice(0, browserRunnableNowAmount);
                queueItemsToExecute = __spreadArray(__spreadArray(__spreadArray([], heavyItems, true), browserItemsToExecute, true), regularQueueItems, true).filter(js_util_1.notEmpty);
                if (queueItemsToExecute.length === 0) {
                    console.log("Checking queue: No queue", {
                        isBusy: isBusy,
                        isOffline: isOffline,
                        allQueueItems: allQueueItems.length,
                    });
                    return [2 /*return*/];
                }
                lateQueueItemsToNotify = allQueueItems.filter(function (x) {
                    return x.notifyLateAfterSeconds &&
                        Date.now() - x.createdAt > x.notifyLateAfterSeconds * 1000 &&
                        !x.hasNotifiedLate;
                });
                // 1. check how many chrome tabs are available (according to OS settings / memory limit)
                if (browserRunnableNowAmount < lateQueueItemsToNotify.length) {
                    //email the ones that won't be executed
                    console.log({
                        browserRunnableNowAmount: browserRunnableNowAmount,
                        lateQueueItemsToNotify: lateQueueItemsToNotify.length,
                    }, "SHOULD EMAIL SOME THAT CAN'T BE EXECUTED AND PUT THEM ON NOTIFIED WITH ETA");
                }
                // 2. check how many queue items can be executed now, and sort by importancy
                // NB: limit to 1 for now to test if that works
                console.log("NOT Executing ".concat(queueItemsToExecute.length, " from queue, one by one"));
                // 3. take the ones that are most important and execute those, only for a minute!
                return [2 /*return*/];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.checkQueue = checkQueue;
//# sourceMappingURL=checkQueue.js.map