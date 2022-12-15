/**
 * NB: only would work with an ESM module, but I don't have time for this now. Later this could replace `deleteFileOrFolder`
 */
export declare const trashFileOrFolder: (projectRelativePath: string) => Promise<{
    isSuccessful: boolean;
    message?: string;
}>;
//# sourceMappingURL=trashFileOrFolder.d.ts.map