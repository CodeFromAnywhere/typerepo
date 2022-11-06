#!/usr/bin/env node
"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function c(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.gitCommitAllCron=exports.exitIfOperationsChange=void 0;var get_all_operation_source_paths_1=require("get-all-operation-source-paths"),log_1=require("log"),child_process_1=require("child_process"),exitIfOperationsChange=function(e,t){setInterval((function(){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,(0,get_all_operation_source_paths_1.getAllOperationSourcePaths)({manualProjectRoot:t})];case 1:return r=n.sent(),
//TODO: if you change a folder name, it's not detected now.
e.reduce((function(e,t,n){return r[n]===t&&e}),!0)||((0,log_1.log)("👀 I detected a change in your operations, restarting",{type:"warning"}),process.exit()),[2/*return*/]}}))}))}),5e3)};exports.exitIfOperationsChange=exitIfOperationsChange;
/*

const pushPosition = async () => {
  const position = await getLocation();
  if (position) {
    push("Position", {
      ...position,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      createdFirstAt: Date.now(),
      deletedAt: 0,
      id: generateId(),
    });
  }
};

const pushLight = async () => {
  const light = 1;
  if (light) {
    push("Light", {
      id: generateId(),
      createdFirstAt: Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deletedAt: 0,
      light,
    });
  }
};

const watchLocation = async () => {
  pushPosition();
  setInterval(() => {
    pushPosition();
  }, 60000);
};

const watchLight = async () => {
  pushLight();
  setInterval(() => {
    pushLight();
  }, 60000);
};*/
var gitCommitAllCron=function(e){setInterval((function(){try{
// NB: This doesn't work well with nested .git folders!
(0,child_process_1.execSync)("[[ `git status --porcelain .` ]] && git add . && git commit -m 'Automatic commit'",{cwd:e,stdio:"inherit"})}catch(e){}}),36e5)};exports.gitCommitAllCron=gitCommitAllCron;
//# sourceMappingURL=general.js.map