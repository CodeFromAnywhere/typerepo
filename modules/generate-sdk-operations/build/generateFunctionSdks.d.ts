/**
Creates

- sdk-api + sdk-api-keys (for all exposed functions)
- sdk-js (functions that can be executed anywhere)
- sdk-ui (functions that use JSX)

Overwrites them if they already exist with minimal interruption time of the system
*/
export declare const generateFunctionSdks: (config?: {
    manualProjectRoot?: string | undefined;
    skipYarnInstall?: boolean | undefined;
    dryrun?: boolean | undefined;
} | undefined) => Promise<void>;
//# sourceMappingURL=generateFunctionSdks.d.ts.map