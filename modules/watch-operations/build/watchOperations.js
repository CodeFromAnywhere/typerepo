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
exports.watchOperations = void 0;
var watch_folders_1 = require("watch-folders");
var get_all_operation_source_paths_1 = require("get-all-operation-source-paths");
var log_1 = require("log");
var rebuild_operation_1 = require("rebuild-operation");
var fs_1 = __importDefault(require("fs"));
var graceful_fs_1 = __importDefault(require("graceful-fs"));
var path_1 = __importDefault(require("path"));
var general_1 = require("./general");
var get_path_1 = require("get-path");
/**
 * watches all operations and does much more
 */
var watchOperations = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, projectRoot, allOperationSourcePaths, watchFunction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                // NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
                graceful_fs_1.default.gracefulify(fs_1.default);
                return [4 /*yield*/, (0, get_all_operation_source_paths_1.getAllOperationSourcePaths)({
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 1:
                allOperationSourcePaths = _a.sent();
                (0, general_1.exitIfOperationsChange)(allOperationSourcePaths, projectRoot);
                if (!manualProjectRoot) {
                    (0, general_1.gitCommitAllCron)(projectRoot);
                }
                (0, log_1.log)("Hi, I'm \uD83D\uDC41 \uD83D\uDC41 Watching ".concat(allOperationSourcePaths.length, " operations at ").concat(projectRoot), { type: "success" });
                watchFunction = (0, watch_folders_1.pickWatcher)();
                watchFunction({
                    folders: allOperationSourcePaths,
                    debug: true,
                    onChange: function (_a) {
                        var eventType = _a.eventType, filePaths = _a.filePaths, operationBasePath = _a.operationBasePath;
                        return __awaiter(void 0, void 0, void 0, function () {
                            var filteredFilePaths;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (filePaths.length === 0) {
                                            return [2 /*return*/];
                                        }
                                        filteredFilePaths = filePaths.filter(function (x) { return !x.endsWith("/index.ts"); });
                                        if (filteredFilePaths.length === 0) {
                                            return [2 /*return*/];
                                        }
                                        (0, log_1.log)("OnChange triggered! ".concat(filePaths
                                            .map(function (f) { return path_1.default.parse(f).name; })
                                            .join(",")), {
                                            type: "warning",
                                        });
                                        return [4 /*yield*/, (0, rebuild_operation_1.rebuildOperation)({
                                                operationBasePath: operationBasePath,
                                                operationManualProjectRoot: manualProjectRoot,
                                                typerepoManualProjectRoot: undefined,
                                                filePaths: filteredFilePaths,
                                            })];
                                    case 1:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
exports.watchOperations = watchOperations;
//# sourceMappingURL=watchOperations.js.map