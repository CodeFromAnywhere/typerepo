#!/usr/bin/env node
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
exports.indexFile = exports.yarnBuild = exports.exitIfProcessDependenciesChanged = exports.shouldSkip = exports.isOperationBuildNeeded = exports.removeDeletedIndexFiles = exports.getIndexFileIds = exports.getSrcIds = exports.getFileIds = void 0;
// external
var child_process_1 = require("child_process");
//monorepo//
var filename_conventions_1 = require("filename-conventions");
var minify_build_1 = require("minify-build");
var log_1 = require("log");
var db_1 = require("db");
var js_util_1 = require("js-util");
var operation_util_1 = require("operation-util");
var get_path_1 = require("get-path");
var fs_util_1 = require("fs-util");
var folder_get_updated_at_1 = require("folder-get-updated-at");
var run_child_process_1 = require("run-child-process");
var code_types_1 = require("code-types");
var k_explore_1 = require("k-explore");
/**
 * gets all identifiers of files, which are the relative path to a file without the extension
 */
var getFileIds = function (_a) {
    var operationFolderPath = _a.operationFolderPath, pathSuffix = _a.pathSuffix, extension = _a.extension;
    return __awaiter(void 0, void 0, void 0, function () {
        var basePath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    basePath = fs_util_1.path.join(operationFolderPath, pathSuffix);
                    return [4 /*yield*/, (0, k_explore_1.explore)({
                            basePath: basePath,
                            extension: extension,
                        })];
                case 1: return [2 /*return*/, (_b.sent())
                        .map(function (x) { return x.path; })
                        .map(function (p) { return (0, fs_util_1.withoutExtension)(p.slice(basePath.length)); })];
            }
        });
    });
};
exports.getFileIds = getFileIds;
/**
 * gets identifiers of ts and tsx files, which are the relative path to a file without the extension
 *
 * in order for them to be unique, we assume here that there's never a file with the ts extension when there's also a tsx file in the same folder with the same name. This would create duplicate ids.
 */
var getSrcIds = function (operationFolderPath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (0, exports.getFileIds)({
                operationFolderPath: operationFolderPath,
                pathSuffix: "src",
                extension: ["ts", "tsx"],
            })];
    });
}); };
exports.getSrcIds = getSrcIds;
/**
 * gets identifiers of ts and tsx files, which are the relative path to a file without the extension
 */
var getIndexFileIds = function (operationFolderPath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (0, exports.getFileIds)({
                operationFolderPath: operationFolderPath,
                // NB: we take index/variables here because we need the file ids of any index as they would be the same in any index
                pathSuffix: "".concat(filename_conventions_1.databaseFolderName, "/ts-variables"),
                extension: "json",
            })];
    });
}); };
exports.getIndexFileIds = getIndexFileIds;
/**
 * Remove all files in all index folders that should not exist anymore according to source files
 */
var removeDeletedIndexFiles = function (operationBasePath, debug) { return __awaiter(void 0, void 0, void 0, function () {
    var ids, indexIds, indexFilesToRemove;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getSrcIds)(operationBasePath)];
            case 1:
                ids = _a.sent();
                return [4 /*yield*/, (0, exports.getIndexFileIds)(operationBasePath)];
            case 2:
                indexIds = _a.sent();
                indexFilesToRemove = indexIds
                    .filter(function (id) { return !ids.includes(id); })
                    .map(function (f) {
                    return (0, fs_util_1.getPathCombinations)(operationBasePath, filename_conventions_1.databaseFolderName, code_types_1.indexDbModelFolders, "".concat(f, ".json"));
                })
                    .flat();
                if (indexFilesToRemove.length || debug) {
                    console.log({ indexFilesToRemove: indexFilesToRemove, indexIds: indexIds, ids: ids });
                }
                return [4 /*yield*/, Promise.all(indexFilesToRemove.map(function (f) { return (fs_util_1.fs.existsSync(f) ? fs_util_1.fs.rm(f) : undefined); }))];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removeDeletedIndexFiles = removeDeletedIndexFiles;
/**
 * returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification
 */
var isOperationBuildNeeded = function (operationBasePath) {
    var classification = (0, get_path_1.getOperationClassification)(operationBasePath);
    // NB: server, web, app and ui-es6 have different ways to keep the build up-to-date
    var buildNeededOperatons = [
        "js",
        "node",
        "ui-es5",
    ];
    var isBuildNeeded = buildNeededOperatons.includes(classification);
    return isBuildNeeded;
};
exports.isOperationBuildNeeded = isOperationBuildNeeded;
/**
 * if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped
 **/
var shouldSkip = function (_a) {
    var fullPath = _a.fullPath, debug = _a.debug, force = _a.force;
    return __awaiter(void 0, void 0, void 0, function () {
        var metadata, operationName, operationBasePath, srcPath, operationIndex, srcUpdatedAt, hasIndexFolder, hasBuildFolder, isBuildNeeded;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, operation_util_1.getOperationMetaData)(fullPath)];
                case 1:
                    metadata = _b.sent();
                    if (!metadata)
                        return [2 /*return*/];
                    operationName = metadata.operationName, operationBasePath = metadata.operationBasePath, srcPath = metadata.srcPath, operationIndex = metadata.operationIndex;
                    return [4 /*yield*/, (0, folder_get_updated_at_1.folderGetUpdatedAt)({ folderPath: srcPath })];
                case 2:
                    srcUpdatedAt = _b.sent();
                    hasIndexFolder = fs_util_1.fs.existsSync(fs_util_1.path.join(operationBasePath, filename_conventions_1.databaseFolderName));
                    hasBuildFolder = fs_util_1.fs.existsSync(fs_util_1.path.join(operationBasePath, filename_conventions_1.buildFolderName));
                    isBuildNeeded = (0, exports.isOperationBuildNeeded)(operationBasePath);
                    // NB: this 1000ms is a bit hacky but otherwise everything will seem skippable or smth
                    if (!force &&
                        operationIndex &&
                        operationIndex.updatedAt > srcUpdatedAt &&
                        hasIndexFolder &&
                        (hasBuildFolder || !isBuildNeeded)) {
                        if (debug)
                            (0, log_1.log)("Skipping ".concat(operationName), { type: "success" });
                        return [2 /*return*/, true];
                    }
                    if (debug) {
                        console.log("NOT SKIPPING ".concat(operationName), {
                            force: force,
                            operationIndex: operationIndex,
                            hasIndexFolder: hasIndexFolder,
                            hasBuildFolder: hasBuildFolder,
                            operationIndexUpdatedAt: operationIndex === null || operationIndex === void 0 ? void 0 : operationIndex.updatedAt,
                            srcUpdatedAt: srcUpdatedAt,
                        });
                    }
                    return [2 /*return*/, false];
            }
        });
    });
};
exports.shouldSkip = shouldSkip;
//
/**
 * exits the process if our own dependencies change
 */
var exitIfProcessDependenciesChanged = function (operationName, manualProjectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var imports;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(["watch-operations", "rebuild-operation"].map(function (operationName) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, db_1.db.get("TsImport", { operationName: operationName, manualProjectRoot: manualProjectRoot })];
                }); }); }))];
            case 1:
                imports = (_a.sent())
                    .flat()
                    .map(function (i) { return i.module; })
                    // apparently this isn't a dependency of the above 3
                    .concat(["watch-operations"])
                    .filter(js_util_1.onlyUnique);
                if (operationName && imports.includes(operationName)) {
                    (0, log_1.log)("One of our dependencies (".concat(operationName, ") changed. Let's restart."), {
                        type: "error",
                    });
                    process.exit(1);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.exitIfProcessDependenciesChanged = exitIfProcessDependenciesChanged;
/**
 * Builds and minifies the src
 */
var yarnBuild = function (operationBasePath, config) { return __awaiter(void 0, void 0, void 0, function () {
    var removed, result, minified;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (config === null || config === void 0 ? void 0 : config.rmFirst) {
                    removed = (0, child_process_1.spawnSync)("rm -rf build", {
                        cwd: operationBasePath,
                        encoding: "utf8",
                        stdio: "inherit",
                        shell: true,
                    });
                }
                result = (0, child_process_1.spawnSync)("yarn build", {
                    cwd: operationBasePath,
                    encoding: "utf8",
                    stdio: "inherit",
                    shell: true,
                });
                if (result.error) {
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, (0, minify_build_1.minifyBuild)({
                        buildFolderPath: fs_util_1.path.join(operationBasePath, "build"),
                    })];
            case 1:
                minified = _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };
exports.yarnBuild = yarnBuild;
/**
 * everything needed to be done with a file when rebuilding
 */
var indexFile = function (_a) {
    var file = _a.file, index = _a.index, operationBasePath = _a.operationBasePath, manualProjectRoot = _a.manualProjectRoot;
    return __awaiter(void 0, void 0, void 0, function () {
        var ext, filePath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!operationBasePath || !file.name) {
                        (0, log_1.log)("Incorrect parameters given", { type: "error" });
                        return [2 /*return*/];
                    }
                    ext = (0, fs_util_1.getExtension)(file.name);
                    if (!file.name || !ext || !["ts", "tsx"].includes(ext)) {
                        (0, log_1.log)("Incorrect extension ".concat(ext), { type: "warning" });
                        return [2 /*return*/];
                    }
                    filePath = fs_util_1.path.join(operationBasePath, "src", file.name);
                    if (!fs_util_1.fs.existsSync(filePath)) {
                        (0, log_1.log)("couldn't retreive filepath ".concat(filePath), { type: "error" });
                        return [2 /*return*/];
                    }
                    // the following was used for skipping if nothing changed in the file. Not sure if it can be done so easily as dependencies can also change.
                    // const stats = await fs.stat(filePath);
                    // const fileUpdatedAt = stats.mtimeMs;
                    // const { indexFilePath } = getTsFilePaths({
                    //   filePath,
                    //   indexFolder: "files",
                    // });
                    // const oldIndex = await readJsonFile<FileMetaData>(indexFilePath!);
                    // TODO: migrate to something like this
                    // const oldIndex = await get("FileMetaData", {
                    //   operation: operationFolderName,
                    //   operationIndexFiles: [getIndexFilePath("file")],
                    // });
                    // console.log({ oldIndex });
                    // if (oldIndex && fileUpdatedAt - buildMargin < oldIndex.updatedAt) {
                    //   return log(`Skipping ${file.name} as nothing changed`, {
                    //     type: "warning",
                    //   });
                    // }
                    return [4 /*yield*/, (0, run_child_process_1.runChildProcess)({
                            operationFolderName: "index-typescript",
                            scriptFileName: "cli",
                            args: manualProjectRoot ? [filePath, manualProjectRoot] : [filePath],
                        })];
                case 1:
                    // the following was used for skipping if nothing changed in the file. Not sure if it can be done so easily as dependencies can also change.
                    // const stats = await fs.stat(filePath);
                    // const fileUpdatedAt = stats.mtimeMs;
                    // const { indexFilePath } = getTsFilePaths({
                    //   filePath,
                    //   indexFolder: "files",
                    // });
                    // const oldIndex = await readJsonFile<FileMetaData>(indexFilePath!);
                    // TODO: migrate to something like this
                    // const oldIndex = await get("FileMetaData", {
                    //   operation: operationFolderName,
                    //   operationIndexFiles: [getIndexFilePath("file")],
                    // });
                    // console.log({ oldIndex });
                    // if (oldIndex && fileUpdatedAt - buildMargin < oldIndex.updatedAt) {
                    //   return log(`Skipping ${file.name} as nothing changed`, {
                    //     type: "warning",
                    //   });
                    // }
                    _b.sent();
                    (0, log_1.log)("".concat(index + 1, " - created index (").concat(file.name, ")"), { type: "success" });
                    return [2 /*return*/];
            }
        });
    });
};
exports.indexFile = indexFile;
//# sourceMappingURL=general.js.map