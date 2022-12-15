"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAudioWithViewsArray = void 0;
var fs_util_js_1 = require("fs-util-js");
var js_util_1 = require("js-util");
var marked_util_1 = require("marked-util");
var findAudioWithViewsArray = function (content, index, title) {
    var relativeEmbeds = (0, marked_util_1.findEmbeds)(content)
        .filter(function (x) { return (0, fs_util_js_1.isPathRelative)(x.src); })
        .filter(function (x) { return x.type !== "other" && x.type !== "text"; });
    var initialViewEmbeds = [
        title ? { title: title, audioKey: "audio".concat(index, ".0") } : undefined,
    ].filter(js_util_1.notEmpty);
    var initialValue = [
        {
            audioPath: null,
            viewEmbeds: initialViewEmbeds,
            audioKey: "audio".concat(index, ".0"),
        },
    ];
    var audioWithViewsArray = relativeEmbeds.reduce(function (previous, current, currentIndex) {
        // Create a new item in the AudioWithViews for a new audio
        if (current.type === "audio") {
            previous.push({
                audioPath: current.src,
                viewEmbeds: [],
                audioKey: "audio".concat(index, ".").concat(currentIndex),
            });
            return previous;
        }
        // If a view is encountered, add it to the viewEmbeds array
        if (current.type === "image" || current.type === "video") {
            var quoteCharacters = "&quot;";
            var isSpoken = current.alt.startsWith(quoteCharacters) &&
                current.alt.endsWith(quoteCharacters);
            if (isSpoken) {
                // add new one because this has a spokentext.
                var spokenText = isSpoken
                    ? current.alt.substring(quoteCharacters.length, current.alt.length - quoteCharacters.length)
                    : undefined;
                var audioKey = "audio".concat(index, ".").concat(currentIndex);
                previous.push({
                    audioPath: null,
                    viewEmbeds: [
                        {
                            viewPath: current.src,
                            audioKey: audioKey,
                            spokenText: spokenText,
                        },
                    ],
                    audioKey: audioKey,
                });
            }
            else {
                // attach to the lastone
                previous[previous.length - 1].viewEmbeds.push({
                    viewPath: current.src,
                    audioKey: previous[previous.length - 1].audioKey,
                    spokenText: undefined,
                });
            }
        }
        // Do nothing for other types
        return previous;
    }, initialValue);
    return audioWithViewsArray;
};
exports.findAudioWithViewsArray = findAudioWithViewsArray;
//# sourceMappingURL=findAudioWithViewsArray.js.map