"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.fileTabsInitialValues = void 0;
var react_with_native_store_1 = require("react-with-native-store");
exports.fileTabsInitialValues = {
    unsavedFiles: {},
    openPages: [],
};
/**
 * NB: this is a `useStore` without a `StoreProvider`, because I think I won't ever need the provider since I won't ever need this as the sole storage in any component/app. If I do, I should make a provider, but it's usually better to create the `useStore` and `StoreProvider` in the component itself because it often comprises more than just this one.
 */
exports.useStore = (0, react_with_native_store_1.createUseStore)(exports.fileTabsInitialValues);
//# sourceMappingURL=store.js.map