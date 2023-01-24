"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeOutlineMarkdownString = void 0;
var makeOutlineMarkdownString = function (title, urls) {
    var outlineString = urls.length > 0
        ? "## ".concat(title, "\n\n").concat(urls
            .map(function (url) {
            return "- [".concat(url.title, "](#").concat(url.hashtagPath, ")");
        })
            .join("\n"), "\n\n")
        : "";
    return outlineString;
};
exports.makeOutlineMarkdownString = makeOutlineMarkdownString;
//# sourceMappingURL=makeOutlineMarkdownString.js.map