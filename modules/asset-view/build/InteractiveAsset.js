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
exports.InteractiveAsset = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clickable_icon_1 = require("clickable-icon");
var react_with_native_1 = require("react-with-native");
var AssetView_1 = require("./AssetView");
var asset_functions_js_1 = require("asset-functions-js");
/**

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration

 */
var InteractiveAsset = function (props) {
    var asset = props.asset, remove = props.remove, projectRelativeReferencingFilePath = props.projectRelativeReferencingFilePath, onChange = props.onChange, attachTokenToFilename = props.attachTokenToFilename;
    /**
     *
     * Name that includes token
     */
    var nameWithToken = asset.name && asset.name.length > 0
        ? // You've edited the name, and this it's stored on the frontend `Asset`
            asset.name
        : asset.relativePath
            ? // The asset comes from the backend, the name can be deducted from the `relativePath` by removing the token first, then adding it
                (0, asset_functions_js_1.getNameWithTokenFromRelativePath)(asset.relativePath, attachTokenToFilename)
            : // There is no backend name nor there's a name set by the user. NB: this should not really happen as it must be present on Asset after recording/selecting an asset...
                "";
    var _a = (0, asset_functions_js_1.removeTokenIfPresent)(nameWithToken, attachTokenToFilename), nameWithoutToken = _a.nameWithoutToken, previousToken = _a.token;
    var uploadProgressText = asset.uploadProgress === undefined || asset.uploadProgress === 0
        ? ""
        : asset.uploadProgress === 1
            ? "✅"
            : "".concat(Math.round(asset.uploadProgress * 100), "%");
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "relative border border-black rounded-xl p-2 m-2" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "absolute right-1 top-[-7px]" }, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2A2F", onClick: function () { return remove(); } }) })), (0, jsx_runtime_1.jsx)(AssetView_1.AssetView, { projectRelativeReferencingFilePath: projectRelativeReferencingFilePath, asset: asset }), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Input, { placeholder: "Name", value: nameWithoutToken, style: { backgroundColor: "transparent", border: "1px solid black" }, onChange: function (e) {
                            var newName = (0, asset_functions_js_1.addToken)(e.target.value, previousToken, attachTokenToFilename);
                            console.log({ newName: newName });
                            var newAsset = __assign(__assign({}, asset), { name: newName });
                            onChange(newAsset);
                        } }), (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { placeholder: "Alternate text", style: { backgroundColor: "transparent", border: "1px solid black" }, value: asset.alt || "", onChange: function (e) {
                            var newAsset = __assign(__assign({}, asset), { alt: e.target.value });
                            onChange(newAsset);
                        } }), uploadProgressText] }))] })));
};
exports.InteractiveAsset = InteractiveAsset;
//# sourceMappingURL=InteractiveAsset.js.map