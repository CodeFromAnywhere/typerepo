"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.processAsset=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),convert_case_1=require("convert-case"),getStorageLocationInfo_1=require("./getStorageLocationInfo"),getTemporaryAssetsFolderPath_1=require("./getTemporaryAssetsFolderPath"),log_1=require("log"),processAsset=function(
/**
 * The backendAsset that may need processing
 */
e,
/**
 * Location of the
 * - markdown file (or folder where it is located)
 * - typescript file (or folder where it is located)
 * - database file (or folder where it is located)
 */
t,
/**
 * Extra configuration may somethimes be needed
 */
r){return __awaiter(void 0,void 0,void 0,(function(){var o,n,a,i,s,l,u,c,_,p,f,g;return __generator(this,(function(h){switch(h.label){case 0:return o=e.alt,n=e.name,a=e.relativePath,i=e.temporaryDestination,s=(0,convert_case_1.slugify)(n&&n.length>0?n:"untitled"),a||i?
// NB: If a `temporaryDestination` is given, if it doesn't exist, we return nothing, this is an invalid input.
(l=i?fs_util_1.path.join((0,getTemporaryAssetsFolderPath_1.getTemporaryAssetsFolderPath)(),i):void 0)&&!fs_util_1.fs.existsSync(l)?((0,log_1.log)("absoluteTemporaryDestination does not exist",{type:"warning"}),[2/*return*/,void 0]):
// NB: if a relativePath is provided without a temporaryDestination, it means the file should already be there. If it's not there, we return nothing, invalid input.
!(u=a?fs_util_1.path.join(fs_util_1.path.parse(t).dir,a):void 0)||i||fs_util_1.fs.existsSync(u)?(c=i?i.split(".").pop():null==a?void 0:a.split(".").pop())?(_=(0,getStorageLocationInfo_1.getStorageLocationInfo)(t,r),p=fs_util_1.path.join(_.absoluteAssetBaseFolderPath,"".concat(s,".").concat(c)),f=p,l?(f=(0,fs_util_1.getFirstAvailableFilename)(p),[4/*yield*/,(0,fs_util_1.renameAndCreate)(l,f)]):[3/*break*/,2]):((0,log_1.log)("could not create extension",{type:"warning"}),[2/*return*/,void 0]):((0,log_1.log)("oldAssetStoragePath does not exist (".concat(u,")"),{type:"warning"}),[2/*return*/,void 0]):((0,log_1.log)("no relativePath, no temporaryDestination",{type:"warning"}),[2/*return*/,void 0]);case 1:return h.sent(),[3/*break*/,4];case 2:return u?u===p?[3/*break*/,4]:(f=(0,fs_util_1.getFirstAvailableFilename)(p),[4/*yield*/,(0,fs_util_1.renameAndCreate)(u,f)]):[3/*break*/,4];case 3:
// the name has changed
h.sent(),h.label=4;case 4:
//({ newRelativePath });
return g=(0,get_path_1.getRelativeLinkPath)(t,f),[2/*return*/,{alt:o,relativePath:g}]}}))}))};exports.processAsset=processAsset;
//# sourceMappingURL=processAsset.js.map