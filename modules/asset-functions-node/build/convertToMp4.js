"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToMp4 = void 0;
var fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
/**
 * Uses ffmpeg to convert a file to mp3
 *
 * Returns the new file path on success
 */
var convertToMp4 = function (sourcePath, destinationPath) {
    return new Promise(function (resolve, reject) {
        (0, fluent_ffmpeg_1.default)({ source: sourcePath })
            .toFormat("mp4")
            .saveToFile(destinationPath)
            .on("end", function () {
            resolve(destinationPath);
        })
            .on("error", function (e) {
            resolve(undefined);
        });
    });
};
exports.convertToMp4 = convertToMp4;
//# sourceMappingURL=convertToMp4.js.map