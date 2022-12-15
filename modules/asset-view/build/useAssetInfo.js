"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAssetInfo = void 0;
var asset_functions_js_1 = require("asset-functions-js");
var react_1 = require("react");
var text_or_binary_1 = require("text-or-binary");
var useAssetInfo = function (url, filename) {
    if (!url && !filename) {
        console.log("MUST PROVIDE EITHER URL OR FILENAME");
        return;
    }
    var urlOrFilename = (url || filename);
    var realFilename = (url ? url.split("/").pop() : filename);
    var isTextFile = (0, text_or_binary_1.isText)(realFilename) === true ? true : false;
    var _a = (0, react_1.useState)(null), rawText = _a[0], setRawText = _a[1];
    (0, react_1.useEffect)(function () {
        if (!!url && isTextFile) {
            fetch(url).then(function (result) {
                result.text().then(function (text) { return setRawText(text); });
            });
        }
    }, [url, isTextFile]);
    var type = (0, asset_functions_js_1.getTypeFromUrlOrPath)(urlOrFilename);
    return { rawText: rawText, type: type };
};
exports.useAssetInfo = useAssetInfo;
//# sourceMappingURL=useAssetInfo.js.map