"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenuStore = exports.MenuStoreProvider = exports.initialValues = void 0;
var react_with_native_store_1 = require("react-with-native-store");
exports.initialValues = {
    expanded: {},
};
exports.MenuStoreProvider = (0, react_with_native_store_1.createStoreProvider)({
    initialValues: exports.initialValues,
});
exports.useMenuStore = (0, react_with_native_store_1.createUseStore)(exports.initialValues);
//# sourceMappingURL=store.js.map