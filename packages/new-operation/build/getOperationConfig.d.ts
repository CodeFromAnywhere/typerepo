import { OperationConfig } from "code-types";
/**
 * Either finds the operation config in the database or creates a new one
 *
 * NB: it does not push it into the database yet because the operation might not exist yet
 */
export declare const getOperationConfig: (operationName: string, description?: string) => Promise<OperationConfig>;
//# sourceMappingURL=getOperationConfig.d.ts.map