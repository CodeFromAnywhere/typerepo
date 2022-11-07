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
exports.findAndUpsertTsInterfaces = void 0;
//monorepo
var database_1 = require("database");
var get_imported_dependencies_1 = require("get-imported-dependencies");
var js_util_1 = require("js-util");
// relative
var generateSchema_1 = require("./generateSchema");
var get_path_1 = require("get-path");
var ts_morph_util_1 = require("ts-morph-util");
var findAndUpsertTsInterfaces = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath, operationName, projectRoot, sourceFile, operationBasePath, project, namedAbsoluteImportNames, morphInterfaceInfo, morphTypeInfo, morphTypesAndInterfacesInfo, tsInterfaces, operationRelativeTypescriptFilePath, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filePath = config.filePath, operationName = config.operationName, projectRoot = config.projectRoot;
                sourceFile = config.sourceFile;
                operationBasePath = (0, get_path_1.findOperationBasePath)(filePath);
                if (!operationBasePath)
                    return [2 /*return*/];
                if (!sourceFile) {
                    project = (0, ts_morph_util_1.getTsMorphProject)(operationBasePath);
                    if (!project)
                        return [2 /*return*/];
                    sourceFile = project.getSourceFile(filePath);
                }
                if (!sourceFile) {
                    console.log("Filepath not existing");
                    return [2 /*return*/];
                }
                namedAbsoluteImportNames = sourceFile
                    .getImportDeclarations()
                    .map(function (importDeclaration) {
                    var module = String(importDeclaration.getModuleSpecifier().getLiteralText());
                    if ((0, get_imported_dependencies_1.isAbsoluteImport)(module)) {
                        var namedImports = importDeclaration
                            .getNamedImports()
                            .map(function (x) { return x.getName(); });
                        return namedImports;
                    }
                })
                    .filter(js_util_1.notEmpty)
                    .flat();
                morphInterfaceInfo = sourceFile
                    .getInterfaces()
                    .map(function (x) { return ({
                    hasGeneric: (0, ts_morph_util_1.getHasGeneric)(x),
                    raw: x.getFullText(),
                    name: x.getName(),
                    isExported: x.isExported(),
                    description: x
                        .getLeadingCommentRanges()
                        .map(function (x) { return x.getText(); })
                        .join("\n\n"),
                    extensions: x.getExtends().map(function (x) { return x.getText(); }),
                }); });
                morphTypeInfo = sourceFile
                    .getTypeAliases()
                    .map(function (x) {
                    var isExported = x.isExported();
                    var name = x.getName();
                    return {
                        hasGeneric: (0, ts_morph_util_1.getHasGeneric)(x),
                        raw: x.getFullText(),
                        isExported: isExported,
                        description: x
                            .getLeadingCommentRanges()
                            .map(function (x) { return x.getText(); })
                            .join("\n\n"),
                        name: name,
                        extensions: [],
                    };
                });
                morphTypesAndInterfacesInfo = morphTypeInfo.concat(morphInterfaceInfo);
                return [4 /*yield*/, (0, generateSchema_1.generateSchema)(filePath, morphTypesAndInterfacesInfo, namedAbsoluteImportNames)];
            case 1:
                tsInterfaces = _a.sent();
                operationRelativeTypescriptFilePath = (0, get_path_1.getOperationRelativePath)(filePath, operationBasePath);
                // console.log({
                //   morphTypeNames: morphTypesAndInterfacesInfo.map((x) => x.name),
                //   namedAbsoluteImportNames,
                //   tsInterfacesLength: tsInterfaces.length,
                // });
                // @ts-ignore
                return [4 /*yield*/, database_1.db.remove("TsInterface", function (i) {
                        return i.operationRelativeTypescriptFilePath ===
                            operationRelativeTypescriptFilePath &&
                            !tsInterfaces.map(function (x) { return x.name; }).includes(i.name);
                    }, { operationName: operationName, manualProjectRoot: projectRoot })];
            case 2:
                // console.log({
                //   morphTypeNames: morphTypesAndInterfacesInfo.map((x) => x.name),
                //   namedAbsoluteImportNames,
                //   tsInterfacesLength: tsInterfaces.length,
                // });
                // @ts-ignore
                _a.sent();
                return [4 /*yield*/, database_1.db.upsert("TsInterface", tsInterfaces, {
                        operationName: operationName,
                        removeUntouched: true,
                        manualProjectRoot: projectRoot,
                    })];
            case 3:
                result = _a.sent();
                // log(`Done`, { type: "debug" }, result);
                return [2 /*return*/, tsInterfaces];
        }
    });
}); };
exports.findAndUpsertTsInterfaces = findAndUpsertTsInterfaces;
//# sourceMappingURL=findAndUpsertTsInterfaces.js.map