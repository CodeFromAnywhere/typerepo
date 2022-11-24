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
exports.mapChunkRecursively = void 0;
var mapChunkRecursively = function (chunk, mapFunction) {
    var _a;
    var content = mapFunction(chunk.content);
    var children = (_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(function (chunk) {
        return (0, exports.mapChunkRecursively)(chunk, mapFunction);
    });
    var newChunk = __assign(__assign({}, chunk), { content: content, children: children });
    return newChunk;
};
exports.mapChunkRecursively = mapChunkRecursively;
//# sourceMappingURL=mapChunkRecursively.js.map