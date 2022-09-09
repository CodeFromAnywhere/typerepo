import { DbConfig, Keys, MergedQueryConfig, AnyModelObject, CustomQueryConfig } from "../types";
export declare const mergeConfigs: <TModels extends AnyModelObject>(modelName: Extract<keyof TModels, string>, dbConfig?: DbConfig<TModels> | undefined, config?: CustomQueryConfig) => MergedQueryConfig;
//# sourceMappingURL=mergeConfigs.d.ts.map