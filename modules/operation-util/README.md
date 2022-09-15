# Operation util

operation-util (js operation)



# Outline

## Functions

- [getDependenciesSummary](#getDependenciesSummary)
- [getOperationMetaData](#getOperationMetaData)
- [recalculateOperationIndexJson](#recalculateOperationIndexJson)
- [writeKeyToOperationIndexJson](#writeKeyToOperationIndexJson)

## Interfaces:

- [OperationIndex](#OperationIndex)
- [OperationMetaData](#OperationMetaData)



# Functions

## getDependenciesSummary

### Parameters (1)

#### Parameter 1: operationName: string

## getOperationMetaData

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file




### Parameters (1)

#### Parameter 1: operationBasePath: string

> any path in an operation




## recalculateOperationIndexJson

relies on import index




### Parameters (1)

#### Parameter 1: operationBasePath: string

## writeKeyToOperationIndexJson

### Parameters (1)

#### Parameter 1: absolutePath: string

> can be a path to any file in the operation



# Interfaces

## OperationIndex

contains all calculated info about an operation that needs to be retreived often: some package-only things, but also a collection of all indexes of all files

should be able to be found in operaiton folder in /db/operation-index.json



> --- dbStorageMethod: jsonSingle operationRelativePath: db/operation-index.json<br />---<br /><br />contains all calculated info about an operation that needs to be retreived often: some package-only things, but also a collection of all indexes of all files<br /><br />should be able to be found in operaiton folder in /db/operation-index.json

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string | all currently supported languages |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | here for compatibility, should implement... |
| packageName  | string | name of the package in package.json |
| folderName  | string | name of the operation folder |
| relativeOperationLocationPath  | string | relative path to the operation (does not include operation folder itself)<br /><br />relative from project root |
| classification  | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| packageDependencies  | array | package dependency names (non-operation) |
| operationDependencies  | array | operation dependency names |
| coreDependencies  | array | core dependencies (e.g. `path` and `fs`) |
| buildSucceeded  | boolean |  |
| dependenciesBuildsFailed  | boolean |  |
| indexImportExportError  | string |  |
| lintProblems  | array |  |
| indexInteracesErrors  | array |  |
| indexErrors  | array |  |
| size  | object | objective size measurements of all files in a folder<br /><br />summary for a folder should contain file-summaries for different filetypes and an overal file summary |



## OperationMetaData

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationBasePath  | string |  |
| operationIndex (optional) | object | --- dbStorageMethod: jsonSingle operationRelativePath: db/operation-index.json<br />---<br /><br />contains all calculated info about an operation that needs to be retreived often: some package-only things, but also a collection of all indexes of all files<br /><br />should be able to be found in operaiton folder in /db/operation-index.json |
| operationName  | string |  |
| srcPath  | string |  |
| operationFolderName  | string |  |
| relativeOperationLocationPath  | string | where the operation is located relative to the project root |


