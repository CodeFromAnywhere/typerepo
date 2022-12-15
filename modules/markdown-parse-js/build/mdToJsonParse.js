"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdToJsonParse = void 0;
var mdContentParseRecursively_1 = require("./mdContentParseRecursively");
var parseFrontmatterMarkdownString_1 = require("./parseFrontmatterMarkdownString");
/**
 * makes a markdown parse from a markdown string
 *
 * TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.
 *
 * TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!
 */
var mdToJsonParse = function (markdownString, fileName, config) {
    var _a = (0, parseFrontmatterMarkdownString_1.parseFrontmatterMarkdownString)(markdownString, config), parameters = _a.parameters, raw = _a.raw;
    return {
        fileName: fileName,
        raw: raw,
        parameters: parameters,
        content: (0, mdContentParseRecursively_1.mdContentParseRecursively)(raw, 1),
    };
};
exports.mdToJsonParse = mdToJsonParse;
//# sourceMappingURL=mdToJsonParse.js.map