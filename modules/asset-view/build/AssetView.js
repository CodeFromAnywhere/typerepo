"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,s=1,i=arguments.length;s<i;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AssetView=exports.defaultClassName=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),react_with_native_1=require("react-with-native"),markdown_1=require("markdown"),text_or_binary_1=require("text-or-binary"),asset_functions_js_1=require("asset-functions-js"),server_api_url_1=require("server-api-url");exports.defaultClassName="w-20 aspect-auto";var AssetView=function(e){var t=e.asset,s=(e.className,e.projectRelativeReferencingFilePath),i=e.hideDownloadLink,r=!t.blobPath,a=function(e){return(0,asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl,s,t.relativePath,e)},n=r?t.relativePath?a(!1):void 0:t.blobPath,_=r&&!!t.relativePath?a(!0):// NB: other type is ugly when downloading. Also doesn't make sense much to want to download an asset after uploading
"other"!==t.type?t.blobPath:void 0,o=void 0!==t.sizeBytes?"(".concat((0,asset_functions_js_1.readableSize)(t.sizeBytes),")"):void 0,u=(0,asset_functions_js_1.getExtensionFromAsset)(t),l=r&&t.relativePath?t.relativePath.split("/").pop():u?"untitled.".concat(u):void 0,c=!(!l||!0!==(0,text_or_binary_1.isText)(l)),h=r&&t.relativePath?(0,asset_functions_js_1.getTypeFromRelativePath)(t.relativePath):t.type,v=(0,react_1.useState)(""),d=v[0],x=v[1];return(0,react_1.useEffect)((function(){n&&c&&fetch(n).then((function(e){e.text().then((function(e){return x(e)}))}))}),[n,c]),(0,jsx_runtime_1.jsxs)(react_with_native_1.Span,__assign({style:{position:"relative"}},{children:[_&&!i?(0,jsx_runtime_1.jsx)(react_with_native_1.Div,__assign({style:{padding:"5px"}},{children:(0,jsx_runtime_1.jsxs)(react_with_native_1.A,__assign({target:"_blank",href:_},{children:[" ⬇️ Download"," ",o]}))})):null,"image"===h&&n&&(0,jsx_runtime_1.jsx)("img",{src:n,style:{aspectRatio:"auto",width:150}}),"audio"===h&&n&&(0,jsx_runtime_1.jsx)("audio",{controls:!0,src:n}),"video"===h&&n&&(0,jsx_runtime_1.jsx)("video",{style:{aspectRatio:"auto",width:150},controls:!0,src:n}),"other"===h&&c?(0,jsx_runtime_1.jsx)(markdown_1.MarkdownCodeblock,{text:d,extension:u}):null,null,void 0===n?(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"Asset src not found"}):null]}))};exports.AssetView=AssetView;
//# sourceMappingURL=AssetView.js.map