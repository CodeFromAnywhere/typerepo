"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var asset_input_1 = require("asset-input");
var AssetTheme_1 = require("./AssetTheme");
var AssetInput = function (props) {
    var onChange = props.onChange, value = props.value, extra = props.extra, errors = props.errors;
    var config = props.config || {};
    var hasError = errors && errors.length > 0;
    var inputClassWithError = "\n  w-full\n  ".concat(AssetTheme_1.InputTheme[extra === null || extra === void 0 ? void 0 : extra.theme], " \n  ").concat(AssetTheme_1.InputSize[extra === null || extra === void 0 ? void 0 : extra.size], "\n    ").concat(hasError
        ? config.errorClassName
            ? config.errorClassName
            : " border border-red-400"
        : "");
    return ((0, jsx_runtime_1.jsx)(asset_input_1.AssetInput, { attachTokenToFilename: extra.attachTokenToFilename, defaultAssetName: extra.defaultAssetName, projectRelativeReferencingFilePath: extra.projectRelativeReferencingFilePath, allowMultiple: extra.allowMultiple, inputTypes: extra.inputTypes, value: value, onChange: function (newAssets) { return onChange(newAssets); } }));
};
exports.AssetInput = AssetInput;
exports.AssetInput.defaultInitialValue = [];
//# sourceMappingURL=AssetInput.js.map