import { MarkdownParse, TsComment } from "code-types";
import { stripComment } from "comment-util";
import { Creation, TsIndexModelType } from "model-types";
import { parseFrontmatterMarkdownString } from "markdown-parse-js";
import { CommentRange } from "ts-morph";
import { findCommentTypes } from "./findCommentTypes";
import { getNumberOfLines } from "./util";
import { kebabCase } from "convert-case";

/**
 * this is actually a fundamental part of the OS. How should comments be structured?
 *
 * I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.
 */
export const makeTsComment = ({
  commentRange,
  rawStatement,
  statementName,
  fileContent,
  operationRelativeTypescriptFilePath,
}: {
  operationRelativeTypescriptFilePath: string;
  commentRange: CommentRange;
  /**
   * if we can give the statement a name, it should be provided here
   */
  statementName: string | undefined;
  rawStatement: string;
  /** needed for calculating line numbers */
  fileContent: string;
}): Creation<TsComment> => {
  const fullCommentText = commentRange.getText();
  const strippedComment = stripComment(fullCommentText);

  // NB: wouldn't hurt to put character positions in the TsComment as well, would it? But let's not do it until we need it
  const firstCharacter = commentRange.getPos();
  const lastCharacter = commentRange.getEnd();
  const firstLine = getNumberOfLines(fileContent.substring(0, firstCharacter));
  const lastLine = getNumberOfLines(fileContent.substring(0, lastCharacter));
  const isSingleLineComment = firstLine === lastLine;

  const { parameters, raw: comment }: MarkdownParse = isSingleLineComment
    ? { raw: strippedComment, parameters: {} }
    : parseFrontmatterMarkdownString(strippedComment);

  const types = findCommentTypes(comment);

  const tsComment: Creation<TsComment> = {
    name: "Comment",
    slug: kebabCase("Comment"),
    operationRelativeTypescriptFilePath,
    comment,
    statementName,
    rawStatement,
    parameters,
    types,
    firstLine,
    lastLine,
  };

  return tsComment;
};
