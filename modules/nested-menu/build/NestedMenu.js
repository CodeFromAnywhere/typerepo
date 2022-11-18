"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.NestedMenu=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),react_with_native_1=require("react-with-native"),js_util_1=require("js-util"),js_util_2=require("js-util"),react_with_native_router_1=require("react-with-native-router"),NestedMenuItem_1=require("./NestedMenuItem"),store_1=require("./store"),NestedMenu=function(e){var t=(0,react_with_native_router_1.useRouter)(),r=(0,store_1.useStore)("menu.expanded"),i=r[0],s=r[1];r[2].hydrated;(0,react_1.useEffect)((function(){var e,r;e=(0,js_util_1.trimSlashes)(t.asPath).split("/").map((function(e,t,r){if(""!==e)return r.slice(0,t+1).join("/")})).filter(js_util_2.notEmpty),r=(0,js_util_2.mergeObjectsArray)(e.map((function(e){var t;return(t={})[e]=!0,t}))),s(__assign(__assign({},i),r))}),[t.asPath]);var n=e.items,_=__rest(e,["items"]),u=null==n?void 0:n.map((function(e,t){return(0,jsx_runtime_1.jsx)(NestedMenuItem_1.NestedMenuItem,__assign({mergeSingleChilds:!0,item:e},_),"menu".concat(t))}));return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"w-full"},{children:u}))};exports.NestedMenu=NestedMenu;
//# sourceMappingURL=NestedMenu.js.map