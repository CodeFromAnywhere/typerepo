import { createStoreProvider, createUseStore } from "react-with-native-store";

type StoreType = {
  "api.authToken": string;
};

export const initialValues: StoreType = {
  "api.authToken": "",
};

export const StoreProvider = createStoreProvider({
  initialValues,
});

export const useStore = createUseStore(initialValues);
export default useStore;
