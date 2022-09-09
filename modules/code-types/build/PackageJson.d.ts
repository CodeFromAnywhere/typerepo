import { AnyModelType } from "model-types";
import { OperationConfig } from "./OperationConfig";
import { OperationClassification } from "./OperationIndex";
export declare type PackageInfoObject = {
    [key: string]: string;
};
/** DEPRECATED: TODO: should use OperationClassification */
export declare type ProjectType = "next" | "react-native" | "react" | "express" | "server" | "unknown";
/**
 * Sensible-global configurations
 */
export declare type SensibleConfig = {
    isSensibleProject: boolean;
};
/**
 * ---
 * dbStorageMethod: jsonSingle
 * operationRelativePath: package.json
 * ---
 */
export interface PackageJson extends AnyModelType {
    path?: string;
    name?: string;
    main?: string;
    source?: string;
    description?: string;
    version?: string;
    private?: boolean;
    author?: string | {
        [key: string]: string;
    };
    repository: string | {
        [key: string]: string;
    };
    homepage?: string;
    dependencies?: PackageInfoObject;
    devDependencies?: PackageInfoObject;
    peerDependencies?: PackageInfoObject;
    bin?: {
        [key: string]: string;
    };
    workspaces?: string[];
    scripts?: {
        [commandName: string]: string;
    };
    type?: OperationClassification;
    sensible?: SensibleConfig;
    operation?: OperationConfig;
}
//# sourceMappingURL=PackageJson.d.ts.map