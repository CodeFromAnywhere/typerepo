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
exports.generateSdkOperations = void 0;
// global
var child_process_1 = require("child_process");
var get_path_1 = require("get-path");
// relative
var generateEnvSdks_1 = require("./generateEnvSdks");
var generateDbSdk_1 = require("./generateDbSdk");
var generateFunctionSdks_1 = require("./generateFunctionSdks");
var generateOperationsSdk_1 = require("./generateOperationsSdk");
var path_sdks_1 = require("./path-sdks");
/**
(re)generates all sdk operations for any project
 */
var generateSdkOperations = function (
/**
 * if not provided, will not generate env-sdks
 */
bundleConfig, config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, projectRoot, yarnInstallAfter, yarnInstallBefore, dryrun, promises, result, error;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                yarnInstallAfter = config === null || config === void 0 ? void 0 : config.yarnInstallAfter;
                yarnInstallBefore = config === null || config === void 0 ? void 0 : config.yarnInstallBefore;
                dryrun = config === null || config === void 0 ? void 0 : config.dryrun;
                if (!projectRoot) {
                    return [2 /*return*/, false];
                }
                promises = [
                    (0, generateOperationsSdk_1.generateOperationsSdk)({
                        manualProjectRoot: manualProjectRoot,
                        dryrun: dryrun,
                    }),
                    (0, path_sdks_1.generateFunctionPathsSdk)({
                        manualProjectRoot: manualProjectRoot,
                        dryrun: dryrun,
                    }),
                    (0, path_sdks_1.generateInterfacePathsSdk)({ manualProjectRoot: manualProjectRoot, dryrun: dryrun }),
                    (0, generateDbSdk_1.generateDbSdk)({
                        manualProjectRoot: manualProjectRoot,
                        skipYarnInstall: yarnInstallAfter,
                        dryrun: dryrun,
                    }),
                    (0, generateFunctionSdks_1.generateFunctionSdks)({
                        manualProjectRoot: manualProjectRoot,
                        skipYarnInstall: yarnInstallAfter,
                        dryrun: dryrun,
                    }),
                    bundleConfig
                        ? (0, generateEnvSdks_1.generateEnvSdks)(bundleConfig, {
                            manualProjectRoot: manualProjectRoot,
                            skipYarnInstall: yarnInstallAfter,
                            dryrun: dryrun,
                        })
                        : undefined,
                ];
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                _a.sent();
                if (yarnInstallAfter) {
                    process.stdout.write("Installing repo ");
                    try {
                        result = (0, child_process_1.execSync)("yarn --prefer-offline --ignore-engines", {
                            cwd: projectRoot,
                            encoding: "utf8",
                            stdio: "pipe",
                        });
                        console.log("???");
                        return [2 /*return*/, true];
                    }
                    catch (e) {
                        console.log("???");
                        error = e;
                        console.log("Could not install:", error);
                        return [2 /*return*/, false];
                    }
                }
                return [2 /*return*/, true];
        }
    });
}); };
exports.generateSdkOperations = generateSdkOperations;
//# sourceMappingURL=generateSdkOperations.js.map