"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximumLockTime = void 0;
// NB: needs to be enough time for the 5% step of whisper. Let's say sometimes we have an audiofile of 4 hours (long movie), then we can expect it will take ±40 minutes, or 2 minutes for 5%.
// with a margin of 2.5x, let's do 5 minutes.
exports.maximumLockTime = 60 * 1000 * 5;
//# sourceMappingURL=variables.js.map