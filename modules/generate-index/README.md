# Generate index

generate-index (node operation)



# Outline

## Functions

- [generateNamedIndex](#generateNamedIndex)
- [generateSimpleIndex](#generateSimpleIndex)
- [isTestFn](#isTestFn)
- [mapToImportStatement](#mapToImportStatement)

## Interfaces

- [ImportStatement](#importstatement)
- [TsFunction](#tsfunction)
- [TsInterface](#tsinterface)
- [TsVariable](#tsvariable)

## Variables

- [generateNamedIndex](#generatenamedindex)
- [generateSimpleIndex](#generatesimpleindex)
- [isTestFn](#istestfn)
- [mapToImportStatement](#maptoimportstatement)
- [[operationName]](#operationname)



# Functions

## generateNamedIndex

Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes




### Parameters (1)

#### Parameter 1: {  operationName,  manualProjectRoot,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| operationName  | string |  |



## generateSimpleIndex

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes




### Parameters (1)

#### Parameter 1: {  operationName,  manualProjectRoot,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | string |  |
| manualProjectRoot (optional) | string |  |



## isTestFn

### Returns: object

### Parameters (1)

#### Parameter 1: x: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| srcRelativeFileId  | string |  |



## mapToImportStatement

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| srcRelativeFileId  | string |  |



### Parameters (2)

#### Parameter 1: item: object

#### Parameter 2: type: string(Enum: variable | function | interface)

# Interfaces

## ImportStatement

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| srcRelativeFileId  | string |  |



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



## TsVariable

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
| description (optional) | string |  |
| value  | string |  |
| classification  | string |  |
| type  | object |  |
| isExported  | boolean |  |
| comments  | array |  |


# Variables

## generateNamedIndex (exported const)

Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


## generateSimpleIndex (exported const)

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


## isTestFn (exported const)

## mapToImportStatement (exported const)

## [operationName] (unexported const)

