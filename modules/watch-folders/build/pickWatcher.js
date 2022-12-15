"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickWatcher = void 0;
var os_1 = __importDefault(require("os"));
var chokidar_1 = require("./chokidar");
var fswatch_1 = require("./fswatch");
// based on your os, pick either chokidar or fswatch
var pickWatcher = function () {
    if (os_1.default.platform() === "linux")
        return chokidar_1.watchFoldersChokidar;
    return fswatch_1.watchFoldersFs;
};
exports.pickWatcher = pickWatcher;
//# sourceMappingURL=pickWatcher.js.map