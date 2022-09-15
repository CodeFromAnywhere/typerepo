/**
 * returns folder name
 *
 * finds the first foldername that is available in this folder but also there is nowhere an operation already with this name
 *
 * there is also getAvailableFolderPath for non-operation folders
 */
export declare const getAvailableOperationName: (rootFolderPath: string, preferredFolderName: string, manualProjectRoot?: string) => Promise<string>;
//# sourceMappingURL=getAvailableOperationName.d.ts.map