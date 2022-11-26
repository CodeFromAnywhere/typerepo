"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortDevices = void 0;
/**
 * Only works if isOnlineCalculated is set (using augmentDevice)
 *
 * Sorts device: first favorite, then online, then offline
 */
var sortDevices = function (a, b) {
    if (a.isFavorite)
        return -1;
    if (b.isFavorite)
        return 1;
    if (a.isOnlineCalculated)
        return -1;
    if (b.isOnlineCalculated)
        return 1;
    return 1;
};
exports.sortDevices = sortDevices;
//# sourceMappingURL=sortDevice.js.map