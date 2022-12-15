"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var fs_util_js_1 = require("fs-util-js");
var js_util_1 = require("js-util");
var react_with_native_1 = require("react-with-native");
var getTypeFromFileBlob_1 = require("./util/getTypeFromFileBlob");
var FileInput = function (props) {
    var setBlobs = props.setBlobs;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Input, { type: "file", multiple: true, onChange: function (event) {
            var files = event.target.files;
            if (!files) {
                setBlobs([]);
                return;
            }
            var fileArray = new Array(files.length)
                .fill(null)
                .map(function (_, index) {
                var file = files.item(index);
                return file;
            })
                .filter(js_util_1.notEmpty);
            var assetBlobs = fileArray.map(function (file) {
                var type = (0, getTypeFromFileBlob_1.getTypeFromFileBlob)(file);
                var name = (0, fs_util_js_1.withoutExtension)(file.name);
                var asset = {
                    blobPath: URL.createObjectURL(file),
                    originalFilename: file.name,
                    blob: file,
                    type: type,
                    name: name,
                    sizeBytes: file.size,
                    uploadProgress: 0,
                };
                return asset;
            });
            setBlobs(assetBlobs);
        } }));
};
exports.FileInput = FileInput;
//# sourceMappingURL=FileInput.js.map