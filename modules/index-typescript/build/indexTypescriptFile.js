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
exports.indexTypescriptFile = void 0;
// external
var fs_util_1 = require("fs-util");
//monorepo
var database_1 = require("database");
var log_1 = require("log");
var operation_util_1 = require("operation-util");
var path_util_1 = require("path-util");
// relative
var getAllComments_1 = require("./getAllComments");
var getTsStatements_1 = require("./getTsStatements");
var findAndUpsertTsInterfaces_1 = require("./findAndUpsertTsInterfaces");
var indexTypescriptFile = function (project, file, projectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var problems, filePath, operationName, operationRelativeTypescriptFilePath, fileContent, sourceFile, problem, tsInterfaces, tsLintWarnings, mainComment, pathMetaData, _a, tsFunctions, tsVariables, topLevelComments, functionComments, interfaceComments, variableComments, tsComments;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                problems = [];
                filePath = file.filePath, operationName = file.operationName, operationRelativeTypescriptFilePath = file.operationRelativeTypescriptFilePath;
                if (!operationName)
                    return [2 /*return*/];
                return [4 /*yield*/, fs_util_1.fs.readFile(filePath, "utf8")];
            case 1:
                fileContent = _b.sent();
                sourceFile = project.getSourceFile(filePath);
                if (!!sourceFile) return [3 /*break*/, 3];
                problem = "couldn't load file ".concat(filePath);
                problems.push(problem);
                return [4 /*yield*/, (0, operation_util_1.writeKeyToOperationIndexJson)(filePath, "indexErrors", problems)];
            case 2:
                _b.sent();
                (0, log_1.log)(problem, { type: "error" });
                return [2 /*return*/];
            case 3: return [4 /*yield*/, (0, findAndUpsertTsInterfaces_1.findAndUpsertTsInterfaces)({
                    filePath: filePath,
                    sourceFile: sourceFile,
                    operationName: operationName,
                    projectRoot: projectRoot,
                })];
            case 4:
                tsInterfaces = _b.sent();
                if (!tsInterfaces) {
                    (0, log_1.log)("Shouldn't happen but tsInterfaces is undefined here...");
                    return [2 /*return*/];
                }
                tsLintWarnings = [];
                mainComment = undefined;
                return [4 /*yield*/, (0, path_util_1.calculatePathMetaData)(filePath)];
            case 5:
                pathMetaData = _b.sent();
                return [4 /*yield*/, (0, getTsStatements_1.getTsStatements)(sourceFile, tsInterfaces, operationRelativeTypescriptFilePath, fileContent)];
            case 6:
                _a = _b.sent(), tsFunctions = _a.tsFunctions, tsVariables = _a.tsVariables;
                topLevelComments = sourceFile
                    .getStatementsWithComments()
                    .map(function (x) {
                    var comments = (0, getAllComments_1.getAllComments)(x, fileContent, operationRelativeTypescriptFilePath);
                    return comments;
                })
                    .flat();
                functionComments = tsFunctions
                    .map(function (f) { return f.commentsInside; })
                    .flat();
                interfaceComments = tsInterfaces
                    .map(function (f) { return f.commentsInside; })
                    .flat();
                variableComments = tsVariables
                    .map(function (f) { return f.comments; })
                    .flat();
                tsComments = [
                    topLevelComments,
                    functionComments,
                    interfaceComments,
                    variableComments,
                ].flat();
                // Inserting all results into the database...
                // @ts-ignore
                return [4 /*yield*/, database_1.db.remove("TsFunction", function (fn) {
                        return fn.operationRelativeTypescriptFilePath ===
                            operationRelativeTypescriptFilePath &&
                            !tsFunctions.map(function (x) { return x.name; }).includes(fn.name);
                    }, { operationName: operationName, manualProjectRoot: projectRoot })];
            case 7:
                // Inserting all results into the database...
                // @ts-ignore
                _b.sent();
                // @ts-ignore
                return [4 /*yield*/, database_1.db.upsert("TsFunction", tsFunctions, {
                        operationName: operationName,
                        manualProjectRoot: projectRoot,
                    })];
            case 8:
                // @ts-ignore
                _b.sent();
                return [4 /*yield*/, database_1.db.remove("TsVariable", function (v) {
                        return v.operationRelativeTypescriptFilePath ===
                            operationRelativeTypescriptFilePath &&
                            !tsVariables.map(function (x) { return x.name; }).includes(v.name);
                    }, { operationName: operationName, manualProjectRoot: projectRoot })];
            case 9:
                _b.sent();
                return [4 /*yield*/, database_1.db.upsert("TsVariable", tsVariables, {
                        operationName: operationName,
                        removeUntouched: true,
                        manualProjectRoot: projectRoot,
                    })];
            case 10:
                _b.sent();
                return [4 /*yield*/, database_1.db.remove("TsComment", function (c) {
                        return c.operationRelativeTypescriptFilePath ===
                            operationRelativeTypescriptFilePath;
                    }, { operationName: operationName, manualProjectRoot: projectRoot })];
            case 11:
                _b.sent();
                return [4 /*yield*/, database_1.db.upsert("TsComment", tsComments, {
                        operationName: operationName,
                        removeUntouched: true,
                        manualProjectRoot: projectRoot,
                    })];
            case 12:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.indexTypescriptFile = indexTypescriptFile;
//# sourceMappingURL=indexTypescriptFile.js.map