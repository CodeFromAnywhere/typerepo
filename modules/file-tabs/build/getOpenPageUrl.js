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
exports.getOpenPageUrl = void 0;
var next_paths_1 = require("next-paths");
var rest_util_1 = require("rest-util");
/**
 gets the url of the open page

 - paths is a special query key that is expanded as path, not as query
 - index page should be on /
 */
var getOpenPageUrl = function (openPage, pagesObject) {
    var page = openPage.page === "index"
        ? (0, next_paths_1.getFullPath)(openPage.query.paths)
        : openPage.page;
    var query = __assign({}, openPage.query);
    delete query.paths;
    var queryString = (0, rest_util_1.toQueryString)(query);
    var url = "".concat(page).concat(queryString);
    return url;
};
exports.getOpenPageUrl = getOpenPageUrl;
//# sourceMappingURL=getOpenPageUrl.js.map