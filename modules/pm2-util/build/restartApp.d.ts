/**
 Restarts an app with pm2
 */
export declare const restartApp: (operationName: string) => Promise<{
    isSuccessful: boolean;
    error?: Error | undefined;
    proc?: import("pm2").Proc | undefined;
}>;
//# sourceMappingURL=restartApp.d.ts.map