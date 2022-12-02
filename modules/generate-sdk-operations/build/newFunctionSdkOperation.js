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
exports.newFunctionSdkOperation = void 0;
var log_1 = require("log");
var new_template_1 = require("new-template");
var getSdkDescription_1 = require("./getSdkDescription");
/**
 * Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised
 */
var newFunctionSdkOperation = function (operationName, tsFunctions, config) { return __awaiter(void 0, void 0, void 0, function () {
    var skipYarnInstall, manualProjectRoot, dryrun, importsString, sdkConstString, sdkTypeString, sdkTypescriptFileString, description, filesObject, result;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                (0, log_1.log)("".concat(operationName, " should contain ").concat(tsFunctions.length, " functions"), {
                    type: "debug",
                });
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                dryrun = config === null || config === void 0 ? void 0 : config.dryrun;
                importsString = tsFunctions
                    .map(function (fn) { return "import { ".concat(fn.name, " } from \"").concat(fn.operationName, "\";"); })
                    .join("\n");
                sdkConstString = "export const sdk = { ".concat(tsFunctions
                    .map(function (fn) { return "".concat(fn.name); })
                    .join(",\n"), "};");
                sdkTypeString = "export type SdkType = typeof sdk;";
                sdkTypescriptFileString = "".concat(importsString, "\n\n").concat(sdkConstString, "\n\n").concat(sdkTypeString);
                return [4 /*yield*/, (0, getSdkDescription_1.getSdkDescription)(operationName)];
            case 1:
                description = _b.sent();
                filesObject = (_a = {}, _a["src/".concat(operationName, ".ts")] = sdkTypescriptFileString, _a);
                return [4 /*yield*/, (0, new_template_1.newOperationWithFiles)(operationName, description, filesObject, {
                        overwriteIfExists: true,
                        manualProjectRoot: manualProjectRoot,
                        skipYarnInstall: skipYarnInstall,
                        dryrun: dryrun,
                    })];
            case 2:
                result = _b.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.newFunctionSdkOperation = newFunctionSdkOperation;
//# sourceMappingURL=newFunctionSdkOperation.js.map