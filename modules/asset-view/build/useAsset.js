"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsset = exports.getSrc = void 0;
var asset_functions_js_1 = require("asset-functions-js");
var server_api_url_1 = require("server-api-url");
var path_browserify_1 = __importDefault(require("path-browserify"));
var useAssetInfo_1 = require("./useAssetInfo");
var getSrc = function (asset, projectRelativeReferencingFilePath, isNextStaticProductionBuild) {
    // console.log({ apiUrl });
    /**
     * NB: `relativePath` is required
     */
    var getRemoteUrl = function (isDownload) {
        return (0, asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl, projectRelativeReferencingFilePath, asset.relativePath, isDownload);
    };
    var getPublicUrl = function (relativePath) {
        return "markdown-assets/".concat(path_browserify_1.default.join(path_browserify_1.default.parse(projectRelativeReferencingFilePath).dir, relativePath));
    };
    /**
     * NB: `asset.temporaryDestination` is not a URL that can be used to retreive the image as "src"
     */
    var src = asset.absoluteUrl
        ? asset.absoluteUrl
        : asset.blobPath
            ? asset.blobPath
            : isNextStaticProductionBuild && asset.relativePath
                ? getPublicUrl(asset.relativePath)
                : getRemoteUrl(false);
    // console.log("UseAssetSRC:", src);
    var downloadRemotely = !asset.blobPath && !!asset.relativePath;
    var downloadUrl = isNextStaticProductionBuild && asset.relativePath
        ? getPublicUrl(asset.relativePath)
        : downloadRemotely
            ? getRemoteUrl(true)
            : // NB: other type is ugly when downloading. Also doesn't make sense much to want to download an asset after uploading
                asset.type !== "other"
                    ? asset.blobPath
                    : undefined;
    return { src: src, downloadUrl: downloadUrl };
};
exports.getSrc = getSrc;
var useAsset = function (asset, projectRelativeReferencingFilePath, isNextStaticProductionBuild) {
    if (!asset || !projectRelativeReferencingFilePath)
        return;
    var _a = (0, exports.getSrc)(asset, projectRelativeReferencingFilePath, isNextStaticProductionBuild), src = _a.src, downloadUrl = _a.downloadUrl;
    var extension = (0, asset_functions_js_1.getExtensionFromAsset)(asset);
    var assetInfo = (0, useAssetInfo_1.useAssetInfo)(src, asset.originalFilename);
    var rawText = (assetInfo === null || assetInfo === void 0 ? void 0 : assetInfo.rawText) || null;
    var type = asset.type || (assetInfo === null || assetInfo === void 0 ? void 0 : assetInfo.type);
    return { rawText: rawText, type: type, downloadUrl: downloadUrl, src: src, extension: extension };
};
exports.useAsset = useAsset;
//# sourceMappingURL=useAsset.js.map