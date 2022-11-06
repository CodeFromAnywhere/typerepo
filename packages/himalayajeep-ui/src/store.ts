import { createStore } from "react-with-native-store";

type StoreType = {
  "api.loginToken": string;
};

export const initialValues: StoreType = {
  "api.loginToken": "",
};
export const { useStore, StoreProvider } = createStore(initialValues);
