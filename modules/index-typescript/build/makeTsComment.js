"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTsComment = void 0;
var comment_util_1 = require("comment-util");
var markdown_parse_js_1 = require("markdown-parse-js");
var findCommentTypes_1 = require("./findCommentTypes");
var util_1 = require("./util");
var convert_case_1 = require("convert-case");
/**
 * this is actually a fundamental part of the OS. How should comments be structured?
 *
 * I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.
 */
var makeTsComment = function (config) {
    var commentRange = config.commentRange, rawStatement = config.rawStatement, statementName = config.statementName, fileContent = config.fileContent, operationRelativeTypescriptFilePath = config.operationRelativeTypescriptFilePath;
    var fullCommentText = commentRange.getText();
    var strippedComment = (0, comment_util_1.stripComment)(fullCommentText);
    // NB: wouldn't hurt to put character positions in the TsComment as well, would it? But let's not do it until we need it
    var firstCharacter = commentRange.getPos();
    var lastCharacter = commentRange.getEnd();
    var firstLine = (0, util_1.getNumberOfLines)(fileContent.substring(0, firstCharacter));
    var lastLine = (0, util_1.getNumberOfLines)(fileContent.substring(0, lastCharacter));
    var isSingleLineComment = firstLine === lastLine;
    var _a = isSingleLineComment
        ? { raw: strippedComment, parameters: {} }
        : (0, markdown_parse_js_1.parseFrontmatterMarkdownString)(strippedComment), parameters = _a.parameters, comment = _a.raw;
    var types = (0, findCommentTypes_1.findCommentTypes)(comment);
    var tsComment = {
        name: "Comment",
        slug: (0, convert_case_1.kebabCase)("Comment"),
        operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
        comment: comment,
        statementName: statementName,
        rawStatement: rawStatement,
        parameters: parameters,
        types: types,
        firstLine: firstLine,
        lastLine: lastLine,
    };
    return tsComment;
};
exports.makeTsComment = makeTsComment;
//# sourceMappingURL=makeTsComment.js.map