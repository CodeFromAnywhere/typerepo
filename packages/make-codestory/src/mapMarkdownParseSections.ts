import { MarkdownParse } from "markdown-types";
import { mapChunkRecursively } from "./mapChunkRecursively";

export const mapMarkdownParseSections = (
  markdownParse: MarkdownParse,
  mapFunction: (content?: string) => string | undefined
): MarkdownParse => {
  const content = markdownParse.content?.map((chunk) =>
    mapChunkRecursively(chunk, mapFunction)
  );

  const newMarkdownParse: MarkdownParse = { ...markdownParse, content };
  return newMarkdownParse;
};
