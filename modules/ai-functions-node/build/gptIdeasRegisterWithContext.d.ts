import { FunctionContext } from "function-context-type";
/**
 * TODO: move to gptideas backend package
 */
export declare const gptIdeasRegisterWithContext: (functionContext: FunctionContext, name: string, email: string, tier: "free" | "indie" | "startup" | "sponsor", newsletter: "daily" | "weekly" | "unsubscribe", message?: string) => Promise<{
    isSuccessful: boolean;
    message: string;
}>;
//# sourceMappingURL=gptIdeasRegisterWithContext.d.ts.map