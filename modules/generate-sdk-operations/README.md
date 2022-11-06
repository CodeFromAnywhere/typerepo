# Generate sdk operations

generate-sdk-operations (node operation)

This operation contains different functions to generate all possible sdk operations according to the King OS convention.

Ensure to apply all King OS conventions when generating these operations, because otherwise they may contain typescript errors and this may result in runtime errors.




# Outline

## Docs

- [README](#readme)

## Functions

- [generateDbSdkCli](#generateDbSdkCli)
- [generateDbSdk](#generateDbSdk)
- [generateEnvSdksCli](#generateEnvSdksCli)
- [generateEnvSdks](#generateEnvSdks)
- [generateFunctionPathsSdk](#generateFunctionPathsSdk)
- [generateFunctionSdksCli](#generateFunctionSdksCli)
- [generateFunctionSdks](#generateFunctionSdks)
- [generateOperationsSdkCli](#generateOperationsSdkCli)
- [generateOperationsSdk](#generateOperationsSdk)
- [generateSdkOperationsCli](#generateSdkOperationsCli)
- [generateSdkOperations](#generateSdkOperations)
- [getSdkDescription](#getSdkDescription)
- [getSdkFunctions](#getSdkFunctions)
- [isTsFunctionIndexable](#isTsFunctionIndexable)
- [newEnvSdk](#newEnvSdk)
- [newSdkKeysOperation](#newSdkKeysOperation)
- [newSdkOperation](#newSdkOperation)
- [test](#test)
- [tsFunctionIsSdkable](#tsFunctionIsSdkable)

## Interfaces

- [BundleConfig](#bundleconfig)
- [FunctionsPerClassification](#functionsperclassification)
- [OperationClassification](#operationclassification)
- [OperationClassificationObject](#operationclassificationobject)
- [TsFunction](#tsfunction)

## Variables

- [generateDbSdkCli](#generatedbsdkcli)
- [generateDbSdk](#generatedbsdk)
- [generateEnvSdksCli](#generateenvsdkscli)
- [generateEnvSdks](#generateenvsdks)
- [generateFunctionPathsSdk](#generatefunctionpathssdk)
- [generateFunctionSdksCli](#generatefunctionsdkscli)
- [generateFunctionSdks](#generatefunctionsdks)
- [generateOperationsSdkCli](#generateoperationssdkcli)
- [generateOperationsSdk](#generateoperationssdk)
- [generateSdkOperationsCli](#generatesdkoperationscli)
- [generateSdkOperations](#generatesdkoperations)
- [getSdkDescription](#getsdkdescription)
- [getSdkFunctions](#getsdkfunctions)
- [isTsFunctionIndexable](#istsfunctionindexable)
- [newEnvSdk](#newenvsdk)
- [newSdkKeysOperation](#newsdkkeysoperation)
- [newSdkOperation](#newsdkoperation)
- [test](#test)
- [tsFunctionIsSdkable](#tsfunctionissdkable)



# Docs

## README

The functions in this package helps you to automate the dull task of generating your SDK files and operation. Every time you create a function or interface (or something else), you can update the SDK's by running `generateSdkOperations`. It's in the bin, just run `npx generateSdkOperations`


# Functions

## generateDbSdkCli

## generateDbSdk

## generateEnvSdksCli

## generateEnvSdks

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations




### Parameters (2)

#### Parameter 1: bundleConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## generateFunctionPathsSdk

`sdk-function-paths` indexes all operations and builds an object containing all operations.




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## generateFunctionSdksCli

## generateFunctionSdks

Creates
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## generateOperationsSdkCli

## generateOperationsSdk

`sdk-operations` indexes all operations and builds an object containing all operations.




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## generateSdkOperationsCli

## generateSdkOperations

(re)generates all sdk operations for any project




## getSdkDescription

Gets a description of any sdk operation from the assets




### Parameters (1)

#### Parameter 1: operationName: string

## getSdkFunctions

returns all sdk functions grouped by operation classification




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |



## isTsFunctionIndexable

The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!


### Returns: object

### Parameters (1)

#### Parameter 1: tsFunction: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| parameters (optional) | array |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## newEnvSdk

## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig




### Parameters (3)

#### Parameter 1: bundleConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



#### Parameter 2: type: string(Enum: public | private)

#### Parameter 3: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## newSdkKeysOperation

### Parameters (3)

#### Parameter 1: operationName: string

#### Parameter 2: keyVariables: array

- null: object






#### Parameter 3: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## newSdkOperation

Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised




### Parameters (3)

#### Parameter 1: operationName: string

#### Parameter 2: tsFunctions: array

- TsFunction: object






#### Parameter 3: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## test

## tsFunctionIsSdkable

### Returns: object

### Parameters (3)

#### Parameter 1: tsFunction: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| parameters (optional) | array |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



#### Parameter 2: operationClassificationObject: object

#### Parameter 3: operationClassification: string(Enum: js | ts | node | server | web | app | ui-es6 | ui-es5 | ui-esm)

# Interfaces

## BundleConfig

Configuration options for bundles. Used with `generateBundle`

Everything in this model will be copied over to the created bundle, except for `createBundleConfig` and `customisableBundleConfig`.





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| bundleMarkdownReaderConfig (optional) | object |  |
| slug  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| customisableBundleConfig  | object |  |
| createBundleConfig  | object |  |



## FunctionsPerClassification

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



## OperationClassification

## Classification

TODO: think about what the differences are and how we need to change processes to make it all work good


### Possible values

js: only js (no node) (well, ts of course, but it gets built into js)

ts: non-built ts code

node: includes other node packages, operations, core-imports, or globals.

server: exposes something on some port when it is ran and uses node code

web: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...

app: uses react-native and exposes something on some port when it is ran

DEPRECATED: ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. highly discouraged, please use ui-es5, or, if needed, ui-esm)

ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)

ui-esm: ui which builds to ESM module resolved Javascript








## OperationClassificationObject

## TsFunction

Interface for arrow functions and normal functions





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| runEveryPeriod (optional) | string |  |
| description (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| returnType  | object |  |
| parameters (optional) | array |  |
| size  | object |  |
| commentSize (optional) | object |  |
| codeSize (optional) | object |  |
| cumulativeSize (optional) | object |  |
| cumulativeCommentSize (optional) | object |  |
| cumulativeCodeSize (optional) | object |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |


# Variables

## generateDbSdkCli (unexported const)

## generateDbSdk (exported const)

## generateEnvSdksCli (unexported const)

## generateEnvSdks (exported const)

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations


## generateFunctionPathsSdk (exported const)

`sdk-function-paths` indexes all operations and builds an object containing all operations.


## generateFunctionSdksCli (unexported const)

## generateFunctionSdks (exported const)

Creates
- sdk
- sdk-api (for just operations that have been determined to be exposed): add `export type { SdkApiType }`
- sdk-js (functions that can be executed in the browser on the client side)
- sdk-keys (all sdk keys)
- sdk-api-keys
- sdk-js-keys

Overwrites them if they already exist with minimal interruption time of the system


## generateOperationsSdkCli (unexported const)

## generateOperationsSdk (exported const)

`sdk-operations` indexes all operations and builds an object containing all operations.


## generateSdkOperationsCli (unexported const)

## generateSdkOperations (exported const)

(re)generates all sdk operations for any project


## getSdkDescription (exported const)

Gets a description of any sdk operation from the assets


## getSdkFunctions (exported const)

returns all sdk functions grouped by operation classification


## isTsFunctionIndexable (exported const)

The path of the function should be indexed by `generateSimpleIndex`, otherwise we can't import it either!


## newEnvSdk (exported const)

## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig


## newSdkKeysOperation (exported const)

## newSdkOperation (exported const)

Uses an array of functions to create an operation that imports all those functions and exports an object where all those functions have been comprised


## test (unexported const)

## tsFunctionIsSdkable (exported const)

