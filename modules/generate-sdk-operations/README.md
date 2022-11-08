# Generate sdk operations

generate-sdk-operations (node operation)

This operation contains different functions to generate all possible sdk operations according to the King OS convention.

Ensure to apply all King OS conventions when generating these operations, because otherwise they may contain typescript errors and this may result in runtime errors.




## Docs

- [README](#readme)



# Docs

## README

The functions in this package helps you to automate the dull task of generating your SDK files and operation. Every time you create a function or interface (or something else), you can update the SDK's by running `generateSdkOperations`. It's in the bin, just run `npx generateSdkOperations`


# Api reference

## generateSdkOperations()

(re)generates all sdk operations for any project


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 generateSdkOperations (exported const)

(re)generates all sdk operations for any project

# Internal

<details><summary>Show internal (26)</summary>
  
  # generateDbSdk()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateEnvSdks()

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## generateFunctionPathsSdk()

`sdk-function-paths` indexes all operations and builds an object containing all operations.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## generateFunctionSdks()

Creates
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## generateOperationsSdk()

`sdk-operations` indexes all operations and builds an object containing all operations.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## getSdkDescription()

Gets a description of any sdk operation from the assets


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## getSdkFunctions()

returns all sdk functions grouped by operation classification


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## isTsFunctionIndexable()

The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!


| Input      |    |    |
| ---------- | -- | -- |
| tsFunction | `TsFunction` |  |
| **Output** | {  }   |    |



## newEnvSdk()

## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` | NB: if this is not a bundle, a more general purpose bundle config should be used |,| type | public / private |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## newSdkKeysOperation()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| keyVariables | { variableName: string, <br />values: string[], <br /> }[] |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## newSdkOperation()

Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| tsFunctions | `TsFunction`[] |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## tsFunctionIsSdkable()

| Input      |    |    |
| ---------- | -- | -- |
| tsFunction | `TsFunction` |  |,| operationClassificationObject | `OperationClassificationObject` |  |,| operationClassification | `OperationClassification` |  |
| **Output** | {  }   |    |



## 🔹 FunctionsPerClassification

relative





Properties: 

 | Name | Type | Description |
|---|---|---|
| js  | array |  |
| ts  | array |  |
| node  | array |  |
| server  | array |  |
| web  | array |  |
| app  | array |  |
| ui-es6  | array |  |
| ui-es5  | array |  |
| ui-esm  | array |  |



## 🔹 OperationClassificationObject

## 📄 generateDbSdk (exported const)

## 📄 generateEnvSdks (exported const)

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations


## 📄 generateFunctionPathsSdk (exported const)

`sdk-function-paths` indexes all operations and builds an object containing all operations.


## 📄 generateFunctionSdks (exported const)

Creates
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system


## 📄 generateOperationsSdk (exported const)

`sdk-operations` indexes all operations and builds an object containing all operations.


## 📄 getSdkDescription (exported const)

Gets a description of any sdk operation from the assets


## 📄 getSdkFunctions (exported const)

returns all sdk functions grouped by operation classification


## 📄 isTsFunctionIndexable (exported const)

The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!


## 📄 newEnvSdk (exported const)

## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig


## 📄 newSdkKeysOperation (exported const)

## 📄 newSdkOperation (exported const)

Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised


## 📄 tsFunctionIsSdkable (exported const)

  </details>

