"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Menu=exports.getLegacyMenu=void 0;var jsx_runtime_1=require("react/jsx-runtime"),fancy_loader_1=require("fancy-loader"),nested_menu_1=require("nested-menu"),react_1=require("react"),react_with_native_1=require("react-with-native"),file_search_1=require("file-search"),clickable_icon_1=require("clickable-icon"),store_1=require("./store"),hotkeys_1=require("hotkeys"),getLegacyMenu=function(e){var t=e?(0,nested_menu_1.queryPathsArrayToNestedPathObject)(e):void 0,r=t?(0,nested_menu_1.nestedPathObjectToNestedMenuRecursive)(t,[],{getHref:function(e){return e}}):void 0;
/**
     * This one too
     */return null==r?void 0:r.map((function(e){return{queryPath:e.title,menuTitleTooltip:"Should be replaced with WebPage model",pageData:void 0}}))};exports.getLegacyMenu=getLegacyMenu;
/**
 * `"wise"` component that lets you render a menu easily, including search

-----

TODO:

- provide menu with NestedWebPage<unknown>[]
 */
var Menu=function(e){var t=e.queryPaths,r=e.isLoading,n=e.message,s=e.augmentedWords,a=e.webPagesNested,i=e.webPagesFlat,u=e.menuHeader,_=!a&&t?(0,exports.getLegacyMenu)(t)||[]:a||[],o=(0,store_1.useStore)("menu.showMenu"),c=o[0],l=o[1];(0,hotkeys_1.useHotkey)(hotkeys_1.isCtrlP,(function(){return l(!0)}),[]),(0,hotkeys_1.useHotkey)(hotkeys_1.isAltB,(function(){return l(!c)}),[c]);var h=(0,store_1.useStore)("menu.isMobileMenuEnabled"),d=(h[0],h[1]),g=(0,react_1.useState)(""),m=g[0],x=g[1],v=m.length>0,j=(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({className:"lg:hidden"},{children:(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{emoji:"╳",onClick:function(){d(!1)}})})}));
/**
     * This is a slow function to calculate for a lot of paths, needs to be optimised
     */return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,{children:[(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row justify-between w-full"},{children:[null==u?void 0:u(),j]})),(0,jsx_runtime_1.jsx)(react_with_native_1.Input,{value:m,placeholder:"Search",onChange:function(e){return x(e.target.value)},className:"border-b px-2 border-black dark:border-white bg-transparent w-full rounded-2xl"}),r?(0,jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader,{}):v&&i?(0,jsx_runtime_1.jsx)(file_search_1.PathSearchResults,{search:m,paths:i.map((function(e){return e.queryPath})),augmentedWords:s}):!v&&_?(0,jsx_runtime_1.jsx)(nested_menu_1.NestedMenu,{items:_,headersClickable:!0}):(0,jsx_runtime_1.jsxs)(react_with_native_1.P,{children:[n||"Menu.tsx: Something's wrong, no message given",") "]})]})};exports.Menu=Menu;
//# sourceMappingURL=Menu.js.map