"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldExposeMarkdownFile = void 0;
/**
 * markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.
 */
var shouldExposeMarkdownFile = function (parameters) {
    return !Boolean(parameters.isDraft) && parameters.privacy !== "private";
};
exports.shouldExposeMarkdownFile = shouldExposeMarkdownFile;
//# sourceMappingURL=shouldExposeMarkdownFile.js.map