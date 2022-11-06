"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAsset = void 0;
var uploadAsset = function (ctx) {
    var file = ctx.files.file;
    if (!file) {
        return { isSuccessful: false, message: "No file found" };
    }
    var realFile = (Array.isArray(file) ? file[0] : file);
    var functionFile = realFile
        ? {
            size: realFile.size,
            path: realFile.path,
            name: realFile.name,
            type: realFile.type,
        }
        : undefined;
    return {
        isSuccessful: true,
        message: "File received size:".concat(functionFile === null || functionFile === void 0 ? void 0 : functionFile.size, ", name:").concat(functionFile === null || functionFile === void 0 ? void 0 : functionFile.name, ", type:").concat(functionFile === null || functionFile === void 0 ? void 0 : functionFile.type, ", path: ").concat(functionFile === null || functionFile === void 0 ? void 0 : functionFile.path),
    };
};
exports.uploadAsset = uploadAsset;
//# sourceMappingURL=uploadAsset.js.map