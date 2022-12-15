"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.StoreProvider = exports.tabsStoreInitialValues = void 0;
var react_with_native_store_1 = require("react-with-native-store");
exports.tabsStoreInitialValues = {
    "tabs.currentTab": 0,
};
exports.StoreProvider = (_a = (0, react_with_native_store_1.createStore)(exports.tabsStoreInitialValues), _a.StoreProvider), exports.useStore = _a.useStore;
//# sourceMappingURL=store.js.map