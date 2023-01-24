import { DefaultModelType } from "model-types";
/**
Model for a Queue system so you can execute functions when ram/internet is available
*/
export interface Queue extends DefaultModelType {
    functionName: string;
    parameters: any[];
    /**
     * JSON result of the function
     */
    result?: any;
    /**
     * Will be set after the function starts
     */
    startedAt?: number;
    /**
     * If true, queue item will be kept on completion
     */
    shouldKeepOnCompleted?: boolean;
    /**
     * Will be set (if `.shouldKeepOnCompleted: true`.)
     */
    completedAt?: number;
    /**
     * Can be set to show the status of the function to the user, for example, with a conversion, a percentage indicator for completeness
     */
    statusMessage?: string;
    /**
     * if set to high, will go before others
     */
    priority?: "high";
    /**
     * notify via email, for now, after n seconds, if the queue item has not been executed before that.
     */
    notifyLateAfterSeconds?: number;
    hasNotifiedLate?: boolean;
    /**
     * notify via email, for now
     */
    shouldNotifyOnResult?: boolean;
    /**
     * device authToken of who executed this
     * not necesarily a `Person` yet, because it may be done unauthenticated.
     *
     * IDK what happens if you don't provide this!
     */
    executionAuthToken?: string;
}
//# sourceMappingURL=Queue.d.ts.map