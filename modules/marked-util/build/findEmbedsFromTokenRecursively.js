"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findEmbedsFromTokenRecursively=void 0;var asset_functions_js_1=require("asset-functions-js"),findEmbedsFromTokenRecursively=function(e){return"image"===e.type?[{src:e.href,alt:e.title,type:(0,asset_functions_js_1.getTypeFromUrlOrPath)(e.href)}]:"paragraph"===e.type?e.tokens.map(exports.findEmbedsFromTokenRecursively).flat():[]};exports.findEmbedsFromTokenRecursively=findEmbedsFromTokenRecursively;
//# sourceMappingURL=findEmbedsFromTokenRecursively.js.map