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
exports.operationToMarkdown = exports.getMergedMarkdownOutlineUrl = void 0;
var get_path_1 = require("get-path");
var log_1 = require("log");
var database_1 = require("database");
var js_util_1 = require("js-util");
var filename_conventions_1 = require("filename-conventions");
var markdown_parse_js_1 = require("markdown-parse-js");
var find_all_dependency_operations_1 = require("find-all-dependency-operations");
var fs_util_1 = require("fs-util");
var get_package_json_1 = require("get-package-json");
var read_json_file_1 = require("read-json-file");
//
var merge_1 = require("./parsing/merge");
var bundleFolderWithMarkdown_1 = require("./bundleFolderWithMarkdown");
var tsInterfaceToMarkdownString_1 = require("./tsInterfaceToMarkdownString");
var tsVariableToMarkdownString_1 = require("./tsVariableToMarkdownString");
var tsFunctionToMarkdownString_1 = require("./tsFunctionToMarkdownString");
var getMergedMarkdownOutlineUrl = function (title) {
    return { title: title, hashtagPath: (0, markdown_parse_js_1.getImplicitId)(title) };
};
exports.getMergedMarkdownOutlineUrl = getMergedMarkdownOutlineUrl;
/** Double arrow function to get the count for the item */
var addDependantCount = function (type, imports) {
    return function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = {},
                        _b[type] = item;
                    if (!item.operationName) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, find_all_dependency_operations_1.findDependants)({
                            operationName: item.operationName,
                            importName: item.name,
                            imports: imports,
                            onlyExternal: true,
                        })];
                case 1:
                    _a = _c.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = [];
                    _c.label = 3;
                case 3: return [2 /*return*/, (_b.externalDependantFiles = _a,
                        _b)];
            }
        });
    }); };
};
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
var operationToMarkdown = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var isSummary, manualProjectRoot, operationName, mergeDocsInline, returnType, projectRoot, operationFolderPath, operationConfig, description, packageJson, operationIndexPath, operationIndex, sizeString, coreDependencies, operationDependencies, packageDependencies, operationInfoMd, operationInfoMarkdownParse, docsPath, hasDocs, docs, _a, imports, tsFunctions, variables, interfaces, dependantTsFunctions, dependantTsInterfaces, dependantTsVariables, sortedDependantCountArray, externalItems, internalItems, _b, externalItemsMarkdown, internalItemsMarkdown, apiReference, internal, merged, returnString, shouldSave, returnValue;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                isSummary = config.isSummary, manualProjectRoot = config.manualProjectRoot, operationName = config.operationName, mergeDocsInline = config.mergeDocsInline, returnType = config.returnType;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    (0, log_1.log)("Projectroot not found", { type: "error" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, get_path_1.getOperationPath)(operationName, {
                        manualProjectRoot: projectRoot,
                    })];
            case 1:
                operationFolderPath = _o.sent();
                if (!operationFolderPath) {
                    (0, log_1.log)("Operation not found", { type: "error" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, database_1.db.get("OperationConfig", { operationName: operationName })];
            case 2:
                operationConfig = (_o.sent())[0];
                description = operationConfig === null || operationConfig === void 0 ? void 0 : operationConfig.markdown;
                return [4 /*yield*/, (0, get_package_json_1.getPackageJson)({ operationFolderPath: operationFolderPath })];
            case 3:
                packageJson = _o.sent();
                operationIndexPath = fs_util_1.path.join(operationFolderPath, filename_conventions_1.databaseFolderName, "operation-index.json");
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(operationIndexPath)];
            case 4:
                operationIndex = _o.sent();
                sizeString = "Size: ".concat((_d = (_c = operationIndex === null || operationIndex === void 0 ? void 0 : operationIndex.size) === null || _c === void 0 ? void 0 : _c.codeSize) === null || _d === void 0 ? void 0 : _d.lines, " LOC, ").concat(((_f = (_e = operationIndex === null || operationIndex === void 0 ? void 0 : operationIndex.size) === null || _e === void 0 ? void 0 : _e.dataSize) === null || _f === void 0 ? void 0 : _f.characters) !== undefined
                    ? "".concat((_h = (_g = operationIndex === null || operationIndex === void 0 ? void 0 : operationIndex.size) === null || _g === void 0 ? void 0 : _g.dataSize) === null || _h === void 0 ? void 0 : _h.characters, " data characters, ")
                    : "").concat(((_k = (_j = operationIndex === null || operationIndex === void 0 ? void 0 : operationIndex.size) === null || _j === void 0 ? void 0 : _j.textSize) === null || _k === void 0 ? void 0 : _k.characters) !== undefined
                    ? "".concat((_m = (_l = operationIndex === null || operationIndex === void 0 ? void 0 : operationIndex.size) === null || _l === void 0 ? void 0 : _l.textSize) === null || _m === void 0 ? void 0 : _m.characters, " text characters, ")
                    : "");
                coreDependencies = operationIndex &&
                    operationIndex.coreDependencies &&
                    operationIndex.coreDependencies.length > 0
                    ? operationIndex.coreDependencies.join(", ")
                    : "none";
                operationDependencies = operationIndex &&
                    operationIndex.operationDependencies &&
                    operationIndex.operationDependencies.length > 0
                    ? operationIndex.operationDependencies.join(", ")
                    : "none";
                packageDependencies = operationIndex &&
                    operationIndex.packageDependencies &&
                    operationIndex.packageDependencies.length > 0
                    ? operationIndex.packageDependencies.join(", ")
                    : "none";
                operationInfoMd = "".concat(operationName, " (").concat(operationIndex === null || operationIndex === void 0 ? void 0 : operationIndex.classification, " operation)\n\n").concat(description ? "".concat(description, "\n\n") : "");
                operationInfoMarkdownParse = (0, markdown_parse_js_1.mdToJsonParse)(operationInfoMd, operationName);
                docsPath = fs_util_1.path.join(operationFolderPath, "docs");
                hasDocs = fs_util_1.fs.existsSync(docsPath);
                if (!hasDocs) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, bundleFolderWithMarkdown_1.bundleFolderWithMarkdown)("Docs", docsPath, "docs")];
            case 5:
                _a = _o.sent();
                return [3 /*break*/, 7];
            case 6:
                _a = undefined;
                _o.label = 7;
            case 7:
                docs = _a;
                return [4 /*yield*/, database_1.db.get("TsImport")];
            case 8:
                imports = (_o.sent()).filter(function (x) { return x.operationName !== operationName; });
                return [4 /*yield*/, database_1.db.get("TsFunction", { operationName: operationName })];
            case 9:
                tsFunctions = (_o.sent())
                    .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.name === b.name; }))
                    .filter(function (x) { return x.isExported; });
                return [4 /*yield*/, database_1.db.get("TsVariable", { operationName: operationName })];
            case 10:
                variables = (_o.sent()).filter(function (x) { return x.isExported; });
                return [4 /*yield*/, database_1.db.get("TsInterface", { operationName: operationName })];
            case 11:
                interfaces = (_o.sent())
                    .filter(function (x) { return !x.name.startsWith("NamedParameters<"); })
                    .filter(function (x) { return x.isExported; });
                return [4 /*yield*/, Promise.all(tsFunctions.map(addDependantCount("tsFunction", imports)))];
            case 12:
                dependantTsFunctions = _o.sent();
                return [4 /*yield*/, Promise.all(interfaces.map(addDependantCount("tsInterface", imports)))];
            case 13:
                dependantTsInterfaces = _o.sent();
                return [4 /*yield*/, Promise.all(variables.map(addDependantCount("tsVariable", imports)))];
            case 14:
                dependantTsVariables = _o.sent();
                sortedDependantCountArray = [
                    dependantTsFunctions,
                    dependantTsInterfaces,
                    dependantTsVariables,
                ]
                    .flat()
                    .sort(function (a, b) {
                    return a.externalDependantFiles.length > b.externalDependantFiles.length ? -1 : 1;
                });
                externalItems = sortedDependantCountArray.filter(function (x) { return x.externalDependantFiles.length > 0; });
                internalItems = sortedDependantCountArray.filter(function (x) { return x.externalDependantFiles.length === 0; });
                _b = [
                    externalItems,
                    internalItems,
                ].map(function (countArray) {
                    var res = countArray
                        .map(function (dependantCountObject) {
                        if (dependantCountObject.tsFunction) {
                            return (0, tsFunctionToMarkdownString_1.tsFunctionToMarkdownString)(dependantCountObject.tsFunction);
                        }
                        if (dependantCountObject.tsInterface) {
                            return (0, tsInterfaceToMarkdownString_1.tsInterfaceToMarkdownString)(dependantCountObject.tsInterface);
                        }
                        if (dependantCountObject.tsVariable) {
                            return (0, tsVariableToMarkdownString_1.tsVariableToMarkdownString)(dependantCountObject.tsVariable);
                        }
                    })
                        .filter(js_util_1.notEmpty)
                        .join("\n\n");
                    return res;
                }), externalItemsMarkdown = _b[0], internalItemsMarkdown = _b[1];
                apiReference = (0, markdown_parse_js_1.mdToJsonParse)(externalItemsMarkdown, "api-reference");
                internal = (0, markdown_parse_js_1.mdToJsonParse)("<details><summary>Show internal (".concat(internalItems.length, ")</summary>\n  \n  ").concat(internalItemsMarkdown, "\n  </details>"), "internal");
                merged = (0, merge_1.mergeMarkdownParse)([
                    operationInfoMarkdownParse,
                    (0, markdown_parse_js_1.mdToJsonParse)((docs === null || docs === void 0 ? void 0 : docs.outlineString) || ""),
                    docs === null || docs === void 0 ? void 0 : docs.markdownParse,
                    apiReference,
                    internal,
                ].filter(js_util_1.notEmpty)).merged;
                returnString = undefined;
                if (returnType !== "parse") {
                    returnString = (0, markdown_parse_js_1.markdownParseToMarkdownString)(merged);
                }
                shouldSave = returnType === "save" || !returnType;
                if (!(shouldSave && returnString)) return [3 /*break*/, 16];
                return [4 /*yield*/, fs_util_1.fs.writeFile(fs_util_1.path.join(operationFolderPath, "README.md"), returnString, "utf8")];
            case 15:
                _o.sent();
                _o.label = 16;
            case 16:
                returnValue = returnType === "parse"
                    ? merged
                    : returnType === "string"
                        ? returnString
                        : undefined;
                return [2 /*return*/, returnValue];
        }
    });
}); };
exports.operationToMarkdown = operationToMarkdown;
//# sourceMappingURL=operationToMarkdown.js.map