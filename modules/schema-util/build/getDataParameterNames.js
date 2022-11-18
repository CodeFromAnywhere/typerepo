"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataParameterNames = void 0;
var js_util_1 = require("js-util");
var getReferenceParameterInfo_1 = require("./getReferenceParameterInfo");
/**
 * Finds all the data parameter names that might be there on an item, based on the item object keys and the convention
 */
var getDataParameterNames = function (item) {
    var dataParameterNames = Object.keys(item)
        .map(function (key) {
        var dataParameterName = (0, getReferenceParameterInfo_1.getReferenceParameterInfo)(key).dataParameterName;
        return dataParameterName;
    })
        .filter(js_util_1.notEmpty);
    return dataParameterNames;
};
exports.getDataParameterNames = getDataParameterNames;
//# sourceMappingURL=getDataParameterNames.js.map