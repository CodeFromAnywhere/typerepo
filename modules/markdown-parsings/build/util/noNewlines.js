"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noNewlines = void 0;
/**
 * Replaces newlines with a <br />
 */
var noNewlines = function (markdown) {
    return markdown === null || markdown === void 0 ? void 0 : markdown.replaceAll("\n", "<br />");
};
exports.noNewlines = noNewlines;
//# sourceMappingURL=noNewlines.js.map