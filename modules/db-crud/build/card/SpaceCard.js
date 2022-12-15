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
exports.SpaceCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var next_a_link_1 = require("next-a-link");
var SpaceCard = function (props) {
    var secondaryImageUrl = props.secondaryImageUrl, darkened = props.darkened, base64 = props.base64, ctaText = props.ctaText, imageUrl = props.imageUrl, subtitle = props.subtitle, title = props.title, action = props.action;
    var _a = (0, react_1.useState)(false), isImageReady = _a[0], setIsImageReady = _a[1];
    var onLoadCallBack = function () {
        setIsImageReady(true);
    };
    return ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ onClick: function () { return action === null || action === void 0 ? void 0 : action(); } }, { children: (0, jsx_runtime_1.jsxs)("a", __assign({ target: "_blank", className: "transition duration-300 ease-out transform cursor-pointer mb-2" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative m-2 overflow-hidden text-center rounded-xl lg:h-[268px] lg:w-[268px] h-72 w-72 ".concat(darkened ? "bg-black" : "") }, { children: [!isImageReady && ((0, jsx_runtime_1.jsx)("div", { className: "bg-gray-300 rounded-xl flex flex-1" })), secondaryImageUrl ? ((0, jsx_runtime_1.jsx)("img", { className: "rounded-xl ".concat(darkened ? "opacity-50" : ""), src: secondaryImageUrl })) : null, (0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute inset-0 duration-300 ease-in-out rounded-lg group hover:bg-black hover:bg-opacity-40" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "invisible px-4 py-2 text-sm border-2 rounded-md text-white group-hover:visible group-hover:transition duration-450 mt-28" }, { children: (0, jsx_runtime_1.jsxs)("p", __assign({ className: "flex" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "" }, { children: "\uD83D\uDD0D" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "ml-2 font-bold" }, { children: ctaText }))] })) })) }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex justify-between mx-2 mt-2" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex space-x-2" }, { children: [imageUrl ? ((0, jsx_runtime_1.jsx)("img", { alt: "host image", src: imageUrl, width: 40, height: 37, className: "rounded-full" })) : null, (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)("h3", __assign({ className: "text-black text-sm" }, { children: title })), (0, jsx_runtime_1.jsx)("h3", __assign({ className: "text-sm text-[#C4C4C4]" }, { children: subtitle }))] }))] })) }))] })) })));
};
exports.SpaceCard = SpaceCard;
//# sourceMappingURL=SpaceCard.js.map