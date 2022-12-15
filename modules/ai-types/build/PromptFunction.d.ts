import { ContextualPromptInfo } from "./ContextualPrompt";
import { ProcessPromptFunctionResult } from "./ProcessPromptFunctionResult";
/**
 * Special kind of function that executes a prompt with the use of a language model
 */
export declare type PromptFunction = {
    (...parameters: any[]): Promise<ProcessPromptFunctionResult>;
    contextualPromptInfo: ContextualPromptInfo;
};
//# sourceMappingURL=PromptFunction.d.ts.map