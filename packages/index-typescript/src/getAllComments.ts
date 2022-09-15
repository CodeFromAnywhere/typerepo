import { TsComment } from "code-types";
import { Creation } from "model-types";
import {
  Expression,
  Statement,
  SyntaxKind,
  VariableDeclaration,
} from "ts-morph";
import { makeTsComment } from "./makeTsComment";

/**
 * gets all leading comments and trailing comments raw text, put together, separated with newlines
 */
export const getAllComments = (
  tsMorphNode: VariableDeclaration | Statement | Expression,
  fileContent: string,
  operationRelativeTypescriptFilePath: string
): Creation<TsComment>[] => {
  const statementName = tsMorphNode
    .asKind(SyntaxKind.VariableDeclaration)
    ?.getName();
  const rawStatement = tsMorphNode.getText();
  const leadingComments = tsMorphNode
    .getLeadingCommentRanges()
    .map((commentRange) =>
      makeTsComment({
        operationRelativeTypescriptFilePath,
        commentRange,
        rawStatement,
        statementName,
        fileContent,
      })
    );
  const trailingComments = tsMorphNode
    .getTrailingCommentRanges()
    .map((commentRange) =>
      makeTsComment({
        operationRelativeTypescriptFilePath,
        commentRange,
        rawStatement,
        statementName,
        fileContent,
      })
    );

  const all = leadingComments.concat(trailingComments);
  return all;
};
