"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortToItem = void 0;
var convert_case_1 = require("convert-case");
var sortToItem = function (sort) {
    return {
        label: "".concat(sort.sortDirection === "ascending" ? "↑" : "↓", " ").concat((0, convert_case_1.humanCase)(sort.objectParameterKey)),
        value: "".concat(sort.objectParameterKey, ",").concat(sort.sortDirection),
        data: sort,
    };
};
exports.sortToItem = sortToItem;
//# sourceMappingURL=sortToItem.js.map