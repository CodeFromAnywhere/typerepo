import { MarkdownChunk } from "markdown-types";

export const mapChunkRecursively = (
  chunk: MarkdownChunk,
  mapFunction: (content?: string) => string | undefined
) => {
  const content = mapFunction(chunk.content);
  const children = chunk.children?.map((chunk) =>
    mapChunkRecursively(chunk, mapFunction)
  );

  const newChunk: MarkdownChunk = {
    ...chunk,
    content,
    children,
  };

  return newChunk;
};
