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
exports.watchFoldersChokidar = void 0;
// import { watch } from "fs";
var chokidar_1 = require("chokidar");
var fs_util_1 = require("fs-util");
var log_1 = require("log");
var pending = [];
var noPending = function () { return pending.length === 0; };
/**
 * checks if pending has items every 5 seconds, resolves after it hasnt
 *
 * this is a handy thing to have in util, but it can also probably be much more simple
 */
var isStillPending = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (noPending())
                    return [2 /*return*/, false];
                //
                console.log("awaiting pending", pending);
                //
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        // do this every 5 seconds
                        setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (noPending()) {
                                    resolve();
                                }
                                else {
                                    //console.log(`still pending`, pending);
                                }
                                return [2 /*return*/];
                            });
                        }); }, 5000); //
                    })];
            case 1:
                //
                _a.sent(); //
                return [2 /*return*/];
        }
    });
}); };
/**
 * watches folder paths and executes a callback when something changes in one of them
 *
 * uses fs.watch
 * */
var watchFoldersChokidar = function (_a) {
    var _b = _a.debug, debug = _b === void 0 ? false : _b, folders = _a.folders, onChange = _a.onChange, takeLatest = _a.takeLatest;
    return __awaiter(void 0, void 0, void 0, function () {
        var startTime;
        return __generator(this, function (_c) {
            startTime = Date.now();
            folders.map(function (absoluteFolderPath) {
                (0, chokidar_1.watch)("".concat(absoluteFolderPath, "/*")).on("all", function (eventType, absolutePath) { return __awaiter(void 0, void 0, void 0, function () {
                    var stats, srcRelativeFilePath, alreadyPending, lastPending, time, basePath, operationBasePath, fullPath;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // NB: in the beginning , all folders/files are firing the "addDir" and "add" events, this hack prevents that this fires rebuilds for all folders.
                                if (Date.now() < startTime + 1000)
                                    return [2 /*return*/];
                                // NB: addDir should not be firing anything
                                if (eventType === "addDir")
                                    return [2 /*return*/];
                                return [4 /*yield*/, fs_util_1.fs.stat(absolutePath)];
                            case 1:
                                stats = _a.sent();
                                // NB: ensure that the path is not a directory
                                if (stats.isDirectory())
                                    return [2 /*return*/];
                                srcRelativeFilePath = absolutePath.substring(absoluteFolderPath.length + 1);
                                alreadyPending = pending.filter(function (x) { return x.filename === srcRelativeFilePath; });
                                lastPending = alreadyPending.pop();
                                // if a file was just triggered and within a second triggered again, ignore it
                                // same file within a second
                                if (lastPending && Date.now() - lastPending.time < 5000) {
                                    (0, log_1.log)("double trigger of ".concat(srcRelativeFilePath, ", ignoring"), {
                                        type: "warning",
                                    });
                                    return [2 /*return*/];
                                }
                                if (alreadyPending.length > 0) {
                                    (0, log_1.log)("multiple pending of this file, ignoring", { type: "warning" });
                                    return [2 /*return*/];
                                }
                                time = Date.now();
                                pending.push({ filename: srcRelativeFilePath, time: time });
                                basePath = absoluteFolderPath;
                                operationBasePath = fs_util_1.path.join(basePath, "..");
                                fullPath = fs_util_1.path.join(absoluteFolderPath, srcRelativeFilePath);
                                // TODO: Somehow, it would be great if we could batch changes from multiple files together, so it will execute after there are no changes for more than 30 seconds (or if you press the 'e' button). This will make it more efficient.
                                return [4 /*yield*/, onChange({
                                        operationBasePath: operationBasePath,
                                        eventType: "change",
                                        filePaths: [fullPath],
                                    })];
                            case 2:
                                // TODO: Somehow, it would be great if we could batch changes from multiple files together, so it will execute after there are no changes for more than 30 seconds (or if you press the 'e' button). This will make it more efficient.
                                _a.sent();
                                // after it's done, remove from the array
                                pending = pending.filter(function (p) { return p.filename === absolutePath && p.time === time; });
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
            return [2 /*return*/];
        });
    });
};
exports.watchFoldersChokidar = watchFoldersChokidar;
//# sourceMappingURL=chokidar.js.map