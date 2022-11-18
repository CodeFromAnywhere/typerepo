#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mdContentParseRecursively = void 0;
var make_test_1 = require("make-test");
var exampleContents_1 = require("./exampleContents");
var parseMdToChunks_1 = require("./parseMdToChunks");
/**
 * recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]
 
Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets
 */
var mdContentParseRecursively = function (markdownString, level) {
    var chunks = (0, parseMdToChunks_1.parseMdToChunks)(markdownString, level);
    var chunksWithChildren = chunks.map(function (chunk) {
        // NB: chunk is a paragraph
        if (chunk.level === 0 && !chunk.title && chunk.content) {
            // const lines = chunk.content.split("\n");
            // // For every line, copy the chunk...
            // const chunks = lines?.map((line) => ({
            //   ...chunk,
            //   content: line,
            // }));
            // return chunks;
            return [chunk];
        }
        // NB: h6 is highest level
        var children = chunk.content && [1, 2, 3, 4, 5, 6].includes(chunk.level)
            ? (0, exports.mdContentParseRecursively)(chunk.content, chunk.level + 1)
            : undefined;
        var content = children ? undefined : chunk.content;
        // NB: here we are splitting content with multiple lines into lines only for level 0 chunks
        return content
            ? [__assign(__assign({}, chunk), { content: content })]
            : [__assign(__assign({}, chunk), { children: children, content: undefined })];
    });
    return chunksWithChildren.flat();
};
exports.mdContentParseRecursively = mdContentParseRecursively;
var test = (0, make_test_1.makeTest)(function () {
    return (0, exports.mdContentParseRecursively)(exampleContents_1.exampleMarkdownFileContents, 1);
}
// (result) => {
//   return (
//     JSON.stringify(result) ===
//     JSON.stringify([
//       {
//         level: 1,
//         title: "Header 1",
//         content: undefined,
//         children: [
//           { level: 0, content: "Paragraph 1" },
//           { level: 0, content: "" },
//         ],
//       },
//       {
//         level: 1,
//         title: "Header 2",
//         content: undefined,
//         children: [
//           {
//             level: 2,
//             title: "Header 2.1",
//             content: undefined,
//             children: [
//               { level: 0, content: "Paragraph 2" },
//               { level: 0, content: "" },
//             ],
//           },
//           {
//             level: 2,
//             title: "Header 2.2",
//             content: undefined,
//             children: [
//               { level: 0, content: "Paragraph 3" },
//               { level: 0, content: "Paragraph 4" },
//               { level: 0, content: "" },
//               {
//                 level: 0,
//                 content: "Paragraph 5 (with empty line above)",
//               },
//               { level: 0, content: "" },
//             ],
//           },
//         ],
//       },
//     ])
//   );
// }
);
//# sourceMappingURL=mdContentParseRecursively.js.map