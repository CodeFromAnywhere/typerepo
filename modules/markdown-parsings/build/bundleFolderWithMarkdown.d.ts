import { MarkdownParse } from "code-types";
import { Json } from "json-util";
export declare type JsonPart = {
    identifier?: string;
    json: Json;
};
/**
 * finds all md files in a folder and creates a single MarkdownParse
 *
 * handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way
 *
 * NB: it recursively structures the files and folders with headings
 */
export declare const bundleFolderWithMarkdown: (absoluteFolderPath: string, fileName?: string) => Promise<{
    markdownParse: MarkdownParse;
    outline: string;
}>;
//# sourceMappingURL=bundleFolderWithMarkdown.d.ts.map