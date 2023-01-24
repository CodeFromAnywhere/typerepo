/**
 * Every time a markdown file comes in (watcher), can we do some default functions and GPT for it.
 */
export declare type MarkdownIndex = {
    createdAt?: number;
    updatedAt?: number;
    source?: string;
    isSource?: boolean;
    title?: string;
    seoTitle?: string;
    keywords?: string[];
    seoKeywords?: string[];
    statements?: string[];
    takeAways?: string[];
    socialMediaPosts?: string[];
    /**
     *  GPT to get visual descriptions for any markdown file, which in turn can be turned into images
     */
    imagePromptDescritpions?: string[];
    /**
     * summary of the file
     */
    summary?: string;
    /**
     * Interesting standalone snippet finding in bigger video/audio
     */
    snippets?: {
        firstLine: string;
        lastLine: string;
    }[];
    /**
     * Using GPT to determine suggested location where this file should go
     */
    suggestedLocation?: string;
};
//# sourceMappingURL=MarkdownIndex.d.ts.map