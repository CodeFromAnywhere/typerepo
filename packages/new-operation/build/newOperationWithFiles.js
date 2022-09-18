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
exports.newOperationWithFiles = void 0;
var child_process_1 = require("child_process");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var js_util_1 = require("js-util");
var rebuild_operation_1 = require("rebuild-operation");
var set_json_key_1 = require("set-json-key");
var filename_conventions_1 = require("filename-conventions");
var newOperation_1 = require("./newOperation");
var database_1 = require("database");
var log_1 = require("log");
/**
 * Creates a new operation with files with content
 *
 * Returns the final operation base path (or undefined if something went wrong)
 *
 * NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!
 *
 * TODO: Remove the buggyness
 */
var newOperationWithFiles = function (operationConfig, 
/**
 * NB: relative paths must be relative to OPERATION ROOT, not src root!
 */
srcFileContentObject, config) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, isSensible, defaultDestinationPath, destinationPath, indexFileContent, srcFileContentObjectWithIndex, actualBasePath, wishedBasePath, isOperationNew, shouldOverwrite, finalOperationBasePath, operationFolder, noBuild, isSuccesful, packageJsonPath, hasAvailablePackageJson, _a, newItem, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = (config === null || config === void 0 ? void 0 : config.manualProjectRoot) || (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    (0, log_1.log)("Not found projectroot", { type: "error" });
                    return [2 /*return*/];
                }
                isSensible = (0, get_path_1.isSensibleProject)(projectRoot);
                defaultDestinationPath = isSensible
                    ? fs_util_1.path.join(projectRoot, "packages")
                    : fs_util_1.path.join(projectRoot, filename_conventions_1.projectRelativeGeneratedOperationsFolder);
                destinationPath = (config === null || config === void 0 ? void 0 : config.destinationPath) || defaultDestinationPath;
                indexFileContent = Object.keys(srcFileContentObject)
                    .map(function (operationRelativeTypescriptFilePath) {
                    return "export * from \"./".concat((0, get_path_1.getSrcRelativeFileId)(operationRelativeTypescriptFilePath), "\";");
                })
                    .join("\n");
                srcFileContentObjectWithIndex = __assign(__assign({}, srcFileContentObject), { "src/index.ts": indexFileContent });
                if (!(config === null || config === void 0 ? void 0 : config.dryrun)) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.all(Object.keys(srcFileContentObject).map(function (operationRelativePath) {
                        var assetsPath = fs_util_1.path.join(__dirname, "..", "assets", operationRelativePath);
                        console.log("written to ".concat(assetsPath));
                        return (0, fs_util_1.writeStringToFile)(assetsPath, srcFileContentObject[operationRelativePath]);
                    }))];
            case 1:
                _b.sent();
                return [2 /*return*/];
            case 2: return [4 /*yield*/, (0, newOperation_1.newOperation)(operationConfig.name, {
                    destinationPath: destinationPath,
                    description: operationConfig.markdown,
                    manualProjectRoot: projectRoot,
                })];
            case 3:
                actualBasePath = _b.sent();
                if (!actualBasePath) {
                    (0, log_1.log)("Failed creating new operation", { type: "error" });
                    return [2 /*return*/];
                }
                if (!fs_util_1.fs.existsSync(actualBasePath)) {
                    (0, log_1.log)("actualBasePath does not exist: ".concat(actualBasePath), { type: "error" });
                    return [2 /*return*/];
                }
                wishedBasePath = fs_util_1.path.join(destinationPath, operationConfig.name);
                // 4. write files to src
                return [4 /*yield*/, (0, js_util_1.objectMapAsync)(srcFileContentObjectWithIndex, function (operationRelativeTypescriptFilePath, content) { return __awaiter(void 0, void 0, void 0, function () {
                        var srcPath;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    srcPath = fs_util_1.path.join(actualBasePath, operationRelativeTypescriptFilePath);
                                    return [4 /*yield*/, (0, fs_util_1.writeStringToFile)(srcPath, content)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 4:
                // 4. write files to src
                _b.sent();
                isOperationNew = wishedBasePath !== actualBasePath;
                shouldOverwrite = isOperationNew &&
                    (config === null || config === void 0 ? void 0 : config.overwriteIfExists) &&
                    fs_util_1.fs.existsSync(wishedBasePath);
                finalOperationBasePath = shouldOverwrite
                    ? wishedBasePath
                    : actualBasePath;
                operationFolder = (0, fs_util_1.getLastFolder)(finalOperationBasePath);
                // 6. yarn build there
                if (!(config === null || config === void 0 ? void 0 : config.skipYarnInstall)) {
                    // in case this operation didn't exist before, run `yarn --offline`
                    // NB: this assumes we already have node_modules and the new operation has no weird new dependencies
                    (0, child_process_1.spawnSync)("yarn --offline", {
                        cwd: actualBasePath,
                        encoding: "utf8",
                        stdio: "inherit",
                        shell: true,
                    });
                }
                noBuild = config === null || config === void 0 ? void 0 : config.skipYarnBuild;
                if (!!noBuild) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, rebuild_operation_1.yarnBuild)(actualBasePath)];
            case 5:
                isSuccesful = _b.sent();
                if (!isSuccesful) {
                    (0, log_1.log)("Building failed", { type: "error" });
                    return [2 /*return*/];
                }
                _b.label = 6;
            case 6:
                if (!shouldOverwrite) return [3 /*break*/, 13];
                packageJsonPath = fs_util_1.path.join(actualBasePath, "package.json");
                _a = fs_util_1.fs.existsSync(packageJsonPath);
                if (!_a) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, fs_util_1.canRead)(packageJsonPath)];
            case 7:
                _a = (_b.sent());
                _b.label = 8;
            case 8:
                hasAvailablePackageJson = _a;
                if (!hasAvailablePackageJson) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, set_json_key_1.setJsonKey)({
                        jsonPath: packageJsonPath,
                        keyLocation: "name",
                        value: operationConfig.name,
                    })];
            case 9:
                _b.sent();
                if (!fs_util_1.fs.existsSync(wishedBasePath)) return [3 /*break*/, 11];
                //then remove the original operation
                return [4 /*yield*/, fs_util_1.fs.rm(wishedBasePath, { recursive: true })];
            case 10:
                //then remove the original operation
                _b.sent();
                _b.label = 11;
            case 11:
                if (!fs_util_1.fs.existsSync(actualBasePath)) return [3 /*break*/, 13];
                // then rename the new operation to the original operation path
                return [4 /*yield*/, fs_util_1.fs.rename(actualBasePath, wishedBasePath)];
            case 12:
                // then rename the new operation to the original operation path
                _b.sent();
                _b.label = 13;
            case 13:
                if (!isOperationNew) return [3 /*break*/, 15];
                newItem = __assign(__assign({}, operationConfig), { operationName: operationFolder });
                return [4 /*yield*/, database_1.db.upsert("OperationConfig", newItem, {
                        operationName: operationFolder,
                        manualProjectRoot: projectRoot,
                    })];
            case 14:
                result = _b.sent();
                if (!result.isSuccesful) {
                    (0, log_1.log)("Something went wrong pushing the operationconfig", {
                        type: "warning",
                    });
                    console.log({ result: result });
                }
                _b.label = 15;
            case 15: return [2 /*return*/, finalOperationBasePath];
        }
    });
}); };
exports.newOperationWithFiles = newOperationWithFiles;
//# sourceMappingURL=newOperationWithFiles.js.map