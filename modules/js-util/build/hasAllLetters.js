"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAllLetters = void 0;
/**
 * all letters of b can be found in a, in order (but other letters in between are allowed)
 */
var hasAllLetters = function (a, b) {
    var lettersLeft = a
        .split("")
        .reduce(function (lettersLeft, lowercaseValueLetter) {
        if (lettersLeft[0] === lowercaseValueLetter) {
            lettersLeft.shift();
        }
        return lettersLeft;
    }, b.split(""));
    return lettersLeft.length === 0;
};
exports.hasAllLetters = hasAllLetters;
//# sourceMappingURL=hasAllLetters.js.map