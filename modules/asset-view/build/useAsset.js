"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useAsset=void 0;var asset_functions_js_1=require("asset-functions-js"),server_api_url_1=require("server-api-url"),useAssetInfo_1=require("./useAssetInfo"),useAsset=function(e,s){var t=!e.blobPath,r=function(t){return(0,asset_functions_js_1.getReferencedAssetApiUrl)(server_api_url_1.apiUrl,s,e.relativePath,t)},o=e.absoluteUrl?e.absoluteUrl:t?e.relativePath?r(!1):void 0:e.blobPath,n=t&&!!e.relativePath?r(!0):// NB: other type is ugly when downloading. Also doesn't make sense much to want to download an asset after uploading
"other"!==e.type?e.blobPath:void 0,u=(0,asset_functions_js_1.getExtensionFromAsset)(e),i=(0,useAssetInfo_1.useAssetInfo)(o,e.originalFilename);
/**
     * NB: `relativePath` is required
     */return{rawText:(null==i?void 0:i.rawText)||null,type:e.type||(null==i?void 0:i.type),downloadUrl:n,src:o,extension:u}};exports.useAsset=useAsset;
//# sourceMappingURL=useAsset.js.map