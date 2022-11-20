"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sortDevices=void 0;
/**
 * Only works if isOnlineCalculated is set (using augmentDevice)
 *
 * Sorts device: first favorite, then online, then offline
 */
var sortDevices=function(e,s){return e.isFavorite?-1:s.isFavorite?1:e.isOnlineCalculated?-1:(s.isOnlineCalculated,1)};exports.sortDevices=sortDevices;
//# sourceMappingURL=sortDevice.js.map