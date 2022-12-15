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
exports.operationToMarkdown = void 0;
var js_util_1 = require("js-util");
var markdown_parse_js_1 = require("markdown-parse-js");
var fs_util_1 = require("fs-util");
///// RELATIVE
var merge_1 = require("./parsing/merge");
var statementItemToMarkdown_1 = require("./statementItemToMarkdown");
var createMinimisedSection_1 = require("./createMinimisedSection");
var bundleFolderWithMarkdown_1 = require("./bundleFolderWithMarkdown");
/**
 * converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.
 *
 * markdown for reading (so there are no links)
 */
var operationToMarkdown = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, classification, cliItems, coreDependenciesString, description, docs, externalItems, internalItems, operationDependenciesString, operationName, packageDependenciesString, size, testItems, operationFolderPath, returnType, detailDocsContentStrings, docsBundle, _b, sizeString, operationInfoMd, infoString, operationInfoMarkdownParse, _c, cliMarkdown, testMarkdown, _d, externalItemsMarkdown, internalItemsMarkdown, apiReference, infoMarkdownParse, internalSection, testSection, cliSection, merged, returnString, shouldSave, returnValue;
    var _e, _f, _g, _h, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = config.operationSummary, classification = _a.classification, cliItems = _a.cliItems, coreDependenciesString = _a.coreDependenciesString, description = _a.description, docs = _a.docs, externalItems = _a.externalItems, internalItems = _a.internalItems, operationDependenciesString = _a.operationDependenciesString, operationName = _a.operationName, packageDependenciesString = _a.packageDependenciesString, size = _a.size, testItems = _a.testItems, operationFolderPath = _a.operationFolderPath, returnType = config.returnType;
                detailDocsContentStrings = docs === null || docs === void 0 ? void 0 : docs.map(function (content) {
                    return (0, createMinimisedSection_1.createMinimizedSectionMarkdown)(content.content, content.relativePath);
                });
                if (!detailDocsContentStrings) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, bundleFolderWithMarkdown_1.bundleFolderWithMarkdown)("Docs", detailDocsContentStrings, "docs")];
            case 1:
                _b = _k.sent();
                return [3 /*break*/, 3];
            case 2:
                _b = undefined;
                _k.label = 3;
            case 3:
                docsBundle = _b;
                sizeString = "Size: ".concat((_e = size === null || size === void 0 ? void 0 : size.codeSize) === null || _e === void 0 ? void 0 : _e.lines, " LOC, ").concat(((_f = size === null || size === void 0 ? void 0 : size.dataSize) === null || _f === void 0 ? void 0 : _f.characters) !== undefined
                    ? "".concat((_g = size === null || size === void 0 ? void 0 : size.dataSize) === null || _g === void 0 ? void 0 : _g.characters, " data characters, ")
                    : "").concat(((_h = size === null || size === void 0 ? void 0 : size.textSize) === null || _h === void 0 ? void 0 : _h.characters) !== undefined
                    ? "".concat((_j = size === null || size === void 0 ? void 0 : size.textSize) === null || _j === void 0 ? void 0 : _j.characters, " text characters, ")
                    : "");
                operationInfoMd = "".concat(operationName, " (`OperationClassification` ").concat(classification, ")\n\n").concat(description ? "".concat(description, "\n\n") : "");
                infoString = config.includeInfo
                    ? "\n".concat(sizeString, "\n \nImported dependencies:\n\n- From Core Libraries: ").concat(coreDependenciesString, "\n- From Packages: ").concat(packageDependenciesString, "\n- From Operations: ").concat(operationDependenciesString)
                    : undefined;
                operationInfoMarkdownParse = (0, markdown_parse_js_1.mdToJsonParse)(operationInfoMd, operationName);
                _c = [cliItems, testItems].map(function (items) {
                    return items.map(statementItemToMarkdown_1.statementItemToMarkdown).filter(js_util_1.notEmpty).join("\n\n");
                }), cliMarkdown = _c[0], testMarkdown = _c[1];
                _d = [
                    externalItems,
                    internalItems,
                ].map(function (countArray) {
                    var res = countArray
                        .map(statementItemToMarkdown_1.statementItemToMarkdown)
                        .filter(js_util_1.notEmpty)
                        .join("\n\n");
                    return res;
                }), externalItemsMarkdown = _d[0], internalItemsMarkdown = _d[1];
                apiReference = (0, markdown_parse_js_1.mdToJsonParse)(externalItemsMarkdown, "api-reference");
                infoMarkdownParse = infoString
                    ? (0, markdown_parse_js_1.mdToJsonParse)(infoString, "info")
                    : undefined;
                internalSection = (0, createMinimisedSection_1.createMinimizedSection)(internalItemsMarkdown, "internal", "Show internal (".concat(internalItems.length, ")"));
                testSection = (0, createMinimisedSection_1.createMinimizedSection)(testMarkdown, "tests", "Show test information(".concat(testItems.length, ")"));
                cliSection = (0, createMinimisedSection_1.createMinimizedSection)(cliMarkdown, "CLI", "Show CLI information (".concat(cliItems.length, ")"));
                merged = (0, merge_1.mergeMarkdownParse)([
                    operationInfoMarkdownParse,
                    infoMarkdownParse,
                    (config === null || config === void 0 ? void 0 : config.includeDocs)
                        ? (0, markdown_parse_js_1.mdToJsonParse)((docsBundle === null || docsBundle === void 0 ? void 0 : docsBundle.outlineString) || "")
                        : undefined,
                    (config === null || config === void 0 ? void 0 : config.includeDocs) ? docsBundle === null || docsBundle === void 0 ? void 0 : docsBundle.markdownParse : undefined,
                    apiReference,
                    cliSection,
                    testSection,
                    internalSection,
                ].filter(js_util_1.notEmpty)).merged;
                returnString = undefined;
                if (returnType !== "parse") {
                    returnString = (0, markdown_parse_js_1.markdownParseToMarkdownString)(merged);
                }
                shouldSave = returnType === "save" || !returnType;
                if (!(shouldSave && returnString)) return [3 /*break*/, 5];
                return [4 /*yield*/, fs_util_1.fs.writeFile(fs_util_1.path.join(operationFolderPath, "README.md"), returnString, "utf8")];
            case 4:
                _k.sent();
                _k.label = 5;
            case 5:
                returnValue = returnType === "parse"
                    ? merged
                    : returnType === "string"
                        ? returnString
                        : undefined;
                return [2 /*return*/, returnValue];
        }
    });
}); };
exports.operationToMarkdown = operationToMarkdown;
//# sourceMappingURL=operationToMarkdown.js.map