import { GetStaticPaths, GetStaticPropsContext } from "next-types";
import { ReaderProps } from "ai-types";
export declare const readerPageGetStaticProps: (context: GetStaticPropsContext) => Promise<{
    props: ReaderProps;
}>;
/**
 * NB: I can't do this with a fallback , because next.js doesn't include my docs folder into the bundle.
 *
 * A solution could be to add the docs folder into the next.js folder or copy it...
 *
 * https://github.com/vercel/next.js/discussions/32236?sort=new#discussioncomment-3029649
 *
 * Ther are other workarounds here to make sure it ends up in the bundle.
 *
 */
export declare const readerPageGetStaticPaths: GetStaticPaths;
//# sourceMappingURL=readerPageGetStatic.d.ts.map