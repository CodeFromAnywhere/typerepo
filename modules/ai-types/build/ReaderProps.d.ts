import { Frontmatter } from "matter-types";
import { ContextualPromptsObject } from "./ContextualPromptObject";
import { ContextualPromptResult } from "./ContextualPromptResult";
/**
 * This is what we need on the page level. There are many subtleties to it, but this is the core
 */
export declare type ReaderProps = {
    /**
     * If true, the current path represents a folder, not a file.
     */
    isFolder: boolean;
    canSeeContent?: boolean;
    unauthorizedWarningMessage?: string | null;
    markdown: string | null;
    contextualPromptsObject: Omit<ContextualPromptsObject, "databaseContextualPromptSlugs"> | null;
    contextualPromptResults: ContextualPromptResult[] | null;
    projectRelativeFilePath: string;
    navigation: FolderContent[];
};
export declare type FolderContent = {
    name: string;
    type: "folder" | "file" | "link" | "unknown";
    isPrivate?: boolean;
    isDraft?: boolean;
    isSecret?: boolean;
    authorizedGroup?: string;
    frontmatter?: Frontmatter;
};
//# sourceMappingURL=ReaderProps.d.ts.map