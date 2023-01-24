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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReaderPageProps = void 0;
var fs_util_1 = require("fs-util");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var ai_functions_node_1 = require("ai-functions-node");
var js_util_1 = require("js-util");
var read_markdown_file_1 = require("read-markdown-file");
var augmentMarkdown_1 = require("./augmentMarkdown");
var findClosestAbsolutePath_1 = require("./findClosestAbsolutePath");
var general_1 = require("./general");
/**
NB: this thing doesn't know about the basepath, it allows any path in the project.

Idea: would it be easy to allow for path outside of project as well?
 */
var getReaderPageProps = function (
/**
 * BasePath for this project
 */
basePath, 
/**
 * QueryPath as in the URL
 */
queryPath, 
/**
 * If true, isDev will be overwritten to be false, even in prod
 */
isAdmin, 
/**
 * If given, will be used instead of basePath, if it exists.
 */
absoluteBasePath) { return __awaiter(void 0, void 0, void 0, function () {
    var contextualPromptCategories, projectRoot, expectedAbsolutePath, _a, absoluteQueryPath, isFile, isFolder, isValidPath, folderPath, dirents, isDev, readmeDirent, readmePath, readmeFrontmatter, _b, canSeeFolder, navigation, markdownParse, _c, allowedOtherExtensions, pathParse, rawContent, _d, canSeeContent, fileContentString, augmentedResult, props;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, ai_functions_node_1.getContextualPromptCategories)()];
            case 1:
                contextualPromptCategories = _f.sent();
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, {
                            props: {
                                notFound: true,
                                notFoundReason: "No projectroot",
                                contextualPromptCategories: contextualPromptCategories,
                            },
                        }];
                }
                expectedAbsolutePath = absoluteBasePath
                    ? fs_util_1.path.join(absoluteBasePath, queryPath)
                    : basePath
                        ? fs_util_1.path.join(projectRoot, basePath, queryPath)
                        : fs_util_1.path.join(projectRoot, queryPath);
                return [4 /*yield*/, (0, findClosestAbsolutePath_1.findClosestAbsolutePath)(expectedAbsolutePath)];
            case 2:
                _a = _f.sent(), absoluteQueryPath = _a.absoluteQueryPath, isFile = _a.isFile, isFolder = _a.isFolder;
                isValidPath = absoluteQueryPath === expectedAbsolutePath;
                folderPath = isFile
                    ? fs_util_1.path.parse(absoluteQueryPath).dir
                    : absoluteQueryPath;
                return [4 /*yield*/, fs_util_1.fs.readdir(folderPath, {
                        withFileTypes: true,
                        encoding: "utf8",
                    })];
            case 3:
                dirents = _f.sent();
                isDev = process.env.NODE_ENV === "development";
                readmeDirent = dirents.find(function (x) { return x.name.toLowerCase() === "readme.md"; });
                readmePath = readmeDirent
                    ? fs_util_1.path.join(folderPath, readmeDirent.name)
                    : undefined;
                if (!readmePath) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(readmePath)];
            case 4:
                _b = (_e = (_f.sent())) === null || _e === void 0 ? void 0 : _e.parameters;
                return [3 /*break*/, 6];
            case 5:
                _b = undefined;
                _f.label = 6;
            case 6:
                readmeFrontmatter = _b;
                canSeeFolder = readmePath
                    ? (0, general_1.canSeeFileContent)(readmeFrontmatter, isDev)
                    : true;
                return [4 /*yield*/, Promise.all(dirents.map(function (dirent) { return __awaiter(void 0, void 0, void 0, function () {
                        var ignoredFilesFolders, fullPath, type, firstFile, _a, frontmatter, _b, _c, folderContent;
                        var _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    ignoredFilesFolders = [".DS_Store", ".index"];
                                    if (ignoredFilesFolders.includes(dirent.name))
                                        return [2 /*return*/];
                                    fullPath = fs_util_1.path.join(folderPath, dirent.name);
                                    type = dirent.isDirectory()
                                        ? "folder"
                                        : dirent.isSymbolicLink()
                                            ? "link"
                                            : dirent.isFile()
                                                ? "file"
                                                : "unknown";
                                    if (!(type === "folder")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, general_1.getFirstFile)(fullPath)];
                                case 1:
                                    _a = _f.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = undefined;
                                    _f.label = 3;
                                case 3:
                                    firstFile = _a;
                                    if (!((0, fs_util_js_1.getExtension)(dirent.name) === "md")) return [3 /*break*/, 5];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(fullPath)];
                                case 4:
                                    _b = (_d = (_f.sent())) === null || _d === void 0 ? void 0 : _d.parameters;
                                    return [3 /*break*/, 9];
                                case 5:
                                    if (!(type === "folder")) return [3 /*break*/, 7];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(fs_util_1.path.join(fullPath, "README.md"))];
                                case 6:
                                    _c = (_e = (_f.sent())) === null || _e === void 0 ? void 0 : _e.parameters;
                                    return [3 /*break*/, 8];
                                case 7:
                                    _c = undefined;
                                    _f.label = 8;
                                case 8:
                                    _b = _c;
                                    _f.label = 9;
                                case 9:
                                    frontmatter = _b;
                                    folderContent = {
                                        type: type,
                                        name: dirent.name,
                                        firstFile: firstFile,
                                        frontmatter: frontmatter,
                                        projectRelativePath: (0, fs_util_js_1.makeRelative)(fs_util_1.path.join(folderPath, dirent.name), projectRoot),
                                    };
                                    return [2 /*return*/, folderContent];
                            }
                        });
                    }); }))];
            case 7:
                navigation = (_f.sent())
                    .filter(js_util_1.notEmpty)
                    .map(function (_a) {
                    var frontmatter = _a.frontmatter, other = __rest(_a, ["frontmatter"]);
                    var folderContent = __assign(__assign({}, other), (0, general_1.expandFrontmatter)(frontmatter));
                    return folderContent;
                })
                    .filter(function (file) {
                    // filter out the files that should be HIDDEN
                    return (0, general_1.canSeeFile)(file, isDev);
                })
                    .map(js_util_1.omitUndefinedValues);
                if (!isFile) return [3 /*break*/, 9];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(absoluteQueryPath)];
            case 8:
                _c = _f.sent();
                return [3 /*break*/, 10];
            case 9:
                _c = null;
                _f.label = 10;
            case 10:
                markdownParse = _c;
                allowedOtherExtensions = [".ts", ".tsx", ".json"];
                pathParse = fs_util_1.path.parse(absoluteQueryPath);
                if (!(isFile && allowedOtherExtensions.includes(pathParse.ext))) return [3 /*break*/, 12];
                return [4 /*yield*/, fs_util_1.fs.readFile(absoluteQueryPath, "utf8")];
            case 11:
                _d = _f.sent();
                return [3 /*break*/, 13];
            case 12:
                _d = undefined;
                _f.label = 13;
            case 13:
                rawContent = _d;
                canSeeContent = (0, general_1.canSeeFileContent)(markdownParse === null || markdownParse === void 0 ? void 0 : markdownParse.parameters, isDev);
                fileContentString = !canSeeContent || !canSeeFolder || !isFile
                    ? null
                    : markdownParse
                        ? markdownParse.raw
                        : rawContent
                            ? rawContent
                            : null;
                return [4 /*yield*/, (0, augmentMarkdown_1.augmentMarkdown)(fileContentString, {
                        // for now no code yet, it's too slow
                        isAdmin: isAdmin,
                        augmentCode: false,
                        augmentContextualPrompts: false,
                        augmentContextualPromptResults: true,
                        augmentStatements: true,
                        augmentWords: true,
                        externalHost: undefined,
                        markdown_projectRelativeFilePath: (0, fs_util_js_1.makeRelative)(absoluteQueryPath, projectRoot),
                    })];
            case 14:
                augmentedResult = _f.sent();
                props = {
                    contextualPromptCategories: contextualPromptCategories,
                    notFound: !isValidPath,
                    notFoundReason: isValidPath
                        ? null
                        : "Path isn't valid: ".concat(expectedAbsolutePath, ". We found ").concat(absoluteQueryPath),
                    isFolder: isFolder,
                    canSeeContent: canSeeContent,
                    unauthorizedWarningMessage: canSeeContent
                        ? null
                        : "You have to be premium to see this. [Click here to see our offers](/offers)",
                    markdown: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.augmentedMarkdown) || rawContent || null,
                    navigation: navigation,
                    actualProjectRelativeFilePath: (0, fs_util_js_1.makeRelative)(absoluteQueryPath, projectRoot),
                    contextualPromptResults: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptResults) || null,
                    contextualPromptsObject: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptsObject) || null,
                };
                return [2 /*return*/, { props: props }];
        }
    });
}); };
exports.getReaderPageProps = getReaderPageProps;
//# sourceMappingURL=getReaderPageProps.js.map