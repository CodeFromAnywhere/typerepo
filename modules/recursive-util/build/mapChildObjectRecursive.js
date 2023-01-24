"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var i,r=1,s=arguments.length;r<s;r++)for(var t in i=arguments[r])Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapChildObjectRecursive=void 0;
/**
 * maps a ChildObject and all it's children, recursively
 */
var mapChildObjectRecursive=function(e,i){var r,s=i(e);return __assign(__assign({},s),{children:null===(r=e.children)||void 0===r?void 0:r.map((function(e){return(0,exports.mapChildObjectRecursive)(e,i)}))})};exports.mapChildObjectRecursive=mapChildObjectRecursive;
//# sourceMappingURL=mapChildObjectRecursive.js.map