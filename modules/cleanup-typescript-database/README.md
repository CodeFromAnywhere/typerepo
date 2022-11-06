# Cleanup typescript database

cleanup-typescript-database (node operation)

Collection of functions to cleanup the typescript database (all typescript related models)




# Outline

## Functions

- [cleanupTsDatabase](#cleanupTsDatabase)
- [shouldDeleteTsModel](#shouldDeleteTsModel)

## Interfaces

- [TsBuildError](#tsbuilderror)
- [TsComment](#tscomment)
- [TsExport](#tsexport)
- [TsFunction](#tsfunction)
- [TsImport](#tsimport)
- [TsInterface](#tsinterface)
- [TsLintWarning](#tslintwarning)
- [TsVariable](#tsvariable)

## Variables

- [cleanupTsDatabase](#cleanuptsdatabase)
- [shouldDeleteTsModel](#shoulddeletetsmodel)



# Functions

## cleanupTsDatabase

From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.




### Parameters (2)

#### Parameter 1: operationName: string

#### Parameter 2: manualProjectRoot (optional): string

## shouldDeleteTsModel

### Returns: object

### Parameters (3)

#### Parameter 1: tsModel: object

#### Parameter 2: operationName: string

#### Parameter 3: operationRelativePaths: array

- null: string





# Interfaces

## TsBuildError

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
| line (optional) | number |  |
| character (optional) | number |  |
| message  | string |  |



## TsComment

comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.


The convention should be that single-line comments should start with that. This then becomes the type of the comment. You can also put multiple prefixes at the start.

Example:

`// TODO: NB: this is a todo but its also important`

Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.



There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.
- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...
- privacy
- ...?

NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!

NB: comments are part of the code, so they should always be in English!





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
| comment  | string |  |
| parameters  | object |  |
| types  | array |  |
| firstLine  | number |  |
| lastLine  | number |  |
| statementName (optional) | string |  |
| rawStatement (optional) | string |  |



## TsExport

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
| comments  | array |  |
| type (optional) | string |  |
| alias (optional) | string |  |
| hasGeneric (optional) | boolean |  |



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



## TsImport

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
| comments  | array |  |
| module  | string |  |
| alias (optional) | string |  |
| classification  | string |  |
| type (optional) | string |  |
| hasGeneric (optional) | boolean |  |
| isAbsolute  | boolean |  |
| isModuleResolved  | boolean |  |
| isModuleFromMonorepo  | boolean |  |



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



## TsLintWarning

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
| line  | number |  |
| character  | number |  |
| message  | string |  |



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

## cleanupTsDatabase (exported const)

From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.


## shouldDeleteTsModel (exported const)

