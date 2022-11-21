#!/usr/bin/env node
export declare const nodemon: (config: {
    isRestart?: boolean | undefined;
    operationName: string;
    /**
     * name of the function that you want to run the cli from
     *
     * by convention, we are going to execute the `build/cli/[fnName].cli.js` file
     */
    cliFunctionName: string;
    /**
     * vars that need to be passed to the cli
     */
    vars?: string[] | undefined;
    restartVars?: string[] | undefined;
    /**
     * manual project root for the operation to run
     */
    manualProjectRoot?: string | undefined;
}) => Promise<void>;
//# sourceMappingURL=nodemon.d.ts.map