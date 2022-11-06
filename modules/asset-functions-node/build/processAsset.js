"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAsset = void 0;
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var convert_case_1 = require("convert-case");
var getStorageLocationInfo_1 = require("./getStorageLocationInfo");
var getTemporaryAssetsFolderPath_1 = require("./getTemporaryAssetsFolderPath");
var log_1 = require("log");
/**
Processes an asset by moving the file in the right location, if needed...

- Alt is kept, nothing to do with it
- Giving a different name will change the new path
- relativePath is checked if it exists (if temporaryDestination is undefined). It is used to obtain the extension.
- temporaryDestination must be checked. if it exists, must replace the file on relativePath calculated from name

After processing, this function should return a `BackendAsset` without the non-storable parameters
 */
var processAsset = function (
/**
 * The backendAsset that may need processing
 */
backendAsset, 
/**
 * Location of the
 * - markdown file (or folder where it is located)
 * - typescript file (or folder where it is located)
 * - database file (or folder where it is located)
 */
absoluteReferencingFilePath, 
/**
 * Extra configuration may somethimes be needed
 */
config) { return __awaiter(void 0, void 0, void 0, function () {
    var alt, name, relativePath, temporaryDestination, slugifiedName, absoluteTemporaryDestination, oldAssetStoragePath, extension, storageLocationInfo, finalAssetStoragePath, finalAvailableStoragePath, newRelativePath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                alt = backendAsset.alt, name = backendAsset.name, relativePath = backendAsset.relativePath, temporaryDestination = backendAsset.temporaryDestination;
                slugifiedName = (0, convert_case_1.slugify)(name && name.length > 0 ? name : "untitled");
                if (!relativePath && !temporaryDestination) {
                    (0, log_1.log)("no relativePath, no temporaryDestination", { type: "warning" });
                    // NB: we must have either a relativePath or a temporaryDestination, otherwise this is an invalid input
                    return [2 /*return*/, undefined];
                }
                absoluteTemporaryDestination = temporaryDestination
                    ? fs_util_1.path.join((0, getTemporaryAssetsFolderPath_1.getTemporaryAssetsFolderPath)(), temporaryDestination)
                    : undefined;
                // NB: If a `temporaryDestination` is given, if it doesn't exist, we return nothing, this is an invalid input.
                if (absoluteTemporaryDestination) {
                    if (!fs_util_1.fs.existsSync(absoluteTemporaryDestination)) {
                        (0, log_1.log)("absoluteTemporaryDestination does not exist", { type: "warning" });
                        return [2 /*return*/, undefined];
                    }
                }
                oldAssetStoragePath = relativePath
                    ? fs_util_1.path.join(fs_util_1.path.parse(absoluteReferencingFilePath).dir, relativePath)
                    : undefined;
                // NB: if a relativePath is provided without a temporaryDestination, it means the file should already be there. If it's not there, we return nothing, invalid input.
                if (oldAssetStoragePath && !temporaryDestination) {
                    if (!fs_util_1.fs.existsSync(oldAssetStoragePath)) {
                        (0, log_1.log)("oldAssetStoragePath does not exist (".concat(oldAssetStoragePath, ")"), {
                            type: "warning",
                        });
                        return [2 /*return*/, undefined];
                    }
                }
                extension = temporaryDestination
                    ? temporaryDestination.split(".").pop()
                    : relativePath === null || relativePath === void 0 ? void 0 : relativePath.split(".").pop();
                if (!extension) {
                    (0, log_1.log)("could not create extension", { type: "warning" });
                    // NB: extension must exist now.
                    return [2 /*return*/, undefined];
                }
                storageLocationInfo = (0, getStorageLocationInfo_1.getStorageLocationInfo)(absoluteReferencingFilePath, config);
                finalAssetStoragePath = fs_util_1.path.join(storageLocationInfo.absoluteAssetBaseFolderPath, "".concat(slugifiedName, ".").concat(extension));
                finalAvailableStoragePath = finalAssetStoragePath;
                if (!absoluteTemporaryDestination) return [3 /*break*/, 2];
                finalAvailableStoragePath = (0, fs_util_1.getFirstAvailableFilename)(finalAssetStoragePath);
                return [4 /*yield*/, (0, fs_util_1.renameAndCreate)(absoluteTemporaryDestination, finalAvailableStoragePath)];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2:
                if (!oldAssetStoragePath) return [3 /*break*/, 4];
                if (!(oldAssetStoragePath !== finalAssetStoragePath)) return [3 /*break*/, 4];
                finalAvailableStoragePath = (0, fs_util_1.getFirstAvailableFilename)(finalAssetStoragePath);
                // the name has changed
                return [4 /*yield*/, (0, fs_util_1.renameAndCreate)(oldAssetStoragePath, finalAvailableStoragePath)];
            case 3:
                // the name has changed
                _a.sent();
                _a.label = 4;
            case 4:
                newRelativePath = (0, get_path_1.getRelativeLinkPath)(absoluteReferencingFilePath, finalAvailableStoragePath);
                //({ newRelativePath });
                return [2 /*return*/, { alt: alt, relativePath: newRelativePath }];
        }
    });
}); };
exports.processAsset = processAsset;
//# sourceMappingURL=processAsset.js.map