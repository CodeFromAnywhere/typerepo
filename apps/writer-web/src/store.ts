import { createStore } from "react-with-native-store";
import { apiStoreInitialValues } from "api-store";
import { nestedMenuStoreInitialValues } from "nested-menu";
import { writerInitialValues } from "writer-input";
import { fileTabsInitialValues } from "file-tabs";
export const { StoreProvider, useStore } = createStore({
  ...apiStoreInitialValues,
  ...nestedMenuStoreInitialValues,
  ...writerInitialValues,
  ...fileTabsInitialValues,
});
