"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeMarkdownParse = void 0;
var js_util_1 = require("js-util");
var convert_case_1 = require("convert-case");
var markdown_reader_functions_1 = require("markdown-reader-functions");
var parsing_1 = require("./parsing");
var markdown_parse_js_1 = require("markdown-parse-js");
/**
 * Merges multiple markdown parses to create a new markdown parse
 */
var mergeMarkdownParse = function (markdownParses, fileName) {
    var allParameters = (0, js_util_1.mergeObjectsArray)(markdownParses.map(function (x) { return x.parameters; }));
    var allMarkdownChunks = markdownParses.map(function (x) {
        var newMarkodwnChunk = {
            children: (0, parsing_1.upMarkdownChunkLevelRecursively)(x.content),
            level: 1,
            content: undefined,
            title: x.fileName
                ? (0, convert_case_1.humanCase)((0, markdown_reader_functions_1.removeExtensionsFromPath)(x.fileName))
                : undefined,
        };
        return newMarkodwnChunk;
    });
    var newMarkdownParse = {
        parameters: allParameters,
        raw: (0, parsing_1.markdownChunksToMarkdownStringRecursive)(allMarkdownChunks),
        content: allMarkdownChunks,
        fileName: fileName,
    };
    var outline = markdownParses
        .map(function (markdownParse) {
        if (!markdownParse.fileName)
            return;
        var title = (0, convert_case_1.humanCase)(markdownParse.fileName);
        var implicitId = (0, markdown_parse_js_1.getImplicitId)(title);
        return {
            title: title,
            // NB: because the title in the markdownparse is humancase, we need to slugify that to get the hashtagpath
            hashtagPath: implicitId,
        };
    })
        .filter(js_util_1.notEmpty);
    return { merged: newMarkdownParse, outline: outline };
};
exports.mergeMarkdownParse = mergeMarkdownParse;
//# sourceMappingURL=merge.js.map