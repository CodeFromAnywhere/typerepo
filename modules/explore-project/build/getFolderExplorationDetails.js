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
exports.getFolderExplorationDetails = void 0;
var path_util_1 = require("path-util");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var read_markdown_file_1 = require("read-markdown-file");
var read_typescript_file_1 = require("read-typescript-file");
var database_1 = require("database");
var get_path_2 = require("get-path");
var getFolderExplorationDetails = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var name, path, type, hasCommentTypes, interfaceIsDbModel, sort, typeIndexType, projectRoot, absolutePath, operationBasePath, operationFolderName, folderExplorationInterface, isFileOrFolderType, pathMetaData, _a, needsFilePath, typescriptIndex, _b, markdownPath, markdown, details, tsFunction, tsInterface, tsVariable;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                name = config.name, path = config.path, type = config.type, hasCommentTypes = config.hasCommentTypes, interfaceIsDbModel = config.interfaceIsDbModel, sort = config.sort, typeIndexType = config.typeIndexType;
                projectRoot = (0, get_path_2.getProjectRoot)();
                if (!projectRoot) {
                    console.log("getFolderExplorationDetails: Projectroot not found");
                    process.exit(1);
                }
                absolutePath = fs_util_1.path.join(projectRoot, path);
                operationBasePath = (0, get_path_1.findOperationBasePath)(absolutePath);
                operationFolderName = operationBasePath
                    ? (0, fs_util_1.getLastFolder)(operationBasePath)
                    : undefined;
                return [4 /*yield*/, database_1.db.get("TsInterface", {
                        operationName: "code-types",
                    })];
            case 1:
                folderExplorationInterface = (_c.sent()).filter(function (x) { return x.operationRelativeTypescriptFilePath === "src/FolderExploration.ts"; });
                isFileOrFolderType = [
                    "folder",
                    "operation",
                    "operationFolder",
                    "typescript",
                ].includes(type);
                if (!isFileOrFolderType) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, path_util_1.calculatePathMetaData)(absolutePath)];
            case 2:
                _a = _c.sent();
                return [3 /*break*/, 4];
            case 3:
                _a = undefined;
                _c.label = 4;
            case 4:
                pathMetaData = _a;
                needsFilePath = !!operationFolderName && absolutePath !== operationBasePath;
                if (!(isFileOrFolderType && typeIndexType !== undefined)) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, read_typescript_file_1.getFolderTypescriptIndex)({
                        filePath: needsFilePath ? absolutePath : undefined,
                        basePath: !needsFilePath ? absolutePath : undefined,
                        filter: { hasCommentTypes: hasCommentTypes, interfaceIsDbModel: interfaceIsDbModel },
                        sort: sort,
                        type: typeIndexType,
                    })];
            case 5:
                _b = _c.sent();
                return [3 /*break*/, 7];
            case 6:
                _b = null;
                _c.label = 7;
            case 7:
                typescriptIndex = _b;
                if (!(type === "folder")) return [3 /*break*/, 8];
                return [2 /*return*/, __assign(__assign({ index: folderExplorationInterface }, typescriptIndex), { pathMetaData: pathMetaData })];
            case 8:
                if (!(type === "operationFolder")) return [3 /*break*/, 9];
                return [2 /*return*/, __assign(__assign({ index: folderExplorationInterface }, typescriptIndex), { pathMetaData: pathMetaData })];
            case 9:
                if (!(type === "operation" && operationBasePath)) return [3 /*break*/, 10];
                return [2 /*return*/, __assign(__assign({ index: folderExplorationInterface }, typescriptIndex), { pathMetaData: pathMetaData })];
            case 10:
                if (!(type === "markdown")) return [3 /*break*/, 12];
                markdownPath = fs_util_1.path.join(projectRoot, path);
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(markdownPath)];
            case 11:
                markdown = _c.sent();
                return [2 /*return*/, {
                        index: folderExplorationInterface,
                        markdown: markdown || undefined,
                        success: !!markdown,
                        response: markdown ? undefined : "reading markdown file failed",
                    }];
            case 12:
                if (!(type === "typescript")) return [3 /*break*/, 13];
                details = typescriptIndex || {
                    success: false,
                    response: "reading typescript file failed",
                };
                return [2 /*return*/, __assign(__assign({}, details), { index: folderExplorationInterface, pathMetaData: pathMetaData })];
            case 13:
                if (!(type === "function")) return [3 /*break*/, 15];
                return [4 /*yield*/, database_1.db.get("TsFunction", { operationName: operationFolderName })];
            case 14:
                tsFunction = (_c.sent()).find(function (x) { return x.name === name; });
                return [2 /*return*/, {
                        tsFunctions: tsFunction ? [tsFunction] : undefined,
                        index: folderExplorationInterface,
                    }];
            case 15:
                if (!(type === "interface")) return [3 /*break*/, 17];
                return [4 /*yield*/, database_1.db.get("TsInterface", { operationName: operationFolderName })];
            case 16:
                tsInterface = (_c.sent()).find(function (x) { return x.name === name; });
                return [2 /*return*/, {
                        tsInterfaces: tsInterface ? [tsInterface] : undefined,
                        index: folderExplorationInterface,
                    }];
            case 17:
                if (!(type === "variable")) return [3 /*break*/, 19];
                return [4 /*yield*/, database_1.db.get("TsVariable", { operationName: operationFolderName })];
            case 18:
                tsVariable = (_c.sent()).find(function (x) { return x.name === name; });
                return [2 /*return*/, {
                        tsVariables: tsVariable ? [tsVariable] : undefined,
                        index: folderExplorationInterface,
                    }];
            case 19: 
            // Should never happen if all ifs  return....
            return [2 /*return*/, {
                    index: folderExplorationInterface,
                    success: false,
                    response: "getFolderExplorationDetails: Couldn't understand your input: ".concat(JSON.stringify({
                        path: path,
                        type: type,
                        name: name,
                    })),
                }];
        }
    });
}); };
exports.getFolderExplorationDetails = getFolderExplorationDetails;
//# sourceMappingURL=getFolderExplorationDetails.js.map