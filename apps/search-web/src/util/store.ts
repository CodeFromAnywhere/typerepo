import { createStore } from "react-with-native-store";
import { apiStoreInitialValues } from "api-store";
import { nestedMenuStoreInitialValues } from "nested-menu";
import { writerInitialValues } from "writer-input";
import { fileTabsInitialValues } from "file-tabs";

const initialValues = {
  ...apiStoreInitialValues,
  ...nestedMenuStoreInitialValues,
  ...writerInitialValues,
  ...fileTabsInitialValues,
};
export const { StoreProvider, useStore } = createStore(initialValues);
