/// <reference types="node" />
export interface ParsedUrlQuery extends NodeJS.Dict<string | string[]> {
}
export declare type PreviewData = string | false | object | undefined;
export declare type GetStaticPropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery, D extends PreviewData = PreviewData> = {
    params?: Q;
    preview?: boolean;
    previewData?: D;
    locale?: string;
    locales?: string[];
    defaultLocale?: string;
};
export declare type GetStaticPathsContext = {
    locales?: string[];
    defaultLocale?: string;
};
export declare type GetStaticPaths<P extends ParsedUrlQuery = ParsedUrlQuery> = (context: GetStaticPathsContext) => Promise<GetStaticPathsResult<P>> | GetStaticPathsResult<P>;
export declare type GetStaticPathsResult<P extends ParsedUrlQuery = ParsedUrlQuery> = {
    paths: Array<string | {
        params: P;
        locale?: string;
    }>;
    fallback: boolean | "blocking";
};
export declare type Redirect = {
    statusCode: 301 | 302 | 303 | 307 | 308;
    destination: string;
    basePath?: false;
} | {
    permanent: boolean;
    destination: string;
    basePath?: false;
};
export declare type GetStaticPropsResult<P> = {
    props?: P;
    revalidate?: number | boolean;
    redirect?: Redirect;
    notFound?: true;
};
//# sourceMappingURL=types.d.ts.map