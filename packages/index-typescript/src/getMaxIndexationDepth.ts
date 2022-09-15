/**
 * gets the maximum indentation depth of any piece of code
 *
 * does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.
 *
 * assumes an indentation contains 2 spaces.
 */
export const getMaxIndentationDepth = (functionText: string) => {
  const lines = functionText.split("\n");
  const maxDepth = lines.reduce((max, line) => {
    const prefixSpaces = line.length - line.trimStart().length;
    const lineIndentationDepth = Math.floor(prefixSpaces / 2);
    return max > lineIndentationDepth ? max : lineIndentationDepth;
  }, 0);

  return maxDepth;
};
