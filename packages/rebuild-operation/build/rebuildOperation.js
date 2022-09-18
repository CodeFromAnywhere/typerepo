"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebuildOperation = void 0;
// node wrappers
var run_child_process_1 = require("run-child-process");
// monorepo
var log_1 = require("log");
var cleanup_typescript_database_1 = require("cleanup-typescript-database");
var database_1 = require("database");
var generate_index_1 = require("generate-index");
var js_util_1 = require("js-util");
var operation_util_1 = require("operation-util");
var markdown_parsings_1 = require("markdown-parsings");
var one_by_one_1 = require("one-by-one");
var get_package_source_paths_1 = require("get-package-source-paths");
var lint_1 = require("lint");
var get_path_1 = require("get-path");
var fs_util_1 = require("fs-util");
var filename_conventions_1 = require("filename-conventions");
// relative
var shouldSkip_1 = require("./shouldSkip");
var isOperationBuildNeeded_1 = require("./isOperationBuildNeeded");
var yarnBuild_1 = require("./yarnBuild");
var exitIfProcessDependenciesChange_1 = require("./exitIfProcessDependenciesChange");
var executeCommandQuietUnlessFail_1 = require("./executeCommandQuietUnlessFail");
var isSdkOperation_1 = require("./isSdkOperation");
/**
 * This function rebuilds an operation and re-indexes (part of) its files.
 */
var rebuildOperation = function (_a) {
    var operationBasePath = _a.operationBasePath, manualProjectRoot = _a.manualProjectRoot, filePaths = _a.filePaths, force = _a.force, debug = _a.debug, noExit = _a.noExit, _b = _a.stack, stack = _b === void 0 ? [] : _b, updatedAt = _a.updatedAt, noUnresolvedRebuilding = _a.noUnresolvedRebuilding;
    return __awaiter(void 0, void 0, void 0, function () {
        var operationName, stackPrefix, lintProblems, skip, result, imports, unresolvedModules, succeededArray, _c, _d, indexPath, isBuildNeeded, buildSucceeded, imports, dependantOperationNames, testableOperations, testPromises;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    operationName = (0, fs_util_1.getLastFolder)(operationBasePath);
                    if ((0, isSdkOperation_1.isSdkOperation)(operationBasePath) ||
                        (0, filename_conventions_1.isGeneratedOperation)(operationBasePath)) {
                        console.log("not going to rebuild sdk operation: ".concat(operationName));
                        return [2 /*return*/, false];
                    }
                    stackPrefix = "".concat(stack.map(function () { return "--"; }).join("")).concat(operationName, ": ");
                    (0, log_1.log)("".concat(stackPrefix, "Rebuilding").concat(stack.length > 0 ? "(coming from ".concat(stack.join(", "), ")") : ""), {
                        type: "important",
                    });
                    (0, log_1.log)("".concat(stackPrefix, "Pre-index lint"), { type: "important" });
                    return [4 /*yield*/, (0, lint_1.preIndexLint)({
                            operationFolderPath: operationBasePath,
                        })];
                case 1:
                    lintProblems = _e.sent();
                    if (!(lintProblems.length > 0)) return [3 /*break*/, 3];
                    (0, log_1.log)("".concat(stackPrefix, "Operation cannot be built, we've got problem(s)"), {
                        type: "warning",
                    });
                    (0, log_1.log)(lintProblems.join("\n"), { type: "warning" });
                    return [4 /*yield*/, database_1.db.update("OperationIndex", function () { return true; }, function (operationIndex) { return (__assign(__assign({}, operationIndex), { lintProblems: lintProblems })); }, { operationName: operationName })];
                case 2:
                    _e.sent();
                    return [2 /*return*/, false];
                case 3: return [4 /*yield*/, (0, shouldSkip_1.shouldSkip)({
                        operationBasePath: operationBasePath,
                        debug: debug,
                        force: force,
                        rebuildUpdatedAt: updatedAt,
                    })];
                case 4:
                    skip = _e.sent();
                    if (skip) {
                        (0, log_1.log)("Skipping ".concat(operationName));
                        return [2 /*return*/, true];
                    }
                    return [4 /*yield*/, (0, cleanup_typescript_database_1.cleanupTsDatabase)(operationName)];
                case 5:
                    result = _e.sent();
                    (0, log_1.log)((result === null || result === void 0 ? void 0 : result.amountRemoved)
                        ? "Removed ".concat(result === null || result === void 0 ? void 0 : result.amountRemoved, " ts db instances")
                        : "Nothing to clean up", { type: "success" });
                    (0, executeCommandQuietUnlessFail_1.executeCommandQuietUnlessFail)({
                        command: "yarn --offline",
                        cwd: operationBasePath,
                        description: "".concat(stackPrefix, "Installing"),
                    });
                    // 2a) finding imports/exports and writing them to index
                    // TODO: we can also just check if build folder and index.js exist before looking at the import statements. These are easy to detect and when that happens we don't need to do the things below.
                    (0, log_1.log)("".concat(stackPrefix, "Getting imports/exports"), { type: "important" });
                    return [4 /*yield*/, (0, run_child_process_1.runChildProcess)({
                            operationFolderName: "get-imports-exports",
                            scriptFileName: "findAndWriteImportsExports.cli",
                            args: manualProjectRoot
                                ? [operationBasePath, manualProjectRoot]
                                : [operationBasePath],
                        })];
                case 6:
                    _e.sent();
                    if (!(operationName !== "sdk")) return [3 /*break*/, 14];
                    return [4 /*yield*/, database_1.db.get("TsImport", {
                            operationName: operationName,
                            manualProjectRoot: manualProjectRoot,
                        })];
                case 7:
                    imports = _e.sent();
                    unresolvedModules = imports
                        .filter(function (x) { return x.isAbsolute && x.isModuleFromMonorepo && !x.isModuleResolved; })
                        .map(function (x) { return x.module; })
                        .filter(js_util_1.onlyUnique);
                    if (!(unresolvedModules.length > 0)) return [3 /*break*/, 13];
                    if (!noUnresolvedRebuilding) return [3 /*break*/, 9];
                    (0, log_1.log)("rebuilding the unresolved modules didn't work. Probably some indexation fails!", { type: "error" });
                    return [4 /*yield*/, database_1.db.update("OperationIndex", function () { return true; }, function (operationIndex) { return (__assign(__assign({}, operationIndex), { dependenciesBuildsFailed: true })); }, { operationName: operationName })];
                case 8:
                    _e.sent();
                    return [2 /*return*/, false];
                case 9:
                    (0, log_1.log)("".concat(stackPrefix, "We need to rebuild ").concat(unresolvedModules.length, " operations because they have conflicts (").concat(unresolvedModules.join(", "), ")"), { type: "warning" });
                    return [4 /*yield*/, (0, one_by_one_1.oneByOne)(unresolvedModules, function (unresolvedOperationName) { return __awaiter(void 0, void 0, void 0, function () {
                            var fullPath;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, (0, get_path_1.getOperationPath)(unresolvedOperationName, {
                                            manualProjectRoot: manualProjectRoot,
                                        })];
                                    case 1:
                                        fullPath = _a.sent();
                                        if (!fullPath) {
                                            (0, log_1.log)("".concat(stackPrefix).concat(unresolvedOperationName, " not found"), {
                                                type: "warning",
                                            });
                                            return [2 /*return*/, false];
                                        }
                                        if (unresolvedOperationName === operationName ||
                                            stack.includes(unresolvedOperationName)) {
                                            (0, log_1.log)("".concat(stackPrefix, "cyclic dep"), { type: "warning" });
                                            return [2 /*return*/, false];
                                        }
                                        console.log("".concat(stackPrefix, "diving into new rebuildOperation "), {
                                            operationName: operationName,
                                            stack: stack,
                                            unresolvedOperationName: unresolvedOperationName,
                                        });
                                        return [2 /*return*/, (0, exports.rebuildOperation)({
                                                manualProjectRoot: manualProjectRoot,
                                                operationBasePath: operationBasePath,
                                                stack: stack.concat([unresolvedOperationName]),
                                                debug: debug,
                                                // can't skip this one because it is a dependency
                                                // however, skipping is very well defined. we can skip if shouldSkip is true!
                                                // force: true,
                                                noExit: noExit,
                                            })];
                                }
                            });
                        }); })];
                case 10:
                    succeededArray = _e.sent();
                    if (!!(0, js_util_1.isAllTrue)(succeededArray)) return [3 /*break*/, 12];
                    (0, log_1.log)("".concat(stackPrefix, "something failed! returning"));
                    return [4 /*yield*/, database_1.db.update("OperationIndex", function () { return true; }, function (operationIndex) { return (__assign(__assign({}, operationIndex), { dependenciesBuildsFailed: true })); }, { operationName: operationName })];
                case 11:
                    _e.sent();
                    return [2 /*return*/, false];
                case 12:
                    (0, log_1.log)("".concat(stackPrefix, "rebuilding ourselves again"));
                    // NB: all files on purpose...
                    return [2 /*return*/, (0, exports.rebuildOperation)({
                            manualProjectRoot: manualProjectRoot,
                            operationBasePath: operationBasePath,
                            debug: debug,
                            force: force,
                            noExit: noExit,
                            noUnresolvedRebuilding: true,
                            stack: stack.concat([operationName]),
                        })];
                case 13:
                    (0, log_1.log)("".concat(stackPrefix, "all imports were resolved"));
                    _e.label = 14;
                case 14:
                    // 2b) compiling and writing build errors to index
                    (0, log_1.log)("".concat(stackPrefix, "writing build errors to index"), {
                        type: "important",
                    });
                    return [4 /*yield*/, (0, run_child_process_1.runChildProcess)({
                            operationFolderName: "compile-typescript",
                            scriptFileName: "writeBuildErrors.cli",
                            args: manualProjectRoot
                                ? [operationBasePath, manualProjectRoot]
                                : [operationBasePath],
                        })];
                case 15:
                    _e.sent();
                    if (!!filePaths) return [3 /*break*/, 18];
                    _d = (_c = Promise).all;
                    return [4 /*yield*/, (0, get_package_source_paths_1.getPackageSourcePaths)({
                            operationBasePath: operationBasePath,
                            ignoreIndexFiles: true,
                        })];
                case 16: return [4 /*yield*/, _d.apply(_c, [_e.sent()])];
                case 17:
                    //files from src
                    filePaths = (_e.sent()).filter(js_util_1.notEmpty);
                    _e.label = 18;
                case 18:
                    if (filePaths.length === 0) {
                        (0, log_1.log)("".concat(stackPrefix, "No files found for operation ").concat(operationName), {
                            type: "error",
                        });
                    }
                    else {
                        (0, log_1.log)("".concat(stackPrefix).concat(filePaths.length, " files to index:"), {
                            type: "important",
                        });
                    }
                    return [4 /*yield*/, (0, run_child_process_1.runChildProcess)({
                            operationFolderName: "index-typescript",
                            scriptFileName: "cli",
                            args: __spreadArray(__spreadArray([], filePaths, true), [manualProjectRoot || "null"], false),
                        })];
                case 19:
                    _e.sent();
                    return [4 /*yield*/, (0, generate_index_1.generateSimpleIndex)({
                            operationName: operationName,
                            manualProjectRoot: manualProjectRoot,
                        })];
                case 20:
                    indexPath = _e.sent();
                    isBuildNeeded = (0, isOperationBuildNeeded_1.isOperationBuildNeeded)(operationBasePath);
                    buildSucceeded = true;
                    if (!isBuildNeeded) return [3 /*break*/, 24];
                    return [4 /*yield*/, (0, yarnBuild_1.yarnBuild)(operationBasePath, {
                            rmFirst: false,
                        })];
                case 21:
                    buildSucceeded = _e.sent();
                    return [4 /*yield*/, database_1.db.get("TsImport", {
                            manualProjectRoot: manualProjectRoot,
                        })];
                case 22:
                    imports = _e.sent();
                    dependantOperationNames = imports
                        .filter(function (x) { return x.isModuleFromMonorepo && x.module === operationName; })
                        .map(function (x) { return x.operationName; })
                        .filter(js_util_1.onlyUnique)
                        .filter(js_util_1.notEmpty);
                    testableOperations = __spreadArray([operationName], dependantOperationNames, true);
                    testPromises = testableOperations.map(function (operationName) {
                        // NB: we need this to be a child process because it requires the tests from the index, and that file changes, while normally a require will be cached. We can't easily invalidate the cache because it can come from many files.
                        return (0, run_child_process_1.runChildProcess)({
                            operationFolderName: "k-test",
                            scriptFileName: "runTestsForOperation.cli",
                            args: manualProjectRoot
                                ? [operationName, manualProjectRoot]
                                : [operationName],
                        });
                    });
                    return [4 /*yield*/, Promise.all(testPromises)];
                case 23:
                    _e.sent();
                    _e.label = 24;
                case 24: return [4 /*yield*/, database_1.db.update("OperationIndex", function () { return true; }, function (operationIndex) { return (__assign(__assign({}, operationIndex), { buildSucceeded: buildSucceeded })); }, { operationName: operationName })];
                case 25:
                    _e.sent();
                    // make a readme of the new index
                    return [4 /*yield*/, (0, markdown_parsings_1.operationToMarkdown)({
                            operationName: operationName,
                            mergeDocsInline: true,
                            manualProjectRoot: manualProjectRoot,
                            returnType: "save",
                        })];
                case 26:
                    // make a readme of the new index
                    _e.sent();
                    return [4 /*yield*/, database_1.db.update("OperationIndex", function () { return true; }, function (operationIndex) { return (__assign(__assign({}, operationIndex), { indexImportExportError: "", lintProblems: lintProblems })); }, { operationName: operationName })];
                case 27:
                    _e.sent();
                    return [4 /*yield*/, (0, operation_util_1.recalculateOperationIndexJson)(operationBasePath)];
                case 28:
                    _e.sent();
                    if (!!noExit) return [3 /*break*/, 30];
                    return [4 /*yield*/, (0, exitIfProcessDependenciesChange_1.exitIfProcessDependenciesChanged)(operationName, manualProjectRoot)];
                case 29:
                    _e.sent();
                    _e.label = 30;
                case 30: return [2 /*return*/, true];
            }
        });
    });
};
exports.rebuildOperation = rebuildOperation;
//# sourceMappingURL=rebuildOperation.js.map