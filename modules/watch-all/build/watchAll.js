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
/**
 * 👁 👁 Finds all watchers within typerepo and ensures they all start watching their watch
 */
var watchAll = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, tsFunctions, projectWatcherTsFunctions, projectWatchers, startupWaitMs, startTimeAt;
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
                (0, log_1.log)("".concat(projectWatchers.length, " watchers gonna watch ").concat(projectRoot), {
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
                (0, chokidar_1.watch)(projectRoot, {
                    ignoreInitial: true,
                    ignored: (config === null || config === void 0 ? void 0 : config.customIgnored) || [
                        "**/node_modules/**",
                        "**/.next/**",
                        "**/.expo/**",
                        // "**/build/**", // build change detection is needed for SDK generation
                        "**/db/**",
                        "**/.git/**",
                        "**/.turbo/**",
                        "**/generated/**",
                    ],
                    // alwaysStat: true, // not sure why I would need this, seems inefficient if I don't need it, I can simply run fs.stat
                }).on("all", function (eventName, path, stats) {
                    if (Date.now() < startTimeAt + startupWaitMs)
                        return;
                    var relevantWatchers = projectWatchers.filter(function (watcher) {
                        return watcher.filter(eventName, path);
                    });
                    (0, one_by_one_1.oneByOne)(relevantWatchers, function (projectWatcher) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, projectWatcher(eventName, path)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
        }
    });
}); };
exports.watchAll = watchAll;
//# sourceMappingURL=watchAll.js.map