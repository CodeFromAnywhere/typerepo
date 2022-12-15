"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeFromFileBlob = void 0;
var getTypeFromFileBlob = function (file) {
    var typeFirstPart = file.type.split("/")[0];
    var firstPartAssetTypes = ["image", "video", "audio"];
    var type = firstPartAssetTypes.includes(typeFirstPart)
        ? typeFirstPart
        : "other";
    return type;
};
exports.getTypeFromFileBlob = getTypeFromFileBlob;
//# sourceMappingURL=getTypeFromFileBlob.js.map