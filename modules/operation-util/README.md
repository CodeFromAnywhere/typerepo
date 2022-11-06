# Operation util

operation-util (js operation)

Operation with utility functions to calculate things about operations and alter operation-index.




# Outline

## Functions

- [getDependenciesSummary](#getDependenciesSummary)
- [getOperationMetaData](#getOperationMetaData)
- [recalculateOperationIndexJson](#recalculateOperationIndexJson)
- [writeKeyToOperationIndexJson](#writeKeyToOperationIndexJson)

## Interfaces

- [OperationIndex](#operationindex)
- [OperationMetaData](#operationmetadata)

## Variables

- [getDependenciesSummary](#getdependenciessummary)
- [getOperationMetaData](#getoperationmetadata)
- [recalculateOperationIndexJson](#recalculateoperationindexjson)
- [writeKeyToOperationIndexJson](#writekeytooperationindexjson)



# Functions

## getDependenciesSummary

### Parameters (1)

#### Parameter 1: operationName: string

## getOperationMetaData

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file




### Parameters (1)

#### Parameter 1: operationBasePath: string

## recalculateOperationIndexJson

relies on import index




## writeKeyToOperationIndexJson

### Parameters (1)

#### Parameter 1: absolutePath: string

# Interfaces

## OperationIndex

contains all calculated info about an operation that needs to be retreived often: some package-only things, but also a collection of all indexes of all files

should be able to be found in operaiton folder in /db/operation-index.json





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
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
| packageName  | string |  |
| folderName  | string |  |
| relativeOperationLocationPath  | string |  |
| classification  | string |  |
| packageDependencies  | array |  |
| operationDependencies  | array |  |
| coreDependencies  | array |  |
| buildSucceeded  | boolean |  |
| dependenciesBuildsFailed  | boolean |  |
| indexImportExportError  | string |  |
| lintProblems  | array |  |
| indexInteracesErrors  | array |  |
| indexErrors  | array |  |
| size  | object |  |



## OperationMetaData

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationBasePath  | string |  |
| operationIndex (optional) | object |  |
| operationName  | string |  |
| srcPath  | string |  |
| operationFolderName  | string |  |
| relativeOperationLocationPath  | string |  |


# Variables

## getDependenciesSummary (exported const)

## getOperationMetaData (exported const)

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file


## recalculateOperationIndexJson (exported const)

relies on import index


## writeKeyToOperationIndexJson (exported const)

