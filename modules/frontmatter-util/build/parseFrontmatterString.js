"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFrontmatterString = void 0;
/**
 * Parse a string as stored in frontmatter back to the original string
 */
var parseFrontmatterString = function (value) {
    var withoutQuotes = value.includes(",")
        ? value.substring(1, value.length - 1)
        : value;
    var withNewlines = withoutQuotes.replaceAll("\\n", "\n");
    return withNewlines;
};
exports.parseFrontmatterString = parseFrontmatterString;
//# sourceMappingURL=parseFrontmatterString.js.map