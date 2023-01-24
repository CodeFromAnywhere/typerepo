var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
import { createStore } from "react-with-native-store";
import { apiStoreInitialValues } from "api-store";
import { nestedMenuStoreInitialValues } from "nested-menu";
import { writerInitialValues } from "writer-input";
import { fileTabsInitialValues } from "file-tabs";
import { dbCrudInitialValues } from "db-crud";
import { tabsStoreInitialValues } from "tabs";
export var generativeWebInitialValues = {
    "generativeWeb.defaultVariant": null,
    "generativeWeb.isEditing": false,
    "generativeWeb.config": {},
};
export var StoreProvider = (_a = createStore(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, apiStoreInitialValues), nestedMenuStoreInitialValues), writerInitialValues), fileTabsInitialValues), dbCrudInitialValues), generativeWebInitialValues), tabsStoreInitialValues)), _a.StoreProvider), useStore = _a.useStore;
//# sourceMappingURL=store.js.map