import { FunctionContext } from "function-context-type";
/**
 * function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.
 */
export declare const processPromptOnFolderWithContext: (functionContext: FunctionContext, config: {
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
//# sourceMappingURL=processPromptOnFolderWithContext.d.ts.map