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
exports.getSdkFunctionsPerClassification = void 0;
var database_1 = require("database");
var fs_util_1 = require("fs-util");
var get_package_json_1 = require("get-package-json");
var log_1 = require("log");
var get_path_1 = require("get-path");
var code_types_1 = require("code-types");
var find_all_dependency_operations_1 = require("find-all-dependency-operations");
var get_path_2 = require("get-path");
var js_util_1 = require("js-util");
var k_explore_1 = require("k-explore");
var tsFunctionIsIndexable_1 = require("./tsFunctionIsIndexable");
var tsFunctionIsSdkable_1 = require("./tsFunctionIsSdkable");
/**
 * returns all sdk functions grouped by operation classification
 */
var getSdkFunctionsPerClassification = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, projectRoot, sdkDependants, tsFunctions, exportedFunctions, operationFolders, operationClassificationObject, operationIsSdkableObject, _a, sdkFunctionsPerClassification;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, find_all_dependency_operations_1.findDependantsRecursively)("sdk")];
            case 1:
                sdkDependants = _b.sent();
                return [4 /*yield*/, database_1.db.get("TsFunction", { manualProjectRoot: manualProjectRoot })];
            case 2:
                tsFunctions = _b.sent();
                exportedFunctions = tsFunctions
                    .filter(function (x) { return x.isExported; })
                    .filter(tsFunctionIsIndexable_1.tsFunctionIsIndexable)
                    .filter(function (x) {
                    return x.operationName && !sdkDependants.includes(x.operationName);
                })
                    .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.name === b.name; }));
                console.log({ exportedFunctions: exportedFunctions.length });
                return [4 /*yield*/, (0, k_explore_1.exploreOperationFolders)({})];
            case 3:
                operationFolders = _b.sent();
                return [4 /*yield*/, (0, get_path_2.getOperationClassificationObject)()];
            case 4:
                operationClassificationObject = _b.sent();
                _a = js_util_1.mergeObjectsArray;
                return [4 /*yield*/, Promise.all(operationFolders.map(function (operationFolderPath) { return __awaiter(void 0, void 0, void 0, function () {
                        var packageJson, isSdkable, operationName;
                        var _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, (0, get_package_json_1.getPackageJson)({ operationFolderPath: operationFolderPath })];
                                case 1:
                                    packageJson = _c.sent();
                                    isSdkable = ((_b = packageJson === null || packageJson === void 0 ? void 0 : packageJson.operation) === null || _b === void 0 ? void 0 : _b.isNotSdkable) ? false : true;
                                    operationName = (0, fs_util_1.getLastFolder)(operationFolderPath);
                                    return [2 /*return*/, (_a = {}, _a[operationName] = isSdkable, _a)];
                            }
                        });
                    }); }))];
            case 5:
                operationIsSdkableObject = _a.apply(void 0, [_b.sent()]);
                sdkFunctionsPerClassification = (0, js_util_1.mergeObjectsArray)(code_types_1.operationClassificationConst.map(function (operationClassification) {
                    var _a;
                    var sdkFunctions = exportedFunctions
                        .filter(function (x) {
                        if (!x.operationName)
                            return false;
                        var isSdkable = operationIsSdkableObject[x.operationName];
                        return isSdkable;
                    })
                        .filter(function (x) {
                        return (0, tsFunctionIsSdkable_1.tsFunctionIsSdkable)(x, operationClassificationObject, operationClassification);
                    })
                        .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.name === b.name; }));
                    (0, log_1.log)("for ".concat(operationClassification, " we found ").concat(sdkFunctions.length, " functions"), { type: "debug" });
                    if (sdkFunctions.length === 0)
                        (0, log_1.log)("Warning: 0 functions found for ".concat(operationClassification, " operations"), { type: "debug" });
                    return _a = {}, _a[operationClassification] = sdkFunctions, _a;
                }));
                return [2 /*return*/, sdkFunctionsPerClassification];
        }
    });
}); };
exports.getSdkFunctionsPerClassification = getSdkFunctionsPerClassification;
//# sourceMappingURL=getSdkFunctionsPerClassification.js.map