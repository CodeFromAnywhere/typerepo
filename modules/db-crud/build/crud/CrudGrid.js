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
exports.CrudGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var asset_view_1 = require("asset-view");
var react_with_native_1 = require("react-with-native");
var SpaceCard_1 = require("../card/SpaceCard");
var CrudGrid = function (props) {
    var actions = props.actions, data = props.data, highlight = props.highlight, tsInterface = props.tsInterface, onEndReached = props.onEndReached;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: data === null || data === void 0 ? void 0 : data.map(function (item) {
            var imageUrl = (0, asset_view_1.itemGetBackendAssetUrl)({
                item: item,
                backendAsset: item.pictureImage,
            });
            return imageUrl && typeof imageUrl === "string" ? ((0, jsx_runtime_1.jsx)(SpaceCard_1.SpaceCard, { ctaText: "More info", imageUrl: imageUrl, darkened: false, secondaryImageUrl: imageUrl, subtitle: "Subtitle", title: "Title" })) : ("no img url");
        }) })));
};
exports.CrudGrid = CrudGrid;
//# sourceMappingURL=CrudGrid.js.map