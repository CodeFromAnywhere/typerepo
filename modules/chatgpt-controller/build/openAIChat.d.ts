import { ProcessPromptFunctionResult } from "ai-types";
export declare type OpenAIChatProps = {
    prompt: string;
    thread?: string;
    isHeadless?: boolean;
};
export declare type OpenAIChatResponseType = {
    result?: string;
    thread?: string;
    isSuccess: boolean;
};
/**
 * Send the propt to chatgpt and return the chatgpt response
 */
export declare const openAIChat: (props: OpenAIChatProps) => Promise<ProcessPromptFunctionResult>;
//# sourceMappingURL=openAIChat.d.ts.map