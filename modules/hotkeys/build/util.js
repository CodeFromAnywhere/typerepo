"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isAltO=exports.isAltW=exports.isAltN=exports.isCtrlP=exports.isCtrlS=exports.isCtrlBacktick=exports.isCtrlSpace=exports.isAltB=void 0;
/**
 * ⎇ B
 */
var isAltB=function(t){var r=t.altKey,e=t.code;return r&&"KeyB"===e};exports.isAltB=isAltB;
/**
 * ^ `
 */
var isCtrlSpace=function(t){var r=t.code;return t.ctrlKey&&"Space"===r};exports.isCtrlSpace=isCtrlSpace;
/**
 * ^ `
 */
var isCtrlBacktick=function(t){var r=t.ctrlKey,e=t.code;return r&&"Backquote"===e};exports.isCtrlBacktick=isCtrlBacktick;
/**
 * ^ S
 */
var isCtrlS=function(t){var r=t.ctrlKey,e=t.code;return r&&"KeyS"===e};exports.isCtrlS=isCtrlS;
/**
 * ^ P
 */
var isCtrlP=function(t){var r=t.ctrlKey,e=t.code;return r&&"KeyP"===e};exports.isCtrlP=isCtrlP;var isAltN=function(t){var r=t.altKey,e=t.code;return r&&"KeyN"===e};exports.isAltN=isAltN;var isAltW=function(t){var r=t.altKey,e=t.code;return r&&"KeyW"===e};exports.isAltW=isAltW;var isAltO=function(t){var r=t.altKey,e=t.code;return r&&"KeyO"===e};exports.isAltO=isAltO;
//# sourceMappingURL=util.js.map