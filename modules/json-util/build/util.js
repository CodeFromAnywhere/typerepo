"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSimpleJsonString=void 0;
/**
 * stringifies simple json things if the json is one of them, otherwise returns undefined
 */
var getSimpleJsonString=function(e){if(["string","number","bigint","boolean","symbol","undefined"].includes(typeof e)||null===e)return String(e)};exports.getSimpleJsonString=getSimpleJsonString;
//# sourceMappingURL=util.js.map