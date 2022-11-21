"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.StoreProvider = void 0;
var react_with_native_store_1 = require("react-with-native-store");
var api_store_1 = require("api-store");
exports.StoreProvider = (_a = (0, react_with_native_store_1.createStore)(api_store_1.apiStoreInitialValues), _a.StoreProvider), exports.useStore = _a.useStore;
//# sourceMappingURL=store.js.map