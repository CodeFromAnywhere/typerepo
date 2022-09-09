"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxIndentationDepth = void 0;
/**
 * gets the maximum indentation depth of any piece of code
 *
 * does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.
 *
 * assumes an indentation contains 2 spaces.
 */
var getMaxIndentationDepth = function (functionText) {
    var lines = functionText.split("\n");
    var maxDepth = lines.reduce(function (max, line) {
        var prefixSpaces = line.length - line.trimStart().length;
        var lineIndentationDepth = Math.floor(prefixSpaces / 2);
        return max > lineIndentationDepth ? max : lineIndentationDepth;
    }, 0);
    return maxDepth;
};
exports.getMaxIndentationDepth = getMaxIndentationDepth;
//# sourceMappingURL=getMaxIndexationDepth.js.map