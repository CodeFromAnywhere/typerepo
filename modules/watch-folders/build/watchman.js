"use strict";
/**
 *
 * not using this anymore!
 */var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(t){o(t)}}function c(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.watchFolders=exports.initiateWatch=exports.makeSubscription=void 0;var fb_watchman_1=__importDefault(require("fb-watchman")),fs_util_1=require("fs-util"),uniqueAppKey="watch-folders",getSubInfo=function(t){var e=t.split(":"),n=e[0],r=e[1],i=e[2];if(n===uniqueAppKey){if(r)return{fullPath:i?fs_util_1.path.join(r,i):r,relativePath:i,rootPath:r};console.log("No rootpath found",t)}},getSubName=function(t,e){return"".concat(uniqueAppKey,":").concat(t).concat(e?":".concat(e):"")};
// `watch` is obtained from `resp.watch` in the `watch-project` response.
// `relative_path` is obtained from `resp.relative_path` in the
// `watch-project` response.
function makeSubscription(t,e,n,r){
/**
     * this can probably be optimised
     */
var i={
// Match any `.js` file in the dir_of_interest
expression:["allof",["match","*.*"]],
// Which fields we're interested in
fields:["name","size","mtime_ms","exists","type"],relative_root:void 0};n&&(i.relative_root=n);var o=getSubName(e,n);return t.command(["subscribe",e,o,i],(function(t,e){t?
// Probably an error in the subscription criteria
console.error("Failed to subscribe: ",t):r&&console.log("New subscription:","subscription "+e.subscribe+" established")})),o}exports.makeSubscription=makeSubscription;var initiateWatch=function(t){var e=t.client,n=t.debug,r=t.folderPath;e.command(["watch-project",r],(function(t,r){t?console.error("Error initiating watch:",t):(
// It is considered to be best practice to show any 'warning' or
// 'error' information to the user, as it may suggest steps
// for remediation
"warning"in r&&console.log("Warning initiating watch: ",r.warning),
// `watch-project` can consolidate the watch for your
// dir_of_interest with another watch at a higher level in the
// tree, so it is very important to record the `relative_path`
// returned in resp
n&&console.log("New watch:","watch established on ",r.relative_path?fs_util_1.path.join(r.watch,r.relative_path):r.watch),makeSubscription(e,r.watch,r.relative_path,n))}))};exports.initiateWatch=initiateWatch;
/**
 * checks if watchman client is ok. ends client if it's not ok
 */
var isClientOk=function(t,e){return new Promise((function(n,r){t.capabilityCheck({optional:[],required:["relative_root"]},(function(i,o){if(i)
// error will be an Error object if the watchman service is not
// installed, or if any of the names listed in the `required`
// array are not supported by the server
return console.error(i),t.end(),r();e&&console.log("Watchman is ok",o),n()}))}))},watchFolders=function(t){var e=t.debug,n=void 0!==e&&e,r=t.folders,i=t.onChange;return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return t=new fb_watchman_1.default.Client,[4/*yield*/,isClientOk(t,n)];case 1:return e.sent(),
// Initiate watching each folder
r.forEach((function(e){return(0,exports.initiateWatch)({client:t,debug:n,folderPath:e})})),
// whenever there has been a change detected, this function will be called. Beware, can also be from other watch sources!
t.on("subscription",(function(t){var e=t.subscription,n=t.files,o=(t.root,getSubInfo(e));if(o){var a=o.fullPath,c=o.relativePath,u=o.rootPath;r.includes(a)&&i({fullPath:a,relativePath:c,rootPath:u,files:n})}})),[2/*return*/]}}))}))};
/**
 * watches folder paths and executes a callback when something changes in one of them
 *
 * TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?
 */exports.watchFolders=watchFolders;
//# sourceMappingURL=watchman.js.map