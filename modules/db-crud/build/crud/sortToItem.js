"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sortToItem=void 0;var convert_case_1=require("convert-case"),sortToItem=function(e){return{label:"".concat("ascending"===e.sortDirection?"↑":"↓"," ").concat((0,convert_case_1.humanCase)(e.objectParameterKey)),value:"".concat(e.objectParameterKey,",").concat(e.sortDirection),data:e}};exports.sortToItem=sortToItem;
//# sourceMappingURL=sortToItem.js.map