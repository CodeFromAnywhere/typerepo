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
exports.generateFunctionPathsSdk = void 0;
var get_path_1 = require("get-path");
var fs_util_1 = require("fs-util");
var new_template_1 = require("new-template");
var getSdkDescription_1 = require("./getSdkDescription");
var database_1 = require("database");
var js_util_1 = require("js-util");
/**
 * `sdk-function-paths` indexes all operations and builds an object containing all operations.
 */
var generateFunctionPathsSdk = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var skipYarnInstall, dryrun, manualProjectRoot, projectRoot, tsFunctions, functionPathsObject, operationObjectString, operationConfig, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                dryrun = config === null || config === void 0 ? void 0 : config.dryrun;
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, database_1.db.get("TsFunction", { manualProjectRoot: manualProjectRoot })];
            case 1:
                tsFunctions = _c.sent();
                functionPathsObject = (0, js_util_1.mergeObjectsArray)(tsFunctions
                    .map(function (tsFunction) {
                    var _a;
                    var projectRelativePath = tsFunction.projectRelativePath;
                    var exists = fs_util_1.fs.existsSync(fs_util_1.path.join(projectRoot, projectRelativePath));
                    if (!exists)
                        return;
                    return _a = {}, _a[tsFunction.name] = projectRelativePath, _a;
                })
                    .filter(js_util_1.notEmpty));
                operationObjectString = "export const sdkFunctionPaths = ".concat(JSON.stringify(functionPathsObject, null, 2), ";");
                _a = new_template_1.getOperationConfig;
                _b = ["sdk-function-paths"];
                return [4 /*yield*/, (0, getSdkDescription_1.getSdkDescription)("sdk-function-paths")];
            case 2: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.sent()]))];
            case 3:
                operationConfig = _c.sent();
                return [4 /*yield*/, (0, new_template_1.newOperationWithFiles)(operationConfig, { "src/sdk-function-paths.ts": operationObjectString }, { overwriteIfExists: true, skipYarnInstall: skipYarnInstall, manualProjectRoot: manualProjectRoot, dryrun: dryrun })];
            case 4:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.generateFunctionPathsSdk = generateFunctionPathsSdk;
//# sourceMappingURL=generateFunctionPathsSdk.js.map