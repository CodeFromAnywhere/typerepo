"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.NestedMenuItem=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_1=require("react-with-native"),react_with_native_router_1=require("react-with-native-router"),next_a_link_1=require("next-a-link"),NestedMenuItem=function(e){var t=e.title,n=e.children,i=e.icon,r=e.onClick,s=e.onDoubleClick,a=e.onContextMenu,_=e.rightIcon,l=e.target,c=e.href,u=e.showChildren,o=e.level,x=e.headersClickable,h=(0,react_with_native_router_1.useRouter)().asPath.substring(1)===c,v=o||0,d=n&&n.length>0&&u,g=x||!d,m=g?"".concat(h?"text-blue-500":""," hover:text-blue-800 "):void 0;return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"w-full"},{children:[(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"w-full ".concat(g?"hover:bg-gray-200 ".concat(h?"bg-gray-200 ":""):"")},{children:(0,jsx_runtime_1.jsxs)(next_a_link_1.ALink,__assign({style:{paddingLeft:10*v+5,paddingBottom:10,paddingTop:10},textClassName:"flex flex-1 text-xs",href:g?c:void 0,target:l,onDoubleClick:s,onContextMenu:a,onClick:r},{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Span,__assign({
//line-clamp-1 truncate text-ellipsis
textClassName:m},{children:[i||"",t]})),_?(0,jsx_runtime_1.jsx)(react_with_native_1.Span,{children:_}):null]}))})),d?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"w-full"},{children:n.map((function(e,t){return(0,jsx_runtime_1.jsx)(exports.NestedMenuItem,__assign({},e,{level:v+1}),"menu-".concat(c,"-").concat(t))}))})):null]}))};exports.NestedMenuItem=NestedMenuItem;
//# sourceMappingURL=NestedMenuItem.js.map