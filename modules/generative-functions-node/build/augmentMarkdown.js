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
exports.augmentMarkdown = exports.makeMarkdownLink = void 0;
var database_1 = require("database");
var filename_conventions_1 = require("filename-conventions");
var js_util_1 = require("js-util");
var getContextualPromptResults_1 = require("./getContextualPromptResults");
var getContextualPrompts_1 = require("./getContextualPrompts");
var augmented_word_node_1 = require("augmented-word-node");
/**
 * function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`
 */
var makeMarkdownLink = function (text, url, alt) {
    return "[".concat(text, "](").concat(url || "#").concat(alt ? " \"".concat(alt.replaceAll("\n", "<br>").replaceAll('"', '\\"'), "\"") : "", ")");
};
exports.makeMarkdownLink = makeMarkdownLink;
/**
 Now that I've written this all down, it seems to be a quite an expensive operation, but we never need to do it for ensire websites, just for one page, and the result can easily be cached. I need to write a regex function that matches all text from a list of searchterms in markdown except if it's part of a link or image, and reduce the matches, creating a new markdown string every time. I think there are algorithms though that are more efficient because if there are like thousands of matches on a 2mb text, the thing would take much longer. Maybe it's more efficient to split up the text in smaller pieces and do the regex for every piece individually. This would have a limitation that you can't select cross-section, but I don't think that's my usecase anyway. If we later add support for making statements about a chapter or subsection and stuff like that, this limitation can also be resolved.

 */
/**
Augments markdown in many ways for multiple purposes.

- Parse the markdown instead of showing the results as React buttons. The link to "#" alt can become the same as a nice AugmentedWord hover, when it's found to be a selection result, we can highlight the selection whenever we hover over a link with that same text as alt as well, and add that hover as a note at the end of the selection.
- ensure the parse parses `WordCombination`, `WordMatrix`, `Statement`, `AugmentedWord`, and `ContextualPromptResult`. It's a lot of work, but definitely worth it. Should be parsed as
- remove the parsing of everything in the markdown render. This is also the end of sending `AugmentedWord`s to the frontend

LATER:

- CTA's, headers, footers, ads (check how I was planning to get those at codestorys-node or so)
- Word frequency occurency styling
- Subtexts and subwords

*/
var augmentMarkdown = function (markdown, config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, isAdmin, augmentCode, augmentContextualPrompts, augmentContextualPromptResults, augmentStatements, augmentWords, markdown_projectRelativeFilePath, externalHost, fileType, augmentedWordObject, _b, isDev, _c, databaseContextualPromptSlugs, contextualPromptsObject, contextualPromptResults, _d, wordMatrixs, _e, mappedWordMatrix, wordCombinations, _f, statements, _g, markdownWithCodespanAugmentation, markdownAfterContextualPromptResults, markdownAfterStatements, markdownAfterWordCombinations, augmentedMarkdown;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (!markdown || markdown.trim() === "") {
                    // no markdown, just return the input
                    return [2 /*return*/, {
                            augmentedMarkdown: markdown,
                        }];
                }
                _a = (0, js_util_1.destructureOptionalObject)(config), isAdmin = _a.isAdmin, augmentCode = _a.augmentCode, augmentContextualPrompts = _a.augmentContextualPrompts, augmentContextualPromptResults = _a.augmentContextualPromptResults, augmentStatements = _a.augmentStatements, augmentWords = _a.augmentWords, markdown_projectRelativeFilePath = _a.markdown_projectRelativeFilePath, externalHost = _a.externalHost;
                fileType = (0, filename_conventions_1.getFileTypeFromPath)(markdown_projectRelativeFilePath);
                if (!augmentCode) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, augmented_word_node_1.getAugmentedWordObject)()];
            case 1:
                _b = _h.sent();
                return [3 /*break*/, 3];
            case 2:
                _b = undefined;
                _h.label = 3;
            case 3:
                augmentedWordObject = _b;
                isDev = isAdmin || process.env.NODE_ENV !== "production";
                return [4 /*yield*/, (0, getContextualPrompts_1.getContextualPrompts)(fileType === "other" ? undefined : fileType, undefined, isDev)];
            case 4:
                _c = _h.sent(), databaseContextualPromptSlugs = _c.databaseContextualPromptSlugs, contextualPromptsObject = __rest(_c, ["databaseContextualPromptSlugs"]);
                if (!augmentContextualPromptResults) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, getContextualPromptResults_1.getContextualPromptResults)({
                        promptSlugs: databaseContextualPromptSlugs,
                        prompt_projectRelativePath: markdown_projectRelativeFilePath,
                    })];
            case 5:
                _d = ((_h.sent()) || []).filter(function (x) {
                    if (isDev)
                        return true;
                    return !x.isFake && x.isFavorite;
                });
                return [3 /*break*/, 7];
            case 6:
                _d = [];
                _h.label = 7;
            case 7:
                contextualPromptResults = _d;
                if (!augmentWords) return [3 /*break*/, 9];
                return [4 /*yield*/, database_1.db.get("WordMatrix")];
            case 8:
                _e = (_h.sent()).map(function (x) {
                    return (0, js_util_1.getSubsetFromObject)(x, [
                        "slug",
                        "name",
                        "description",
                        "descriptionAudio",
                        "emoji",
                        "image",
                        "rank",
                        "priorityLevel",
                        "type",
                        "usageCountCalculated",
                        "english",
                    ]);
                });
                return [3 /*break*/, 10];
            case 9:
                _e = [];
                _h.label = 10;
            case 10:
                wordMatrixs = _e;
                mappedWordMatrix = (0, js_util_1.createMappedObject)(wordMatrixs, "slug");
                if (!augmentWords) return [3 /*break*/, 12];
                return [4 /*yield*/, database_1.db.get("WordCombination")];
            case 11:
                _f = _h.sent();
                return [3 /*break*/, 13];
            case 12:
                _f = [];
                _h.label = 13;
            case 13:
                wordCombinations = _f;
                if (!augmentStatements) return [3 /*break*/, 15];
                return [4 /*yield*/, database_1.db.get("Statement")];
            case 14:
                _g = _h.sent();
                return [3 /*break*/, 16];
            case 15:
                _g = [];
                _h.label = 16;
            case 16:
                statements = _g;
                markdownWithCodespanAugmentation = markdown
                    .split(" ")
                    .map(function (word) {
                    if (!word.startsWith("`") || !word.endsWith("`")) {
                        return word;
                    }
                    var wordWithoutBackticks = word.slice(1, word.length - 1);
                    var augmentedWord = augmentedWordObject === null || augmentedWordObject === void 0 ? void 0 : augmentedWordObject[wordWithoutBackticks];
                    if (!augmentedWord || !augmentedWord.spoiler) {
                        return word;
                    }
                    return (0, exports.makeMarkdownLink)(wordWithoutBackticks, undefined, augmentedWord.spoiler);
                })
                    .join(" ");
                markdownAfterContextualPromptResults = contextualPromptResults.reduce(function (previousMarkdown, contextualPromptResult) {
                    if (!contextualPromptResult.selectionString) {
                        // console.log("NO selectionString");
                        return previousMarkdown;
                    }
                    var newMarkdown = previousMarkdown.replace(contextualPromptResult.selectionString, "".concat(contextualPromptResult.selectionString, " ").concat((0, exports.makeMarkdownLink)("?", undefined, "".concat(contextualPromptResult.selectionString, "\n\n").concat(contextualPromptResult.contextualPromptSlug, "\n\n").concat(contextualPromptResult.resultText))));
                    return newMarkdown;
                }, markdownWithCodespanAugmentation);
                markdownAfterStatements = statements.reduce(function (previous, statement) {
                    /**
                     * how to get this efficiently even if the propmt reulsts aren't always part of it? tough titty
                     */
                    var newMarkdown = previous.replace(statement.description, "".concat(statement.description, " ").concat((0, exports.makeMarkdownLink)("?", undefined, "Statement: ".concat(statement.description, ".\n\nreaders-agreement: ").concat(statement.readersAgreement, ", agreement: ").concat(statement.agreement, ", importancy ").concat(statement.importancy))));
                    return newMarkdown;
                }, markdownAfterContextualPromptResults);
                markdownAfterWordCombinations = wordCombinations.reduce(function (previousMarkdown, wordCombination) {
                    var _a;
                    var words = ((_a = wordCombination.wordMatrixSlugs) === null || _a === void 0 ? void 0 : _a.map(function (slug) {
                        return mappedWordMatrix[slug] ? mappedWordMatrix[slug] : undefined;
                    }).filter(js_util_1.notEmpty)) || [];
                    // TODO: later I can add things like audio and statistics
                    var wordDefinitions = words
                        .map(function (word) {
                        return "".concat(word.name, ": ").concat(word.description);
                    })
                        .join("\n\n");
                    var fullDescription = "".concat(wordCombination.description, "\n\n").concat(wordDefinitions);
                    // `wordCombinations`: replace term with `["term"(----description----)](link-to-website-or-#)` where description is the description of the term, but below that also all word definitions of the underlying wordmatrix words are explained
                    var newMarkdown = previousMarkdown.replace(wordCombination.name, (0, exports.makeMarkdownLink)(wordCombination.name, undefined, fullDescription));
                    return newMarkdown;
                }, markdownAfterStatements);
                augmentedMarkdown = markdownAfterWordCombinations;
                // console.log({ augmentedMarkdown });
                return [2 /*return*/, {
                        contextualPromptResults: contextualPromptResults,
                        augmentedMarkdown: augmentedMarkdown,
                        contextualPromptsObject: contextualPromptsObject,
                    }];
        }
    });
}); };
exports.augmentMarkdown = augmentMarkdown;
//# sourceMappingURL=augmentMarkdown.js.map