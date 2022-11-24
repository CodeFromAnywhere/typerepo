"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNonUiOperationBuild=void 0;var fs_util_js_1=require("fs-util-js"),get_path_1=require("get-path"),isNonUiOperationBuild=function(i,e){
// for indexation we don't care about any other event than adding or changing a file
if(!["add","change"].includes(i))return!1;
// in order to index a file, it must be in an operation, which means it must be in src
if(!e.includes("/build/"))return!1;
// only ts and tsx files matter, the rest doesn't need to be indexed
if(!["js"].includes((0,fs_util_js_1.getExtension)(e)))return!1;
// only for operations
var t=(0,get_path_1.findOperationBasePath)(e);if(!t)return!1;
// we don't care about ui operations
var r=(0,get_path_1.getOperationClassification)(t);return!(!r||r.startsWith("ui-"))};exports.isNonUiOperationBuild=isNonUiOperationBuild;
//# sourceMappingURL=isNonUiOperationBuild.js.map