"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Select=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_native_1=require("react-native"),react_with_native_1=require("react-with-native"),util_1=require("./util"),Select=function(e){var t=e.options,i=e.onChange,n=e.value,r=e.title,a=e.className,s=e.children,_=e.selectFirstOption,l=e.ios,c=(0,util_1.getRealValue)({value:n,selectFirstOption:_,options:t,title:r}),o=function(){react_native_1.ActionSheetIOS.showActionSheetWithOptions(__assign({options:t.map((function(e){return e.label}))},l),(function(e){var n=t[e];
// selected.onClick?.();
null==i||i(n)}))},u=(null==n?void 0:n.label)||r||"Select a value";return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:a},{children:s?s({onClick:o,className:a,value:c}):(0,jsx_runtime_1.jsx)(react_with_native_1.Button,__assign({onClick:o},{children:(0,jsx_runtime_1.jsx)(react_with_native_1.Text,{children:u})}))}))};exports.Select=Select;
//# sourceMappingURL=Select.ios.js.map