"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchingText = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
/**
 * Component that highlights the matching text
 */
var MatchingText = function (props) {
    var truncateLength = props.truncateLength, text = props.text, defaultTextClassName = props.defaultTextClassName, matchTextClassName = props.matchTextClassName, search = props.search;
    // 1: find index of search in text
    var matchIndex = text.toLowerCase().indexOf(search.toLowerCase());
    // 2: find stuff before that and after that
    var beforeText = text.slice(0, matchIndex);
    var afterText = text.slice(matchIndex + search.length);
    var matchText = text.slice(matchIndex, matchIndex + search.length);
    var totalLength = beforeText.length + search.length + afterText.length;
    var reduceCharactersAmount = truncateLength
        ? totalLength - truncateLength
        : 0;
    var beforeTextLengthPercentage = beforeText.length / (beforeText.length + afterText.length);
    var afterTextLengthPercentage = afterText.length / (beforeText.length + afterText.length);
    var reduceBeforeCharacters = Math.round(beforeTextLengthPercentage * reduceCharactersAmount);
    var reduceAfterCharacters = Math.round(afterTextLengthPercentage * reduceCharactersAmount);
    var truncatedBeforeText = reduceBeforeCharacters > beforeText.length && truncateLength
        ? beforeText.slice(0, beforeText.length - reduceBeforeCharacters - 2) +
            ".."
        : beforeText;
    var truncatedAfterText = truncateLength && reduceAfterCharacters > afterText.length
        ? ".." + afterText.slice(afterText.length - reduceAfterCharacters - 2)
        : afterText;
    // 3: render before, match, and after
    return matchIndex === -1 ? (
    // with no match, truncate at truncateLength at the end
    (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ title: text, className: defaultTextClassName }, { children: truncateLength && text.length > truncateLength
            ? text.substring(0, truncateLength - 2) + ".."
            : text }))) : (
    /**
     * with a match, the total length needs to be `truncateLength`
     *
     * the `search` result should not be truncated
     *
     * `beforeText` should be truncated at the end to reduce to `truncateLength`
     * `afterText` should be truncated at the beginning to reduce to `truncateLength`
     *
     * it should be truncated as much as needed on both sides, but we must take into account at the length of the sides as well
     */
    (0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ title: text, className: defaultTextClassName }, { children: [beforeText, (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: matchTextClassName }, { children: matchText })), afterText] })));
};
exports.MatchingText = MatchingText;
//# sourceMappingURL=MatchingText.js.map