import { CommentType, commentTypes } from "code-types";

/**
 * returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)
 */
export const findCommentTypes = (
  commentWithoutFrontmatter: string
): CommentType[] => {
  const lines = commentWithoutFrontmatter.split("\n");

  const types = commentTypes.filter((type) =>
    lines.find((line) => line.trimStart().startsWith(`${type.toUpperCase()}:`))
  );

  return types;
};
