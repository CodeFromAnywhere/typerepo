import type { GetStaticPropsContext } from "next-types";
import { MarkdownReaderPageProps } from "markdown-reader-types";
import { FileWebPage } from "webpage-types";
/**
 * Takes the routes and pages you want to show, and returns the MarkdownReaderPageProps you need to render the reader page.
 */
export declare const markdownReaderGetStaticPropsFromPages: (fileWebPages: FileWebPage[], context: GetStaticPropsContext) => Promise<{
    props: MarkdownReaderPageProps;
}>;
//# sourceMappingURL=markdownReaderGetStaticPropsFromPages.d.ts.map