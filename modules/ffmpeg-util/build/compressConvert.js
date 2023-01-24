"use strict";var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function l(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}u((o=o.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.compressConvert=void 0;var fluent_ffmpeg_1=__importDefault(require("fluent-ffmpeg")),fs_util_1=require("fs-util"),js_util_1=require("js-util"),lock_util_1=require("lock-util"),compressConvert=function(t,e){return __awaiter(void 0,void 0,void 0,(function(){var n,o,r,i,a,l,u,c,s;return __generator(this,(function(f){switch(f.label){case 0:return(0,lock_util_1.isLocked)(t)?[2/*return*/]:fs_util_1.fs.existsSync(t)?(n=(0,fluent_ffmpeg_1.default)({source:t}),(null==e?void 0:e.quality)&&(n=n.addOption("-quality ".concat((null==e?void 0:e.quality)||100))),(null==e?void 0:e.fps)&&"mp4"===e.targetFormat&&(
// set output fps
n=n.withOutputFps(e.fps)),"wav"===(null==e?void 0:e.targetFormat)&&(null==e?void 0:e.is16bitWav)&&(n=n.outputOptions(["-ar 16000","-ac 1","-codec:a pcm_s16le"])),(null==e?void 0:e.sizeWidthPx)&&(n=n.size("".concat(null==e?void 0:e.sizeWidthPx,"x?"))),(null==e?void 0:e.aspectRatio)&&(n=n.aspect("".concat(null==e?void 0:e.aspectRatio.x,":").concat(e.aspectRatio.y))),(null==e?void 0:e.targetFormat)&&(n=n.toFormat(null==e?void 0:e.targetFormat)),o=fs_util_1.path.parse(t),r=(null==e?void 0:e.name)||o.name,i=(null==e?void 0:e.outputFolderPath)||o.dir,a=(null==e?void 0:e.targetFormat)?".".concat(null==e?void 0:e.targetFormat):o.ext,l=fs_util_1.path.join(i,"".concat(r,".converted").concat(a)),u=(0,js_util_1.replaceLastOccurence)(l,".converted",""),
// if (fs.existsSync(finalDestinationPath)) {
//   console.log(
//     `Shouldn't happen, but compressConvert was called for a file for which the finalDestinationPath already seems to exist`
//   );
//   return;
// }
n=n.save(l),c=1,s=0,[4/*yield*/,new Promise((function(o){n.on("codecData",(function(t){
// HERE YOU GET THE TOTAL TIME
c=parseInt(t.duration.replace(/:/g,"")),console.log("Converting Started...")})).on("progress",(function(n){
// HERE IS THE CURRENT TIME
var o=parseInt(n.timemark.replace(/:/g,"")),i=Math.floor(o/c*100);
// AND HERE IS THE CALCULATION
(0,lock_util_1.lock)(t,"".concat(i,"%")),(null==e?void 0:e.isDebug)?console.log("".concat(i,"%")):i%2==1&&i!==s&&(null==e?void 0:e.isStatusLogged)&&(s=i,console.log("".concat(r," status: ").concat(i,"%")))})).on("end",(function(){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return(null==e?void 0:e.keepOriginal)?[3/*break*/,2]:[4/*yield*/,fs_util_1.fs.rm(t)];
// new file is created, old one is not overwritten, and we need to remove the old
// NB: don't wait for it!
case 1:
// new file is created, old one is not overwritten, and we need to remove the old
// NB: don't wait for it!
n.sent(),n.label=2;case 2:return(0,lock_util_1.unlock)(t),fs_util_1.fs.existsSync(u)?[4/*yield*/,fs_util_1.fs.rm(l)]:[3/*break*/,4];
// already exists for some reason...
case 3:
// already exists for some reason...
return n.sent(),o(l),[2/*return*/];case 4:return fs_util_1.fs.existsSync(l)?[4/*yield*/,fs_util_1.fs.rename(l,u)]:(
//doens't existalthough we just converted it, multiple processes doing the same, probably
o(void 0),[2/*return*/]);case 5:return n.sent(),o(u),[2/*return*/]}}))}))})).on("error",(function(t){console.log({e:t}),o(void 0)}))}))]):(console.log("Path doesn't exist",t),[2/*return*/]);case 1:return[2/*return*/,f.sent()]}}))}))};exports.compressConvert=compressConvert;
//# sourceMappingURL=compressConvert.js.map