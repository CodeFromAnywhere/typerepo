import { BackendAsset } from "asset-type";
import { AugmentedAnyModelType } from "model-types";
/**
 * Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.
 */
export declare const itemGetBackendAssetUrl: (config: {
    item: AugmentedAnyModelType;
    backendAsset?: BackendAsset | undefined;
    isDownload?: boolean | undefined;
}) => string | undefined;
//# sourceMappingURL=itemGetBackendAssetUrl.d.ts.map