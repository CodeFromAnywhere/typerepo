"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthenticationLayout=void 0;var jsx_runtime_1=require("react/jsx-runtime"),authentication_1=require("authentication"),api_1=require("api"),react_with_native_1=require("react-with-native"),react_with_native_router_1=require("react-with-native-router"),Header_1=require("./Header"),LayoutGrid_1=require("./LayoutGrid"),AuthenticationLayout=function(e){var t,i=null===(t=api_1.queries.useGetPublicBundleConfig().data)||void 0===t?void 0:t.result,r=e.nextPage,n=e.pageProps,a=e.menu,u=e.customHeader,_=(0,react_with_native_router_1.useRouter)().asPath.substring(1),o={login:authentication_1.LoginForm,signup:authentication_1.SignupForm,"edit-profile":authentication_1.UpdateMeForm,profile:function(){return(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:'"should show person\'s profile"'})}},s=r,c=o[_],h=o[_]?(0,jsx_runtime_1.jsx)(c,{}):(0,jsx_runtime_1.jsx)(s,__assign({},n)),d=(0,jsx_runtime_1.jsx)(react_with_native_1.Div,{children:void 0!==u?u:(0,jsx_runtime_1.jsx)(Header_1.Header,{publicBundleConfig:i})});return(0,jsx_runtime_1.jsx)(authentication_1.LoginWrapper,{children:(0,jsx_runtime_1.jsx)(LayoutGrid_1.LayoutGrid,__assign({header:d,menu:a},{children:h}))})};exports.AuthenticationLayout=AuthenticationLayout;
//# sourceMappingURL=AuthenticationLayout.js.map