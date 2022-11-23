"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsFunctionIsSdkable = void 0;
var tsFunctionIsSdkable = function (tsFunction, operationClassificationObject, operationClassification) {
    var operationName = tsFunction.operationName;
    if (!operationName)
        return false;
    var functionClassification = operationClassificationObject[operationName];
    var isSdkable = functionClassification === operationClassification;
    return isSdkable;
};
exports.tsFunctionIsSdkable = tsFunctionIsSdkable;
//# sourceMappingURL=tsFunctionIsSdkable.js.map