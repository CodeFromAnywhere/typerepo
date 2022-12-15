"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryPart = void 0;
/**
 * creates a query-string with one key for all strings in an array
 */
var getQueryPart = function (strings, queryKey) {
    return strings.map(function (v) { return "".concat(queryKey, "=").concat(v); }).join("&");
};
exports.getQueryPart = getQueryPart;
//# sourceMappingURL=url-util.js.map