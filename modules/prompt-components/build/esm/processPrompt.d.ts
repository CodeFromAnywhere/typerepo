import { ContextualContent } from "ai-types";
import { Slug } from "model-types";
import { ShowPromptAlertFunction } from "./usePromptResultAlert";
/**
 * Main function to process a prompt. For now it calls `processChatGptPrompt` api and shows an alert afterwards with the result. In some cases we may want to process the prompt differently, e.g. storing it in a queue.
 */
export declare const processPrompt: (config: {
    contextualPromptSlug?: string | undefined;
    customPromptContent?: string | undefined;
    contextualContent: ContextualContent;
    showPromptAlert: ShowPromptAlertFunction;
    saveNewPromptWithName?: string | null | undefined;
}) => Promise<void>;
//# sourceMappingURL=processPrompt.d.ts.map