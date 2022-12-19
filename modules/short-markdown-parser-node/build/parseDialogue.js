"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDialogue = void 0;
var js_util_1 = require("js-util");
var parseDialogue = function (textMarkdown) {
    var sentences = textMarkdown
        .split("\n")
        .map(function (line) { return (line.trim() === "" ? undefined : line); })
        .filter(js_util_1.notEmpty)
        .map(function (line) {
        var parts = line.split(":");
        var voice = parts.length < 2 ? undefined : parts.shift();
        var sentence = parts.join(":").trim();
        return { voice: voice, sentence: sentence };
    });
    return sentences;
};
exports.parseDialogue = parseDialogue;
//# sourceMappingURL=parseDialogue.js.map