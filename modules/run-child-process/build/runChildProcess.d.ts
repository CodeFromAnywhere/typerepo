#!/usr/bin/env node
/**
 * spawns a child process and returns its output after it's done
 */
export declare const runChildProcess: ({ operationFolderName, scriptFileName, args, }: {
    operationFolderName: string;
    /**
     * the location of the script in the build folder
     * NB: this must be a CLI that that actually executes the function!
     */
    scriptFileName: string;
    args?: string[] | undefined;
}) => Promise<(string | null)[] | undefined>;
//# sourceMappingURL=runChildProcess.d.ts.map