"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function s(e){try{l(n.next(e))}catch(e){a(e)}}function o(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,o)}l((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.DatasetForm=void 0;var jsx_runtime_1=require("react/jsx-runtime"),api_1=require("api"),clickable_icon_1=require("clickable-icon"),cool_toast_1=require("cool-toast"),js_util_1=require("js-util"),react_1=require("react"),react_with_native_1=require("react-with-native"),react_with_native_select_1=require("react-with-native-select"),schema_util_1=require("schema-util"),store_1=require("../store"),sortToItem_1=require("./sortToItem"),DatasetForm=function(e){var t,r,n,i=e.modelName,a=(0,react_1.useState)(""),s=a[0],o=a[1],l=(0,store_1.useStore)("db-crud.datasetConfig"),c=l[0],u=l[1],_=api_1.queries.useGetDbModelMetadata(i),d=(0,js_util_1.destructureOptionalObject)(null===(t=_.data)||void 0===t?void 0:t.result),m=(d.datasets,d.tsInterface),h=(0,schema_util_1.getProperties)(null===(r=null==m?void 0:m.type)||void 0===r?void 0:r.typeDefinition).map((function(e){return[{objectParameterKey:e.name,sortDirection:"ascending"},{objectParameterKey:e.name,sortDirection:"descending"}]})).flat(),v=(0,react_with_native_select_1.useSelectMultiple)(h.map(sortToItem_1.sortToItem),(null===(n=null==c?void 0:c.sort)||void 0===n?void 0:n.map(sortToItem_1.sortToItem))||[],(function(e){return u(__assign(__assign({},c),{sort:e.map((function(e){return e.data})).filter(js_util_1.notEmpty)}))}),{className:"bg-transparent w-20"})[0];return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"border rounded-md border-gray-700"},{children:[(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"text-3xl"},{children:"Dataset Configuration"})),(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"Sort"}),(0,jsx_runtime_1.jsx)(v,{}),(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"Name:"}),(0,jsx_runtime_1.jsx)(react_with_native_1.Input,{className:"bg-transparent text-md py-0 my-0",value:s,onChange:function(e){return o(e.target.value)},placeholder:"new dataset name"}),(0,jsx_runtime_1.jsx)(react_with_native_1.P,__assign({className:"text-3xl"},{children:"Coming soon"})),(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"key (select) operator (select) value (input) (always an empty one below)"}),(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"start/max (number, number)"}),(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"Price"}),(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"DefaultView"}),(0,jsx_runtime_1.jsx)(react_with_native_1.P,{children:"allowedModelViews (selectMultiple)"}),(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{emoji:"➕ New dataset",onClick:function(){return __awaiter(void 0,void 0,void 0,(function(){var e,t,r,n,a;return __generator(this,(function(o){switch(o.label){case 0:return i?0===s.length?[2/*return*/]:(e=__assign(__assign({},c),{modelName:i,name:s}),[4/*yield*/,api_1.api.upsertDbModel("Dataset",
//@ts-ignore
e,!0)]):[2/*return*/];case 1:return t=o.sent(),r=t.isSuccessful,n=t.result,a=t.message,_.refetch(),(0,cool_toast_1.successToast)(r&&(null==n?void 0:n.isSuccesful)?"Succesfully added":(null==n?void 0:n.message)||a||"Error"),[2/*return*/]}}))}))},disabled:0===s.length}),(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{emoji:"🧹 Clear dataset",onClick:function(){return u(null)}}),(null==c?void 0:c.id)?(0,jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon,{emoji:"🗑 Remove dataset",onClick:function(){return __awaiter(void 0,void 0,void 0,(function(){var e,t,r,n;return __generator(this,(function(i){switch(i.label){case 0:return(null==c?void 0:c.id)?[4/*yield*/,api_1.api.deleteDbModel("Dataset",c.id)]:[2/*return*/];case 1:return e=i.sent(),t=e.isSuccessful,r=e.result,n=e.message,
// refetch datasets
_.refetch(),u(null),(0,cool_toast_1.successToast)(t&&(null==r?void 0:r.isSuccesful)?"Succesfully removed":(null==r?void 0:r.message)||n||"Error"),[2/*return*/]}}))}))}}):null]}))};exports.DatasetForm=DatasetForm;
//# sourceMappingURL=DatasetForm.js.map