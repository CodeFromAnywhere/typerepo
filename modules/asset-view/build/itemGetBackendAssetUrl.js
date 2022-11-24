"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemGetBackendAssetUrl = void 0;
var asset_functions_js_1 = require("asset-functions-js");
var server_api_url_1 = require("server-api-url");
var js_util_1 = require("js-util");
/**
 * Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.
 *
 * If you provide an array it'll take the first asset.
 */
var itemGetBackendAssetUrl = function (config) {
    var backendAsset = config.backendAsset, item = config.item, isDownload = config.isDownload;
    var realBackendAsset = backendAsset ? (0, js_util_1.takeFirst)(backendAsset) : undefined;
    if (!(realBackendAsset === null || realBackendAsset === void 0 ? void 0 : realBackendAsset.relativePath)) {
        return undefined;
    }
    var url = (0, asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl, item.projectRelativePath, realBackendAsset.relativePath, isDownload);
    return url;
};
exports.itemGetBackendAssetUrl = itemGetBackendAssetUrl;
//# sourceMappingURL=itemGetBackendAssetUrl.js.map