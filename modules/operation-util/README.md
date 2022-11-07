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

- [OperationMetaData](#operationmetadata)

## Variables

- [getDependenciesSummary](#getdependenciessummary)
- [getOperationMetaData](#getoperationmetadata)
- [recalculateOperationIndexJson](#recalculateoperationindexjson)
- [writeKeyToOperationIndexJson](#writekeytooperationindexjson)



# Functions

## getDependenciesSummary()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## getOperationMetaData()

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string | any path in an operation |
| **Output** |    |    |



## recalculateOperationIndexJson()

relies on import index


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## writeKeyToOperationIndexJson()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string | can be a path to any file in the operation |
| **Output** |    |    |


# Interfaces

## 🔷 OperationMetaData

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

## 📄 getDependenciesSummary (exported const)

## 📄 getOperationMetaData (exported const)

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file


## 📄 recalculateOperationIndexJson (exported const)

relies on import index


## 📄 writeKeyToOperationIndexJson (exported const)

