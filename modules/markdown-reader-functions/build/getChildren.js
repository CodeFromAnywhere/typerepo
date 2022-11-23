"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildren = void 0;
var getChildren = function (webPages, queryPath) {
    var queryPathDepth = queryPath.split("/").length;
    var childrenKeys = webPages
        .filter(function (x) {
        return x.queryPath.startsWith(queryPath) &&
            x.queryPath.split("/").length - queryPathDepth === 1;
    })
        .map(function (x) { return x.queryPath.split("/")[queryPathDepth]; });
    return childrenKeys;
};
exports.getChildren = getChildren;
//# sourceMappingURL=getChildren.js.map