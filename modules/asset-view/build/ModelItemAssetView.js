"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelItemAssetView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var AssetView_1 = require("./AssetView");
var ModelItemAssetView = function (props) {
    var backendAsset = props.backendAsset, item = props.item, hideDownloadLink = props.hideDownloadLink, className = props.className;
    return backendAsset ? ((0, jsx_runtime_1.jsx)(AssetView_1.AssetView, { asset: backendAsset, projectRelativeReferencingFilePath: item.projectRelativePath, hideDownloadLink: hideDownloadLink, className: className })) : null;
};
exports.ModelItemAssetView = ModelItemAssetView;
//# sourceMappingURL=ModelItemAssetView.js.map