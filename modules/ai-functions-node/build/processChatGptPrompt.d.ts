import { ProcessPromptFunctionResult } from "ai-types";
export declare const controlChatGptWrapper: (prompt: string, isHeadless: boolean | undefined, thread: string | undefined, controller: "playwright" | "puppeteer" | "faker") => Promise<ProcessPromptFunctionResult>;
export declare const processChatGptPrompt: (config: {
    contextContent?: string | null | undefined;
    selectionContent?: string | null | undefined;
    contextualPromptSlug?: string | undefined;
    /**
     * DESCRIPTION: These variables can be used: %context will be replaced by your context, %selection will be replaced by your selection. Provide a good prompt that combines that in a specific format
     */
    customPromptContent?: string | undefined;
    saveNewPromptWithName?: string | null | undefined;
    isHeadless?: boolean | undefined;
    prompt_projectRelativePath?: string | undefined;
    thread?: string | undefined;
    /**
     * If true, it'll just validate if this will be executed, it won't return the actual result but will execute the result in the background
     */
    isDeferred?: boolean | undefined;
}) => Promise<ProcessPromptFunctionResult>;
//# sourceMappingURL=processChatGptPrompt.d.ts.map