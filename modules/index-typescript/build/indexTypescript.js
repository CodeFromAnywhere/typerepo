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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTypescript = void 0;
// external
var fs_1 = __importDefault(require("fs"));
var graceful_fs_1 = __importDefault(require("graceful-fs"));
var fs_util_1 = require("fs-util");
var ts_morph_util_1 = require("ts-morph-util");
//monorepo
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var log_1 = require("log");
var read_json_file_1 = require("read-json-file");
var operation_util_1 = require("operation-util");
var getValidatedOperationPathParse_1 = require("./getValidatedOperationPathParse");
var indexTypescriptFile_1 = require("./indexTypescriptFile");
var one_by_one_1 = require("one-by-one");
/**
 * Creates a typescript file index in 3 steps
 * 1) Introspects the file
 * 2) Calculates all needed information about it
 * 3) Saves the result to /db/******.json in the operation root

 NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

 NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?
 
 TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.

 */
var indexTypescript = function (_a) {
    var filePaths = _a.filePaths, manualProjectRoot = _a.manualProjectRoot;
    return __awaiter(void 0, void 0, void 0, function () {
        var firstFilePath, operationBasePath, projectRoot, packageJson, operationName, problems, project, problem, filePathsToIndex;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // NB: fix to globally alter real fs in order to fix EMFile error that happens in TSMorph (see https://github.com/isaacs/node-graceful-fs)
                    graceful_fs_1.default.gracefulify(fs_1.default);
                    firstFilePath = filePaths[0];
                    if (!firstFilePath) {
                        (0, log_1.log)("Please provide some file paths");
                    }
                    operationBasePath = (0, get_path_1.findOperationBasePath)(firstFilePath);
                    if (!operationBasePath) {
                        (0, log_1.log)("Operation must have a basepath to be indexed", { type: "error" });
                        return [2 /*return*/];
                    }
                    projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)(firstFilePath);
                    if (!projectRoot) {
                        (0, log_1.log)("No project root found", { type: "error" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(fs_util_1.path.join(operationBasePath, "package.json"))];
                case 1:
                    packageJson = _b.sent();
                    if (!packageJson) {
                        (0, log_1.log)("Operation must have a package.json to be indexed", { type: "error" });
                        return [2 /*return*/];
                    }
                    operationName = packageJson.name;
                    if (!operationName) {
                        (0, log_1.log)("Operation must have a name to be indexed", { type: "error" });
                        return [2 /*return*/];
                    }
                    problems = [];
                    project = (0, ts_morph_util_1.getTsMorphProject)(operationBasePath);
                    if (!!project) return [3 /*break*/, 3];
                    problem = "couldn't load project";
                    problems.push(problem);
                    return [4 /*yield*/, (0, operation_util_1.writeKeyToOperationIndexJson)(filePaths[0], "indexErrors", problems)];
                case 2:
                    _b.sent();
                    (0, log_1.log)(problem, { type: "error" });
                    return [2 /*return*/];
                case 3:
                    filePathsToIndex = filePaths
                        .map(getValidatedOperationPathParse_1.getValidatedOperationPathParse)
                        .filter(js_util_1.notEmpty);
                    // NB: one by one because if you do multiple at once, writing commets goes corrupt because concurrent writing.
                    return [4 /*yield*/, (0, one_by_one_1.oneByOne)(filePathsToIndex, function (file, index) { return __awaiter(void 0, void 0, void 0, function () {
                            var result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        process.stdout.write("".concat(index + 1, ") ").concat(file.srcFileId, " "));
                                        return [4 /*yield*/, (0, indexTypescriptFile_1.indexTypescriptFile)(project, file, projectRoot)];
                                    case 1:
                                        result = _a.sent();
                                        console.log("✅");
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                case 4:
                    // NB: one by one because if you do multiple at once, writing commets goes corrupt because concurrent writing.
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.indexTypescript = indexTypescript;
//# sourceMappingURL=indexTypescript.js.map