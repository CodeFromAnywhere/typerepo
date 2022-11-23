"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePath = void 0;
var react_with_native_router_1 = require("react-with-native-router");
var getFullPath_1 = require("./getFullPath");
var getLastPathsChunk_1 = require("./getLastPathsChunk");
/**
 * uses `useRouter` from `next.js` to get the lastChunk and the `fullPath` out of the `paths`. Assumes you have a page in your next.js project called `[...paths]`.
 */
var usePath = function () {
    var _a;
    var router = (0, react_with_native_router_1.useRouter)();
    var paths = (_a = router.query) === null || _a === void 0 ? void 0 : _a.paths;
    var lastChunk = (0, getLastPathsChunk_1.getLastPathsChunk)(paths);
    var fullPath = (0, getFullPath_1.getFullPath)(paths);
    return { lastChunk: lastChunk, fullPath: fullPath };
};
exports.usePath = usePath;
//# sourceMappingURL=usePath.js.map