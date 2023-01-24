import { ReaderProps } from "ai-types";
/**
NB: this thing doesn't know about the basepath, it allows any path in the project.

Idea: would it be easy to allow for path outside of project as well?
 */
export declare const getReaderPageProps: (basePath: string | undefined, queryPath: string, isAdmin?: boolean, absoluteBasePath?: string) => Promise<{
    props: ReaderProps;
}>;
//# sourceMappingURL=getReaderPageProps.d.ts.map