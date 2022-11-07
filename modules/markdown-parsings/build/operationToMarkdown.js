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
var fs_util_1 = require("fs-util");
var get_package_json_1 = require("get-package-json");
var read_json_file_1 = require("read-json-file");
//
var merge_1 = require("./parsing/merge");
var bundleFolderWithMarkdown_1 = require("./bundleFolderWithMarkdown");
var tsInterfaceToMarkdownString_1 = require("./tsInterfaceToMarkdownString");
var getFunctionsInfo_1 = require("./getFunctionsInfo");
var tsVariableToMarkdownString_1 = require("./tsVariableToMarkdownString");
var getMergedMarkdownOutlineUrl = function (title) {
    return { title: title, hashtagPath: (0, markdown_parse_js_1.getImplicitId)(title) };
};
exports.getMergedMarkdownOutlineUrl = getMergedMarkdownOutlineUrl;
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
var operationToMarkdown = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var isSummary, manualProjectRoot, operationName, mergeDocsInline, returnType, projectRoot, operationFolderPath, operationConfig, description, packageJson, operationIndexPath, operationIndex, sizeString, coreDependencies, operationDependencies, packageDependencies, operationInfoMd, operationInfoMarkdownParse, docsPath, hasDocs, docs, _a, docsMarkdownParse, docsOutline, _b, functionsMarkdownParse, functionsOutline, models, interfaces, variables, modelsMarkdownString, interfacesMarkdownString, variablesMarkdownString, modelsMarkdownParse, interfacesMarkdownParse, variablesMarkdownParse, modelsOutline, interfacesOutline, variablesOutline, completeOutlineMarkdownParse, merged, returnString, shouldSave, returnValue;
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
                docsMarkdownParse = docs === null || docs === void 0 ? void 0 : docs.markdownParse;
                docsOutline = (docs === null || docs === void 0 ? void 0 : docs.outlineString) || "";
                return [4 /*yield*/, (0, getFunctionsInfo_1.getFunctionsInfo)(operationName)];
            case 8:
                _b = _o.sent(), functionsMarkdownParse = _b.functionsMarkdownParse, functionsOutline = _b.functionsOutline;
                return [4 /*yield*/, database_1.db.get("TsInterface", { operationName: operationName })];
            case 9:
                models = (_o.sent())
                    .filter(function (x) { return x.isDbModel; })
                    .filter(function (x) { return x.isExported; });
                return [4 /*yield*/, database_1.db.get("TsInterface", { operationName: operationName })];
            case 10:
                interfaces = (_o.sent())
                    .filter(function (x) { return !x.isDbModel && !x.name.startsWith("NamedParameters<"); })
                    .filter(function (x) { return x.isExported; });
                return [4 /*yield*/, database_1.db.get("TsVariable", { operationName: operationName })];
            case 11:
                variables = (_o.sent()).filter(function (x) { return x.isExported; });
                modelsMarkdownString = models.length > 0
                    ? models.map(tsInterfaceToMarkdownString_1.tsInterfaceToMarkdownString).join("\n\n")
                    : undefined;
                interfacesMarkdownString = interfaces.length > 0
                    ? interfaces.map(tsInterfaceToMarkdownString_1.tsInterfaceToMarkdownString).join("\n\n")
                    : undefined;
                variablesMarkdownString = variables.length > 0
                    ? variables.map(tsVariableToMarkdownString_1.tsVariableToMarkdownString).join("\n\n")
                    : undefined;
                modelsMarkdownParse = modelsMarkdownString
                    ? (0, markdown_parse_js_1.mdToJsonParse)(modelsMarkdownString, "models")
                    : undefined;
                interfacesMarkdownParse = interfacesMarkdownString
                    ? (0, markdown_parse_js_1.mdToJsonParse)(interfacesMarkdownString, "interfaces")
                    : undefined;
                variablesMarkdownParse = variablesMarkdownString
                    ? (0, markdown_parse_js_1.mdToJsonParse)(variablesMarkdownString, "variables")
                    : undefined;
                modelsOutline = (0, bundleFolderWithMarkdown_1.makeOutlineMarkdownString)("Models", models.map(function (x) { return (0, exports.getMergedMarkdownOutlineUrl)(x.name); }));
                interfacesOutline = (0, bundleFolderWithMarkdown_1.makeOutlineMarkdownString)("Interfaces", interfaces.map(function (x) { return (0, exports.getMergedMarkdownOutlineUrl)(x.name); }));
                variablesOutline = (0, bundleFolderWithMarkdown_1.makeOutlineMarkdownString)("Variables", variables.map(function (x) { return (0, exports.getMergedMarkdownOutlineUrl)(x.name); }));
                completeOutlineMarkdownParse = (0, markdown_parse_js_1.mdToJsonParse)("".concat(docsOutline).concat(functionsOutline).concat(modelsOutline).concat(interfacesOutline).concat(variablesOutline), "outline");
                merged = (0, merge_1.mergeMarkdownParse)([
                    operationInfoMarkdownParse,
                    completeOutlineMarkdownParse,
                    docsMarkdownParse,
                    functionsMarkdownParse,
                    modelsMarkdownParse,
                    interfacesMarkdownParse,
                    variablesMarkdownParse,
                ].filter(js_util_1.notEmpty)).merged;
                returnString = undefined;
                if (returnType !== "parse") {
                    returnString = (0, markdown_parse_js_1.markdownParseToMarkdownString)(merged);
                }
                shouldSave = returnType === "save" || !returnType;
                if (!(shouldSave && returnString)) return [3 /*break*/, 13];
                return [4 /*yield*/, fs_util_1.fs.writeFile(fs_util_1.path.join(operationFolderPath, "README.md"), returnString, "utf8")];
            case 12:
                _o.sent();
                _o.label = 13;
            case 13:
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