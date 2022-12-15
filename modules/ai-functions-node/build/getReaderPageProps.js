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
exports.getReaderPageProps = exports.canSeeFileContent = exports.canSeeFile = exports.expandFrontmatter = void 0;
var fs_util_1 = require("fs-util");
var fs_util_js_1 = require("fs-util-js");
var get_path_1 = require("get-path");
var fs_util_js_2 = require("fs-util-js");
var js_util_1 = require("js-util");
var read_markdown_file_1 = require("read-markdown-file");
var augmentMarkdown_1 = require("./augmentMarkdown");
var expandFrontmatter = function (frontmatter) {
    if (!frontmatter)
        return {};
    return {
        isPrivate: frontmatter.isPrivate === "true",
        authorizedGroup: frontmatter.authorizedGroup,
        isDraft: frontmatter.isDraft === "true",
        isSecret: frontmatter.isSecret === "true",
    };
};
exports.expandFrontmatter = expandFrontmatter;
/**
 * TODO: use something like this to ensure we have the type safety and not work with strings >.<
 *
```ts
import { frontmatterToObject } from "frontmatter-util";
import webMarkdownFileTsInterface from "markdown-types/db/ts-interfaces/webmarkdownfile.json";
```

 */
var canSeeFile = function (parameters, isDev) {
    // dev can always see it
    if (isDev) {
        return true;
    }
    // no parameters seems fine
    if (!parameters) {
        return true;
    }
    if (parameters.isDraft || parameters.isSecret) {
        return false;
    }
    if (parameters.authorizedGroup === "premium" ||
        parameters.authorizedGroup === "enterprise") {
        // for now we have no way to check if you're premium/enterprise, but we can still see them
        return true;
    }
    if (parameters.isPrivate) {
        // private files can still be seen, just not the content
        return true;
    }
    return true;
};
exports.canSeeFile = canSeeFile;
var canSeeFileContent = function (parameters, isDev) {
    var _a, _b;
    // dev can always see it
    if (isDev) {
        return true;
    }
    // no parameters seems fine
    if (!parameters) {
        return true;
    }
    if (parameters.isDraft === "true" || parameters.isSecret === "true") {
        return false;
    }
    if (((_a = parameters.authorizedGroup) === null || _a === void 0 ? void 0 : _a.trim()) === "premium" ||
        ((_b = parameters.authorizedGroup) === null || _b === void 0 ? void 0 : _b.trim()) === "enterprise") {
        // for now we have no way to check if you're premium/enterprise
        return false;
    }
    if (parameters.isPrivate === "true") {
        //
        return false;
    }
    return true;
};
exports.canSeeFileContent = canSeeFileContent;
var getReaderPageProps = function (projectRelativeFilePath, 
/**
 * If given, knows how to redirect
 */
queryPath, realBasePath) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, absoluteQueryPath, pathExists, prompt_projectRelativePath, stat, isFile, isFolder, folderPath, dirents, isDev, readmeDirent, readmePath, readmeFrontmatter, _a, canSeeFolder, navigation, readmePath_1, destination, markdownParse, _b, allowedOtherExtensions, pathParse, rawContent, _c, canSeeContent, fileContentString, augmentedResult, _d, props;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { notFound: true }];
                }
                absoluteQueryPath = fs_util_1.path.join(projectRoot, projectRelativeFilePath);
                pathExists = fs_util_1.fs.existsSync(absoluteQueryPath);
                if (!pathExists) {
                    console.log("path doesn't exist", absoluteQueryPath);
                    return [2 /*return*/, { notFound: true }];
                }
                prompt_projectRelativePath = (0, fs_util_js_2.makeRelative)(absoluteQueryPath, projectRoot);
                return [4 /*yield*/, fs_util_1.fs.stat(absoluteQueryPath)];
            case 1:
                stat = _f.sent();
                isFile = stat.isFile();
                isFolder = stat.isDirectory();
                if (!isFile && !isFolder) {
                    // should never happen
                    console.log("Not file , not folder");
                    return [2 /*return*/, { notFound: true }];
                }
                folderPath = isFile
                    ? fs_util_1.path.parse(absoluteQueryPath).dir
                    : absoluteQueryPath;
                return [4 /*yield*/, fs_util_1.fs.readdir(folderPath, {
                        withFileTypes: true,
                        encoding: "utf8",
                    })];
            case 2:
                dirents = _f.sent();
                isDev = process.env.NODE_ENV === "development";
                readmeDirent = dirents.find(function (x) { return x.name.toLowerCase() === "readme.md"; });
                readmePath = readmeDirent
                    ? fs_util_1.path.join(folderPath, readmeDirent.name)
                    : undefined;
                if (!readmePath) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(readmePath)];
            case 3:
                _a = (_e = (_f.sent())) === null || _e === void 0 ? void 0 : _e.parameters;
                return [3 /*break*/, 5];
            case 4:
                _a = undefined;
                _f.label = 5;
            case 5:
                readmeFrontmatter = _a;
                canSeeFolder = readmePath
                    ? (0, exports.canSeeFileContent)(readmeFrontmatter, isDev)
                    : true;
                return [4 /*yield*/, Promise.all(dirents.map(function (dirent) { return __awaiter(void 0, void 0, void 0, function () {
                        var ignoredFilesFolders, fullPath, type, frontmatter, _a, _b, folderContent;
                        var _c, _d;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
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
                                    if (!((0, fs_util_js_1.getExtension)(dirent.name) === "md")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(fullPath)];
                                case 1:
                                    _a = (_c = (_e.sent())) === null || _c === void 0 ? void 0 : _c.parameters;
                                    return [3 /*break*/, 6];
                                case 2:
                                    if (!(type === "folder")) return [3 /*break*/, 4];
                                    return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(fs_util_1.path.join(fullPath, "README.md"))];
                                case 3:
                                    _b = (_d = (_e.sent())) === null || _d === void 0 ? void 0 : _d.parameters;
                                    return [3 /*break*/, 5];
                                case 4:
                                    _b = undefined;
                                    _e.label = 5;
                                case 5:
                                    _a = _b;
                                    _e.label = 6;
                                case 6:
                                    frontmatter = _a;
                                    folderContent = {
                                        type: type,
                                        name: dirent.name,
                                        frontmatter: frontmatter,
                                    };
                                    return [2 /*return*/, folderContent];
                            }
                        });
                    }); }))];
            case 6:
                navigation = (_f.sent())
                    .filter(js_util_1.notEmpty)
                    .map(function (_a) {
                    var frontmatter = _a.frontmatter, other = __rest(_a, ["frontmatter"]);
                    var folderContent = __assign(__assign({}, other), (0, exports.expandFrontmatter)(frontmatter));
                    return folderContent;
                })
                    .filter(function (file) {
                    // filter out the files that should be HIDDEN
                    return (0, exports.canSeeFile)(file, isDev);
                })
                    .map(js_util_1.omitUndefinedValues);
                // if you opened a folder and there's a readme, redirect to that readme.
                // NB: index isn't allowed to redirect, so we need to prerender it in another way. Potentially we can provide the markdown in the index as the only exception? only if it's there
                if (isFolder && !!readmeDirent && queryPath !== "" && realBasePath) {
                    readmePath_1 = (0, fs_util_js_2.makeRelative)(fs_util_1.path.join(folderPath, readmeDirent.name), realBasePath);
                    destination = "/".concat(readmePath_1);
                    console.log("REDIRECTING");
                    // permanent is not possible since we are swithcing the basePath sometimes.
                    return [2 /*return*/, { redirect: { destination: destination, permanent: false } }];
                }
                if (!isFile) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(absoluteQueryPath)];
            case 7:
                _b = _f.sent();
                return [3 /*break*/, 9];
            case 8:
                _b = null;
                _f.label = 9;
            case 9:
                markdownParse = _b;
                allowedOtherExtensions = [".ts", ".tsx", ".json"];
                pathParse = fs_util_1.path.parse(absoluteQueryPath);
                if (!(isFile && allowedOtherExtensions.includes(pathParse.ext))) return [3 /*break*/, 11];
                return [4 /*yield*/, fs_util_1.fs.readFile(absoluteQueryPath, "utf8")];
            case 10:
                _c = _f.sent();
                return [3 /*break*/, 12];
            case 11:
                _c = undefined;
                _f.label = 12;
            case 12:
                rawContent = _c;
                canSeeContent = (0, exports.canSeeFileContent)(markdownParse === null || markdownParse === void 0 ? void 0 : markdownParse.parameters, isDev);
                fileContentString = !canSeeContent || !canSeeFolder || !isFile
                    ? null
                    : markdownParse
                        ? markdownParse.raw
                        : rawContent
                            ? rawContent
                            : null;
                if (!markdownParse) return [3 /*break*/, 14];
                return [4 /*yield*/, (0, augmentMarkdown_1.augmentMarkdown)(fileContentString, {
                        // for now no code yet, it's too slow
                        augmentCode: false,
                        augmentContextualPrompts: false,
                        augmentContextualPromptResults: true,
                        augmentStatements: true,
                        augmentWords: true,
                        externalHost: undefined,
                        markdown_projectRelativeFilePath: prompt_projectRelativePath,
                    })];
            case 13:
                _d = _f.sent();
                return [3 /*break*/, 15];
            case 14:
                _d = undefined;
                _f.label = 15;
            case 15:
                augmentedResult = _d;
                props = {
                    isFolder: isFolder,
                    canSeeContent: canSeeContent,
                    unauthorizedWarningMessage: canSeeContent
                        ? null
                        : "You have to be premium to see this. [Click here to see our offers](/offers)",
                    markdown: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.augmentedMarkdown) || rawContent || null,
                    navigation: navigation,
                    projectRelativeFilePath: prompt_projectRelativePath,
                    contextualPromptResults: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptResults) || null,
                    contextualPromptsObject: (augmentedResult === null || augmentedResult === void 0 ? void 0 : augmentedResult.contextualPromptsObject) || null,
                };
                return [2 /*return*/, { props: props }];
        }
    });
}); };
exports.getReaderPageProps = getReaderPageProps;
//# sourceMappingURL=getReaderPageProps.js.map