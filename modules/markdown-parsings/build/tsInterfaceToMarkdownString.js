"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsInterfaceToMarkdownString = void 0;
var js_util_1 = require("js-util");
var simplifiedSchemaToMarkdownString_1 = require("./simplifiedSchemaToMarkdownString");
/**
 * properties, their type, and their description
 *
 * use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)
 */
var tsInterfaceToMarkdownString = function (tsInterface) {
    var icon = tsInterface.isDbModel ? "🔸" : "🔹";
    var titleString = "# ".concat(icon, " ").concat(tsInterface.name);
    var storageMethodString = tsInterface.dbStorageMethod
        ? "".concat(tsInterface.dbStorageMethod, " model\n\n")
        : undefined;
    // const operationName = tsInterface.operationName
    //   ? `(from: \`${tsInterface.operationName}\`)`
    //   : undefined;
    // const interfaceText = `\`\`\`ts\n${tsInterface.rawText}\n\`\`\``;
    var interfaceText = (0, simplifiedSchemaToMarkdownString_1.simplifiedSchemaToMarkdownString)(tsInterface.type.simplifiedSchema, undefined, true, 2);
    var alineas = [
        titleString,
        // operationName,
        storageMethodString,
        tsInterface.description,
        interfaceText,
    ];
    return alineas.filter(js_util_1.notEmpty).join("\n\n");
};
exports.tsInterfaceToMarkdownString = tsInterfaceToMarkdownString;
//# sourceMappingURL=tsInterfaceToMarkdownString.js.map