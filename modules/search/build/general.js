#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findSentenceMatches=void 0;var convert_case_1=require("convert-case"),findSentenceMatches=function(
/**
 * a message the user is searching for
 */
e,
/**
 * an array that should be filtered.
 */
r,
/**
 * optionally, if the array doesn't contain strings of sentences already, you can provide a map function here that returns a sentence from an item in that array
 */
n){var t=(0,convert_case_1.lowerCaseArray)(e);return r.filter((function(e){var r=n?n(e):"string"==typeof e?e:null;if(!r)return!1;var c=(0,convert_case_1.lowerCaseArray)(r);return t.reduce((function(e,r){
// TODO: later we can use synonyms here
return e&&c.includes(r)}),!0)}))};
/**
 * finds matches of a searchMessage in an array, looking at the individual words.
 *
 * if your search matches some words in a sentence, it's a match, as long as all your words you entered are also a word in the sentence
 *
 * NB: this could be augmented with things like synonyms and translation
 */exports.findSentenceMatches=findSentenceMatches;
//# sourceMappingURL=general.js.map