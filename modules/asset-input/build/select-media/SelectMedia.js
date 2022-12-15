"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMedia = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var SelectMedia = function (props) {
    // make an api for all different sources
    var source = props.source;
    // get the right media from api
    // show the results using
    return (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: ["A picker for media from ", props.source, " should come here"] });
};
exports.SelectMedia = SelectMedia;
//# sourceMappingURL=SelectMedia.js.map