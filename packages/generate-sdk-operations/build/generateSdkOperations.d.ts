import { BundleConfig } from "bundle-types";
/**
(re)generates all sdk operations for any project
 */
export declare const generateSdkOperations: (bundleConfig?: BundleConfig, config?: {
    /**
     * If true, will try to run yarn install before and if it fails, does not continue.
     */
    yarnInstallBefore?: boolean | undefined;
    /**
     * if true, yarn install will be skipped when generating the sdks, but run one time afterwards
     *
     * useful if you are sure that there will be multiple yarn Installs needed otherwise
     *
     * for os installation (where all operations already exist, don't do this, yarn installs will probably not happen at all)
     */
    yarnInstallAfter?: boolean | undefined;
    manualProjectRoot?: string | undefined;
    dryrun?: boolean | undefined;
} | undefined) => Promise<boolean>;
//# sourceMappingURL=generateSdkOperations.d.ts.map