import { DefaultModelType } from "model-types";
/**
 * AI datasets
 * example: https://pile.eleuther.ai/
 */
export interface AiDataset extends DefaultModelType {
    name: string;
    company?: string;
    dataType: string;
    description?: string;
    sizeGb?: number;
    url?: string;
    isPublic?: boolean;
}
export interface AiModel extends DefaultModelType {
    name: string;
    company: string;
    /**
     * task it can do, e.g. text --> text, translation, or stt
     */
    task: string;
    description?: string;
    notes?: string;
    /**
     * How much USD has it cost to train this thing
     */
    trainingCostUsd?: number;
    isOpenSource?: boolean;
    isModelPublic?: boolean;
    canRunLocally?: boolean;
    isGpuRequired?: boolean;
    /**
     * requirements to run this
     */
    systemRequirements?: string;
    paperUrl?: string;
    githubUrl?: string;
    hasApi?: boolean;
    /**
     * If there are api's available, there can we find more info about them?
     */
    apiUrls?: string[];
}
//# sourceMappingURL=AiModel.d.ts.map