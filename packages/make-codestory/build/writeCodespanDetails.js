"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCodespanDetails = void 0;
var js_util_1 = require("js-util");
var writeCodespanDetails = function (codespanItemInfo) {
    // Ensure this section contains not only the description, but also the code of the referred interface/function/variable, and a link to a website where you find the real-time docs.
    var description = codespanItemInfo.description;
    var githubRepo = codespanItemInfo.gitRepoUrl
        ? "[Find more on GitHub](".concat(codespanItemInfo.gitRepoUrl, ")")
        : undefined;
    var rawText = codespanItemInfo.rawText
        ? "```tsx\n".concat(codespanItemInfo.rawText, "\n```")
        : undefined;
    var sections = [description, githubRepo, rawText]
        .filter(js_util_1.notEmpty)
        .join("\n\n\n\n");
    var hasContent = sections.trim().length > 0;
    return "<details>\n  \n  <summary>".concat(codespanItemInfo.name, "</summary>\n  \n  ").concat(hasContent
        ? sections
        : "I didn't write a good description for this yet. Please let me know if you want to know more", "\n  \n  </details>\n  ");
};
exports.writeCodespanDetails = writeCodespanDetails;
//# sourceMappingURL=writeCodespanDetails.js.map