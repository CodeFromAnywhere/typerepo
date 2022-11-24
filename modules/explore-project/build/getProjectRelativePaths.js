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
exports.getProjectRelativePaths = void 0;
var filename_conventions_1 = require("filename-conventions");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var k_explore_1 = require("k-explore");
/**
 * get file paths within your project
 */
var getProjectRelativePaths = function (
// functionContext: FunctionContext,
config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, earliestUpdatedAt, filterDraft, filterGenerated, filterPrivate, type, sort, projectRoot, operationsPath, databasePath, textPath, basePath, _b, shouldFilterRecency, results, filtered, sorted, projectRelativePaths;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = (0, js_util_1.destructureOptionalObject)(config), earliestUpdatedAt = _a.earliestUpdatedAt, filterDraft = _a.filterDraft, filterGenerated = _a.filterGenerated, filterPrivate = _a.filterPrivate, type = _a.type, sort = _a.sort;
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                operationsPath = (0, get_path_1.getRootPath)("operations");
                if (!operationsPath)
                    return [2 /*return*/];
                databasePath = (0, get_path_1.getRootPath)(filename_conventions_1.databaseFolderName);
                if (!databasePath)
                    return [2 /*return*/];
                textPath = (0, get_path_1.getRootPath)("text");
                if (!textPath)
                    return [2 /*return*/];
                if (!(type === "todo")) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, k_explore_1.findAllTodoFolderPaths)(operationsPath)];
            case 1:
                _b = _c.sent();
                return [3 /*break*/, 3];
            case 2:
                _b = [operationsPath, textPath];
                _c.label = 3;
            case 3:
                basePath = _b;
                shouldFilterRecency = earliestUpdatedAt !== undefined;
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        basePath: basePath,
                        includeStats: shouldFilterRecency || sort === "recent",
                        extension: "md",
                        ignore: __spreadArray([filename_conventions_1.databaseFolderName], filename_conventions_1.generatedFolders, true),
                    })];
            case 4:
                results = _c.sent();
                filtered = results.filter(function (result) {
                    var _a;
                    if (!shouldFilterRecency)
                        return true;
                    var updatedAt = (_a = result.stats) === null || _a === void 0 ? void 0 : _a.updatedAt;
                    // shouldn't happen
                    if (!updatedAt)
                        return false;
                    var isRecentEnough = earliestUpdatedAt < updatedAt;
                    return isRecentEnough;
                });
                sorted = sort === "recent"
                    ? filtered.sort(function (a, b) {
                        if (a.stats.createdAt < b.stats.createdAt) {
                            return 1;
                        }
                        return -1;
                    })
                    : filtered;
                projectRelativePaths = sorted
                    .map(function (result) { return result.path; })
                    .map(function (absolutePath) { return (0, get_path_1.makeRelative)(absolutePath, projectRoot); });
                return [2 /*return*/, projectRelativePaths];
        }
    });
}); };
exports.getProjectRelativePaths = getProjectRelativePaths;
//# sourceMappingURL=getProjectRelativePaths.js.map