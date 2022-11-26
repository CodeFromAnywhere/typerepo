"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addCodestoryToSection=void 0;var marked_util_1=require("marked-util"),js_util_1=require("js-util"),writeCodespanDetails_1=require("./writeCodespanDetails"),addCodestoryToSection=function(e,t,o){if(e){
// For every piece of content find the codespans
var n=(0,marked_util_1.findCodespans)(e),i=n.map((function(e){var o=t[e];if(o)
// Augment every section with one <details> section for every referred piece of code.
return(0,writeCodespanDetails_1.writeCodespanDetails)(o)})).filter(js_util_1.notEmpty);return o&&console.log({codespans:n.length,infos:i.length}),"".concat(e).concat(i.length>0?"\n\n".concat(i.join("\n\n"),"\n"):"")}};exports.addCodestoryToSection=addCodestoryToSection;
//# sourceMappingURL=addCodeStoryToSection.js.map