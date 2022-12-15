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
exports.getDatabaseFiles = void 0;
// monorepo
var fs_util_1 = require("fs-util");
var log_1 = require("log");
var measure_performance_1 = require("measure-performance");
var getDbStorageMethodExtension_1 = require("./getDbStorageMethodExtension");
var getLocationPattern_1 = require("./getLocationPattern");
var getMergedOperationPath_1 = require("./getMergedOperationPath");
var getRootFolders_1 = require("./getRootFolders");
var getWildcardDbFileLocations_1 = require("./getWildcardDbFileLocations");
/**
This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method.
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)

 */
var getDatabaseFiles = function (modelName, mergedConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var executionId, performance, projectRoot, dbStorageMethod, pattern, operationPath, rootFolders, dbFiles, isOperationFile, exactAbsoluteOperationFilePath, customExt, isWrongExtension, projectRelativePath, operationRelativePath, absolutePath, operationName, projectRelativePath, conventionedPaths;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                executionId = (0, measure_performance_1.generateUniqueId)();
                performance = [];
                (0, measure_performance_1.getNewPerformance)("start", executionId, true);
                projectRoot = (mergedConfig === null || mergedConfig === void 0 ? void 0 : mergedConfig.manualProjectRoot) || mergedConfig.projectRoot;
                if (!projectRoot)
                    return [2 /*return*/, []];
                dbStorageMethod = mergedConfig.dbStorageMethod;
                performance.push((0, measure_performance_1.getNewPerformance)("get projectRoot", executionId));
                pattern = (0, getLocationPattern_1.getLocationPattern)(dbStorageMethod, modelName, mergedConfig);
                performance.push((0, measure_performance_1.getNewPerformance)("get location pattern", executionId));
                return [4 /*yield*/, (0, getMergedOperationPath_1.getMergedConfigOperationPath)(mergedConfig, projectRoot)];
            case 1:
                operationPath = _a.sent();
                performance.push((0, measure_performance_1.getNewPerformance)("get merged config operation path", executionId));
                // console.log({ pattern, operationPath });
                // Please note, it can return false as well, which should continue here
                if (operationPath === undefined)
                    return [2 /*return*/, []];
                return [4 /*yield*/, (0, getRootFolders_1.getRootFolders)({
                        mergedConfig: mergedConfig,
                        operationPath: operationPath,
                        projectRoot: projectRoot,
                        manualProjectRoot: projectRoot,
                    })];
            case 2:
                rootFolders = _a.sent();
                // console.log({ rootFolders });
                performance.push((0, measure_performance_1.getNewPerformance)("getRootFolders", executionId));
                (0, measure_performance_1.cleanupTimer)(executionId);
                dbFiles = [];
                isOperationFile = !!mergedConfig.operationName &&
                    !!operationPath &&
                    !!mergedConfig.operationRelativePath;
                if (isOperationFile && !!operationPath) {
                    exactAbsoluteOperationFilePath = fs_util_1.path.join(operationPath, mergedConfig.operationRelativePath);
                    customExt = mergedConfig.operationRelativePath
                        ? fs_util_1.path.parse(mergedConfig.operationRelativePath).ext
                        : undefined;
                    isWrongExtension = customExt !== (0, getDbStorageMethodExtension_1.getDbStorageMethodExtension)(dbStorageMethod);
                    if (isWrongExtension) {
                        (0, log_1.log)("Incorrect extension found in operationRelativePath, found ".concat(customExt), { type: "warning" });
                    }
                    projectRelativePath = exactAbsoluteOperationFilePath.substring(projectRoot.length);
                    operationRelativePath = mergedConfig.operationName === null
                        ? undefined
                        : exactAbsoluteOperationFilePath.substring(operationPath.length);
                    dbFiles.push({
                        modelName: modelName,
                        absolutePath: exactAbsoluteOperationFilePath,
                        operationName: mergedConfig.operationName,
                        projectRelativePath: projectRelativePath,
                        operationRelativePath: operationRelativePath,
                    });
                }
                if (!isOperationFile && mergedConfig.projectRelativePath) {
                    absolutePath = fs_util_1.path.join(projectRoot, mergedConfig.projectRelativePath);
                    operationName = null;
                    projectRelativePath = mergedConfig.projectRelativePath;
                    dbFiles.push({
                        modelName: modelName,
                        absolutePath: absolutePath,
                        operationName: operationName,
                        projectRelativePath: projectRelativePath,
                    });
                }
                if (!(!mergedConfig.projectRelativePath && !isOperationFile && pattern)) return [3 /*break*/, 4];
                return [4 /*yield*/, Promise.all(rootFolders.map(function (rootFolder) { return __awaiter(void 0, void 0, void 0, function () {
                        var absolutePathPattern, projectRelativePath, operationRelativePath, parsedPath, fileNames, dbFileLocation;
                        return __generator(this, function (_a) {
                            absolutePathPattern = fs_util_1.path.join(rootFolder.basePath, pattern);
                            projectRelativePath = absolutePathPattern.substring(projectRoot.length);
                            operationRelativePath = rootFolder.operationName === null
                                ? undefined
                                : absolutePathPattern.substring(rootFolder.basePath.length);
                            parsedPath = fs_util_1.path.parse(absolutePathPattern);
                            if (parsedPath.name === "*") {
                                fileNames = (0, getWildcardDbFileLocations_1.getWildcardDbFileLocations)({
                                    modelName: modelName,
                                    parsedPath: parsedPath,
                                    operationName: rootFolder.operationName,
                                    projectRoot: projectRoot,
                                    rootFolder: rootFolder,
                                });
                                return [2 /*return*/, fileNames];
                            }
                            else {
                                dbFileLocation = {
                                    modelName: modelName,
                                    absolutePath: absolutePathPattern,
                                    operationName: rootFolder.operationName,
                                    projectRelativePath: projectRelativePath,
                                    operationRelativePath: operationRelativePath,
                                };
                                return [2 /*return*/, [dbFileLocation]];
                            }
                            return [2 /*return*/];
                        });
                    }); }))];
            case 3:
                conventionedPaths = (_a.sent()).flat();
                dbFiles = dbFiles.concat(conventionedPaths);
                _a.label = 4;
            case 4: return [2 /*return*/, dbFiles];
        }
    });
}); };
exports.getDatabaseFiles = getDatabaseFiles;
//# sourceMappingURL=getDatabaseFiles.js.map