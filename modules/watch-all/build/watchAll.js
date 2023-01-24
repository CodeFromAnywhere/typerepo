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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchAll = void 0;
var chokidar_1 = require("chokidar");
var log_1 = require("log");
var fs_1 = __importDefault(require("fs"));
var graceful_fs_1 = __importDefault(require("graceful-fs"));
var get_path_1 = require("get-path");
var sdk_api_1 = require("sdk-api");
var database_1 = require("database");
var js_util_1 = require("js-util");
var one_by_one_1 = require("one-by-one");
var is_online_1 = require("is-online");
var fs_util_1 = require("fs-util");
var k_explore_1 = require("k-explore");
var is_system_busy_1 = require("is-system-busy");
/**
👁 👁 Finds all watchers within typerepo and ensures they all start watching their watch
 */
var watchAll = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, tsFunctions, projectWatcherTsFunctions, projectWatchers, startupWaitMs, startTimeAt, recordingsPath, ignored, projectRootFolders, basePath, startupFiles, queueItemsBefore, queueItems, newQueueItemsFinal, upsertResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                // NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
                graceful_fs_1.default.gracefulify(fs_1.default);
                console.log("Searching..."); //
                return [4 /*yield*/, database_1.db.get("TsFunction")];
            case 1:
                tsFunctions = _a.sent();
                projectWatcherTsFunctions = tsFunctions.filter(function (x) { return x.explicitTypeName === "ProjectWatcher"; });
                projectWatchers = projectWatcherTsFunctions
                    .map(function (x) { return x.name; })
                    .map(function (name) { return sdk_api_1.sdk[name]; })
                    .filter(js_util_1.notEmpty);
                (0, log_1.log)("".concat(projectWatchers.length, " watchers found to watch ").concat(projectRoot), {
                    type: "important",
                });
                startupWaitMs = 1000;
                setTimeout(function () {
                    (0, log_1.log)("There they are! \n\n".concat(projectWatchers
                        .map(function (projectWatcher) {
                        return "\uD83D\uDC41 \uD83D\uDC41 ".concat(projectWatcher.name, " \u2705");
                    })
                        .join("\n")), {
                        type: "success",
                    });
                }, startupWaitMs);
                startTimeAt = Date.now();
                recordingsPath = process.env.HOME
                    ? fs_util_1.path.resolve(process.env.HOME, "Library/Application Support/com.apple.voicememos/Recordings")
                    : undefined;
                ignored = (config === null || config === void 0 ? void 0 : config.customIgnored) || [
                    "**/node_modules/**",
                    "**/.next/**",
                    "**/.expo/**",
                    // "**/build/**", // build change detection is needed for SDK generation
                    "**/db/**",
                    "**/.git/**",
                    "**/.turbo/**",
                    "**/generated/**",
                ];
                projectRootFolders = [
                    "asset",
                    "docs",
                    "knowledge",
                    "operations",
                    "text",
                ].map(function (name) { return fs_util_1.path.join(projectRoot, name); });
                basePath = __spreadArray(__spreadArray([], projectRootFolders, true), [recordingsPath], false).filter(js_util_1.notEmpty);
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        basePath: basePath,
                        ignore: [
                            "node_modules",
                            ".next",
                            ".expo",
                            "db",
                            "public",
                            ".git",
                            ".turbo",
                            "generated",
                        ],
                    })];
            case 2:
                startupFiles = (_a.sent()).map(function (x) { return x.path; });
                console.log({ startupFiles: startupFiles.length });
                return [4 /*yield*/, database_1.db.get("Queue")];
            case 3:
                queueItemsBefore = _a.sent();
                return [4 /*yield*/, (0, one_by_one_1.oneByOne)(projectWatchers, function (watcher) { return __awaiter(void 0, void 0, void 0, function () {
                        var thisQueueItemFilePaths, realStartupFiles, newQueueItems;
                        return __generator(this, function (_a) {
                            if (watcher.startupStrategy === "ignore" || !watcher.startupStrategy) {
                                console.log("ignore ".concat(watcher.name));
                                return [2 /*return*/];
                            }
                            thisQueueItemFilePaths = queueItemsBefore
                                .filter(function (x) { return x.functionName === watcher.name; })
                                .map(function (x) { return x.parameters[1]; });
                            realStartupFiles = startupFiles
                                .filter(function (absolutePath) {
                                return watcher.filter("add", absolutePath);
                            })
                                .filter(function (x) { return !thisQueueItemFilePaths.includes(x); });
                            console.log({
                                watcher: watcher.name,
                                filesAlreadyInQueue: thisQueueItemFilePaths.length,
                                filesToBeAddedToQueue: realStartupFiles.length,
                            });
                            if (realStartupFiles.length === 0) {
                                return [2 /*return*/];
                            }
                            newQueueItems = realStartupFiles.map(function (absolutePath) {
                                var queue = {
                                    functionName: watcher.name,
                                    parameters: ["add", absolutePath, true],
                                };
                                return queue;
                            });
                            return [2 /*return*/, newQueueItems];
                        });
                    }); })];
            case 4:
                queueItems = _a.sent();
                newQueueItemsFinal = queueItems.filter(js_util_1.notEmpty).flat();
                return [4 /*yield*/, database_1.db.upsert("Queue", newQueueItemsFinal)];
            case 5:
                upsertResult = _a.sent();
                console.log({
                    queueUpsertResultInsertedAmount: upsertResult,
                    newQueueItemsFinal: newQueueItemsFinal.length,
                });
                (0, chokidar_1.watch)(basePath, {
                    ignoreInitial: true,
                    ignored: ignored,
                }).on("all", function (eventName, path) { return __awaiter(void 0, void 0, void 0, function () {
                    var isStartup, isOffline, isBusy, relevantWatchers;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                isStartup = Date.now() < startTimeAt + startupWaitMs;
                                if (isStartup) {
                                    return [2 /*return*/];
                                }
                                return [4 /*yield*/, (0, is_online_1.isOnline)()];
                            case 1:
                                isOffline = !(_a.sent());
                                return [4 /*yield*/, (0, is_system_busy_1.isSystemBusy)()];
                            case 2:
                                isBusy = _a.sent();
                                relevantWatchers = projectWatchers.filter(function (watcher) {
                                    var _a, _b;
                                    var isApplicableWatcher = watcher.filter(eventName, path);
                                    if (!isApplicableWatcher) {
                                        return false;
                                    }
                                    if (((_a = watcher.config) === null || _a === void 0 ? void 0 : _a.isInternetRequired) && isOffline) {
                                        // add to queue because busy
                                        database_1.db.upsert("Queue", {
                                            functionName: watcher.name,
                                            parameters: [eventName, path, false],
                                        });
                                        return false;
                                    }
                                    if (((_b = watcher.config) === null || _b === void 0 ? void 0 : _b.isHeavy) && isBusy) {
                                        // add to queue because busy
                                        database_1.db.upsert("Queue", {
                                            functionName: watcher.name,
                                            parameters: [eventName, path, false],
                                        });
                                        return false;
                                    }
                                    return true;
                                });
                                (0, one_by_one_1.oneByOne)(relevantWatchers, function (projectWatcher) { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("watchAll: executing ".concat(projectWatcher.name, " for ").concat(path));
                                                return [4 /*yield*/, projectWatcher(eventName, path, false)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); };
exports.watchAll = watchAll;
//# sourceMappingURL=watchAll.js.map