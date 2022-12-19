import { MarkdownChunk, MarkdownParagraph } from "markdown-types";
import { CategoryStack } from "model-types";
/**
 * recursively dives into the Chunk to get all paragraphs inside
 */
export declare const getParagraphsRecursively: (chunk: MarkdownChunk, categoryStackUntilNow?: CategoryStack) => MarkdownParagraph[];
//# sourceMappingURL=getParagraphsRecursively.d.ts.map