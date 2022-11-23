import { createStore } from "react-with-native-store";
import { apiStoreInitialValues } from "api-store";
import { nestedMenuStoreInitialValues } from "nested-menu";
import { writerInitialValues } from "writer-input";
import { fileTabsInitialValues } from "file-tabs";
import { dbCrudInitialValues } from "db-crud";
import { TodoPagesConfig } from "todo-types";

const initialValues: { todoPagesConfig: TodoPagesConfig } = {
  todoPagesConfig: {},
};

export const { StoreProvider, useStore } = createStore({
  ...apiStoreInitialValues,
  ...nestedMenuStoreInitialValues,
  ...writerInitialValues,
  ...fileTabsInitialValues,
  ...dbCrudInitialValues,
  ...initialValues,
});
