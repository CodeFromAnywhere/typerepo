import { RunEveryPeriodEnum, TsFunction } from "code-types";
/**
 * NB: cron functions cannot have parameters
 */
export declare const executeCronFunction: (tsFunction: TsFunction) => Promise<void>;
/**
 * For every `RunEveryPeriodEnum`, this object provides the interval `cronExpression` string for `node-cron`
 */
export declare const scheduleObject: {
    [interval in RunEveryPeriodEnum]: string;
};
export declare const scheduleCronJobs: () => Promise<void>;
//# sourceMappingURL=scheduleCronJobs.d.ts.map