"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCommentTypes = void 0;
var code_types_1 = require("code-types");
/**
 * returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)
 */
var findCommentTypes = function (commentWithoutFrontmatter) {
    var lines = commentWithoutFrontmatter.split("\n");
    var types = code_types_1.commentTypes.filter(function (type) {
        return lines.find(function (line) { return line.trimStart().startsWith("".concat(type.toUpperCase(), ":")); });
    });
    return types;
};
exports.findCommentTypes = findCommentTypes;
//# sourceMappingURL=findCommentTypes.js.map