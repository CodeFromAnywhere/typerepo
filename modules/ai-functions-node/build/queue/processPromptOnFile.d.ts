/**
 *
 * function `processPromptOnFile` to execute `processChatGptPrompt` for a file, so we don't need to store the whole file content and it can be executed later and still have the most recent file contents

 * In order to keep the file itself as a source of truth for its content, it's useful to have this because you can add this to the queue
 */
export declare const processPromptOnFile: (projectRelativeFilePath: string, contextualPromptSlug: string) => Promise<import("ai-types").ProcessPromptFunctionResult>;
//# sourceMappingURL=processPromptOnFile.d.ts.map