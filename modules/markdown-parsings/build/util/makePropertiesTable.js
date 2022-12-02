"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePropertiesTable = void 0;
var propertyToTableRow_1 = require("./propertyToTableRow");
var makePropertiesTable = function (properties) {
    return properties && properties.length > 0
        ? "Properties: \n\n | Name | Type | Description |\n|---|---|---|\n".concat(properties
            .map(propertyToTableRow_1.propertyToTableRow)
            .join("\n"), "\n")
        : "";
};
exports.makePropertiesTable = makePropertiesTable;
//# sourceMappingURL=makePropertiesTable.js.map