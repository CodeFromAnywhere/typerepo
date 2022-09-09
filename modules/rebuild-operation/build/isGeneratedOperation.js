"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGeneratedOperation = void 0;
var isGeneratedOperation = function (operationBasePath) {
    return operationBasePath.includes("/generated/");
};
exports.isGeneratedOperation = isGeneratedOperation;
//# sourceMappingURL=isGeneratedOperation.js.map