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
exports.getWildcardDbFileLocations = exports.getWildcardDbFileLocations__OLD = void 0;
var fs_util_1 = require("fs-util");
var k_explore_1 = require("k-explore");
var fs_util_js_1 = require("fs-util-js");
/**
 If it all seems good, I can delete this. This is the old method of looking just in the folder itself, it's replaced by looking in all subfolders as well, recursively.
 */
var getWildcardDbFileLocations__OLD = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var modelName, operationName, parsedPath, projectRoot, rootFolder, fileNames;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                modelName = options.modelName, operationName = options.operationName, parsedPath = options.parsedPath, projectRoot = options.projectRoot, rootFolder = options.rootFolder;
                if (!fs_util_1.fs.existsSync(parsedPath.dir)) return [3 /*break*/, 2];
                return [4 /*yield*/, fs_util_1.fs.readdir(parsedPath.dir)];
            case 1:
                fileNames = (_a.sent())
                    .filter(function (fileName) { return fileName.endsWith(parsedPath.ext); })
                    .map(function (fileName) {
                    var absolutePath = fs_util_1.path.join(parsedPath.dir, fileName);
                    var projectRelativePath = absolutePath.substring(projectRoot.length);
                    var operationRelativePath = absolutePath.substring(rootFolder.basePath.length);
                    var dbFileLocation = {
                        modelName: modelName,
                        absolutePath: absolutePath,
                        operationName: rootFolder.operationName,
                        projectRelativePath: projectRelativePath,
                        operationRelativePath: operationRelativePath,
                    };
                    return dbFileLocation;
                });
                return [2 /*return*/, fileNames];
            case 2: return [2 /*return*/, []];
        }
    });
}); };
exports.getWildcardDbFileLocations__OLD = getWildcardDbFileLocations__OLD;
var getWildcardDbFileLocations = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var modelName, operationName, parsedPath, projectRoot, rootFolder, exploreAbsolutePaths, dbFileLocations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                modelName = options.modelName, operationName = options.operationName, parsedPath = options.parsedPath, projectRoot = options.projectRoot, rootFolder = options.rootFolder;
                if (!fs_util_1.fs.existsSync(parsedPath.dir)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, k_explore_1.explore)({
                        basePath: parsedPath.dir,
                        extension: (0, fs_util_js_1.getExtension)(parsedPath.base),
                    })];
            case 1:
                exploreAbsolutePaths = (_a.sent()).map(function (x) { return x.path; });
                dbFileLocations = exploreAbsolutePaths.map(function (absolutePath) {
                    var dbFileOperationName = rootFolder.operationName;
                    var projectRelativePath = absolutePath.substring(projectRoot.length);
                    var operationRelativePath = dbFileOperationName
                        ? absolutePath.substring(rootFolder.basePath.length)
                        : undefined;
                    var dbFileLocation = {
                        modelName: modelName,
                        absolutePath: absolutePath,
                        operationName: dbFileOperationName,
                        projectRelativePath: projectRelativePath,
                        operationRelativePath: operationRelativePath,
                    };
                    return dbFileLocation;
                });
                return [2 /*return*/, dbFileLocations];
            case 2: return [2 /*return*/, []];
        }
    });
}); };
exports.getWildcardDbFileLocations = getWildcardDbFileLocations;
//# sourceMappingURL=getWildcardDbFileLocations.js.map