#!/usr/bin/env node
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
exports.generateDbSdk = void 0;
var js_util_1 = require("js-util");
var new_template_1 = require("new-template");
var getSdkDescription_1 = require("./getSdkDescription");
var rebuild_operation_1 = require("rebuild-operation");
var generateDbSdk = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, skipYarnInstall, dryrun, allDbModels, typeImportsString, exportDbTypesString, exportDbKeysString, exportDbModelEnumString, exportModelQueryConfigString, indexationString, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                manualProjectRoot = config === null || config === void 0 ? void 0 : config.manualProjectRoot;
                skipYarnInstall = config === null || config === void 0 ? void 0 : config.skipYarnInstall;
                dryrun = config === null || config === void 0 ? void 0 : config.dryrun;
                return [4 /*yield*/, (0, rebuild_operation_1.getAllDbModels)(manualProjectRoot)];
            case 1:
                allDbModels = _c.sent();
                typeImportsString = allDbModels
                    .map(function (tsInterface) {
                    return "import type { ".concat(tsInterface.name, " } from \"").concat(tsInterface.operationName, "\";");
                })
                    .filter(js_util_1.notEmpty)
                    .join("\n")
                    .concat("\n");
                exportDbTypesString = "export type DbModels = { ".concat(allDbModels
                    .map(function (x) { return "".concat(x.name, ": ").concat(x.name); })
                    .join(","), " };\n");
                exportDbKeysString = "export const dbModelKeys = [ ".concat(allDbModels
                    .map(function (x) { return "\"".concat(x.name, "\""); })
                    .join(","), " ] as const;\n");
                exportDbModelEnumString = "export type DbModelEnum = typeof dbModelKeys[number];\n";
                exportModelQueryConfigString = "export const modelQueryConfig = {\n    ".concat(allDbModels === null || allDbModels === void 0 ? void 0 : allDbModels.map(function (model) {
                    if (!model.dbStorageMethod)
                        return;
                    return "".concat(model.name, ": {\n          ").concat(model.operationStorageLocationRelativeFilePath ||
                        model.isOperationIndex
                        ? "operationName: \"*\","
                        : "", "\n          dbStorageMethod: \"").concat(model.dbStorageMethod, "\",\n          ").concat(model.operationStorageLocationRelativeFilePath
                        ? "operationRelativePath: \"".concat(model.operationStorageLocationRelativeFilePath, "\",")
                        : "", "\n        }");
                }).filter(js_util_1.notEmpty).join(",\n"), "\n  };");
                indexationString = "// THIS FILE HAS BEEN GENERATED\n"
                    .concat("\n")
                    // all imports
                    .concat(typeImportsString)
                    .concat("\n\n")
                    // all exports
                    .concat(exportDbTypesString)
                    .concat(exportDbKeysString)
                    .concat(exportDbModelEnumString)
                    .concat(exportModelQueryConfigString)
                    .concat("\n")
                    .concat("// THANK YOU\n");
                _a = new_template_1.newOperationWithFiles;
                _b = ["sdk-db"];
                return [4 /*yield*/, (0, getSdkDescription_1.getSdkDescription)("sdk-db")];
            case 2: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.sent(), { "src/sdk-db.ts": indexationString },
                    { overwriteIfExists: true, skipYarnInstall: skipYarnInstall, manualProjectRoot: manualProjectRoot, dryrun: dryrun }]))];
            case 3:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.generateDbSdk = generateDbSdk;
//# sourceMappingURL=generateDbSdk.js.map