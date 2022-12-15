export type OpenAIChatProps = {
    prompt: string;
    thread?: string;
    isHeadless?: boolean;
};
export type OpenAIChatResponseType = {
    result?: string;
    thread?: string;
    isSuccess: boolean;
};
/**
 * Send the propt to chatgpt and return the chatgpt response
 */
export declare const openAIChat: (props: OpenAIChatProps) => Promise<OpenAIChatResponseType>;
//# sourceMappingURL=openAIChat.d.ts.map