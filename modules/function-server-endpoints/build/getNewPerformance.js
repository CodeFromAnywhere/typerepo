"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupTimer = exports.getNewPerformance = void 0;
var timer = {};
var getNewPerformance = function (label, uniqueId, isNew) {
    var timePrevious = timer[uniqueId];
    var timeNow = Date.now();
    timer[uniqueId] = timeNow;
    if (isNew)
        return;
    var durationMs = timePrevious - timeNow;
    return { label: label, durationMs: durationMs };
};
exports.getNewPerformance = getNewPerformance;
var cleanupTimer = function (uniqueId) {
    delete timer[uniqueId];
};
exports.cleanupTimer = cleanupTimer;
//# sourceMappingURL=getNewPerformance.js.map