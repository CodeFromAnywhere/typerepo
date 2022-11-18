import pm2 from "pm2";
export declare const startApp: (operationName: string, isDev?: boolean) => Promise<{
    isSuccessful: boolean;
    error?: Error;
    proc?: pm2.Proc;
    message?: string;
}>;
//# sourceMappingURL=startApp.d.ts.map