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
exports.mapMarkdownParseSections = void 0;
var mapChunkRecursively_1 = require("./mapChunkRecursively");
var mapMarkdownParseSections = function (markdownParse, mapFunction) {
    var _a;
    var content = (_a = markdownParse.content) === null || _a === void 0 ? void 0 : _a.map(function (chunk) {
        return (0, mapChunkRecursively_1.mapChunkRecursively)(chunk, mapFunction);
    });
    var newMarkdownParse = __assign(__assign({}, markdownParse), { content: content });
    return newMarkdownParse;
};
exports.mapMarkdownParseSections = mapMarkdownParseSections;
//# sourceMappingURL=mapMarkdownParseSections.js.map