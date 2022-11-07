"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsFunctionToMarkdownString = exports.isUpperCase = void 0;
var js_util_1 = require("js-util");
var getJsonSchemaSummary_1 = require("./getJsonSchemaSummary");
var getTypeDescriptorRecursive_1 = require("./getTypeDescriptorRecursive");
var simplifiedSchemaToMarkdownString_1 = require("./simplifiedSchemaToMarkdownString");
var isUpperCase = function (text) {
    return text.toUpperCase() === text;
};
exports.isUpperCase = isUpperCase;
/**
 TsFunction:
 - name and operation
 - size
 - description (doc-comment)
 - input, output
 */
var tsFunctionToMarkdownString = function (tsFunction) {
    var _a, _b, _c, _d;
    var isComponent = tsFunction.operationRelativeTypescriptFilePath.endsWith(".tsx") &&
        (0, exports.isUpperCase)(tsFunction.name.charAt(0));
    var titleString = "# ".concat(isComponent ? "<".concat(tsFunction.name, " />") : "".concat(tsFunction.name, "()"));
    var infoString = "".concat(((_a = tsFunction.codeSize) === null || _a === void 0 ? void 0 : _a.lines) ? "".concat(tsFunction.codeSize.lines, " LOC, ") : "", "Max. indexation depth: ").concat(tsFunction.maxIndentationDepth, ", ").concat(((_b = tsFunction.cumulativeCodeSize) === null || _b === void 0 ? void 0 : _b.lines)
        ? "".concat((_c = tsFunction.cumulativeCodeSize) === null || _c === void 0 ? void 0 : _c.lines, " Cumulative LOC")
        : "");
    var returnString = tsFunction.returnType.simplifiedSchema
        ? (0, simplifiedSchemaToMarkdownString_1.simplifiedSchemaToMarkdownString)(tsFunction.returnType.simplifiedSchema, "Returns", true, 2)
        : "";
    /*
  
  | Input      |        |     |
  | ---------- | ------ | --- |
  | fileId     | string |     |
  | **Output** |        |     |
  | object     |        |     |
  
  
      */
    var paramaterTableRows = tsFunction.parameters && tsFunction.parameters.length > 0
        ? tsFunction.parameters.map(function (parameter) {
            var summary = (0, getJsonSchemaSummary_1.getJsonSchemaSummary)(parameter.schema, true);
            return "| ".concat(parameter.name).concat(parameter.required ? "" : " (optional)", " | ").concat((summary === null || summary === void 0 ? void 0 : summary.typeDescriptor) || "", " | ").concat((summary === null || summary === void 0 ? void 0 : summary.description) || "", " |");
        })
        : "| - | | |";
    // const argumentStrings =
    // tsFunction.parameters && tsFunction.parameters.length > 0
    //   ? `## Parameters (${
    //       tsFunction.parameters.length
    //     })\n\n${tsFunction.parameters
    //       .map((x, i) =>
    //         simplifiedSchemaToMarkdownString(
    //           x.simplifiedSchema,
    //           `Parameter ${i + 1}: ${x.name}`,
    //           x.required,
    //           3
    //         )
    //       )
    //       .join("\n\n")}`
    //   : undefined;
    var returnTypeMarkdownString = tsFunction.returnType.typeDefinition
        ? (0, getTypeDescriptorRecursive_1.getTypeDescriptorRecursive)(tsFunction.returnType.typeDefinition, true)
        : "";
    var outputRow = "| **Output** | ".concat(returnTypeMarkdownString, "   | ").concat(((_d = tsFunction.returnType.typeDefinition) === null || _d === void 0 ? void 0 : _d.description) || "", "   |");
    var tableString = "\n| Input      |    |    |\n| ---------- | -- | -- |\n".concat(paramaterTableRows, "\n").concat(outputRow, "\n");
    var alineas = [
        titleString,
        // infoString, // TODO: Maybe make it optional.
        tsFunction.description,
        // returnTypeString,
        tableString,
    ];
    return alineas.filter(js_util_1.notEmpty).join("\n\n");
};
exports.tsFunctionToMarkdownString = tsFunctionToMarkdownString;
//# sourceMappingURL=tsFunctionToMarkdownString.js.map