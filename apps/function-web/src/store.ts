import { createStore } from "react-with-native-store";
import { apiStoreInitialValues } from "api-store";
import { nestedMenuStoreInitialValues } from "nested-menu";
import { writerInitialValues } from "writer-input";
import { tabsStoreInitialValues } from "tabs";

const functionWebInitialValues: {
  executionId: string;
  initialValues: any[] | undefined;
} = { executionId: "__NONE__", initialValues: [] };
const initialValues = {
  ...apiStoreInitialValues,
  ...nestedMenuStoreInitialValues,
  ...writerInitialValues,
  ...tabsStoreInitialValues,
  ...functionWebInitialValues,
};
export const { StoreProvider, useStore } = createStore(initialValues);
