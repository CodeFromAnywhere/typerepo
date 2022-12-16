"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.useStore=exports.StoreProvider=exports.apiStoreInitialValues=void 0;var react_with_native_store_1=require("react-with-native-store");exports.apiStoreInitialValues={"api.authToken":"","api.customUrl":null,"api.timeoutAt":null},
/**
 * This is only needed if api storage is ALL you need.
 */
exports.StoreProvider=(_a=(0,react_with_native_store_1.createStore)(exports.apiStoreInitialValues)).StoreProvider,exports.useStore=_a.useStore;
//# sourceMappingURL=store.js.map