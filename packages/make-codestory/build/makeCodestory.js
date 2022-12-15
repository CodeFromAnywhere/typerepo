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
exports.makeCodestory = void 0;
var read_markdown_file_1 = require("read-markdown-file");
var addCodeStoryToSection_1 = require("./addCodeStoryToSection");
var mapMarkdownParseSections_1 = require("./mapMarkdownParseSections");
var markdown_parse_js_1 = require("markdown-parse-js");
var fs_util_1 = require("fs-util");
/**
 * no real reason to do this from text to text, let's do path to path here
 */
var makeCodestory = function (absolutePath, mappedObject, isDebug) { return __awaiter(void 0, void 0, void 0, function () {
    var markdownParse, newMarkdownParse, newString, parse, newPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, read_markdown_file_1.readMarkdownFile)(absolutePath)];
            case 1:
                markdownParse = _a.sent();
                if (!markdownParse)
                    return [2 /*return*/];
                newMarkdownParse = (0, mapMarkdownParseSections_1.mapMarkdownParseSections)(markdownParse, function (content) {
                    return (0, addCodeStoryToSection_1.addCodestoryToSection)(content, mappedObject, isDebug);
                });
                newString = (0, markdown_parse_js_1.markdownParseToMarkdownStringFromContent)(newMarkdownParse);
                parse = fs_util_1.path.parse(absolutePath);
                newPath = fs_util_1.path.join(parse.dir, "".concat(parse.name, ".codestory").concat(parse.ext));
                return [4 /*yield*/, fs_util_1.fs.writeFile(newPath, newString || "", "utf8")];
            case 2:
                _a.sent();
                return [2 /*return*/, newPath];
        }
    });
}); };
exports.makeCodestory = makeCodestory;
//# sourceMappingURL=makeCodestory.js.map