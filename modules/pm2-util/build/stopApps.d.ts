/**
 Stops an app with pm2

 TODO: for some reason i'm getting `TypeError: Cannot read properties of undefined (reading '_operate')` and I can't find why because all other commands mostly work and I'm doing it the same way.
 */
export declare const stopApps: (operationNames: string[]) => Promise<{
    isSuccessful: boolean;
    error?: Error | undefined;
    proc?: import("pm2").Proc | undefined;
}>;
//# sourceMappingURL=stopApps.d.ts.map