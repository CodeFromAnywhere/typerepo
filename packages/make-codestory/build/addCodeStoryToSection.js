"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCodestoryToSection = void 0;
var marked_util_1 = require("marked-util");
var js_util_1 = require("js-util");
var writeCodespanDetails_1 = require("./writeCodespanDetails");
var addCodestoryToSection = function (sectionContent, mappedObject, isDebug) {
    if (!sectionContent)
        return;
    // For every piece of content find the codespans
    var codespans = (0, marked_util_1.findCodespans)(sectionContent);
    var info = codespans
        .map(function (word) {
        var details = mappedObject[word];
        if (!details)
            return;
        // Augment every section with one <details> section for every referred piece of code.
        return (0, writeCodespanDetails_1.writeCodespanDetails)(details);
    })
        .filter(js_util_1.notEmpty);
    if (isDebug) {
        console.log({ codespans: codespans.length, infos: info.length });
    }
    return "".concat(sectionContent).concat(info.length > 0 ? "\n\n".concat(info.join("\n\n"), "\n") : "");
};
exports.addCodestoryToSection = addCodestoryToSection;
//# sourceMappingURL=addCodeStoryToSection.js.map