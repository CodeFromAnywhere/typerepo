"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstQueryStrings = void 0;
/**
 * Query keys can be string or string[] or undefined.
 *
 * This function takes only the first string if it's an array...
 */
var getFirstQueryStrings = function (query) {
    var queryStrings = Object.keys(query).map(function (key) {
        var value = query[key];
        return Array.isArray(value) ? value[0] : value;
    });
    return queryStrings;
};
exports.getFirstQueryStrings = getFirstQueryStrings;
//# sourceMappingURL=getFirstQueryStrings.js.map