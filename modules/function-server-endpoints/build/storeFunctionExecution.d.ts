import { PerformanceItem, TsFunction } from "code-types";
/**
 * wrapper function that stores execution-speed in an object with `FunctionPerformance` data-structure. Store this using `db.push` if it adds value
 .*/
export declare const storeFunctionExecution: (tsFunction: TsFunction, inputParameters: any[] | undefined, output: any, performance: PerformanceItem[], isResultFromCache: boolean) => Promise<void>;
//# sourceMappingURL=storeFunctionExecution.d.ts.map