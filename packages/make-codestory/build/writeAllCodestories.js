"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.writeAllCodestories=void 0;var fs_util_1=require("fs-util"),one_by_one_1=require("one-by-one"),read_json_file_1=require("read-json-file"),findCodestories_1=require("./findCodestories"),makeCodespanMappedObject_1=require("./makeCodespanMappedObject"),makeCodestory_1=require("./makeCodestory"),writeAllCodestories=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,(0,findCodestories_1.findCodestories)()];case 1:return t=o.sent(),[4/*yield*/,(0,makeCodespanMappedObject_1.makeCodespanMappedObject)()];case 2:return o.sent(),[4/*yield*/,(0,read_json_file_1.readJsonFile)(fs_util_1.path.join(__dirname,"..","assets","codespan-mapped-object-small.json"))];case 3:return(r=o.sent())?[4/*yield*/,(0,one_by_one_1.oneByOne)(t,(function(t){return(0,makeCodestory_1.makeCodestory)(t,r,e)}))]:(console.log("Couldn't find mapped obj"),[2/*return*/]);case 4:return n=o.sent(),e&&console.log({codestoryPaths:n}),[2/*return*/]}}))}))};exports.writeAllCodestories=writeAllCodestories;
//# sourceMappingURL=writeAllCodestories.js.map