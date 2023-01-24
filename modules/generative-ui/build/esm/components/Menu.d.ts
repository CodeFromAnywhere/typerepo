/// <reference types="react" />
import { ContextualPrompt, ContextualPromptResult, ContextualPromptsObject, FolderContent } from "ai-types";
export declare const Menu: (props: {
    notFound?: boolean | undefined;
    projectRelativeFilePath?: string | undefined;
    folderPath?: string | undefined;
    filename?: string | undefined;
    isFolder?: boolean | undefined;
    navigation?: FolderContent[] | undefined;
    contextualPromptsObject?: Omit<ContextualPromptsObject, "databaseContextualPromptSlugs"> | null | undefined;
    fileContextualPromptResults: ContextualPromptResult[] | undefined;
    thePrompts: ContextualPrompt[];
    selectionContextualPromptResults: ContextualPromptResult[] | undefined;
}) => JSX.Element;
//# sourceMappingURL=Menu.d.ts.map