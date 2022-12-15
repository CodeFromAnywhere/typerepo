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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebcamCapture = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_webcam_1 = __importDefault(require("react-webcam"));
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var WIDTH = 1920;
var HEIGHT = 1080;
var ASPECT_RATIO = WIDTH / HEIGHT;
var videoConstraints = {
    width: WIDTH,
    height: HEIGHT,
    facingMode: "user",
};
/**
 * Taken from https://github.com/mozmorris/react-webcam/issues/65#issuecomment-385126201
 *
 * There are probably much better solutions
 */
var base64UrltoBlob = function (dataurl) {
    var _a;
    if (!dataurl)
        return;
    var arr = dataurl.split(",");
    var mime = (_a = arr[0].match(/:(.*?);/)) === null || _a === void 0 ? void 0 : _a[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};
var WebcamCapture = function (props) {
    var _a = (0, react_1.useState)(null), snapshot = _a[0], setSnapshot = _a[1];
    var withBlob = props.withBlob;
    return ((0, jsx_runtime_1.jsx)(react_webcam_1.default, __assign({ audio: false, height: HEIGHT, width: WIDTH, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints, className: "w-full h-full flex" }, { children: function (_a) {
            var getScreenshot = _a.getScreenshot;
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "relative" }, { children: [snapshot ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Image, { src: snapshot, className: "absolute bottom-6 left-10 w-1/5 aspect-auto" })) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ className: "hover:bg-gray-200 absolute bottom-6 left-1/2 p-4 border border-black bg-white rounded-full", onClick: function () {
                            var base64Url = getScreenshot();
                            var blob = base64UrltoBlob(base64Url);
                            var blobUrl = blob ? URL.createObjectURL(blob) : undefined;
                            setSnapshot(base64Url);
                            if (!blob || !blobUrl)
                                return;
                            withBlob(blobUrl, blob);
                        } }, { children: "\uD83D\uDCF8" }))] })));
        } })));
};
exports.WebcamCapture = WebcamCapture;
//# sourceMappingURL=Webcam.js.map