"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statementItemToMarkdown = void 0;
var tsFunctionToMarkdownString_1 = require("./tsFunctionToMarkdownString");
var tsInterfaceToMarkdownString_1 = require("./tsInterfaceToMarkdownString");
var tsVariableToMarkdownString_1 = require("./tsVariableToMarkdownString");
var statementItemToMarkdown = function (statementItem) {
    if (statementItem.tsFunction) {
        return (0, tsFunctionToMarkdownString_1.tsFunctionToMarkdownString)(statementItem.tsFunction);
    }
    if (statementItem.tsInterface) {
        return (0, tsInterfaceToMarkdownString_1.tsInterfaceToMarkdownString)(statementItem.tsInterface);
    }
    if (statementItem.tsVariable) {
        return (0, tsVariableToMarkdownString_1.tsVariableToMarkdownString)(statementItem.tsVariable);
    }
};
exports.statementItemToMarkdown = statementItemToMarkdown;
//# sourceMappingURL=statementItemToMarkdown.js.map