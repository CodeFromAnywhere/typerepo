"use strict";var __rest=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r};Object.defineProperty(exports,"__esModule",{value:!0});var fs_util_1=require("fs-util"),alter_functions_1=require("../alter/alter-functions"),removeKeyValueMarkdown_1=require("../alter/removeKeyValueMarkdown"),test=function(){var e=fs_util_1.path.join(__dirname,"../..","assets","test.md"),t={absolutePath:e,modelName:"Test",operationName:"fs-orm",projectRelativePath:e,operationRelativePath:e};(0,alter_functions_1.alterKeyValueMarkdown)(t,(function(e){var t=e,r=(0,removeKeyValueMarkdown_1.removeKeyValueMarkdown)(t,"toremove"),o=(r.newStoredData,__rest(r,["newStoredData"]));return console.log({rest:o}),r}))};test();
//# sourceMappingURL=removeKeyValueMarkdown.test.js.map