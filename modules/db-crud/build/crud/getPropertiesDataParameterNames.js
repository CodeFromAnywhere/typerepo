"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesDataParameterNames = void 0;
var js_util_1 = require("js-util");
var schema_util_1 = require("schema-util");
var getPropertiesDataParameterNames = function (properties) {
    var dataParameterNames = properties
        .map(function (property) {
        var dataParameterName = (0, schema_util_1.getReferenceParameterInfo)(property.name).dataParameterName;
        return dataParameterName;
    })
        .filter(js_util_1.notEmpty);
    return dataParameterNames;
};
exports.getPropertiesDataParameterNames = getPropertiesDataParameterNames;
//# sourceMappingURL=getPropertiesDataParameterNames.js.map