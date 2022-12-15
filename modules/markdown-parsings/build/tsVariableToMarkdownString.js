"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsVariableToMarkdownString = void 0;
var js_util_1 = require("js-util");
/**
 */
var tsVariableToMarkdownString = function (tsVariable) {
    var titleString = "# \uD83D\uDCC4 ".concat(tsVariable.name, " (").concat(tsVariable.isExported ? "exported" : "unexported", " ").concat(tsVariable.classification, ")");
    var alineas = [titleString, tsVariable.description];
    return alineas.filter(js_util_1.notEmpty).join("\n\n");
};
exports.tsVariableToMarkdownString = tsVariableToMarkdownString;
//# sourceMappingURL=tsVariableToMarkdownString.js.map