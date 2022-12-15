"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.StoreProvider = exports.dbCrudInitialValues = void 0;
var react_with_native_store_1 = require("react-with-native-store");
exports.dbCrudInitialValues = {
    "db-crud.datasetConfig": null,
    "db-crud.search": "",
};
exports.StoreProvider = (_a = (0, react_with_native_store_1.createStore)(exports.dbCrudInitialValues), _a.StoreProvider), exports.useStore = _a.useStore;
//# sourceMappingURL=store.js.map