"use strict";
// this file is generated, you can edit it, but it will be re-generated based on the contextual prompts database
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.translateToPortuguese = exports.explain = exports.opposite = exports.emojiAugmentation = exports.addEmojiToEveryWord = exports.diaryToInstagram = exports.developersQuote = exports.williamShakespear = exports.socratesAndSnoopDogg = exports.marcusAurelius = exports.yodafy = exports.ye = exports.rickAndMorty = exports.rickAndMortyRick = exports.poem = exports.haiku = exports.quiz = exports.outlineToInvestorPitch = exports.investorPitch = exports.hookOneliners = exports.followUpQuestions = exports.translateEverything = exports.translateEverythingPortuguese = exports.translateEverythingIntoHindi = exports.fixGrammarAndSpellingMistakes = exports.cleanup = exports.improveCode = exports.typescriptExplain = exports.explainInPortuguese = exports.explainInNepali = exports.explainInDutch = exports.documentationWriting = exports.biggestFunctionName = exports.storytelling = exports.explainLineByLine = void 0;
var processChatGptPrompt_1 = require("./processChatGptPrompt");
/**
Explain line-by-line
*/
var explainLineByLine = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "explain-line-by-line",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.explainLineByLine = explainLineByLine;
exports.explainLineByLine.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-auditory-interface"] };
exports.explainLineByLine.domain = "explainLineByLine";
/**
Write a story about this code and what's happening in there
*/
var storytelling = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "storytelling",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.storytelling = storytelling;
exports.storytelling.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-auditory-interface"] };
exports.storytelling.domain = "storytelling";
var biggestFunctionName = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "biggest-function-name",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.biggestFunctionName = biggestFunctionName;
exports.biggestFunctionName.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-comprehension"] };
exports.biggestFunctionName.domain = "biggestFunctionName";
var documentationWriting = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "documentation-writing",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.documentationWriting = documentationWriting;
exports.documentationWriting.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-comprehension"] };
exports.documentationWriting.domain = "documentationWriting";
var explainInDutch = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "explain-in-dutch",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.explainInDutch = explainInDutch;
exports.explainInDutch.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-comprehension"] };
exports.explainInDutch.domain = "explainInDutch";
var explainInNepali = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "explain-in-nepali",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.explainInNepali = explainInNepali;
exports.explainInNepali.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-comprehension"] };
exports.explainInNepali.domain = "explainInNepali";
var explainInPortuguese = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "explain-in-portuguese",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.explainInPortuguese = explainInPortuguese;
exports.explainInPortuguese.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-comprehension"] };
exports.explainInPortuguese.domain = "explainInPortuguese";
var typescriptExplain = function (contextContent, selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "typescript-explain",
                    contextContent: contextContent,
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.typescriptExplain = typescriptExplain;
exports.typescriptExplain.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-comprehension"] };
exports.typescriptExplain.domain = "typescriptExplain";
var improveCode = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "improve-code",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.improveCode = improveCode;
exports.improveCode.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-education"] };
exports.improveCode.domain = "improveCode";
var cleanup = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "cleanup",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.cleanup = cleanup;
exports.cleanup.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-refactoring"] };
exports.cleanup.domain = "cleanup";
var fixGrammarAndSpellingMistakes = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "fix-grammar-and-spelling-mistakes",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.fixGrammarAndSpellingMistakes = fixGrammarAndSpellingMistakes;
exports.fixGrammarAndSpellingMistakes.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-refactoring"] };
exports.fixGrammarAndSpellingMistakes.domain = "fixGrammarAndSpellingMistakes";
var translateEverythingIntoHindi = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "translate-everything-into-hindi",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.translateEverythingIntoHindi = translateEverythingIntoHindi;
exports.translateEverythingIntoHindi.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-translation"] };
exports.translateEverythingIntoHindi.domain = "translateEverythingIntoHindi";
var translateEverythingPortuguese = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "translate-everything-portuguese",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.translateEverythingPortuguese = translateEverythingPortuguese;
exports.translateEverythingPortuguese.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-translation"] };
exports.translateEverythingPortuguese.domain = "translateEverythingPortuguese";
var translateEverything = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "translate-everything",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.translateEverything = translateEverything;
exports.translateEverything.contextualPromptInfo = { "contextType": ["code"], "isFavorite": true, "categoryStack": ["code", "code-translation"] };
exports.translateEverything.domain = "translateEverything";
var followUpQuestions = function (isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "follow-up-questions",
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.followUpQuestions = followUpQuestions;
exports.followUpQuestions.contextualPromptInfo = { "contextType": ["text"], "categoryStack": [] };
var hookOneliners = function (isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "hook-oneliners",
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.hookOneliners = hookOneliners;
exports.hookOneliners.contextualPromptInfo = { "contextType": ["text"], "categoryStack": [] };
/**
Investor pitch
*/
var investorPitch = function (contextContent, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "investor-pitch",
                    contextContent: contextContent,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.investorPitch = investorPitch;
exports.investorPitch.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": [] };
exports.investorPitch.domain = "investorPitch";
var outlineToInvestorPitch = function (isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "outline-to-investor-pitch",
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.outlineToInvestorPitch = outlineToInvestorPitch;
exports.outlineToInvestorPitch.contextualPromptInfo = { "contextType": ["text"], "categoryStack": [] };
/**
Quiz
*/
var quiz = function (contextContent, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "quiz",
                    contextContent: contextContent,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.quiz = quiz;
exports.quiz.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": [] };
exports.quiz.domain = "quiz";
/**
Write a Haiku
*/
var haiku = function (anyContext, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "haiku",
                    anyContext: anyContext,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.haiku = haiku;
exports.haiku.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "art"] };
exports.haiku.domain = "haiku";
/**
Write a poem
*/
var poem = function (anyContext, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "poem",
                    anyContext: anyContext,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.poem = poem;
exports.poem.contextualPromptInfo = { "contextType": ["text", "code"], "isFavorite": true, "categoryStack": ["text", "art"] };
exports.poem.domain = "poem";
/**
Ricktalk
*/
var rickAndMortyRick = function (anyContext, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "rick-and-morty-rick",
                    anyContext: anyContext,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.rickAndMortyRick = rickAndMortyRick;
exports.rickAndMortyRick.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "art", "rick-and-morty"] };
exports.rickAndMortyRick.domain = "rickAndMortyRick";
/**
Rick teaches Morty
*/
var rickAndMorty = function (contextContent, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "rick-and-morty",
                    contextContent: contextContent,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.rickAndMorty = rickAndMorty;
exports.rickAndMorty.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "art", "rick-and-morty"] };
exports.rickAndMorty.domain = "rickAndMorty";
/**
Let Kanye West write a poem about your selection
*/
var ye = function (selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "ye",
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.ye = ye;
exports.ye.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "art"] };
exports.ye.domain = "ye";
/**
Let Yoda say your selection in his words
*/
var yodafy = function (selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "yodafy",
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.yodafy = yodafy;
exports.yodafy.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "art"] };
exports.yodafy.domain = "yodafy";
var marcusAurelius = function (selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "marcus-aurelius",
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.marcusAurelius = marcusAurelius;
exports.marcusAurelius.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "conversation"] };
exports.marcusAurelius.domain = "marcusAurelius";
var socratesAndSnoopDogg = function (selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "socrates-and-snoop-dogg",
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.socratesAndSnoopDogg = socratesAndSnoopDogg;
exports.socratesAndSnoopDogg.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "conversation"] };
exports.socratesAndSnoopDogg.domain = "socratesAndSnoopDogg";
var williamShakespear = function (selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "william-shakespear",
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.williamShakespear = williamShakespear;
exports.williamShakespear.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "conversation"] };
exports.williamShakespear.domain = "williamShakespear";
var developersQuote = function (selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "developers-quote",
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.developersQuote = developersQuote;
exports.developersQuote.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "social-media"] };
exports.developersQuote.domain = "developersQuote";
var diaryToInstagram = function (selectionContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "diary-to-instagram",
                    selectionContent: selectionContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.diaryToInstagram = diaryToInstagram;
exports.diaryToInstagram.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "social-media"] };
exports.diaryToInstagram.domain = "diaryToInstagram";
/**
Emojify++
*/
var addEmojiToEveryWord = function (contextContent, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "add-emoji-to-every-word",
                    contextContent: contextContent,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.addEmojiToEveryWord = addEmojiToEveryWord;
exports.addEmojiToEveryWord.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "text-bending"] };
exports.addEmojiToEveryWord.domain = "addEmojiToEveryWord";
/**
Emojify
*/
var emojiAugmentation = function (contextContent, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "emoji-augmentation",
                    contextContent: contextContent,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.emojiAugmentation = emojiAugmentation;
exports.emojiAugmentation.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "text-bending"] };
exports.emojiAugmentation.domain = "emojiAugmentation";
var opposite = function (contextContent, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "opposite",
                    contextContent: contextContent
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.opposite = opposite;
exports.opposite.contextualPromptInfo = { "contextType": ["text"], "categoryStack": ["text", "text-bending"] };
/**
🤔 Explain
*/
var explain = function (contextContent, selectionContent, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "explain",
                    contextContent: contextContent,
                    selectionContent: selectionContent,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.explain = explain;
exports.explain.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "text-comprehension"] };
exports.explain.domain = "explain";
/**
Translate to Portuguese
*/
var translateToPortuguese = function (contextContent, prompt_projectRelativePath, isDeferred) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, processChatGptPrompt_1.processChatGptPrompt)({
                    isDeferred: isDeferred,
                    contextualPromptSlug: "translate-to-portuguese",
                    contextContent: contextContent,
                    prompt_projectRelativePath: prompt_projectRelativePath
                })];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.translateToPortuguese = translateToPortuguese;
exports.translateToPortuguese.contextualPromptInfo = { "contextType": ["text"], "isFavorite": true, "categoryStack": ["text", "translation"] };
exports.translateToPortuguese.domain = "translateToPortuguese";
//# sourceMappingURL=prompts.js.map