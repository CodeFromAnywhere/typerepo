"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.augmentDevice=void 0;var augmentDevice=function(e){var t=e.lastOnlineAt>Date.now()-3e5,n=e.ip.startsWith("192.168.");return __assign(__assign({},e),{isOnlineCalculated:t,isLocalIpCalculated:n})};exports.augmentDevice=augmentDevice;
//# sourceMappingURL=augmentDevice.js.map