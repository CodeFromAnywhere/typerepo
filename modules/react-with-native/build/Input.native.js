"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Input=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_native_1=require("react-native"),tailwind_rn_1=require("tailwind-rn"),trimClassName_1=require("../../util/trimClassName"),Input=function(e){var t=e.native,r=e.children,n=e.className,s=e.style,i=(__rest(e,["native","children","className","style"]),(0,tailwind_rn_1.useTailwind)()),a=t||{},l=a.style,_=__rest(a,["style"]),o=n?i((0,trimClassName_1.trimClassName)(n)):{};return(0,jsx_runtime_1.jsx)(react_native_1.TextInput,__assign({style:[o,s,l]},_,{children:_.children||r}))};exports.Input=Input;
//# sourceMappingURL=Input.native.js.map