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
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownReaderGetStaticPropsFromPages = void 0;
var get_path_1 = require("get-path");
var read_json_file_1 = require("read-json-file");
var database_1 = require("database");
var markdown_reader_functions_js_1 = require("markdown-reader-functions-js");
var getFolderExplorationInfo_1 = require("./getFolderExplorationInfo");
var getMarkdownPageInfo_1 = require("./getMarkdownPageInfo");
var augmented_word_node_1 = require("augmented-word-node");
var fs_util_1 = require("fs-util");
var recursive_util_1 = require("recursive-util");
/**
 * Takes the routes and pages you want to show, and returns the MarkdownReaderPageProps you need to render the reader page.
 */
var markdownReaderGetStaticPropsFromPages = function (context, fileWebPages, webOperationName) { return __awaiter(void 0, void 0, void 0, function () {
    var menu, projectRoot, publicBundleConfig, queryPath, contentPage, _a, children, title, description, descriptionProjectRelativeMarkdownPath, markdownCallToActions, filteredMarkdownCtas, markdownPageInfo, augmentedWordObject;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                menu = (0, recursive_util_1.getMenuPagesObject)(fileWebPages);
                projectRoot = (0, get_path_1.getProjectRoot)();
                if (!projectRoot) {
                    return [2 /*return*/, { props: { menu: menu } }];
                }
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(fs_util_1.path.join(projectRoot, "public-bundle-config.json"))];
            case 1:
                publicBundleConfig = _b.sent();
                queryPath = (0, markdown_reader_functions_js_1.getQueryPath)(context.params);
                contentPage = fileWebPages.find(function (x) { return x.queryPath === queryPath; });
                if (!!contentPage) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, getFolderExplorationInfo_1.getFolderExplorationInfo)(fileWebPages, queryPath, projectRoot)];
            case 2:
                _a = _b.sent(), children = _a.children, title = _a.title, description = _a.description, descriptionProjectRelativeMarkdownPath = _a.descriptionProjectRelativeMarkdownPath;
                return [2 /*return*/, {
                        props: {
                            publicBundleConfig: publicBundleConfig,
                            menu: menu,
                            content: {
                                children: children,
                                title: title,
                                description: description,
                                projectRelativeMarkdownPath: descriptionProjectRelativeMarkdownPath,
                            },
                        },
                    }];
            case 3: return [4 /*yield*/, database_1.db.get("MarkdownCallToAction")];
            case 4:
                markdownCallToActions = _b.sent();
                filteredMarkdownCtas = markdownCallToActions.filter(function (x) {
                    var isExternalRoot = x.hostname !== (publicBundleConfig === null || publicBundleConfig === void 0 ? void 0 : publicBundleConfig.deploymentHostname) &&
                        (!x.path || x.path === "");
                    if (isExternalRoot)
                        return true;
                    var isInternalNonRoot = x.hostname === (publicBundleConfig === null || publicBundleConfig === void 0 ? void 0 : publicBundleConfig.deploymentHostname) &&
                        x.path &&
                        x.path !== "";
                    return isInternalNonRoot;
                });
                return [4 /*yield*/, (0, getMarkdownPageInfo_1.getMarkdownPageInfo)({
                        projectRoot: projectRoot,
                        webPages: fileWebPages,
                        queryPath: queryPath,
                        contentPage: contentPage,
                        webOperationName: webOperationName,
                        markdownCallToActions: filteredMarkdownCtas,
                    })];
            case 5:
                markdownPageInfo = _b.sent();
                return [4 /*yield*/, (0, augmented_word_node_1.getAugmentedWordObject)(projectRoot)];
            case 6:
                augmentedWordObject = _b.sent();
                return [2 /*return*/, {
                        // Passed to the page component as props
                        props: {
                            content: __assign(__assign({}, markdownPageInfo), { augmentedWordObject: augmentedWordObject }),
                            publicBundleConfig: publicBundleConfig,
                            menu: menu,
                        },
                    }];
        }
    });
}); };
exports.markdownReaderGetStaticPropsFromPages = markdownReaderGetStaticPropsFromPages;
//# sourceMappingURL=markdownReaderGetStaticPropsFromPages.js.map