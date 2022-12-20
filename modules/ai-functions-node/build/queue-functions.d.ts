/**
 *
 * function `processPromptOnFile` to execute `processChatGptPrompt` for a file, so we don't need to store the whole file content and it can be executed later and still have the most recent file contents

 * In order to keep the file itself as a source of truth for its content, it's useful to have this because you can add this to the queue
 */
export declare const processPromptOnFile: (projectRelativeFilePath: string, contextualPromptSlug: string) => Promise<import("ai-types").ProcessPromptFunctionResult>;
/**
 * function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.
 */
export declare const processPromptOnFolder: (config: {
    projectRelativeFolderPath: string;
    promptSlug: string;
    isRecursive?: boolean | undefined;
    /**
     * File extension(s) to be searched for in the folder
     *
     * If not given, just finds all file extensions
     *
     * exension without dot
     */
    extension?: string | string[] | undefined;
}) => Promise<{
    isSuccessful: boolean | undefined;
    message: string | undefined;
}>;
/**
 * ---
 * runEveryPeriod: minute
 * ---
 *
 * cron that runs every minute for executing new puppeteer queue items. It will open it as child process. You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.

 */
export declare const checkQueue: () => Promise<void>;
//# sourceMappingURL=queue-functions.d.ts.map