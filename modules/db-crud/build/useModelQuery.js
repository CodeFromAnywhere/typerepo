"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useModelQuery=void 0;var js_util_1=require("js-util"),react_with_native_router_1=require("react-with-native-router"),useModelQuery=function(){var e=(0,react_with_native_router_1.useRouter)();return(e.query.paths?(0,js_util_1.makeArray)(e.query.paths):[]).pop()};exports.useModelQuery=useModelQuery;
//# sourceMappingURL=useModelQuery.js.map