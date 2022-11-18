import pm2 from "pm2";
/**
 * Function that lets you connect, execute a pm2 action, and disconnect after */
export declare const pm2ConnectDisconnect: <TResult extends {
    [key: string]: any;
    isSuccessful: boolean;
    error?: Error | undefined;
    proc?: pm2.Proc | undefined;
}>(action: (resolve: (value: TResult) => void) => void) => Promise<{
    isSuccessful: boolean;
    error?: Error | undefined;
    proc?: pm2.Proc | undefined;
}>;
//# sourceMappingURL=pm2ConnectDisconnect.d.ts.map