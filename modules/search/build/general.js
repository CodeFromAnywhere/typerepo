#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSentenceMatches = void 0;
var convert_case_1 = require("convert-case");
/**
 * finds matches of a searchMessage in an array, looking at the individual words.
 *
 * if your search matches some words in a sentence, it's a match, as long as all your words you entered are also a word in the sentence
 *
 * NB: this could be augmented with things like synonyms and translation
 */
var findSentenceMatches = function (
/**
 * a message the user is searching for
 */
searchMessage, 
/**
 * an array that should be filtered.
 */
array, 
/**
 * optionally, if the array doesn't contain strings of sentences already, you can provide a map function here that returns a sentence from an item in that array
 */
getSentence) {
    var messageWords = (0, convert_case_1.lowerCaseArray)(searchMessage);
    var matches = array.filter(function (item) {
        var sentence = getSentence
            ? getSentence(item)
            : typeof item === "string"
                ? item
                : null;
        if (!sentence)
            return false;
        var sentenceWords = (0, convert_case_1.lowerCaseArray)(sentence);
        var sentenceIncludesMessage = messageWords.reduce(function (includesAll, messageWord) {
            // TODO: later we can use synonyms here
            return includesAll && sentenceWords.includes(messageWord);
        }, true);
        return sentenceIncludesMessage;
    });
    return matches;
};
exports.findSentenceMatches = findSentenceMatches;
//# sourceMappingURL=general.js.map