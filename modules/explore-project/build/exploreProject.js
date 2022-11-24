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
exports.exploreProject = void 0;
var bundle_util_1 = require("bundle-util");
var k_explore_1 = require("k-explore");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var database_1 = require("database");
var js_util_1 = require("js-util");
var filename_conventions_1 = require("filename-conventions");
var getOperationType_1 = require("./getOperationType");
var exploreOperation_1 = require("./exploreOperation");
var util_1 = require("./util");
/**
  TODO: still needs to be cleaned up. It's a huge function now with many useful components. Split it up!

  - explores all files and folders until it finds a package.json.

  all items in the explore tree are clickable in the ui, and lead to different pages
  -  a folder leads to a summary of what the folder holds
  -  a operation leads to a summary of the operation
  -  a ts file leads to all functions, variables, and interfaces in that file
  -  a function, variable, or interface leads to specific pages for those things. the data, if available, is attached to the interfaces.
  - a md file leads to the editing user interface (with context) of that file
  - a json file leads to a CRUD for it...

  ## Performance
  In the end the data it generates should stay up to date, so it's important this exploration happens fast enough. The data involved is simply walking the filesystem once (a small subset of it) and opening some index files (fun)

  ## Ideas for later
  LATER: some more things that would be useful:

  - watching all files that are also explored for changes using some watcher
  - if something changes, recalculating that part and pushing it to the UI, making the thing going over the line small so it'll be super fast, even over slow internet.

  however, this is premature optimisation. on my m1, locally, it's probably fine to just recalculate every second ^^ and send a couple megabytes over the line.
  */
var exploreProject = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var bundleId, bundleSummary, bundle, operationPaths, textPath, projectRoot, foldersWithMarkdownAndOperationsExplore, exploreArrayPromises, resultPaths, indexData, operationFolders, fullIndexation, oppositeSortedFullIndexation, copyForNested, nestedExploration;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                bundleId = config === null || config === void 0 ? void 0 : config.bundleId;
                bundleSummary = undefined;
                if (!bundleId) return [3 /*break*/, 2];
                return [4 /*yield*/, database_1.db.get("BundleConfig")];
            case 1:
                bundle = (_b.sent()).find(function (x) { return x.id === bundleId; });
                if (bundle) {
                    bundleSummary = (0, bundle_util_1.getBundleSummary)(bundle);
                }
                _b.label = 2;
            case 2:
                operationPaths = (0, get_path_1.getPathsWithOperations)();
                textPath = (0, get_path_1.getRootPath)("text");
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!operationPaths || !textPath || !projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        basePath: operationPaths.concat(textPath),
                        includeFoldersWithResults: true,
                        ignore: [
                            "node_modules",
                            ".git",
                            filename_conventions_1.databaseFolderName,
                            ".gitignore",
                            ".DS_Store",
                        ],
                        // extension: ["md","mdx"]
                        cancelRecursionOn: k_explore_1.pathArrayIsOperation,
                    })];
            case 3:
                foldersWithMarkdownAndOperationsExplore = _b.sent();
                exploreArrayPromises = foldersWithMarkdownAndOperationsExplore.map(function (exploreResult) { return __awaiter(void 0, void 0, void 0, function () {
                    var operationName, shouldIncludeOperation, exploreResultArray, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                operationName = (0, fs_util_1.getLastFolder)(exploreResult.path);
                                shouldIncludeOperation = !bundleSummary
                                    ? true
                                    : bundleSummary.packageNames.includes(operationName);
                                if (!exploreResult.isCancelRecursionResult) return [3 /*break*/, 4];
                                if (!shouldIncludeOperation) return [3 /*break*/, 2];
                                return [4 /*yield*/, (0, exploreOperation_1.exploreOperation)(exploreResult.path)];
                            case 1:
                                _b = _c.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                _b = [];
                                _c.label = 3;
                            case 3:
                                _a = _b;
                                return [3 /*break*/, 5];
                            case 4:
                                _a = [exploreResult];
                                _c.label = 5;
                            case 5:
                                exploreResultArray = _a;
                                return [2 /*return*/, exploreResultArray];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(exploreArrayPromises)];
            case 4:
                resultPaths = (_b.sent())
                    .flat()
                    .map(function (x) { return x.path; });
                _a = {};
                return [4 /*yield*/, database_1.db.get("TsFunction")];
            case 5:
                _a.functions = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsVariable")];
            case 6:
                _a.variables = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsInterface")];
            case 7:
                indexData = (_a.interfaces = _b.sent(),
                    _a);
                return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({
                        basePath: (0, get_path_1.getPathsWithOperations)(),
                    })];
            case 8:
                operationFolders = _b.sent();
                fullIndexation = resultPaths
                    .map(function (absolutePath) {
                    var relativeProjectPath = absolutePath.substring(projectRoot.length);
                    // extension like .ts or empty string if there's no extensnion (also for folders)
                    var name = fs_util_1.path.parse(absolutePath).name;
                    var type = (0, getOperationType_1.getExplorationType)(absolutePath, operationFolders);
                    // Not typescript
                    if (type !== "typescript") {
                        // name of folder, operation, operationFolder, or md file
                        // NB: shouldn't happen
                        if (!type)
                            return null;
                        // NB: we are filling in the children in a later step
                        return { name: name, relativeProjectPath: relativeProjectPath, type: type, children: undefined };
                    }
                    // Typescript
                    var typescriptFileChildren = Object.keys(indexData)
                        .map(function (indexInstanceName) {
                        var all = indexData[indexInstanceName];
                        var indexNames = (0, util_1.getInstanceNames)(all, relativeProjectPath);
                        var type = indexInstanceName === "functions"
                            ? "function"
                            : indexInstanceName === "interfaces"
                                ? "interface"
                                : "variable";
                        var instanceChildren = indexNames.map(function (name) { return ({ name: name, relativeProjectPath: relativeProjectPath, type: type }); });
                        return instanceChildren;
                    })
                        .flat();
                    return {
                        name: name,
                        relativeProjectPath: relativeProjectPath,
                        type: type,
                        children: typescriptFileChildren,
                    };
                })
                    .flat()
                    .filter(js_util_1.notEmpty);
                oppositeSortedFullIndexation = fullIndexation
                    // sort alphabetically on relativeProjectPath
                    .sort(function (a, b) {
                    if (a.relativeProjectPath < b.relativeProjectPath)
                        return -1;
                    if (a.relativeProjectPath > b.relativeProjectPath)
                        return 1;
                    return 0;
                })
                    // reverse the result so it's in opposite alphabetical order
                    .reverse();
                copyForNested = __spreadArray([], oppositeSortedFullIndexation, true);
                nestedExploration = copyForNested
                    .reduce(function (all, folderExploration, currentIndex) {
                    var _a;
                    var parsedPath = fs_util_1.path.parse(fs_util_1.path.join(projectRoot, folderExploration.relativeProjectPath));
                    /** the parent folder of a folder, or the folder of a path */
                    var baseFolder = parsedPath.base.length > 0
                        ? parsedPath.dir
                        : fs_util_1.path.join(parsedPath.dir, "..");
                    var relativeBaseFolder = baseFolder.substring(projectRoot.length);
                    // console.log({
                    //   relativeBaseFolder,
                    //   relativeProjectPath: folderExploration.relativeProjectPath,
                    // });
                    var baseIndex = all.findIndex(function (x) { return (x === null || x === void 0 ? void 0 : x.relativeProjectPath) === relativeBaseFolder; });
                    // there is no parent found for this one
                    if (baseIndex === -1) {
                        return all;
                    }
                    // we found a parent on all[baseIndex]. Lets put folderExploration in the children of that one, and remove it from the full indexation
                    all[baseIndex] = __assign(__assign({}, all[baseIndex]), { children: all[baseIndex].children
                            ? (_a = all[baseIndex].children) === null || _a === void 0 ? void 0 : _a.concat(folderExploration)
                            : [folderExploration] });
                    delete all[currentIndex];
                    return all;
                }, copyForNested)
                    // the deleted keys can now be removed
                    .filter(js_util_1.notEmpty);
                // console.dir(
                //   oppositeSortedFullIndexation.map((x) => x.relativeProjectPath),
                //   { depth: 999, maxArrayLength: 9999 }
                // );
                return [2 /*return*/, nestedExploration];
        }
    });
}); };
exports.exploreProject = exploreProject;
//# sourceMappingURL=exploreProject.js.map