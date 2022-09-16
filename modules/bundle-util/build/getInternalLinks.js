"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getInternalLinks=void 0;
/**
 * Returns the internal links taken out of the MarkdownReaderPage[]
 */
var getInternalLinks=function(n){
/*
      Make the reader-ui fetch all words at build-time and match the md file for every page against words, statements, functions, interfaces, variables, operations. This will generate an array of extra information: a `description` and possibly a URL. I think there should be a `/definition/*` page for every word/statement inside of every reader-ui (the glossary)
      */
n.filter((function(n){return!!n.internalLinkWord})).map((function(n){var e=n.queryPath;return{internalLinkWord:n.internalLinkWord,queryPath:e}}))};exports.getInternalLinks=getInternalLinks;
//# sourceMappingURL=getInternalLinks.js.map