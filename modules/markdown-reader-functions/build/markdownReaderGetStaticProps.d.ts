import type { GetStaticPropsContext } from "next-types";
import { MarkdownReaderPageProps } from "markdown-reader-types";
/**
 Fix `operationBasePath not working` error when building: log `getStaticProps`/`getStaticPaths`
 */
export declare const markdownReaderGetStaticProps: (context: GetStaticPropsContext) => Promise<{
    props: MarkdownReaderPageProps;
}>;
//# sourceMappingURL=markdownReaderGetStaticProps.d.ts.map