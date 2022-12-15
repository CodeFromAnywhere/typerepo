"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryString = void 0;
var isValidEntry_1 = require("./isValidEntry");
/**
 * returns something like `?x=a&y=b&z=c`
 */
var toQueryString = function (query) {
    var _a;
    var hasQuery = query && ((_a = Object.entries(query)) === null || _a === void 0 ? void 0 : _a.filter(isValidEntry_1.isValidEntry).length) > 0;
    return hasQuery
        ? "?" +
            Object.entries(query)
                .filter(isValidEntry_1.isValidEntry)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                var encodedValue = encodeURIComponent(String(value));
                return "".concat(key, "=").concat(encodedValue);
            })
                .join("&")
        : "";
};
exports.toQueryString = toQueryString;
//# sourceMappingURL=toQueryString.js.map