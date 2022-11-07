"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyToTableRow = void 0;
var noNewlines_1 = require("./noNewlines");
var propertyToTableRow = function (property) {
    var requiredString = property.required ? "" : "(optional)";
    var descriptionString = (0, noNewlines_1.noNewlines)(property.schema.description) || "";
    // TODO: stack deeper objects and make sure to also print tables for those
    return "| ".concat(property.name, " ").concat(requiredString, " | ").concat(property.schema.type, " | ").concat(descriptionString, " |");
};
exports.propertyToTableRow = propertyToTableRow;
//# sourceMappingURL=propertyToTableRow.js.map