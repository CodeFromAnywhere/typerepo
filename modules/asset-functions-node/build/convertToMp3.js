"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToMp3 = void 0;
var fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
/**
 * Uses ffmpeg to convert a file to mp3
 *
 * Returns the new file path on success
 */
var convertToMp3 = function (sourcePath, destinationPath) {
    return new Promise(function (resolve, reject) {
        (0, fluent_ffmpeg_1.default)({ source: sourcePath })
            .toFormat("mp3")
            .saveToFile(destinationPath)
            .on("end", function () {
            resolve(destinationPath);
        })
            .on("error", function (e) {
            resolve(undefined);
        });
    });
};
exports.convertToMp3 = convertToMp3;
//# sourceMappingURL=convertToMp3.js.map