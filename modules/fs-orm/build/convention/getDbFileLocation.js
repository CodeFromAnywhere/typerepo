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
exports.getDbFileLocation = void 0;
var fs_util_js_1 = require("fs-util-js");
var fs_util_1 = require("fs-util");
var getLocationPattern_1 = require("./getLocationPattern");
var log_1 = require("log");
var getDatabaseRootFolder_1 = require("./getDatabaseRootFolder");
/**
 * Used by `groupByFile`, which is used for `set` (and thus, also `update`) and `upsert`: determines the new file location.
 *
 * Applies the convention to get the db-file-location of an item
 *
 * Based on the merged config:
 *
 * - if `operationRelativePath` is specified, gets a filePath in the operation
 * - if `projectRelativePath` is specified, gets a filepath in the project
 * - otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)
 *
 * Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.
 *
 * NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...
 */
var getDbFileLocation = function (
/**
 * The ModelLocation properties in the item are completely ignored.
 *
 * Only the ID, slug and categoryStackCalculated are used to determine the exact file the item should be stored in.
 *
 * NB: storedItem MUST have a slug or ID, but this should probably be generated before this funciton
 */
storedItem, 
/**
 * Should be the operationName from the modellocation of the actual item.
 *
 * If it is given, this will take priority over the merged query config.
 */
operationName, mergedConfig, modelName) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, realOperationName, rootFolder, isSingleItemStorageMethod, filename, relativeFolder, dbModelFolderRelativeLocation, pattern, absolutePath, operationRelativePath, projectRelativePath, dbFileLocation;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                projectRoot = mergedConfig.manualProjectRoot || mergedConfig.projectRoot;
                if (!projectRoot) {
                    (0, log_1.log)("No project root", { type: "error" });
                    return [2 /*return*/];
                }
                realOperationName = operationName || mergedConfig.operationName;
                return [4 /*yield*/, (0, getDatabaseRootFolder_1.getDatabaseRootFolder)(realOperationName, mergedConfig.manualProjectRoot)];
            case 1:
                rootFolder = _c.sent();
                if (!rootFolder)
                    return [2 /*return*/];
                isSingleItemStorageMethod = mergedConfig.dbStorageMethod === "jsonSingle" ||
                    mergedConfig.dbStorageMethod === "markdown";
                filename = storedItem.slug || storedItem.id;
                relativeFolder = (_b = (_a = storedItem.categoryStackCalculated) === null || _a === void 0 ? void 0 : _a.join) === null || _b === void 0 ? void 0 : _b.call(_a, "/");
                dbModelFolderRelativeLocation = isSingleItemStorageMethod && relativeFolder
                    ? fs_util_1.path.join(relativeFolder, filename)
                    : filename;
                pattern = (0, getLocationPattern_1.getLocationPattern)(mergedConfig.dbStorageMethod, modelName, mergedConfig);
                if (!pattern)
                    return [2 /*return*/];
                absolutePath = fs_util_1.path.join(rootFolder, pattern.replace("*", dbModelFolderRelativeLocation));
                if (!absolutePath)
                    return [2 /*return*/];
                operationRelativePath = (0, fs_util_js_1.makeRelative)(absolutePath, rootFolder);
                projectRelativePath = (0, fs_util_js_1.makeRelative)(absolutePath, projectRoot);
                dbFileLocation = {
                    modelName: modelName,
                    absolutePath: absolutePath,
                    operationName: realOperationName || null,
                    projectRelativePath: projectRelativePath,
                    operationRelativePath: operationRelativePath,
                };
                return [2 /*return*/, dbFileLocation];
        }
    });
}); };
exports.getDbFileLocation = getDbFileLocation;
//# sourceMappingURL=getDbFileLocation.js.map