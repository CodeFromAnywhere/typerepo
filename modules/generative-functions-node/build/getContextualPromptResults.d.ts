import { ContextualPromptResult } from "ai-types";
/**
Gets all contextualPromptResults, but only if specific things are true

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.
 */
export declare const getContextualPromptResults: (config?: {
    /**
     * If given, will only provide `ContextualPromptResult`s for this path
     */
    prompt_projectRelativePath?: string | undefined;
    /**
     * If given, will only return the db result if it is part of this array
     */
    promptSlugs?: string[] | undefined;
} | undefined) => Promise<ContextualPromptResult[] | null>;
//# sourceMappingURL=getContextualPromptResults.d.ts.map