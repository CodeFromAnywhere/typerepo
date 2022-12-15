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
exports.getMenuPagesObject = void 0;
var makeNestedObjectFromQueryPathObject_1 = require("./makeNestedObjectFromQueryPathObject");
var nestedObjectToChildObject_1 = require("./nestedObjectToChildObject");
var getMenuPagesObject = function (flat) {
    // NB: to make the NestedWebPage[], we don't want the pageData.
    var flatWithoutPageData = flat.map(function (x) {
        return __assign(__assign({}, x), { pageData: null, __check: true });
    });
    var nestedObject = (0, makeNestedObjectFromQueryPathObject_1.makeNestedObjectFromQueryPathObject)(flatWithoutPageData, {});
    var keyToWebPage = function (nestedObject, key) {
        return __assign(__assign({}, nestedObject), { pageData: null, queryPath: "" });
    };
    var nested = (0, nestedObjectToChildObject_1.nestedObjectToChildObject)(nestedObject, keyToWebPage);
    return { flat: flat, nested: nested };
};
exports.getMenuPagesObject = getMenuPagesObject;
//# sourceMappingURL=getMenuPagesObject.js.map