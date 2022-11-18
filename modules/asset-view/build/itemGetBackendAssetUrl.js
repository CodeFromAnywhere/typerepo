"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemGetBackendAssetUrl = void 0;
var asset_functions_js_1 = require("asset-functions-js");
var server_api_url_1 = require("server-api-url");
/**
 * Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.
 */
var itemGetBackendAssetUrl = function (config) {
    var backendAsset = config.backendAsset, item = config.item, isDownload = config.isDownload;
    if (!(backendAsset === null || backendAsset === void 0 ? void 0 : backendAsset.relativePath)) {
        return undefined;
    }
    var url = (0, asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl, item.projectRelativePath, backendAsset.relativePath, isDownload);
    return url;
};
exports.itemGetBackendAssetUrl = itemGetBackendAssetUrl;
//# sourceMappingURL=itemGetBackendAssetUrl.js.map