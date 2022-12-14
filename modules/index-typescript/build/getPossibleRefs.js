"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPossibleRefs = void 0;
var js_util_1 = require("js-util");
var getPossibleRefs = function (interfaces) {
    var possibleRefs2 = interfaces.map(function (tsInterface) {
        return tsInterface.type.typeDefinition
            ? {
                name: tsInterface.name,
                schema: tsInterface.type.typeDefinition,
            }
            : null;
    });
    var possibleRefs = possibleRefs2.filter(js_util_1.notEmpty);
    return possibleRefs;
};
exports.getPossibleRefs = getPossibleRefs;
//# sourceMappingURL=getPossibleRefs.js.map