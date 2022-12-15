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
exports.newTemplate = void 0;
var fs_util_1 = require("fs-util");
var rename_template_files_1 = require("rename-template-files");
var log_1 = require("log");
var get_path_1 = require("get-path");
/**
 *
 * Returns either the `basePath` of the created template, or undefined if something went wrong
 */
var newTemplate = function (type, destinationPath) { return __awaiter(void 0, void 0, void 0, function () {
    var manualProjectRoot, source, templateExists, basePath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                manualProjectRoot = (0, get_path_1.getProjectRoot)(destinationPath);
                source = fs_util_1.path.resolve(__dirname, "..", "assets", "templates", type);
                templateExists = fs_util_1.fs.existsSync(source);
                if (!templateExists) {
                    (0, log_1.log)("".concat(type, " cannot be generated yet. Create a template in assets/templates/").concat(type));
                    return [2 /*return*/];
                }
                basePath = destinationPath
                    ? destinationPath
                    : fs_util_1.path.join(process.cwd(), type);
                // const availableFolderName = await getAvailableOperationName(
                //   rootFolderPath,
                //   type,
                //   manualProjectRoot
                // );
                // const basePath = path.join(rootFolderPath, availableFolderName);
                // if (fs.existsSync(basePath)) {
                //   log(`${basePath} already exists`);
                //   return;
                // }
                // Make the non-existing folder
                return [4 /*yield*/, fs_util_1.fs.mkdir(basePath, { recursive: true })];
            case 1:
                // const availableFolderName = await getAvailableOperationName(
                //   rootFolderPath,
                //   type,
                //   manualProjectRoot
                // );
                // const basePath = path.join(rootFolderPath, availableFolderName);
                // if (fs.existsSync(basePath)) {
                //   log(`${basePath} already exists`);
                //   return;
                // }
                // Make the non-existing folder
                _a.sent();
                // Copy the template inthere
                return [4 /*yield*/, fs_util_1.fs.cpAsync(source, basePath, { recursive: true })];
            case 2:
                // Copy the template inthere
                _a.sent();
                // Rename templatefiles if needed
                return [4 /*yield*/, (0, rename_template_files_1.renameTemplateFiles)({ appDir: basePath })];
            case 3:
                // Rename templatefiles if needed
                _a.sent();
                return [2 /*return*/, basePath];
        }
    });
}); };
exports.newTemplate = newTemplate;
//# sourceMappingURL=newTemplate.js.map