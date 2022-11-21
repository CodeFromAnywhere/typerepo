import { TsFunction } from "code-types";
export declare const getFunctionSdksContent: (config?: {
    manualProjectRoot?: string | undefined;
} | undefined) => Promise<{
    jsFunctions?: TsFunction[] | undefined;
    apiFunctions?: TsFunction[] | undefined;
    uiFunctions?: TsFunction[] | undefined;
}>;
//# sourceMappingURL=getFunctionSdksContent.d.ts.map