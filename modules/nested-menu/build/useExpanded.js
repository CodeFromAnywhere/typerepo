"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var s,n=1,r=arguments.length;n<r;n++)for(var t in s=arguments[n])Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useExpanded=void 0;var store_1=require("./store"),useExpanded=function(e){void 0===e&&(e="");var s=(0,store_1.useStore)("menu.expanded"),n=s[0],r=s[1],t=s[2].hydrated,a=void 0!==n[e]&&n[e],i=[a,function(){var s;return r(__assign(__assign({},n),((s={})[e]=!a,s)))},function(){var s;return r(__assign(__assign({},n),((s={})[e]=!0,s)))},function(){var s;return r(__assign(__assign({},n),((s={})[e]=!1,s)))},{hydrated:t}];return i};exports.useExpanded=useExpanded;
//# sourceMappingURL=useExpanded.js.map