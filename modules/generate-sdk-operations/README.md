# Generate sdk operations

generate-sdk-operations (`OperationClassification` node-cjs)

This operation contains different functions to generate all possible sdk operations according to the King OS convention.

Ensure to apply all King OS conventions when generating these operations, because otherwise they may contain typescript errors and this may result in runtime errors.




# Docs

<details><summary>README.md</summary>
    
  The functions in this package helps you to automate the dull task of generating your SDK files and operation. Every time you create a function or interface (or something else), you can update the SDK's by running `generateSdkOperations`. It's in the bin, just run `npx generateSdkOperations`

  </details>

# Api reference

## generateSdkOperations()

(re)generates all sdk operations for any project


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig (optional) | `BundleConfig` | if not provided, will not generate env-sdks |,| config (optional) | { yarnInstallBefore?: boolean, <br />yarnInstallAfter?: boolean, <br />manualProjectRoot?: string, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 generateSdkOperations (exported const)

(re)generates all sdk operations for any project

# CLI

<details><summary>Show CLI information (12)</summary>
    
  # generateDbSdkCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateEnvSdksCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateFunctionSdksCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateInterfacePathsSdkCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateOperationsSdkCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateSdkOperationsCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 generateDbSdkCli (unexported const)

## 📄 generateEnvSdksCli (unexported const)

## 📄 generateFunctionSdksCli (unexported const)

## 📄 generateInterfacePathsSdkCli (unexported const)

## 📄 generateOperationsSdkCli (unexported const)

## 📄 generateSdkOperationsCli (unexported const)

  </details>

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (29)</summary>
    
  # generateDbSdk()




| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## generateEnvSdks()

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## generateFunctionPathsSdk()

| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## generateFunctionSdks()

Creates

- sdk-api + sdk-api-keys (for all exposed functions)
- sdk-js (functions that can be executed anywhere)
- sdk-ui (functions that use JSX)

Overwrites them if they already exist with minimal interruption time of the system


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## generateInterfacePathsSdk()

`sdk-function-paths` indexes all operations and builds an object containing all operations.


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



## getSdkFunctionsPerClassification()

returns all sdk functions grouped by operation classification


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## newEnvSdk()

## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

conifg:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig


| Input      |    |    |
| ---------- | -- | -- |
| bundleConfig | `BundleConfig` | NB: if this is not a bundle, a more general purpose bundle config should be used |,| type | public / private |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## newFunctionKeysSdkOperation()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| keyVariables | { variableName: string, <br />values: string[], <br /> }[] |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## newFunctionSdkOperation()

Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| tsFunctions | `TsFunction`[] |  |,| config (optional) | { manualProjectRoot?: string, <br />skipYarnInstall?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## tsFunctionIsIndexable()

The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!


| Input      |    |    |
| ---------- | -- | -- |
| tsFunction | `TsFunction` |  |
| **Output** | {  }   |    |



## tsFunctionIsSdkable()

| Input      |    |    |
| ---------- | -- | -- |
| tsFunction | `TsFunction` |  |,| operationClassificationObject | `OperationClassificationObject` |  |,| operationClassification | `OperationClassification` |  |
| **Output** | {  }   |    |



## updateClassifications()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔹 FunctionsPerClassification

relative





Properties: 

 | Name | Type | Description |
|---|---|---|
| cjs  | array |  |
| ts  | array |  |
| esm  | array |  |
| node-cjs  | array |  |
| node-esm  | array |  |
| node-ts  | array |  |
| server-cjs  | array |  |
| ui-web  | array |  |
| ui-app  | array |  |
| ui-ts  | array |  |
| ui-cjs  | array |  |
| ui-esm  | array |  |



## 📄 generateDbSdk (exported const)

## 📄 generateEnvSdks (exported const)

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations


## 📄 generateFunctionPathsSdk (exported const)

## 📄 generateFunctionSdks (exported const)

Creates

- sdk-api + sdk-api-keys (for all exposed functions)
- sdk-js (functions that can be executed anywhere)
- sdk-ui (functions that use JSX)

Overwrites them if they already exist with minimal interruption time of the system


## 📄 generateInterfacePathsSdk (exported const)

`sdk-function-paths` indexes all operations and builds an object containing all operations.


## 📄 generateOperationsSdk (exported const)

`sdk-operations` indexes all operations and builds an object containing all operations.


## 📄 getSdkDescription (exported const)

Gets a description of any sdk operation from the assets


## 📄 getSdkFunctionsPerClassification (exported const)

returns all sdk functions grouped by operation classification


## 📄 newEnvSdk (exported const)

## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

conifg:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig


## 📄 newFunctionKeysSdkOperation (exported const)

## 📄 newFunctionSdkOperation (exported const)

Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised


## 📄 tsFunctionIsIndexable (exported const)

The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!


## 📄 tsFunctionIsSdkable (exported const)

## 📄 updateClassifications (exported const)

  </details>

