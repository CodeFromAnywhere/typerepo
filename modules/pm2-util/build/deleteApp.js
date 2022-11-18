"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApp = void 0;
var pm2_1 = __importDefault(require("pm2"));
var pm2ConnectDisconnect_1 = require("./pm2ConnectDisconnect");
var types_1 = require("./types");
/**
 * Deletes an app from the pm2
 *
 * TODO: for some reason it says `error: Error: process or namespace not found` even though it certainly exists. I can't figure out why it's not working.
 */
var deleteApp = function (operationName) {
    return (0, pm2ConnectDisconnect_1.pm2ConnectDisconnect)(function (resolve) {
        pm2_1.default.delete("".concat(types_1.appPrefix).concat(operationName), function (error, proc) {
            resolve({ isSuccessful: !error, error: error, proc: proc });
        });
    });
};
exports.deleteApp = deleteApp;
//# sourceMappingURL=deleteApp.js.map