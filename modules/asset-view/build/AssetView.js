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
var asset_functions_js_1 = require("asset-functions-js");
var server_api_url_1 = require("server-api-url");
var markdown_1 = require("markdown");
var react_with_native_1 = require("react-with-native");
var useAsset_1 = require("./useAsset");
exports.defaultClassName = "w-20 aspect-auto";
var AssetView = function (props) {
    var asset = props.asset, className = props.className, projectRelativeReferencingFilePath = props.projectRelativeReferencingFilePath, hideDownloadLink = props.hideDownloadLink;
    var _a = (0, useAsset_1.useAsset)(asset, projectRelativeReferencingFilePath, !server_api_url_1.isDev), downloadUrl = _a.downloadUrl, rawText = _a.rawText, src = _a.src, type = _a.type, extension = _a.extension;
    // console.log({ src });
    var sizeText = asset.sizeBytes !== undefined
        ? "(".concat((0, asset_functions_js_1.readableSize)(asset.sizeBytes), ")")
        : undefined;
    var downloadText = " ⬇️ Download";
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ style: { position: "relative" } }, { children: [downloadUrl && !hideDownloadLink ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ style: {
                    padding: "5px",
                } }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.A, __assign({ target: "_blank", href: downloadUrl }, { children: [downloadText, " ", sizeText] })) }))) : null, type === "image" && src && ((0, jsx_runtime_1.jsx)("img", { src: src, className: className || "w-40", style: { aspectRatio: "auto" } })), type === "audio" && src && (0, jsx_runtime_1.jsx)("audio", { controls: true, src: src }), type === "video" && src && ((0, jsx_runtime_1.jsx)("video", { style: { aspectRatio: "auto" }, className: className || "w-40", controls: true, src: src })), type === "text" && rawText ? ((0, jsx_runtime_1.jsx)(markdown_1.MarkdownCodeblock, { text: rawText, extension: extension })) : null, type === "other" && extension === "pdf" ? null : null, src === undefined ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: "Asset src not found" }) : null] })));
};
exports.AssetView = AssetView;
//# sourceMappingURL=AssetView.js.map