"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverDownloadReply = void 0;
var fs_util_1 = require("fs-util");
var server_1 = __importDefault(require("server"));
/**
 * Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`
 *
 *
 *
 * For this I finally ended up using builtin server.js stuff, we don't need to set those manually...
 *
 * See https://serverjs.io/documentation/reply/#file-
 * And https://serverjs.io/documentation/reply/#download-
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
 *
 * NB: ensure to return the result of this function in your endpoint, otherwise it won't work
 */
var serverDownloadReply = function (absoluteAssetPath, isDownload) {
    var parsedAsset = fs_util_1.path.parse(absoluteAssetPath);
    if (isDownload) {
        return server_1.default.reply.download(absoluteAssetPath, parsedAsset.base);
    }
    return (server_1.default.reply
        // @ts-ignore NB: TODO: why doesn't server.js has the right types???
        .file(absoluteAssetPath));
};
exports.serverDownloadReply = serverDownloadReply;
//# sourceMappingURL=serverDownloadReply.js.map