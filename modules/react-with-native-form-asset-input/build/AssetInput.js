"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AssetInput=void 0;var jsx_runtime_1=require("react/jsx-runtime"),asset_input_1=require("asset-input"),AssetTheme_1=require("./AssetTheme"),AssetInput=function(e){var t=e.onChange,s=e.value,n=e.extra,r=e.errors,a=e.config||{},u=r&&r.length>0;"\n  w-full\n  ".concat(AssetTheme_1.InputTheme[null==n?void 0:n.theme]," \n  ").concat(AssetTheme_1.InputSize[null==n?void 0:n.size],"\n    ").concat(u?a.errorClassName?a.errorClassName:" border border-red-400":"");return(0,jsx_runtime_1.jsx)(asset_input_1.AssetInput,{attachTokenToFilename:n.attachTokenToFilename,defaultAssetName:n.defaultAssetName,projectRelativeReferencingFilePath:n.projectRelativeReferencingFilePath,modelName:n.modelName,allowMultiple:n.allowMultiple,inputTypes:n.inputTypes,value:s,onChange:function(e){return t(e)}})};exports.AssetInput=AssetInput,exports.AssetInput.defaultInitialValue=[];
//# sourceMappingURL=AssetInput.js.map