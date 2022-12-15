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
exports.cleanupTsDatabase = exports.shouldDeleteTsModel = void 0;
var get_package_source_paths_1 = require("get-package-source-paths");
var database_1 = require("database");
var get_path_1 = require("get-path");
var code_types_1 = require("code-types");
var shouldDeleteTsModel = function (tsModel, operationName, operationRelativePaths) {
    if (!tsModel.operationName) {
        // console.log("no operationaName");
        return true;
    }
    if (tsModel.operationName !== operationName) {
        // console.log("wrong operationName");
        return true;
    }
    if (!tsModel.operationRelativePath) {
        //   console.log("no operationRelativePath");
        return true;
    }
    if (!operationRelativePaths.includes(tsModel.operationRelativeTypescriptFilePath)) {
        // console.log("no correct operationRelativeTypescriptFilePath");
        return true;
    }
    return false;
};
exports.shouldDeleteTsModel = shouldDeleteTsModel;
/**
 * From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.
 */
var cleanupTsDatabase = function (operationName, manualProjectRoot) { return __awaiter(void 0, void 0, void 0, function () {
    var operationBasePath, operationRelativePaths, removeResults, totalRemoved;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, get_path_1.getOperationPath)(operationName)];
            case 1:
                operationBasePath = _a.sent();
                //console.log({ operationBasePath });
                if (!operationBasePath)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, get_package_source_paths_1.getPackageSourcePaths)({ operationBasePath: operationBasePath })];
            case 2:
                operationRelativePaths = (_a.sent()).map(function (absolutePath) {
                    return (0, get_path_1.getOperationRelativePath)(absolutePath, operationBasePath);
                });
                return [4 /*yield*/, Promise.all(code_types_1.typescriptIndexModels.map(function (modelName) {
                        return database_1.db.remove(modelName, function (model) {
                            var shouldRemove = (0, exports.shouldDeleteTsModel)(model, operationName, operationRelativePaths);
                            /*
                            if (shouldRemove) {
                              console.log({
                                modelName,
                                operationRelativePaths,
                                model: model.name,
                                shouldRemove,
                                ts: model.operationRelativeTypescriptFilePath,
                              });
                            }*/
                            return shouldRemove;
                        }, { operationName: operationName, manualProjectRoot: manualProjectRoot });
                    }))];
            case 3:
                removeResults = _a.sent();
                totalRemoved = removeResults.reduce(function (previous, current) { return previous + (current.amountRemoved || 0); }, 0);
                return [2 /*return*/, {
                        amountRemoved: totalRemoved,
                    }];
        }
    });
}); };
exports.cleanupTsDatabase = cleanupTsDatabase;
//# sourceMappingURL=cleanupTsDatabase.js.map