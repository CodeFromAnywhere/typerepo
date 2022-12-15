import { BackendAsset } from "asset-type";
/**
 * Same result to be expected from executing prompt for any language model
 */
export declare type ProcessPromptFunctionResult = {
    isSuccessful: boolean;
    message: string;
    result?: {
        text?: string;
        assets?: BackendAsset[];
        thread: string;
    };
};
//# sourceMappingURL=ProcessPromptFunctionResult.d.ts.map