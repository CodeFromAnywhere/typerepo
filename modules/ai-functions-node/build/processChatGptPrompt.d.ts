import { ProcessPromptFunctionResult } from "ai-types";
export declare type ProcessPromptProps = {
    contextContent?: string | null;
    selectionContent?: string | null;
    contextualPromptSlug?: string;
    anyContext?: string;
    /**
     * DESCRIPTION: These variables can be used: %context will be replaced by your context, %selection will be replaced by your selection. Provide a good prompt that combines that in a specific format
     */
    customPromptContent?: string;
    saveNewPromptWithName?: string | null;
    isHeadless?: boolean;
    prompt_projectRelativePath?: string;
    thread?: string;
    /**
     * If true, it'll just validate if this will be executed, it won't return the actual result but will execute the result in the background
     */
    isDeferred?: boolean;
};
export declare const controlChatGptWrapper: (prompt: string, isHeadless: boolean | undefined, thread: string | undefined, controller: "playwright" | "puppeteer" | "faker") => Promise<ProcessPromptFunctionResult>;
export declare const processChatGptPrompt: (config: ProcessPromptProps) => Promise<ProcessPromptFunctionResult>;
//# sourceMappingURL=processChatGptPrompt.d.ts.map