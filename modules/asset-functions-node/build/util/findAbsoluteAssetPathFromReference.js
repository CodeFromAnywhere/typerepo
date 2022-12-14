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
exports.findAbsoluteAssetPathFromReference = void 0;
var fs_util_1 = require("fs-util");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var findAbsoluteAssetPathFromReference = function (projectRelativeReferencingFilePath, referencingFileRelativeAssetPath) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, extension, allowedExtensions, absoluteReferencingFilePath, exists, contents, patternType, pattern, foundPattern, filename, isIndexationFile, referencingFileFolderPath, absoluteAssetPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!projectRelativeReferencingFilePath ||
                    !referencingFileRelativeAssetPath) {
                    console.log({
                        projectRelativeReferencingFilePath: projectRelativeReferencingFilePath,
                        referencingFileRelativeAssetPath: referencingFileRelativeAssetPath,
                    });
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Incorrect parameters for fetching absolute asset from reference",
                        }];
                }
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "No project root",
                        }];
                extension = (0, fs_util_js_1.getExtension)(projectRelativeReferencingFilePath);
                allowedExtensions = ["ts", "tsx", "md", "mdx", "json"];
                if (!allowedExtensions.includes(extension)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Invalid extension",
                        }];
                }
                absoluteReferencingFilePath = fs_util_1.path.join(projectRoot, projectRelativeReferencingFilePath);
                exists = fs_util_1.fs.existsSync(absoluteReferencingFilePath);
                if (!exists) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Invalid file",
                        }];
                }
                return [4 /*yield*/, fs_util_1.fs.readFile(absoluteReferencingFilePath, "utf8")];
            case 1:
                contents = _a.sent();
                patternType = extension === "json" ? "json" : "markdown";
                pattern = patternType === "json"
                    ? "\"relativePath\": \"".concat(referencingFileRelativeAssetPath, "\"")
                    : "](".concat(referencingFileRelativeAssetPath, ")");
                foundPattern = contents.includes(pattern);
                filename = fs_util_1.path.parse(projectRelativeReferencingFilePath).name;
                isIndexationFile = referencingFileRelativeAssetPath.startsWith("./".concat(filename));
                if (!foundPattern && !isIndexationFile) {
                    // console.log({ contents, pattern });
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "Pattern not found",
                        }];
                }
                referencingFileFolderPath = fs_util_1.path.parse(absoluteReferencingFilePath).dir;
                absoluteAssetPath = fs_util_1.path.join(referencingFileFolderPath, referencingFileRelativeAssetPath);
                if (!fs_util_1.fs.existsSync(absoluteAssetPath)) {
                    return [2 /*return*/, {
                            isSuccessful: false,
                            message: "The referenced asset does not exist",
                        }];
                }
                return [2 /*return*/, { isSuccessful: true, message: "Found path", absoluteAssetPath: absoluteAssetPath }];
        }
    });
}); };
exports.findAbsoluteAssetPathFromReference = findAbsoluteAssetPathFromReference;
//# sourceMappingURL=findAbsoluteAssetPathFromReference.js.map