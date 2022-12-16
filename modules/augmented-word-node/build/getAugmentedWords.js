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
exports.getAugmentedWords = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var fs_util_js_1 = require("fs-util-js");
var database_1 = require("database");
var js_util_1 = require("js-util");
var getBundleAugmentedWords_1 = require("./getBundleAugmentedWords");
var markdown_parse_js_1 = require("markdown-parse-js");
/**

Gets all augmented words of the entire project

- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is an OS-project, also bundles (`/[docs-path]`)

 */
var getAugmentedWords = function (manualProjectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, operations, operationAugmentedWords, tsVariables, tsFunctions, tsInterfaces, interfaceAugmentedWords, functionAugmentedWords, variableAugmentedWords, bundleAugmentedWords, _a, allAugmentedWords;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, []];
                return [4 /*yield*/, database_1.db.get("Operation")];
            case 1:
                operations = _b.sent();
                operationAugmentedWords = operations
                    .map(function (item) {
                    var _a;
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var description = ((_a = item.operation) === null || _a === void 0 ? void 0 : _a.markdown) || item.description;
                    var augmentedWord = {
                        queryPath: (0, fs_util_js_1.makeRelative)(operationPath, projectRoot),
                        spoiler: description,
                        type: "operation",
                        word: item.name,
                        // NB: OperationConfig is located in operation basePath
                        projectRelativeMarkdownSourcePath: fs_util_1.path.join(operationPath, "OPERATION.md"),
                    };
                    return augmentedWord;
                })
                    .filter(js_util_1.notEmpty);
                return [4 /*yield*/, database_1.db.get("TsVariable", {
                        manualProjectRoot: projectRoot,
                    })];
            case 2:
                tsVariables = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsFunction", {
                        manualProjectRoot: projectRoot,
                    })];
            case 3:
                tsFunctions = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsInterface", {
                        manualProjectRoot: projectRoot,
                    })];
            case 4:
                tsInterfaces = _b.sent();
                interfaceAugmentedWords = tsInterfaces
                    .map(function (item) {
                    // NB: TODO: figure out of this is always correct, this path must exist!
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var projectRelativeOperationPath = (0, fs_util_js_1.makeRelative)(operationPath, projectRoot);
                    var augmentedWord = {
                        queryPath: "".concat(projectRelativeOperationPath, "#").concat((0, markdown_parse_js_1.getImplicitId)(item.name)),
                        spoiler: item.description,
                        type: "type",
                        word: item.name,
                        projectRelativeMarkdownSourcePath: item.projectRelativePath,
                    };
                    return augmentedWord;
                })
                    .filter(js_util_1.notEmpty);
                functionAugmentedWords = tsFunctions
                    .map(function (item) {
                    // NB: TODO: figure out of this is always correct, this path must exist!
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var projectRelativeOperationPath = (0, fs_util_js_1.makeRelative)(operationPath, projectRoot);
                    var augmentedWord = {
                        queryPath: "".concat(projectRelativeOperationPath, "#").concat((0, markdown_parse_js_1.getImplicitId)(item.name)),
                        spoiler: item.description,
                        type: "function",
                        word: item.name,
                        projectRelativeMarkdownSourcePath: item.projectRelativePath,
                    };
                    return augmentedWord;
                })
                    .filter(js_util_1.notEmpty);
                variableAugmentedWords = tsVariables
                    .map(function (item) {
                    // NB: TODO: figure out of this is always correct, this path must exist!
                    var itemLocationPath = fs_util_1.path.join(projectRoot, item.projectRelativePath);
                    var operationPath = (0, get_path_1.findOperationBasePath)(itemLocationPath);
                    if (!operationPath)
                        return;
                    var projectRelativeOperationPath = (0, fs_util_js_1.makeRelative)(operationPath, projectRoot);
                    var augmentedWord = {
                        queryPath: "".concat(projectRelativeOperationPath, "#").concat((0, markdown_parse_js_1.getImplicitId)(item.name)),
                        spoiler: item.description,
                        type: "variable",
                        word: item.name,
                        projectRelativeMarkdownSourcePath: item.projectRelativePath,
                    };
                    return augmentedWord;
                })
                    .filter(js_util_1.notEmpty);
                if (!(0, get_path_1.isBundle)(projectRoot)) return [3 /*break*/, 5];
                _a = undefined;
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, (0, getBundleAugmentedWords_1.getBundleAugmentedWords)()];
            case 6:
                _a = _b.sent();
                _b.label = 7;
            case 7:
                bundleAugmentedWords = _a;
                allAugmentedWords = [
                    bundleAugmentedWords,
                    operationAugmentedWords,
                    variableAugmentedWords,
                    functionAugmentedWords,
                    interfaceAugmentedWords,
                ]
                    .filter(js_util_1.notEmpty)
                    .flat();
                return [2 /*return*/, allAugmentedWords];
        }
    });
}); };
exports.getAugmentedWords = getAugmentedWords;
//# sourceMappingURL=getAugmentedWords.js.map