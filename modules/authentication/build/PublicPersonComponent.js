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
exports.PublicPersonComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var asset_view_1 = require("asset-view");
var PublicPersonComponent = function (props) {
    var publicPerson = props.publicPerson;
    return !publicPerson ? null : ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full bg-red-500" }, { children: [(0, jsx_runtime_1.jsx)(asset_view_1.ModelItemAssetView, { item: publicPerson, backendAsset: publicPerson === null || publicPerson === void 0 ? void 0 : publicPerson.pictureImage, hideDownloadLink: true, className: " w-[800px]" }), (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: publicPerson.name })] })));
};
exports.PublicPersonComponent = PublicPersonComponent;
//# sourceMappingURL=PublicPersonComponent.js.map