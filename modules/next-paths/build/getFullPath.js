"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullPath = void 0;
/**
 * gets a path string from `next.js` `router.query`.
 */
var getFullPath = function (
/**
 * paths coming from `router.query`
 *
 * supposed to be a path/url refering to a file/page that can be represented with slashes in between
 */
paths) {
    return typeof paths === "string"
        ? paths
        : Array.isArray(paths)
            ? paths.join("/")
            : "";
};
exports.getFullPath = getFullPath;
//# sourceMappingURL=getFullPath.js.map