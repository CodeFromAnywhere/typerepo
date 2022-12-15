"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.StoreProvider = void 0;
var nested_menu_1 = require("nested-menu");
var react_with_native_store_1 = require("react-with-native-store");
exports.StoreProvider = (_a = (0, react_with_native_store_1.createStore)(nested_menu_1.nestedMenuStoreInitialValues), _a.StoreProvider), exports.useStore = _a.useStore;
//# sourceMappingURL=store.js.map