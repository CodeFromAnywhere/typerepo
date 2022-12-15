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
exports.PathSearchResults = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var next_a_link_1 = require("next-a-link");
var react_with_native_1 = require("react-with-native");
var MatchingText_1 = require("./MatchingText");
var PathSearchResults = function (props) {
    var paths = props.paths, search = props.search, augmentedWords = props.augmentedWords;
    /**
     * TODO: include this in the results somehow nicely...
     */
    var augmentedWordResults = augmentedWords === null || augmentedWords === void 0 ? void 0 : augmentedWords.filter(function (x) {
        var word = x.isCaseInsensitive ? x.word.toLowerCase() : x.word;
        var searchQuery = x.isCaseInsensitive ? search.toLowerCase() : search;
        var isMatch = word.includes(searchQuery);
        return isMatch;
    });
    var results = paths
        .map(function (path) {
        var augmentedWordsThisPath = augmentedWordResults === null || augmentedWordResults === void 0 ? void 0 : augmentedWordResults.filter(function (x) { return x.queryPath === path; });
        return { path: path, augmentedWordsThisPath: augmentedWordsThisPath };
    })
        .filter(function (item) {
        var _a;
        var isPathMatch = item.path
            .toLowerCase()
            .includes(search.toLowerCase());
        var isMatch = ((_a = item.augmentedWordsThisPath) === null || _a === void 0 ? void 0 : _a.length) || isPathMatch;
        return isMatch;
    })
        .slice(0, 100);
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: results.map(function (item) {
            var _a;
            var filename = item.path.split("/").pop();
            return ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "/".concat(item.path) }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "px-2 hover:dark:bg-gray-600" }, { children: [(0, jsx_runtime_1.jsx)(MatchingText_1.MatchingText, { truncateLength: 30, text: filename, search: search, defaultTextClassName: "", matchTextClassName: "text-blue-500" }), (0, jsx_runtime_1.jsx)(MatchingText_1.MatchingText, { truncateLength: 30, text: item.path, search: search, defaultTextClassName: "text-xs", matchTextClassName: "text-blue-500" }), (_a = item.augmentedWordsThisPath) === null || _a === void 0 ? void 0 : _a.map(function (augmentedWord) {
                            return ((0, jsx_runtime_1.jsx)(MatchingText_1.MatchingText, { truncateLength: 30, text: augmentedWord.word, search: search, defaultTextClassName: "text-xs", matchTextClassName: "text-blue-500" }));
                        })] })) })));
        }) }));
};
exports.PathSearchResults = PathSearchResults;
//# sourceMappingURL=PathSearchResults.js.map