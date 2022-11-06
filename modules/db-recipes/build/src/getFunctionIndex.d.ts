import { TsFunction } from "code-types";
/**
 * finds function indexation from database
 *
 * TODO: this should be used!
 */
export declare const getFunctionIndex: ({ functionName, }: {
    functionName: string;
}) => Promise<{
    success: boolean;
    response: string;
    function?: TsFunction;
}>;
//# sourceMappingURL=getFunctionIndex.d.ts.map