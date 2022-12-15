"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBackendAsset = void 0;
var makeBackendAsset = function (asset, projectRelativeReferencingFilePath, modelName) {
    return {
        alt: asset.alt,
        name: asset.name,
        relativePath: asset.relativePath,
        temporaryDestination: asset.temporaryDestination,
        projectRelativeReferencingFilePath: projectRelativeReferencingFilePath,
        modelName: modelName,
    };
};
exports.makeBackendAsset = makeBackendAsset;
//# sourceMappingURL=makeBackendAsset.js.map