"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllComments = void 0;
var ts_morph_1 = require("ts-morph");
var makeTsComment_1 = require("./makeTsComment");
/**
 * gets all leading comments and trailing comments raw text, put together, separated with newlines
 */
var getAllComments = function (tsMorphNode, fileContent, operationRelativeTypescriptFilePath) {
    var _a;
    var statementName = (_a = tsMorphNode
        .asKind(ts_morph_1.SyntaxKind.VariableDeclaration)) === null || _a === void 0 ? void 0 : _a.getName();
    var rawStatement = tsMorphNode.getText();
    var leadingComments = tsMorphNode
        .getLeadingCommentRanges()
        .map(function (commentRange) {
        return (0, makeTsComment_1.makeTsComment)({
            operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
            commentRange: commentRange,
            rawStatement: rawStatement,
            statementName: statementName,
            fileContent: fileContent,
        });
    });
    var trailingComments = tsMorphNode
        .getTrailingCommentRanges()
        .map(function (commentRange) {
        return (0, makeTsComment_1.makeTsComment)({
            operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
            commentRange: commentRange,
            rawStatement: rawStatement,
            statementName: statementName,
            fileContent: fileContent,
        });
    });
    var all = leadingComments.concat(trailingComments);
    return all;
};
exports.getAllComments = getAllComments;
//# sourceMappingURL=getAllComments.js.map