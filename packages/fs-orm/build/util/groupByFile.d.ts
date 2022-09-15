import { Creation, DbFileLocation, Storing } from "model-types";
import { MergedQueryConfig } from "../types";
export declare type ItemPerFileObject<T extends {
    [key: string]: any;
}> = {
    [absolutePath: string]: {
        dbFileLocation: DbFileLocation;
        items: Storing<T>[];
    };
};
export declare const groupByFile: <T extends {
    [key: string]: any;
}>(creationItems: Creation<T>[], mergedConfig: MergedQueryConfig, modelName: string) => Promise<ItemPerFileObject<T>>;
//# sourceMappingURL=groupByFile.d.ts.map