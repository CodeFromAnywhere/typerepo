"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTsInterfaceForm=void 0;var jsx_runtime_1=require("react/jsx-runtime"),SimplifiedSchemaForm_1=require("./SimplifiedSchemaForm"),react_1=require("react"),useReferencableModelData_1=require("./useReferencableModelData"),useTsInterfaceForm=function(
/**
 * NB: Don't change this! The amount of hooks depends on this
 */
e,r,
/**
 * Only works if set on first render
 */
a,
/**
 * Tell the form where the model will be stored so the form can render assets correctly
 *
 * If not given, it is tried to be taken from tthe initialValue (will only work if it's a db-model instance with a `.projectRelativePath`)
 */
t,
/**
 * must be provided in case of a db model
 */
i,
/**
 * do something with changes
 */
o){var l=(0,react_1.useState)(r||"s".concat(String(Math.random())))[0],n=(0,react_1.useState)([a]),m=n[0],u=n[1],s=m[0],c=e.type.simplifiedSchema;if(!c)return[];var d=(0,useReferencableModelData_1.useReferencableModelData)(c);return[(0,jsx_runtime_1.jsx)(SimplifiedSchemaForm_1.SimplifiedSchemaForm,{modelName:i,id:l,onChange:function(e){u(e),null==o||o(e[0])},values:m,itemNameOrId:(null==s?void 0:s.name)||(null==s?void 0:s.id),parameters:[{name:"",required:!0,simplifiedSchema:c,isDbModel:!0}],projectRelativeStorageFilePath:t||(null==a?void 0:a.projectRelativePath),referencableModelData:d},l),s,function(e){u([e])}]};exports.useTsInterfaceForm=useTsInterfaceForm;
//# sourceMappingURL=useTsInterfaceForm.js.map