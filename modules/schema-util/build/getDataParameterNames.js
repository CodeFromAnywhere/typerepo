"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDataParameterNames=void 0;var js_util_1=require("js-util"),getReferenceParameterInfo_1=require("./getReferenceParameterInfo"),getDataParameterNames=function(e){return Object.keys(e).map((function(e){return(0,getReferenceParameterInfo_1.getReferenceParameterInfo)(e).dataParameterName})).filter(js_util_1.notEmpty)};exports.getDataParameterNames=getDataParameterNames;
//# sourceMappingURL=getDataParameterNames.js.map