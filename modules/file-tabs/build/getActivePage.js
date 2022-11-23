"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivePage = void 0;
var getActivePage = function (pathname, pagesObject) {
    var p = pathname.substring(1);
    if (Object.keys(pagesObject).includes(p))
        return p;
    return "index";
};
exports.getActivePage = getActivePage;
//# sourceMappingURL=getActivePage.js.map