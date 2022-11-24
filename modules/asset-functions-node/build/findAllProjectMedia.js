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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProjectMedia = exports.mediaExtensions = void 0;
var filename_conventions_1 = require("filename-conventions");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var k_explore_1 = require("k-explore");
var sdk_operations_1 = require("sdk-operations");
exports.mediaExtensions = ["png", "mp3", "mp4", "zip", "pdf"];
/**
Media:`.png`, `.mp4`, `.mp3`, `.zip`, `.pdf`

- finds all media in all `db` folders. Can be anywhere, so an explore will probably be best.
- finds all media in every operation in any folder except for `node_modules`, `db`, `src`, `build`, `.[anything]`. (so mostly in `todo`, `docs` and `assets`)
- find all media in every other folder that is not an operation

Return all of this as project relative path array

 */
var findAllProjectMedia = function (searchQuery, 
/**
 * defaults to absolute
 */
returnType) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, dbPath, operationBasePaths, databaseFolderPaths, dbResults, operationResults, anywhereResults, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, []];
                dbPath = fs_util_1.path.join(projectRoot, filename_conventions_1.databaseFolderName);
                operationBasePaths = Object.values(sdk_operations_1.operations).map(function (projectRelativePath) { return fs_util_1.path.join(projectRoot, projectRelativePath); });
                databaseFolderPaths = operationBasePaths
                    .map(function (absoluteOperationPath) {
                    return fs_util_1.path.join(absoluteOperationPath, filename_conventions_1.databaseFolderName);
                })
                    .concat(dbPath)
                    .filter(fs_util_1.fs.existsSync);
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        basePath: databaseFolderPaths,
                        extension: exports.mediaExtensions,
                        search: searchQuery,
                    })];
            case 1:
                dbResults = _a.sent();
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        basePath: operationBasePaths,
                        extension: exports.mediaExtensions,
                        ignore: __spreadArray(__spreadArray([], filename_conventions_1.generatedFolders, true), [filename_conventions_1.databaseFolderName, filename_conventions_1.sourceFolderName], false),
                        search: searchQuery,
                    })];
            case 2:
                operationResults = _a.sent();
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        cancelRecursionOn: k_explore_1.pathArrayIsOperation,
                        basePath: projectRoot,
                        extension: exports.mediaExtensions,
                        ignore: [filename_conventions_1.databaseFolderName, "node_modules", ".git"],
                    })];
            case 3:
                anywhereResults = _a.sent();
                results = [dbResults, operationResults, anywhereResults]
                    .flat()
                    .map(function (x) { return x.path; });
                return [2 /*return*/, returnType === "projectRelative"
                        ? results.map(function (x) { return (0, get_path_1.makeRelative)(x, projectRoot); })
                        : results];
        }
    });
}); };
exports.findAllProjectMedia = findAllProjectMedia;
//# sourceMappingURL=findAllProjectMedia.js.map