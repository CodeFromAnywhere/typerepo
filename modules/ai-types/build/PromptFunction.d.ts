import { ContextualPromptInfo } from "./ContextualPrompt";
import { ProcessPromptFunctionResult } from "./ProcessPromptFunctionResult";
import { ApiFunctionParameters } from "code-types";
/**
 * Special kind of function that executes a prompt with the use of a language model
 */
export declare type PromptFunction = {
    (...parameters: any[]): Promise<ProcessPromptFunctionResult>;
    contextualPromptInfo: ContextualPromptInfo;
} & ApiFunctionParameters;
//# sourceMappingURL=PromptFunction.d.ts.map