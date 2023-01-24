/**
 * Fetches google.com to check if we have an internet connection
 */
export declare const isOnline: () => Promise<boolean>;
export declare const fetchWithTimeout: (url: string, timeoutMs: number) => Promise<{
    isSuccessful: boolean;
    isConnected: boolean;
    response?: any;
    message: string;
}>;
//# sourceMappingURL=isOnline.d.ts.map