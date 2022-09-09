import { TsFunction } from "code-types";
export declare type FnMatch = {
    matcher: string;
    relativeOperationPath: string;
} & TsFunction;
export declare const getSdkFunctionPaths: () => Promise<false | FnMatch[]>;
//# sourceMappingURL=getSdkFunctionPaths.d.ts.map