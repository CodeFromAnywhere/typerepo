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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContextualPrompts = exports.getContextualPromptsArray = exports.getFolderRelativeScopeDbFilePath = void 0;
var database_1 = require("database");
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var try_parse_json_1 = require("try-parse-json");
/**
 * Function to centralise the convention of the db file location of a scoped prompt
 */
var getFolderRelativeScopeDbFilePath = function (filename) {
    return filename
        ? ".index/".concat(filename, "/contextual-prompts.json")
        : ".index/contextual-prompts.json";
};
exports.getFolderRelativeScopeDbFilePath = getFolderRelativeScopeDbFilePath;
/**
 * Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.
 */
var getContextualPromptsArray = function (
/**
 * If available, will also get the scoped context
 */
scopeProjectRelativePath) { return __awaiter(void 0, void 0, void 0, function () {
    var databaseResult, projectRoot, scopeAbsolutePath, stats, parsedScopePath, filename, scopeFolderPath, scopeAbsoluteDbPath, jsonString, scopeResult, finalScopeResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.db.get("ContextualPrompt")];
            case 1:
                databaseResult = _a.sent();
                if (!scopeProjectRelativePath) {
                    return [2 /*return*/, { databaseResult: databaseResult }];
                }
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, { databaseResult: databaseResult }];
                scopeAbsolutePath = fs_util_1.path.join(projectRoot, scopeProjectRelativePath);
                if (!fs_util_1.fs.existsSync(scopeAbsolutePath)) {
                    return [2 /*return*/, { databaseResult: databaseResult }];
                }
                return [4 /*yield*/, fs_util_1.fs.stat(scopeAbsolutePath)];
            case 2:
                stats = _a.sent();
                parsedScopePath = fs_util_1.path.parse(scopeAbsolutePath);
                filename = stats.isFile() ? parsedScopePath.base : undefined;
                scopeFolderPath = stats.isDirectory()
                    ? scopeAbsolutePath
                    : parsedScopePath.dir;
                scopeAbsoluteDbPath = fs_util_1.path.join(scopeFolderPath, (0, exports.getFolderRelativeScopeDbFilePath)(filename));
                if (!fs_util_1.fs.existsSync(scopeAbsoluteDbPath))
                    return [2 /*return*/, { databaseResult: databaseResult }];
                return [4 /*yield*/, fs_util_1.fs.readFile(scopeAbsoluteDbPath, "utf8")];
            case 3:
                jsonString = _a.sent();
                scopeResult = (0, try_parse_json_1.tryParseJson)(jsonString);
                if (!scopeResult)
                    return [2 /*return*/, { databaseResult: databaseResult }];
                finalScopeResult = scopeResult.map(function (x) { return (__assign(__assign({}, x), { scopeProjectRelativePath: scopeProjectRelativePath })); });
                // add the scopeProjectRelativePath so we don't need to store it in the db
                return [2 /*return*/, {
                        databaseResult: databaseResult,
                        scopeResult: finalScopeResult,
                    }];
        }
    });
}); };
exports.getContextualPromptsArray = getContextualPromptsArray;
/**
 * Returns all contextual prompts for the selection and for the page with the right context type
 */
var getContextualPrompts = function (
/**
 * If not given, will return all
 */
contextType, scopeProjectRelativePath, isDev) { return __awaiter(void 0, void 0, void 0, function () {
    var contextualPromptsObject, databaseContextualPromptSlugs, contextualPrompts, rightType, selectionContextualPrompts, pageContextualPrompts, folderContextualPrompts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getContextualPromptsArray)(scopeProjectRelativePath)];
            case 1:
                contextualPromptsObject = _a.sent();
                databaseContextualPromptSlugs = contextualPromptsObject.databaseResult.map(function (x) { return x.slug; });
                contextualPrompts = Object.values(contextualPromptsObject).flat();
                rightType = contextualPrompts
                    .filter(function (x) { var _a; return (contextType ? (_a = x.contextType) === null || _a === void 0 ? void 0 : _a.includes(contextType) : true); })
                    .filter(function (x) { return (isDev ? true : x.isFavorite); })
                    .map(js_util_1.omitUndefinedValues)
                    // sort on fav first
                    .sort(function (a, b) {
                    if (a.isFavorite && !b.isFavorite)
                        return -1;
                    if (b.isFavorite && !a.isFavorite)
                        return 1;
                    return 0;
                });
                selectionContextualPrompts = rightType.filter(function (x) { return x.usesSelection || x.usesAnyContext; });
                pageContextualPrompts = rightType.filter(function (x) { return (!x.usesSelection && x.usesContext) || x.usesAnyContext; });
                folderContextualPrompts = rightType.filter(function (x) {
                    return (!x.usesSelection && !x.usesContext && x.folderContentContext) ||
                        x.usesAnyContext;
                });
                return [2 /*return*/, {
                        selectionContextualPrompts: selectionContextualPrompts,
                        pageContextualPrompts: pageContextualPrompts,
                        folderContextualPrompts: folderContextualPrompts,
                        databaseContextualPromptSlugs: databaseContextualPromptSlugs,
                    }];
        }
    });
}); };
exports.getContextualPrompts = getContextualPrompts;
//# sourceMappingURL=getContextualPrompts.js.map