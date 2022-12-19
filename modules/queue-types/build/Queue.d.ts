import { DefaultModelType } from "model-types";
/**

Model for a Queue system so you can execute functions when ram is available


 */
export interface Queue extends DefaultModelType {
    startedAt?: number;
    type: "puppeteer";
    functionName: string;
    parameters: any[];
}
//# sourceMappingURL=Queue.d.ts.map