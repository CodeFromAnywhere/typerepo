import { MergedQueryConfig, RootDbFolder } from "../types";
export declare const getRootFolders: (config: {
    manualProjectRoot?: string | undefined;
    projectRoot: string;
    mergedConfig: MergedQueryConfig;
    operationPath: string | false;
}) => Promise<RootDbFolder[]>;
//# sourceMappingURL=getRootFolders.d.ts.map