# Generate sdk operations

generate-sdk-operations (node operation)



# Outline

## Functions

- [generateDbSdk](#generateDbSdk)
- [generateEnvSdks](#generateEnvSdks)
- [generateFunctionSdks](#generateFunctionSdks)
- [generateOperationsSdk](#generateOperationsSdk)
- [generateSdkOperations](#generateSdkOperations)
- [getSdkFunctions](#getSdkFunctions)
- [isTsFunctionIndexable](#isTsFunctionIndexable)
- [main](#main)
- [newEnvSdk](#newEnvSdk)
- [newSdkKeysOperation](#newSdkKeysOperation)
- [newSdkOperation](#newSdkOperation)
- [tsFunctionIsSdkable](#tsFunctionIsSdkable)

## Interfaces:

- [BundleConfig](#BundleConfig)
- [FunctionsPerClassification](#FunctionsPerClassification)
- [OperationClassificationObject](#OperationClassificationObject)
- [OperationClassification](#OperationClassification)
- [TsFunction](#TsFunction)



# Functions

## generateDbSdk

### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## generateEnvSdks

generates sdk-env-public and sdk-env-private

returns the paths of the geneated operations




### Parameters (2)

#### Parameter 1: bundleConfig: object

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| skipPush (optional) | boolean |  |



#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| skipYarnInstall (optional) | boolean |  |
| dryrun (optional) | boolean |  |



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



## generateSdkOperations

(re)generates all sdk operations for any project




### Parameters (2)

#### Parameter 1: bundleConfig (optional): object

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| skipPush (optional) | boolean |  |



#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| yarnInstallBefore (optional) | boolean | If true, will try to run yarn install before and if it fails, does not continue. |
| yarnInstallAfter (optional) | boolean | if true, yarn install will be skipped when generating the sdks, but run one time afterwards<br /><br />useful if you are sure that there will be multiple yarn Installs needed otherwise<br /><br />for os installation (where all operations already exist, don't do this, yarn installs will probably not happen at all) |
| manualProjectRoot (optional) | string |  |
| dryrun (optional) | boolean |  |



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


### Returns: boolean

### Parameters (1)

#### Parameter 1: tsFunction: object

> --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |



## main

## newEnvSdk

## Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

sensible-config:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig




### Parameters (3)

#### Parameter 1: bundleConfig: object

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| skipPush (optional) | boolean |  |



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

#### Parameter 2: tsFunctions: array

- TsFunction: object






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



## tsFunctionIsSdkable

### Returns: boolean

### Parameters (3)

#### Parameter 1: tsFunction: object

> --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |



#### Parameter 2: operationClassificationObject: object

#### Parameter 3: operationClassification: string(Enum: js | ts | node | server | web | app | ui-es6 | ui-es5)

> # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)



# Interfaces

## BundleConfig

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| docsRelativeFolderPath (optional) | string | later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way. |
| readmeRelativeFilePath (optional) | string |  |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |
| skipPush (optional) | boolean |  |



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



## OperationClassificationObject

## OperationClassification

## Classification

TODO: think about what the differences are and how we need to change processes to make it all work good

### Possible values

js: only js (no node) (well, ts of course)

node: includes other node packages, operations, core-imports, or globals.

server: exposes something on some port when it is ran and uses node code

web: uses react and exposes something on some port when it is ran

app: uses react-native and exposes something on some port when it is ran

ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)

ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)



> # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)




## TsFunction

Interface for arrow functions and normal functions



> --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| apiAuthenticationStrategy  | string | Still not sure if the user one is a good idea but there are probably some usecases that would really benefit to have a user-layer embedded in the king os system |
| description (optional) | string | a string that is known to contain markdown. |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| returnType  | object | all info that should always be collected when indexing any type interface |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| size  | object | type interface that can be used to summarize multiple files |
| commentSize (optional) | object | type interface that can be used to summarize multiple files |
| codeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCommentSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCodeSize (optional) | object | type interface that can be used to summarize multiple files |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |


