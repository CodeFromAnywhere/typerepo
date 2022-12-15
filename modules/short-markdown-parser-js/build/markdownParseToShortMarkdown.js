"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortMarkdownToMarkdownParse = exports.markdownParseToShortMarkdown = void 0;
var findAudioWithViewsArray_1 = require("./findAudioWithViewsArray");
var markdownParseToShortMarkdown = function (markdownParse) {
    var _a, _b, _c;
    if (!markdownParse.content)
        return;
    // TODO: Make a nested function for this that actually works... -.-
    var paragraphs = ((_c = (_b = (_a = markdownParse.content) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.map(function (child) {
        var _a, _b;
        return {
            title: child.title,
            paragraph: child.content || ((_b = (_a = child.children) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) || "No content",
        };
    })) || [];
    var audioWithViewsArray = paragraphs
        .map(function (p, index) {
        var viewSlides = (0, findAudioWithViewsArray_1.findAudioWithViewsArray)(p.paragraph, index, p.title);
        return viewSlides;
    })
        .flat()
        // No empty items
        .filter(function (x) { return x.audioPath || x.viewEmbeds.length > 0; });
    var shortMarkdown = {
        // Can add this option later
        backgroundMusicTrack: [],
        audioWithViewsArray: audioWithViewsArray,
    };
    return shortMarkdown;
};
exports.markdownParseToShortMarkdown = markdownParseToShortMarkdown;
var shortMarkdownToMarkdownParse = function () {
    // not even sure this is needed, let's first do the other one
};
exports.shortMarkdownToMarkdownParse = shortMarkdownToMarkdownParse;
//# sourceMappingURL=markdownParseToShortMarkdown.js.map