import { FolderContent, ReaderProps } from "ai-types";
import { Frontmatter } from "matter-types";
import type { GetStaticPropsResult } from "next-types";
export declare const expandFrontmatter: (frontmatter?: Frontmatter) => {
    isPrivate?: undefined;
    authorizedGroup?: undefined;
    isDraft?: undefined;
    isSecret?: undefined;
} | {
    isPrivate: boolean;
    authorizedGroup: string;
    isDraft: boolean;
    isSecret: boolean;
};
/**
 * TODO: use something like this to ensure we have the type safety and not work with strings >.<
 *
```ts
import { frontmatterToObject } from "frontmatter-util";
import webMarkdownFileTsInterface from "markdown-types/db/ts-interfaces/webmarkdownfile.json";
```

 */
export declare const canSeeFile: (parameters: FolderContent | undefined, isDev: boolean) => boolean;
export declare const canSeeFileContent: (parameters: Frontmatter | undefined, isDev: boolean) => boolean;
export declare const getReaderPageProps: (projectRelativeFilePath: string, queryPath?: string, realBasePath?: string) => Promise<GetStaticPropsResult<ReaderProps>>;
//# sourceMappingURL=getReaderPageProps.d.ts.map