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
exports.MediaRecorder = exports.MediaRecorderComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactMediaRecorder_1 = require("./ReactMediaRecorder");
var react_1 = require("react");
var Audio = function (props) { return (0, jsx_runtime_1.jsx)("audio", __assign({}, props)); };
var Video = function (props) { return (0, jsx_runtime_1.jsx)("video", __assign({}, props)); };
var VideoPreview = function (_a) {
    var stream = _a.stream;
    var videoRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    if (!stream) {
        return null;
    }
    return (0, jsx_runtime_1.jsx)("video", { ref: videoRef, width: 500, height: 500, autoPlay: true, controls: true });
};
var MediaRecorderComponent = function (props) {
    var status = props.status, startRecording = props.startRecording, stopRecording = props.stopRecording, pauseRecording = props.pauseRecording, resumeRecording = props.resumeRecording, previewAudioStream = props.previewAudioStream, mediaBlobUrl = props.mediaBlobUrl, previewStream = props.previewStream, type = props.type, muteAudio = props.muteAudio, unMuteAudio = props.unMuteAudio, isAudioMuted = props.isAudioMuted;
    var AudioOrVideo = type === "audio" ? Audio : Video;
    var buttons = status === "acquiring_media"
        ? []
        : status === "recording"
            ? [
                (0, jsx_runtime_1.jsx)("button", __assign({ onClick: stopRecording }, { children: "\u23F9" }), "stop"),
                (0, jsx_runtime_1.jsx)("button", __assign({ onClick: pauseRecording }, { children: "\u23F8" }), "pause"),
                type === "video" || type === "screen" ? (isAudioMuted ? ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: unMuteAudio }, { children: "\uD83D\uDD08" }), "unmute")) : ((0, jsx_runtime_1.jsx)("button", __assign({ onClick: muteAudio }, { children: "\uD83D\uDD07" }), "mute"))) : undefined,
            ]
            : status === "paused"
                ? [
                    (0, jsx_runtime_1.jsx)("button", __assign({ onClick: stopRecording }, { children: "\u23F9" }), "stop"),
                    (0, jsx_runtime_1.jsx)("button", __assign({ onClick: resumeRecording }, { children: "\u25B6\uFE0F" }), "pause"),
                ]
                : [
                    (0, jsx_runtime_1.jsx)("button", __assign({ onClick: startRecording }, { children: "\u23FA" }), "start"),
                ];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [buttons, mediaBlobUrl && status !== "recording" ? ((0, jsx_runtime_1.jsx)(AudioOrVideo, { src: mediaBlobUrl, controls: true, autoPlay: true })) : null, type === "video" && previewStream && status === "recording" ? ((0, jsx_runtime_1.jsx)(VideoPreview, { stream: previewStream })) : null, type === "audio" && previewAudioStream && status === "recording"
                ? // TODO: visualise with https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
                    null
                : null] }));
};
exports.MediaRecorderComponent = MediaRecorderComponent;
var MediaRecorder = function (props) {
    var type = props.type, withBlob = props.withBlob;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ReactMediaRecorder_1.ReactMediaRecorder, { screen: type === "screen", audio: true, blobPropertyBag: { type: type === "audio" ? "audio/wav" : "video/mp4" }, 
            // audio={type === "audio"}
            video: type === "video", stopStreamsOnStop: true, onStop: function (blobUrl, blob) {
                withBlob(blobUrl, blob);
            }, render: function (props) { return (0, jsx_runtime_1.jsx)(exports.MediaRecorderComponent, __assign({}, props, { type: type })); } }) }));
};
exports.MediaRecorder = MediaRecorder;
//# sourceMappingURL=MediaRecorder.js.map