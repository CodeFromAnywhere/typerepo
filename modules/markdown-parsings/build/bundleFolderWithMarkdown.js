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
exports.bundleFolderWithMarkdown = exports.makeOutlineMarkdownString = void 0;
var js_util_1 = require("js-util");
var merge_1 = require("./parsing/merge");
var k_explore_1 = require("k-explore");
var read_markdown_file_1 = require("read-markdown-file");
var makeOutlineMarkdownString = function (title, urls) {
    var outlineString = urls.length > 0
        ? "## ".concat(title, "\n\n").concat(urls
            .map(function (url) {
            return "- [".concat(url.title, "](#").concat(url.hashtagPath, ")");
        })
            .join("\n"), "\n\n")
        : "";
    return outlineString;
};
exports.makeOutlineMarkdownString = makeOutlineMarkdownString;
/**
 * finds all md files in a folder and creates a single MarkdownParse
 *
 * handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way
 *
 * NB: it recursively structures the files and folders with headings
 */
var bundleFolderWithMarkdown = function (outlineTitle, absoluteFolderPath, 
/**
 * filename to include in the final MarkdownParse
 */
fileName) { return __awaiter(void 0, void 0, void 0, function () {
    var mdPaths, markdownParses, _a, merged, outline, outlineString;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, k_explore_1.explore)({ basePath: absoluteFolderPath, extension: "md" })];
            case 1:
                mdPaths = (_b.sent()).map(function (x) { return x.path; });
                return [4 /*yield*/, Promise.all(mdPaths.map(function (mdPath) { return (0, read_markdown_file_1.readMarkdownFile)(mdPath); }))];
            case 2:
                markdownParses = (_b.sent()).filter(js_util_1.notEmpty);
                _a = (0, merge_1.mergeMarkdownParse)(markdownParses, fileName), merged = _a.merged, outline = _a.outline;
                outlineString = (0, exports.makeOutlineMarkdownString)(outlineTitle, outline);
                return [2 /*return*/, { markdownParse: merged, outlineString: outlineString }];
        }
    });
}); };
exports.bundleFolderWithMarkdown = bundleFolderWithMarkdown;
//# sourceMappingURL=bundleFolderWithMarkdown.js.map