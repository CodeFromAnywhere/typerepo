import { WebMarkdownFile } from "code-types";
import { ReaderWebPage, WebPage } from "webpage-types";
/**
 * If a markdown page is found, this function fetches all metadata needed to render that markdown page
 */
export declare const getMarkdownPageInfo: (projectRoot: string, webPages: WebPage<any>[], queryPath: string, contentPage: ReaderWebPage) => Promise<{
    markdownFile: WebMarkdownFile | null;
    nextQueryPath: string | null;
    previousQueryPath: string | null;
    projectRelativeMarkdownPath: string | null;
}>;
//# sourceMappingURL=getMarkdownPageInfo.d.ts.map