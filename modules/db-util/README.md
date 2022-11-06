# Db util

db-util (node operation)



# Outline

## Functions

- [filterInterfacesFromOperationNames](#filterInterfacesFromOperationNames)
- [getDbModelsFromOperations](#getDbModelsFromOperations)

## Interfaces

- [TsInterface](#tsinterface)

## Variables

- [filterInterfacesFromOperationNames](#filterinterfacesfromoperationnames)
- [getDbModelsFromOperations](#getdbmodelsfromoperations)



# Functions

## filterInterfacesFromOperationNames

### Parameters (2)

#### Parameter 1: tsInterface: object

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
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |



#### Parameter 2: operationNames (optional): array

- null: string






## getDbModelsFromOperations

### Parameters (1)

#### Parameter 1: operationNames: array

- null: string





# Interfaces

## TsInterface

TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.





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
| type  | object |  |
| description (optional) | string |  |
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |
| dbStorageMethod (optional) | string |  |


# Variables

## filterInterfacesFromOperationNames (exported const)

## getDbModelsFromOperations (exported const)

