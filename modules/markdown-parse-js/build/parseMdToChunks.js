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
exports.parseMdToChunks = void 0;
var make_test_1 = require("make-test");
var exampleContents_1 = require("./exampleContents");
var removeHeaderPrefix_1 = require("./removeHeaderPrefix");
/**
 * should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.
 */
var parseMdToChunks = function (markdownString, level) {
    var lines = markdownString.split("\n");
    var chunks = lines.reduce(function (chunks, line) {
        // NB: please note the space at the end, it's very important for this to work
        var prefix = level !== 0 ? "".concat("#".repeat(level), " ") : null;
        if (prefix && line.startsWith(prefix)) {
            // Seems to be a header!
            // NB: new header of this level detected, new chunk begins
            return chunks.concat([
                {
                    level: level,
                    title: (0, removeHeaderPrefix_1.removeHeaderPrefix)(line),
                },
            ]);
        }
        else {
            // line is part of previous chunk, just add it to it
            // NB: since the initial value contains something, we can assert it not being empty
            var lastItem = chunks.pop();
            var previousContent = lastItem.content ? "".concat(lastItem.content, "\n") : "";
            var content = "".concat(previousContent).concat(line);
            return chunks.concat([__assign(__assign({}, lastItem), { content: content })]);
        }
    }, 
    // NB: by default it's a paragraph without header
    [{ level: 0 }]);
    // NB: we need something... filter out empty chunks!
    return chunks.filter(function (x) { return x.content || x.title || x.children; });
};
exports.parseMdToChunks = parseMdToChunks;
//
var test = (0, make_test_1.makeTest)(function () {
    return (0, exports.parseMdToChunks)(exampleContents_1.exampleMarkdownFileContents, 1);
}
// (result) => {
//   return (
//     JSON.stringify(result) ===
//     JSON.stringify([
//       {
//         level: 1,
//         title: "Header 1",
//         content: "Paragraph 1\n",
//       },
//       {
//         level: 1,
//         title: "Header 2",
//         content:
//           "## Header 2.1\n" +
//           "\n" +
//           "Paragraph 2\n" +
//           "\n" +
//           "## Header 2.2\n" +
//           "\n" +
//           "Paragraph 3\n" +
//           "Paragraph 4\n" +
//           "\n" +
//           "Paragraph 5 (with empty line above)\n",
//       },
//     ])
//   );
// }
);
//# sourceMappingURL=parseMdToChunks.js.map