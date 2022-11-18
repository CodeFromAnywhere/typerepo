"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGetEndpoint = void 0;
var api_types_1 = require("api-types");
var isGetEndpoint = function (functionName) {
    return functionName.endsWith(api_types_1.apiConventions.getFunctionConventionSuffix);
};
exports.isGetEndpoint = isGetEndpoint;
//# sourceMappingURL=isGetEndpoint.js.map