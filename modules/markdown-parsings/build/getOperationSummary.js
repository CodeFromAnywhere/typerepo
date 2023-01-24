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
exports.getOperationSummary = void 0;
var get_path_1 = require("get-path");
var log_1 = require("log");
var database_1 = require("database");
var js_util_1 = require("js-util");
var fs_util_1 = require("fs-util");
var isConventionFileStatement_1 = require("./isConventionFileStatement");
var addDependantCount_1 = require("./addDependantCount");
var getMarkdownContents_1 = require("./getMarkdownContents");
/**
 * Summarises operation into useful information about it. Especially useful for generating docs.
 */
var getOperationSummary = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, operationName, projectRoot, operationFolderPath, operation, description, coreDependenciesString, operationDependenciesString, packageDependenciesString, docsPath, docs, imports, tsFunctions, exportedTsFunctions, variables, exportedVariables, interfaces, exportedInterfaces, dependantTsFunctions, dependantTsInterfaces, dependantTsVariables, sortedDependantCountArray, externalItems, internalItems, items, testItems, cliItems, summary;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                manualProjectRoot = config.manualProjectRoot, operationName = config.operationName;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    (0, log_1.log)("Projectroot not found", { type: "error" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, get_path_1.getOperationPath)(operationName, {
                        manualProjectRoot: manualProjectRoot,
                    })];
            case 1:
                operationFolderPath = _k.sent();
                if (!operationFolderPath) {
                    (0, log_1.log)("OperationFolder not found", { type: "error" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, database_1.db.get("Operation", { operationName: operationName })];
            case 2:
                operation = (_k.sent())[0];
                if (!operation) {
                    (0, log_1.log)("Operation not found", { type: "error" });
                    return [2 /*return*/];
                }
                description = (_a = operation.operation) === null || _a === void 0 ? void 0 : _a.markdown;
                coreDependenciesString = (0, js_util_1.noEmptyString)((_c = (_b = operation.operation) === null || _b === void 0 ? void 0 : _b.coreDependenciesIndexed) === null || _c === void 0 ? void 0 : _c.join(", ")) ||
                    "none";
                operationDependenciesString = (0, js_util_1.noEmptyString)((_e = (_d = operation.operation) === null || _d === void 0 ? void 0 : _d.operationDependenciesIndexed) === null || _e === void 0 ? void 0 : _e.join(", ")) || "none";
                packageDependenciesString = (0, js_util_1.noEmptyString)((_g = (_f = operation.operation) === null || _f === void 0 ? void 0 : _f.packageDependenciesIndexed) === null || _g === void 0 ? void 0 : _g.join(", ")) || "none";
                docsPath = fs_util_1.path.join(operationFolderPath, "docs");
                return [4 /*yield*/, (0, getMarkdownContents_1.getMarkdownContents)(docsPath)];
            case 3:
                docs = _k.sent();
                return [4 /*yield*/, database_1.db.get("TsImport")];
            case 4:
                imports = (_k.sent()).filter(function (x) { return x.operationName !== operationName; });
                return [4 /*yield*/, database_1.db.get("TsFunction", { operationName: operationName })];
            case 5:
                tsFunctions = (_k.sent()).filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.name === b.name; }));
                exportedTsFunctions = tsFunctions.filter(function (x) { return x.isExported; });
                return [4 /*yield*/, database_1.db.get("TsVariable", { operationName: operationName })];
            case 6:
                variables = _k.sent();
                exportedVariables = variables.filter(function (x) { return x.isExported; });
                return [4 /*yield*/, database_1.db.get("TsInterface", { operationName: operationName })];
            case 7:
                interfaces = (_k.sent()).filter(function (x) { return !x.name.startsWith("NamedParameters<"); });
                exportedInterfaces = interfaces.filter(function (x) { return x.isExported; });
                return [4 /*yield*/, Promise.all(exportedTsFunctions.map((0, addDependantCount_1.addDependantCount)("tsFunction", imports)))];
            case 8:
                dependantTsFunctions = _k.sent();
                return [4 /*yield*/, Promise.all(exportedInterfaces.map((0, addDependantCount_1.addDependantCount)("tsInterface", imports)))];
            case 9:
                dependantTsInterfaces = _k.sent();
                return [4 /*yield*/, Promise.all(exportedVariables.map((0, addDependantCount_1.addDependantCount)("tsVariable", imports)))];
            case 10:
                dependantTsVariables = _k.sent();
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
                items = [
                    tsFunctions.map(function (tsFunction) { return ({ tsFunction: tsFunction }); }),
                    interfaces.map(function (tsInterface) { return ({ tsInterface: tsInterface }); }),
                    variables.map(function (tsVariable) { return ({ tsVariable: tsVariable }); }),
                ].flat();
                testItems = items.filter(function (x) {
                    return (0, isConventionFileStatement_1.isConventionFileStatement)((x.tsFunction || x.tsInterface || x.tsVariable), "test");
                });
                cliItems = items.filter(function (x) {
                    return (0, isConventionFileStatement_1.isConventionFileStatement)((x.tsFunction || x.tsInterface || x.tsVariable), "cli");
                });
                summary = {
                    operationFolderPath: operationFolderPath,
                    operationName: operationName,
                    classification: (_h = operation.operation) === null || _h === void 0 ? void 0 : _h.classificationIndexed,
                    description: description,
                    size: (_j = operation.operation) === null || _j === void 0 ? void 0 : _j.sizeIndexed,
                    coreDependenciesString: coreDependenciesString,
                    operationDependenciesString: operationDependenciesString,
                    packageDependenciesString: packageDependenciesString,
                    docs: docs,
                    cliItems: cliItems,
                    testItems: testItems,
                    internalItems: internalItems,
                    externalItems: externalItems,
                };
                return [2 /*return*/, summary];
        }
    });
}); };
exports.getOperationSummary = getOperationSummary;
//# sourceMappingURL=getOperationSummary.js.map