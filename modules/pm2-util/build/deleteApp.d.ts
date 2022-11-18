import pm2 from "pm2";
/**
 * Deletes an app from the pm2
 *
 * TODO: for some reason it says `error: Error: process or namespace not found` even though it certainly exists. I can't figure out why it's not working.
 */
export declare const deleteApp: (operationName: string) => Promise<{
    isSuccessful: boolean;
    error?: Error | undefined;
    proc?: pm2.Proc | undefined;
}>;
//# sourceMappingURL=deleteApp.d.ts.map