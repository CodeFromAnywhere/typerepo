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
exports.indexFile = void 0;
var fs_util_1 = require("fs-util");
var log_1 = require("log");
var run_child_process_1 = require("run-child-process");
/**
 * everything needed to be done with a file when rebuilding
 */
var indexFile = function (_a) {
    var file = _a.file, index = _a.index, operationBasePath = _a.operationBasePath, manualProjectRoot = _a.manualProjectRoot;
    return __awaiter(void 0, void 0, void 0, function () {
        var ext, filePath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!operationBasePath || !file.name) {
                        (0, log_1.log)("Incorrect parameters given", { type: "error" });
                        return [2 /*return*/];
                    }
                    ext = (0, fs_util_1.getExtension)(file.name);
                    if (!file.name || !ext || !["ts", "tsx"].includes(ext)) {
                        (0, log_1.log)("Incorrect extension ".concat(ext), { type: "warning" });
                        return [2 /*return*/];
                    }
                    filePath = fs_util_1.path.join(operationBasePath, "src", file.name);
                    if (!fs_util_1.fs.existsSync(filePath)) {
                        (0, log_1.log)("couldn't retreive filepath ".concat(filePath), { type: "error" });
                        return [2 /*return*/];
                    }
                    // the following was used for skipping if nothing changed in the file. Not sure if it can be done so easily as dependencies can also change.
                    // const stats = await fs.stat(filePath);
                    // const fileUpdatedAt = stats.mtimeMs;
                    // const { indexFilePath } = getTsFilePaths({
                    //   filePath,
                    //   indexFolder: "files",
                    // });
                    // const oldIndex = await readJsonFile<FileMetaData>(indexFilePath!);
                    // TODO: migrate to something like this
                    // const oldIndex = await get("FileMetaData", {
                    //   operation: operationFolderName,
                    //   operationIndexFiles: [getIndexFilePath("file")],
                    // });
                    // console.log({ oldIndex });
                    // if (oldIndex && fileUpdatedAt - buildMargin < oldIndex.updatedAt) {
                    //   return log(`Skipping ${file.name} as nothing changed`, {
                    //     type: "warning",
                    //   });
                    // }
                    return [4 /*yield*/, (0, run_child_process_1.runChildProcess)({
                            operationFolderName: "index-typescript",
                            scriptFileName: "cli",
                            args: manualProjectRoot ? [filePath, manualProjectRoot] : [filePath],
                        })];
                case 1:
                    // the following was used for skipping if nothing changed in the file. Not sure if it can be done so easily as dependencies can also change.
                    // const stats = await fs.stat(filePath);
                    // const fileUpdatedAt = stats.mtimeMs;
                    // const { indexFilePath } = getTsFilePaths({
                    //   filePath,
                    //   indexFolder: "files",
                    // });
                    // const oldIndex = await readJsonFile<FileMetaData>(indexFilePath!);
                    // TODO: migrate to something like this
                    // const oldIndex = await get("FileMetaData", {
                    //   operation: operationFolderName,
                    //   operationIndexFiles: [getIndexFilePath("file")],
                    // });
                    // console.log({ oldIndex });
                    // if (oldIndex && fileUpdatedAt - buildMargin < oldIndex.updatedAt) {
                    //   return log(`Skipping ${file.name} as nothing changed`, {
                    //     type: "warning",
                    //   });
                    // }
                    _b.sent();
                    (0, log_1.log)("".concat(index + 1, " - created index (").concat(file.name, ")"), { type: "success" });
                    return [2 /*return*/];
            }
        });
    });
};
exports.indexFile = indexFile;
//# sourceMappingURL=indexFile.js.map