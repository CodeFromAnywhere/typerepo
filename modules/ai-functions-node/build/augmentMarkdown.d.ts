import { ContextualPromptResult, ContextualPromptsObject } from "ai-types";
/**
 * function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`
 */
export declare const makeMarkdownLink: (text: string, url?: string, alt?: string) => string;
/**
 Now that I've written this all down, it seems to be a quite an expensive operation, but we never need to do it for ensire websites, just for one page, and the result can easily be cached. I need to write a regex function that matches all text from a list of searchterms in markdown except if it's part of a link or image, and reduce the matches, creating a new markdown string every time. I think there are algorithms though that are more efficient because if there are like thousands of matches on a 2mb text, the thing would take much longer. Maybe it's more efficient to split up the text in smaller pieces and do the regex for every piece individually. This would have a limitation that you can't select cross-section, but I don't think that's my usecase anyway. If we later add support for making statements about a chapter or subsection and stuff like that, this limitation can also be resolved.

 */
/**
Augments markdown in many ways for multiple purposes.

- Parse the markdown instead of showing the results as React buttons. The link to "#" alt can become the same as a nice AugmentedWord hover, when it's found to be a selection result, we can highlight the selection whenever we hover over a link with that same text as alt as well, and add that hover as a note at the end of the selection.
- ensure the parse parses `WordCombination`, `WordMatrix`, `Statement`, `AugmentedWord`, and `ContextualPromptResult`. It's a lot of work, but definitely worth it. Should be parsed as
- remove the parsing of everything in the markdown render. This is also the end of sending `AugmentedWord`s to the frontend

LATER:

- CTA's, headers, footers, ads (check how I was planning to get those at codestorys-node or so)
- Word frequency occurency styling
- Subtexts and subwords

*/
export declare const augmentMarkdown: <T extends string | null | undefined>(markdown: T, config?: {
    /**
     * TODO: make this faster first by finding all codeblocks in the file first (if this is enabled) and taking a subset of the mapped object then (mapped object  from sdk) and then placing it into the md
     */
    augmentCode?: boolean | undefined;
    augmentWords?: boolean | undefined;
    augmentStatements?: boolean | undefined;
    /**
     * Useful for sites like dev.to and medium where I don't have the capability for creating my own context-menu
     */
    augmentContextualPrompts?: boolean | undefined;
    augmentContextualPromptResults?: boolean | undefined;
    markdown_projectRelativeFilePath?: string | undefined;
    /**
     * If given, all augmented hyperlinks will be absolute to this given domain. Useful for posting on other sites
     */
    externalHost?: string | undefined;
} | undefined) => Promise<{
    augmentedMarkdown: T;
    /**
     * Still needed if you want to show the variants and derivatives in your own way
     */
    contextualPromptResults?: ContextualPromptResult[] | null | undefined;
    /**
     * Still needed if you watn to make it possible to do prompts in another way
     */
    contextualPromptsObject?: Omit<ContextualPromptsObject, "databaseContextualPromptSlugs"> | undefined;
}>;
//# sourceMappingURL=augmentMarkdown.d.ts.map