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
exports.checkQueue = exports.processPromptOnFolder = exports.processPromptOnFile = void 0;
var sdk_api_1 = require("sdk-api");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var processChatGptPrompt_1 = require("./processChatGptPrompt");
var database_1 = require("database");
var k_explore_1 = require("k-explore");
var fs_util_js_1 = require("fs-util-js");
/**
 *
 * function `processPromptOnFile` to execute `processChatGptPrompt` for a file, so we don't need to store the whole file content and it can be executed later and still have the most recent file contents

 * In order to keep the file itself as a source of truth for its content, it's useful to have this because you can add this to the queue
 */
var processPromptOnFile = function (projectRelativeFilePath, contextualPromptSlug) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, absolutePath, exists, contextContent, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("called processPromptOnFile", {
                    projectRelativeFilePath: projectRelativeFilePath,
                    contextualPromptSlug: contextualPromptSlug,
                });
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { isSuccessful: false, message: "No projectroot" }];
                }
                absolutePath = fs_util_1.path.join(projectRoot, projectRelativeFilePath);
                exists = fs_util_1.fs.existsSync(absolutePath);
                if (!exists) {
                    return [2 /*return*/, { isSuccessful: false, message: "File doesn't exist" }];
                }
                return [4 /*yield*/, fs_util_1.fs.readFile(absolutePath, "utf8")];
            case 1:
                contextContent = _a.sent();
                return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                        contextContent: contextContent,
                        contextualPromptSlug: contextualPromptSlug,
                        isDeferred: true,
                        prompt_projectRelativePath: projectRelativeFilePath,
                    })];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.processPromptOnFile = processPromptOnFile;
/**
 * function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.
 */
var processPromptOnFolder = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRelativeFolderPath, promptSlug, extension, isRecursive, projectRoot, absoluteFolderPath, exists, stats, projectRelativeFilePaths, queueItems, upsertResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRelativeFolderPath = config.projectRelativeFolderPath, promptSlug = config.promptSlug, extension = config.extension, isRecursive = config.isRecursive;
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { isSuccessful: false, message: "No projectroot" }];
                }
                absoluteFolderPath = fs_util_1.path.join(projectRoot, projectRelativeFolderPath);
                exists = fs_util_1.fs.existsSync(absoluteFolderPath);
                if (!exists) {
                    return [2 /*return*/, { isSuccessful: false, message: "Folder not found" }];
                }
                return [4 /*yield*/, fs_util_1.fs.stat(absoluteFolderPath)];
            case 1:
                stats = _a.sent();
                if (!stats.isDirectory()) {
                    return [2 /*return*/, { isSuccessful: false, message: "That's not a folder" }];
                }
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        basePath: absoluteFolderPath,
                        doNotExploreChildFolders: !isRecursive,
                        extension: extension,
                        ignore: ".index",
                    })];
            case 2:
                projectRelativeFilePaths = (_a.sent()).map(function (x) { return (0, fs_util_js_1.makeRelative)(x.path, projectRoot); });
                queueItems = projectRelativeFilePaths.map(function (projectRelativeFilePath) {
                    return {
                        functionName: "processPromptOnFile",
                        parameters: [projectRelativeFilePath, promptSlug],
                        type: "puppeteer",
                    };
                });
                return [4 /*yield*/, database_1.db.upsert("Queue", queueItems)];
            case 3:
                upsertResult = _a.sent();
                return [2 /*return*/, {
                        isSuccessful: upsertResult.isSuccesful,
                        message: upsertResult.isSuccesful ? "Added to queue" : upsertResult.message,
                    }];
        }
    });
}); };
exports.processPromptOnFolder = processPromptOnFolder;
/**
 * ---
 * runEveryPeriod: minute
 * ---
 *
 * cron that runs every minute for executing new puppeteer queue items. It will open it as child process. You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.

 */
var checkQueue = function () { return __awaiter(void 0, void 0, void 0, function () {
    var queueItems, idlePages, queueItemsToExecute, removeResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("Queue")];
            case 1:
                queueItems = _a.sent();
                if (queueItems.length === 0)
                    return [2 /*return*/];
                return [4 /*yield*/, database_1.db.get("BrowserPage")];
            case 2:
                idlePages = (_a.sent()).filter(function (p) { return p.isIdle; });
                if (idlePages.length === 0)
                    return [2 /*return*/];
                queueItemsToExecute = queueItems.slice(0, 1);
                // NB: limit to 1 for now to test if that works
                // 3. take the ones that are most important and execute those
                return [4 /*yield*/, Promise.all(queueItemsToExecute.map(function (queue) { return __awaiter(void 0, void 0, void 0, function () {
                        var fn;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    fn = sdk_api_1.sdk[queue.functionName];
                                    if (!fn)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, fn.apply(void 0, queue.parameters)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 3:
                // NB: limit to 1 for now to test if that works
                // 3. take the ones that are most important and execute those
                _a.sent();
                return [4 /*yield*/, database_1.db.remove("Queue", function (item) {
                        return queueItemsToExecute.map(function (x) { return x.id; }).includes(item.id);
                    })];
            case 4:
                removeResult = _a.sent();
                console.log("executed", { removeResult: removeResult });
                return [2 /*return*/];
        }
    });
}); };
exports.checkQueue = checkQueue;
//# sourceMappingURL=queue-functions.js.map