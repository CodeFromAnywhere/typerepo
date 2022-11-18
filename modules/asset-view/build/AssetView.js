"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetView = exports.defaultClassName = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var markdown_1 = require("markdown");
var text_or_binary_1 = require("text-or-binary");
var asset_functions_js_1 = require("asset-functions-js");
var server_api_url_1 = require("server-api-url");
exports.defaultClassName = "w-20 aspect-auto";
var AssetView = function (props) {
    var asset = props.asset, className = props.className, projectRelativeReferencingFilePath = props.projectRelativeReferencingFilePath, hideDownloadLink = props.hideDownloadLink;
    var isRemote = !asset.blobPath;
    /**
     * NB: `relativePath` is required
     */
    var getRemoteUrl = function (isDownload) {
        return (0, asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl, projectRelativeReferencingFilePath, asset.relativePath, isDownload);
    };
    /**
     * NB: `asset.temporaryDestination` is not a URL that can be used to retreive the image as "src"
     */
    var src = isRemote
        ? asset.relativePath
            ? getRemoteUrl(false)
            : undefined
        : asset.blobPath;
    var downloadRemotely = isRemote && !!asset.relativePath;
    var downloadHref = downloadRemotely
        ? getRemoteUrl(true)
        : // NB: other type is ugly when downloading. Also doesn't make sense much to want to download an asset after uploading
            asset.type !== "other"
                ? asset.blobPath
                : undefined;
    var sizeText = asset.sizeBytes !== undefined
        ? "(".concat((0, asset_functions_js_1.readableSize)(asset.sizeBytes), ")")
        : undefined;
    var downloadText = " ⬇️ Download";
    var extension = (0, asset_functions_js_1.getExtensionFromAsset)(asset);
    var filename = isRemote && asset.relativePath
        ? asset.relativePath.split("/").pop()
        : extension
            ? "untitled.".concat(extension)
            : undefined;
    var isTextFile = filename && (0, text_or_binary_1.isText)(filename) === true ? true : false;
    var type = isRemote && asset.relativePath
        ? (0, asset_functions_js_1.getTypeFromRelativePath)(asset.relativePath)
        : asset.type;
    var _a = (0, react_1.useState)(""), rawText = _a[0], setRawText = _a[1];
    (0, react_1.useEffect)(function () {
        if (!!src && isTextFile) {
            fetch(src).then(function (result) {
                result.text().then(function (text) { return setRawText(text); });
            });
        }
    }, [src, isTextFile]);
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ style: { position: "relative" } }, { children: [downloadHref && !hideDownloadLink ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ style: {
                    padding: "5px",
                } }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.A, __assign({ target: "_blank", href: downloadHref }, { children: [downloadText, " ", sizeText] })) }))) : null, type === "image" && src && ((0, jsx_runtime_1.jsx)("img", { src: src, style: { aspectRatio: "auto", width: 150 } })), type === "audio" && src && (0, jsx_runtime_1.jsx)("audio", { controls: true, src: src }), type === "video" && src && ((0, jsx_runtime_1.jsx)("video", { style: { aspectRatio: "auto", width: 150 }, controls: true, src: src })), type === "other" && isTextFile ? ((0, jsx_runtime_1.jsx)(markdown_1.MarkdownCodeblock, { text: rawText, extension: extension })) : null, type === "other" && extension === "pdf" ? null : null, src === undefined ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: "Asset src not found" }) : null] })));
};
exports.AssetView = AssetView;
//# sourceMappingURL=AssetView.js.map