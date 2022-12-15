"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crudPageToWebPages = exports.functionFormPageToWebPage = void 0;
var convert_case_1 = require("convert-case");
var js_util_1 = require("js-util");
var functionFormPageToWebPage = function (pageData) {
    return {
        pageData: pageData,
        queryPath: "function/".concat(pageData.functionName),
        isMenuHidden: false,
        menuTitle: (0, convert_case_1.humanCase)(pageData.functionName),
    };
};
exports.functionFormPageToWebPage = functionFormPageToWebPage;
var crudPageToWebPages = function (pageData) {
    var dataPage = {
        pageData: pageData,
        queryPath: "data/".concat(pageData.modelName),
        isMenuHidden: false,
        menuTitle: (0, convert_case_1.humanCase)(pageData.modelName),
    };
    var upsertOrNot = pageData.canCreate || pageData.canUpdate
        ? {
            pageData: pageData,
            queryPath: "upsert/".concat(pageData.modelName),
            isMenuHidden: true,
        }
        : undefined;
    return [dataPage, upsertOrNot].filter(js_util_1.notEmpty);
};
exports.crudPageToWebPages = crudPageToWebPages;
//# sourceMappingURL=to-webpage-conversors.js.map