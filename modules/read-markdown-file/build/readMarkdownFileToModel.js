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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readMarkdownFileToModel = void 0;
var sdk_operations_1 = require("sdk-operations");
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
var get_path_1 = require("get-path");
var fs_util_js_1 = require("fs-util-js");
var readMarkdownFile_1 = require("./readMarkdownFile");
var frontmatter_util_1 = require("frontmatter-util");
var webmarkdownfile_json_1 = __importDefault(require("markdown-types/db/ts-interfaces/webmarkdownfile.json"));
/**
Reads a markdown absolute path to a `WebMarkdownFile` model

Attaches default calls to action and header
 */
var readMarkdownFileToModel = function (absoluteFilePath, webOperationName, 
/**
 * Only the ones that are not from this domain without path (filter based on hostname/path)
 */
markdownCallToActions) { return __awaiter(void 0, void 0, void 0, function () {
    var filename, projectRoot, mdParse, projectRelativeWebOperationPath, absoluteHeadersFolderPath, publicHeaderFilenames, _a, parsedParameters, uniqueDeterministicFilepathNumber, deterministicHeaderImageNumber, deterministicHeaderImage, operationBasePath, modelLocation, name, markdownFile;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                filename = fs_util_1.path.parse(absoluteFilePath).name;
                projectRoot = (0, get_path_1.getProjectRoot)(absoluteFilePath);
                if (!projectRoot) {
                    console.log("Projectroot not found");
                    return [2 /*return*/, null];
                }
                return [4 /*yield*/, (0, readMarkdownFile_1.readMarkdownFile)(absoluteFilePath)];
            case 1:
                mdParse = _d.sent();
                if (!mdParse) {
                    console.log("mdParse not found");
                    return [2 /*return*/, null];
                }
                projectRelativeWebOperationPath = sdk_operations_1.operations[webOperationName];
                if (!projectRelativeWebOperationPath)
                    return [2 /*return*/, null];
                absoluteHeadersFolderPath = fs_util_1.path.join(projectRoot, projectRelativeWebOperationPath, "public/headers");
                if (!fs_util_1.fs.existsSync(absoluteHeadersFolderPath)) return [3 /*break*/, 3];
                return [4 /*yield*/, fs_util_1.fs.readdir(absoluteHeadersFolderPath, "utf8")];
            case 2:
                _a = _d.sent();
                return [3 /*break*/, 4];
            case 3:
                _a = [];
                _d.label = 4;
            case 4:
                publicHeaderFilenames = _a;
                parsedParameters = (0, frontmatter_util_1.frontmatterToObject)(mdParse.parameters, webmarkdownfile_json_1.default.type.simplifiedSchema);
                if (!parsedParameters.headerImage && publicHeaderFilenames.length) {
                    uniqueDeterministicFilepathNumber = (0, js_util_1.sum)(absoluteFilePath.split("").map(function (letter) { return letter.charCodeAt(0); }));
                    deterministicHeaderImageNumber = uniqueDeterministicFilepathNumber % (publicHeaderFilenames.length - 1);
                    deterministicHeaderImage = publicHeaderFilenames[deterministicHeaderImageNumber];
                    /**
                     * Puts it as backendAsset
                     */
                    parsedParameters.headerImage = {
                        // NB: this ensures the URL isn't later altered to a backend-url (in dev mode)
                        absoluteUrl: "/headers/".concat(deterministicHeaderImage),
                    };
                }
                if (!parsedParameters.markdownCallToActionSlugs) {
                    parsedParameters.markdownCallToActionSlugs = markdownCallToActions.map(function (x) { return x.slug; });
                }
                // attach the actual call to actions
                parsedParameters.markdownCallToActions =
                    ((_b = parsedParameters.markdownCallToActionSlugs) === null || _b === void 0 ? void 0 : _b.map(function (slug) { return markdownCallToActions.find(function (x) { return x.slug === slug; }); }).filter(js_util_1.notEmpty)) || [];
                parsedParameters.header_markdownCallToActions =
                    ((_c = parsedParameters.header_markdownCallToActionSlugs) === null || _c === void 0 ? void 0 : _c.map(function (slug) { return markdownCallToActions.find(function (x) { return x.slug === slug; }); }).filter(js_util_1.notEmpty)) || [];
                operationBasePath = (0, get_path_1.findOperationBasePath)(absoluteFilePath);
                modelLocation = {
                    operationName: operationBasePath ? (0, fs_util_1.getLastFolder)(operationBasePath) : null,
                    projectRelativePath: (0, fs_util_js_1.makeRelative)(absoluteFilePath, projectRoot),
                    operationRelativePath: operationBasePath
                        ? (0, fs_util_js_1.makeRelative)(absoluteFilePath, operationBasePath)
                        : undefined,
                };
                name = mdParse.fileName || "untitled";
                markdownFile = __assign(__assign(__assign(__assign(__assign({}, modelLocation), parsedParameters), { markdown: mdParse.raw, categoryStack: [] }), parsedParameters), { id: name, createdFirstAt: Date.now(), deletedAt: 0, createdAt: Date.now(), language: parsedParameters.language || "english", updatedAt: parsedParameters.updatedAt || Date.now(), name: name, slug: name });
                return [2 /*return*/, (0, js_util_1.omitUndefinedValues)(markdownFile)];
        }
    });
}); };
exports.readMarkdownFileToModel = readMarkdownFileToModel;
//# sourceMappingURL=readMarkdownFileToModel.js.map