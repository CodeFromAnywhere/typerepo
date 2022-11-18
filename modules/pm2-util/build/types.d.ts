import { Proc } from "pm2";
export declare type Pm2App = {
    operationName: string;
    cpuPercentage?: number;
    memoryBytes?: number;
};
export declare type ListAppsResult = {
    isSuccessful: boolean;
    apps?: Pm2App[];
    message?: string;
};
export declare const appPrefix = "app_";
export declare type Pm2Resolver = (value: {
    isSuccessful: boolean;
    error?: Error | undefined;
    proc?: Proc | undefined;
}) => void;
//# sourceMappingURL=types.d.ts.map