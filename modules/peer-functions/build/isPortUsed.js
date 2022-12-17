"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPortUsed = void 0;
var net_1 = __importDefault(require("net"));
/**
 * Checks if a port is used or not
 */
var isPortUsed = function (port) {
    return new Promise(function (resolve, reject) {
        var server = net_1.default.createServer();
        server.once("error", function (err) {
            if (err.code === "EADDRINUSE") {
                resolve(true);
            }
        });
        server.once("listening", function () {
            // close the server if listening doesn't fail
            server.close();
            resolve(false);
        });
        server.listen(port);
    });
};
exports.isPortUsed = isPortUsed;
//# sourceMappingURL=isPortUsed.js.map