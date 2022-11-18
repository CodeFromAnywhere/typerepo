import { OperationClassification, TsFunction } from "code-types";
export declare type FunctionsPerClassification = {
    [operationClassification in OperationClassification]: TsFunction[];
};
/**
 * returns all sdk functions grouped by operation classification
 */
export declare const getSdkFunctionsPerClassification: (config?: {
    manualProjectRoot?: string | undefined;
} | undefined) => Promise<FunctionsPerClassification | undefined>;
//# sourceMappingURL=getSdkFunctionsPerClassification.d.ts.map