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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressImage = void 0;
var fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
var fs_util_1 = require("fs-util");
var js_util_1 = require("js-util");
var compressImage = function (absoluteSourceImagePath, config) { return __awaiter(void 0, void 0, void 0, function () {
    var result, parsedPath, destinationPath, totalTime, finalPath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                result = (0, fluent_ffmpeg_1.default)({ source: absoluteSourceImagePath });
                if (config === null || config === void 0 ? void 0 : config.quality) {
                    result = result.addOption("-quality ".concat((config === null || config === void 0 ? void 0 : config.quality) || 100));
                }
                if (config === null || config === void 0 ? void 0 : config.sizeWidthPx) {
                    result = result.size("".concat(config === null || config === void 0 ? void 0 : config.sizeWidthPx, "x?"));
                }
                if (config === null || config === void 0 ? void 0 : config.aspectRatio) {
                    result = result.aspect("".concat(config === null || config === void 0 ? void 0 : config.aspectRatio.x, ":").concat(config.aspectRatio.y));
                }
                if (config === null || config === void 0 ? void 0 : config.targetFormat) {
                    result = result.toFormat(config === null || config === void 0 ? void 0 : config.targetFormat);
                }
                parsedPath = fs_util_1.path.parse(absoluteSourceImagePath);
                destinationPath = (0, fs_util_1.getFirstAvailableFilename)(fs_util_1.path.join(parsedPath.dir, "".concat(parsedPath.name, ".converted").concat((config === null || config === void 0 ? void 0 : config.targetFormat) ? ".".concat(config === null || config === void 0 ? void 0 : config.targetFormat) : parsedPath.ext)));
                result = result.save(destinationPath);
                totalTime = 1;
                return [4 /*yield*/, new Promise(function (resolve) {
                        result
                            .on("codecData", function (data) {
                            // HERE YOU GET THE TOTAL TIME
                            totalTime = parseInt(data.duration.replace(/:/g, ""));
                            console.log("Converting Started...");
                        })
                            .on("progress", function (progress) {
                            // HERE IS THE CURRENT TIME
                            var time = parseInt(progress.timemark.replace(/:/g, ""));
                            // AND HERE IS THE CALCULATION
                            var percent = Math.floor((time / totalTime) * 100);
                            if (config === null || config === void 0 ? void 0 : config.isDebug) {
                                console.log("".concat(percent, "%"));
                            }
                        })
                            .on("end", function () { return __awaiter(void 0, void 0, void 0, function () {
                            var finalDestinationPath;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!(config === null || config === void 0 ? void 0 : config.keepOriginal)) return [3 /*break*/, 2];
                                        // new file is created, old one is not overwritten, and we need to remove the old
                                        // NB: don't wait for it!
                                        return [4 /*yield*/, fs_util_1.fs.rm(absoluteSourceImagePath)];
                                    case 1:
                                        // new file is created, old one is not overwritten, and we need to remove the old
                                        // NB: don't wait for it!
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        finalDestinationPath = (0, js_util_1.replaceLastOccurence)(destinationPath, ".converted", "");
                                        if (fs_util_1.fs.existsSync(finalDestinationPath)) {
                                            resolve(destinationPath);
                                        }
                                        return [4 /*yield*/, fs_util_1.fs.rename(destinationPath, finalDestinationPath)];
                                    case 3:
                                        _a.sent();
                                        resolve(finalDestinationPath);
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .on("error", function (e) {
                            console.log({ e: e });
                            resolve(undefined);
                        });
                    })];
            case 1:
                finalPath = _a.sent();
                return [2 /*return*/, finalPath];
        }
    });
}); };
exports.compressImage = compressImage;
//# sourceMappingURL=compressImage.js.map