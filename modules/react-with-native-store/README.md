# React with native store

react-with-native-store (`OperationClassification` ui-cjs)



# Api reference

## createStore()

One function is all you need to make a new store!

Example:


```ts

import { createStore } from "react-with-native-store";
import { TypeA, TypeB } from "your-types";

export const writerInitialValues: {
itemA: TypeA;
itemB: TypeB;
} = {
itemA: "",
itemB: {},
};
export const { useStore, StoreProvider } = createStore(writerInitialValues);


```

Simple as pie 🍰


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { StoreProvider: {  }, <br />useStore: {  }, <br /> }   |    |



## 📄 createStore (exported const)

One function is all you need to make a new store!

Example:


```ts

import { createStore } from "react-with-native-store";
import { TypeA, TypeB } from "your-types";

export const writerInitialValues: {
itemA: TypeA;
itemB: TypeB;
} = {
itemA: "",
itemB: {},
};
export const { useStore, StoreProvider } = createStore(writerInitialValues);


```

Simple as pie 🍰


## getItem()

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function


| Input      |    |    |
| ---------- | -- | -- |
| key | string |  |
| **Output** |    |    |



## 📄 getItem (exported const)

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function


## createUseStore()

Function to create a hook for accessing the store


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## setItem()

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function

BEWARE! Updating this won't update your react components!


| Input      |    |    |
| ---------- | -- | -- |
| key | string |  |,| value | {  } |  |
| **Output** |    |    |



## 📄 createUseStore (exported const)

Function to create a hook for accessing the store


## 📄 setItem (exported const)

If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function

BEWARE! Updating this won't update your react components!


## createStoreProvider()

Function to create the StoreProvider

NB: this function uses a local variable on the main scope of javascript in order to create the Context components dynamically. Beware!


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getItemSync()

ONLY web


| Input      |    |    |
| ---------- | -- | -- |
| key | string |  |
| **Output** |    |    |



## 📄 createStoreProvider (exported const)

Function to create the StoreProvider

NB: this function uses a local variable on the main scope of javascript in order to create the Context components dynamically. Beware!


## 📄 getItemSync (exported const)

ONLY web

