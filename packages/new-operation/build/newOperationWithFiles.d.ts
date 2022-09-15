import { OperationConfig } from "code-types";
/**
 * Creates a new operation with files with content
 *
 * Returns the final operation base path (or undefined if something went wrong)
 *
 * NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!
 *
 * TODO: Remove the buggyness
 */
export declare const newOperationWithFiles: (operationConfig: OperationConfig, srcFileContentObject: {
    [operationRelativeTypescriptFilePath: string]: string;
}, config?: {
    manualProjectRoot?: string | undefined;
    /**
     * folder path without the folder name of the package to be created
     *
     * if given, will place it here, otherwise, will place it in the default location (tools/generated for os projects, packages for sensible projects)
     */
    destinationPath?: string | undefined;
    /**
     * if true, overwrites the operation if it already exists. It does this in a way that it does not break the OS very long, because it removes the old one only after the new one has been created. The removal and renaming the new one to this target name happens almost instantaneously
     */
    overwriteIfExists?: boolean | undefined;
    /**
     * if the operation did not exist before, `yarn install` will usually be ran.
     *
     * If you want to skip that, set this to `true`
     *
     */
    skipYarnInstall?: boolean | undefined;
    /**
     * skips yarn build if `true`
     */
    skipYarnBuild?: boolean | undefined;
    /**
     * don't write anything, just return the files to create with the strings
     */
    dryrun?: boolean | undefined;
} | undefined) => Promise<undefined | string>;
//# sourceMappingURL=newOperationWithFiles.d.ts.map