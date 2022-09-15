/**
 * for markdown-reader-ui, the pages can be markdown files, but they can also be connected to models
 */
import { Id, Slug } from "model-types";
export declare type MarkdownReaderPage = {
    /**
     * path to be used as the url
     */
    queryPath: string;
    /**
     * if given, the file md-file will be provided to the frontend
     */
    filePath?: string;
    /**
     * if true, this item will be shown in the menu
     */
    isMenuItem?: boolean;
    /**
     * If a string is given, every word in every document will automatically be matched against these values. Case sensitive. If there's a match, the word will link to the queryPath.
     *
     * Used to link automatically to functionNames, InterfaceNames, operation-names, and words.
     */
    internalLinkWord?: string;
    /** in case the page refers to a word, the word-slug should be here */
    wordSlug?: Slug;
    /** in case the page is about a statement, the statement should be here */
    statementId?: Id;
};
/**
 * Internal links should have a small footprint since there can be many of them
 *
 * An internal link just needs to be a word connected to a different page
 */
export declare type InternalLink = {
    internalLinkWord: string;
    queryPath: string;
};
/**
 * This datastructure is probably needed to make it more efficient.
 *
 * Should be a lookup table for the querypath for every word
 */
export declare type InternalLinkObject = {
    [internalLinkWord: string]: string;
};
//# sourceMappingURL=types.d.ts.map