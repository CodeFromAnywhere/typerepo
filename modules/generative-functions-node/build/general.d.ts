import { FolderContent } from "ai-types";
import { Frontmatter } from "matter-types";
/**
 * Gets the first file in a directory:
 *
 * Either readme or index, or the first file it finds.
 */
export declare const getFirstFile: (fullPath: string) => Promise<string | undefined>;
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
//# sourceMappingURL=general.d.ts.map