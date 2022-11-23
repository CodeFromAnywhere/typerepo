"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastPathsChunk = void 0;
/**
 * returns the last chunk of the path
 */
var getLastPathsChunk = function (
/**
 * paths coming from `router.query`
 */
paths) {
    return Array.isArray(paths) ? paths[paths.length - 1] : paths;
};
exports.getLastPathsChunk = getLastPathsChunk;
//# sourceMappingURL=getLastPathsChunk.js.map