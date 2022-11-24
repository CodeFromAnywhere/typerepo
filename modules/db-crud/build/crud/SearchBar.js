"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchBar=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),react_1=require("react"),store_1=require("../store"),SearchBar=function(e){var r=e.initialValue,t=e.placeholder,n=(0,react_1.useState)(r||""),a=n[0],i=n[1],s=(0,store_1.useStore)("db-crud.search"),c=s[0],_=s[1],o=function(){_(a)};return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"rounded-full border border-zinc-700 dark:border-zinc-300 p-1 px-3 text-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 bg-zinc-100 dark:bg-zinc-600 dark flex flex-row max-w-xl mx-4"},{children:[c.length>0?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"cursor-pointer pr-2",onClick:function(){_(""),i("")}},{children:"🗑"})):null,(0,jsx_runtime_1.jsx)(react_with_native_1.Form,__assign({onSubmit:function(e){e.preventDefault(),o()}},{children:(0,jsx_runtime_1.jsx)(react_with_native_1.Input,{placeholder:t||"Search",className:"flex flex-1 bg-transparent focus:outline-none",value:a,onChange:function(e){return i(e.target.value)}})})),(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:0===a.length?"cursor-default":"cursor-pointer",onClick:o},{children:"🔎"}))]}))};exports.SearchBar=SearchBar;
//# sourceMappingURL=SearchBar.js.map