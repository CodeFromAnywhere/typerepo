import { createStore } from "react-with-native-store";
import { apiStoreInitialValues } from "api-store";
import { nestedMenuStoreInitialValues } from "nested-menu";
import { writerInitialValues } from "writer-input";
export const { StoreProvider, useStore } = createStore({
  ...apiStoreInitialValues,
  ...nestedMenuStoreInitialValues,
  ...writerInitialValues,
});
