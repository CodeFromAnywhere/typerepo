# Index typescript

index-typescript (node operation)



# Outline

## Docs

- [Sorting types](#sorting-types)

## Functions

- [cli](#cli)
- [findAndUpsertTsInterfaces](#findAndUpsertTsInterfaces)
- [findCommentTypes](#findCommentTypes)
- [generateSchema](#generateSchema)
- [getAllComments](#getAllComments)
- [getDbStorageMethod](#getDbStorageMethod)
- [getFrontmatterDbStorageMethod](#getFrontmatterDbStorageMethod)
- [getFrontmatterFunctionParameters](#getFrontmatterFunctionParameters)
- [getIndexId](#getIndexId)
- [getMaxIndentationDepth](#getMaxIndentationDepth)
- [getMinMaxValidation](#getMinMaxValidation)
- [getNumberOfLines](#getNumberOfLines)
- [getObjectSchema](#getObjectSchema)
- [getParamSchema](#getParamSchema)
- [getParametersFromInterfaces](#getParametersFromInterfaces)
- [getPossibleRefs](#getPossibleRefs)
- [getSizeSummary](#getSizeSummary)
- [getSpecialExtensionDbStorageMethod](#getSpecialExtensionDbStorageMethod)
- [getTsStatements](#getTsStatements)
- [getTypeInfo](#getTypeInfo)
- [getValidatedOperationPathParse](#getValidatedOperationPathParse)
- [handleExplicitValidation](#handleExplicitValidation)
- [hasDefinition](#hasDefinition)
- [indexTypescriptFile](#indexTypescriptFile)
- [indexTypescript](#indexTypescript)
- [isPrimitive](#isPrimitive)
- [makeTsComment](#makeTsComment)
- [schemaToTsInterface](#schemaToTsInterface)
- [test](#test)
- [toSnack](#toSnack)
- [tryCreateSchema](#tryCreateSchema)
- [typeToSchema](#typeToSchema)

## Interfaces

- [CommentRange](#commentrange)
- [CompleteOperationPathParse](#completeoperationpathparse)
- [Config](#config)
- [Frontmatter](#frontmatter)
- [JSONSchema7](#jsonschema7)
- [MaybeInteface](#maybeinteface)
- [MorphInterfaceInfo](#morphinterfaceinfo)
- [OperationPathParse](#operationpathparse)
- [Project](#project)
- [Schema](#schema)
- [TsInterface](#tsinterface)

## Variables

- [ajvMap](#ajvmap)
- [cli](#cli)
- [definitions](#definitions)
- [findAndUpsertTsInterfaces](#findandupserttsinterfaces)
- [findCommentTypes](#findcommenttypes)
- [generateSchema](#generateschema)
- [getAllComments](#getallcomments)
- [getDbStorageMethod](#getdbstoragemethod)
- [getFrontmatterDbStorageMethod](#getfrontmatterdbstoragemethod)
- [getFrontmatterFunctionParameters](#getfrontmatterfunctionparameters)
- [getIndexId](#getindexid)
- [getMaxIndentationDepth](#getmaxindentationdepth)
- [getMinMaxValidation](#getminmaxvalidation)
- [getNumberOfLines](#getnumberoflines)
- [getObjectSchema](#getobjectschema)
- [getParamSchema](#getparamschema)
- [getParametersFromInterfaces](#getparametersfrominterfaces)
- [getPossibleRefs](#getpossiblerefs)
- [getSizeSummary](#getsizesummary)
- [getSpecialExtensionDbStorageMethod](#getspecialextensiondbstoragemethod)
- [getTsStatements](#gettsstatements)
- [getTypeInfo](#gettypeinfo)
- [getValidatedOperationPathParse](#getvalidatedoperationpathparse)
- [indexTypescriptFile](#indextypescriptfile)
- [indexTypescript](#indextypescript)
- [isPrimitive](#isprimitive)
- [makeTsComment](#maketscomment)
- [schemaToTsInterface](#schematotsinterface)
- [symbols](#symbols)
- [test](#test)
- [toSnack](#tosnack)
- [tryCreateSchema](#trycreateschema)
- [typeToSchema](#typetoschema)



# Docs

## Sorting types

In order to sort the indexed types well, you need to know that:

1. Interfaces first index all extensded types and interfaces, then the interface itself. The last extended type/inteface comes first, then the previous one, etc.

2. If you define an intersection type (e.g. `type X = A & { someObject: string } & B;`), the last intersected item comes first, the first item comes last in the order. This gives you more flexibility because in an interface the extended things always come b efore, but with a type they can also come in the middle.

## Example:

Let's say you want to define a special type of user, which is a user but has an additional mapped object type, which you want behind in the order. But you want the main properties of the slug at the beginning...

You can then choose to do it somewhat like this:

```ts
export type SpecialUser = MappedObjectType & {
  username: string;
  password: string;
} & SlugModelType;
```

This way the `SlugModelType` properties come first in the indexation, then the username and password, and then the `MappedObjectType`.

**Conclusion**: If you're making a type that extends multiple things, but the order should be more custom, use a `type` instead of an `interface`.


# Functions

## cli

## findAndUpsertTsInterfaces

## findCommentTypes

returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: commentWithoutFrontmatter: string

## generateSchema

If existing schema is not stale, just require it.
Otherwise, generate it for a file

NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!




### Parameters (3)

#### Parameter 1: filePath: string

#### Parameter 2: morphInterfaceInfo: array

#### Parameter 3: namedAbsoluteImportNames: array

- null: string






## getAllComments

gets all leading comments and trailing comments raw text, put together, separated with newlines


### Returns: array

- null: object






## getDbStorageMethod

Gets db storage method for indexation

1) Frontmatter overrules everything
2) Special extensions are looked at
3)




### Parameters (1)

#### Parameter 1: {  typeName,  frontmatter,  extensions,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| typeName  | string |  |
| frontmatter  | object |  |
| extensions (optional) | array |  |



## getFrontmatterDbStorageMethod

if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)




### Parameters (1)

#### Parameter 1: parameters: object

## getFrontmatterFunctionParameters

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| runEveryPeriod  | object |  |
| publicAuthorization  | array |  |
| isApiExposed  | boolean |  |



## getIndexId

### Parameters (2)

#### Parameter 1: filePath: string

#### Parameter 2: name: string

## getMaxIndentationDepth

gets the maximum indentation depth of any piece of code

does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.

assumes an indentation contains 2 spaces.




### Parameters (1)

#### Parameter 1: functionText: string

## getMinMaxValidation

### Returns: object

## getNumberOfLines

### Parameters (1)

#### Parameter 1: string: string

## getObjectSchema

## getParamSchema

## getParametersFromInterfaces

### Returns: array

- null: object






### Parameters (2)

#### Parameter 1: functionName: string

#### Parameter 2: interfaces: array

## getPossibleRefs

### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: interfaces: array

## getSizeSummary

takes a string and simply returns the amount of characters, the amount of lines and the amount of bytes

TODO: this is not the right place for this function


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| numberOfFiles (optional) | number |  |
| characters  | number |  |
| lines  | number |  |
| bytes  | number |  |
| linesPerFile  | number |  |
| charactersPerLine  | number |  |
| bytesPerCharacter  | number |  |



### Parameters (1)

#### Parameter 1: string: string

## getSpecialExtensionDbStorageMethod

returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod




### Parameters (1)

#### Parameter 1: extensions (optional): array

- null: string






## getTsStatements

Gets functions and variables from a tsmorph sourcefile




## getTypeInfo

takes a ts morph type and returns all info about it

if available, a schema should be provided about the type because it's hard to infer it (probably buggy)


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| typeDefinition (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| isObject  | boolean |  |
| isArray  | boolean |  |
| isPrimitive  | boolean |  |
| isEnum  | boolean |  |
| isEnumLiteral  | boolean |  |
| typeCoverage  | number |  |
| rawType  | string |  |



## getValidatedOperationPathParse

### Parameters (1)

#### Parameter 1: filePath: string

## handleExplicitValidation

## hasDefinition

### Returns: object

### Parameters (1)

#### Parameter 1: maybeInterface: object

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



## indexTypescriptFile

### Parameters (3)

#### Parameter 1: project: object

#### Parameter 3: projectRoot: string

## indexTypescript

Creates a typescript file index in 3 steps
1) Introspects the file
2) Calculates all needed information about it
3) Saves the result to /db/******.json in the operation root

NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?

TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.




### Parameters (1)

#### Parameter 1: {  filePaths,  manualProjectRoot,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| filePaths  | array |  |
| manualProjectRoot  | string |  |



## isPrimitive

export const getDefinitions = () => definitions;

export const getClass = (name) => allClasses[name];


### Returns: object

## makeTsComment

this is actually a fundamental part of the OS. How should comments be structured?

I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.




### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationRelativeTypescriptFilePath  | string |  |
| commentRange  | object |  |
| statementName (optional) | string |  |
| rawStatement  | string |  |
| fileContent  | string |  |



## schemaToTsInterface

make a tsInterface from a schema generated from the file




### Parameters (4)

#### Parameter 1: filePath: string

#### Parameter 2: typeName: string

## test

## toSnack

## tryCreateSchema

Try because sometimes generateSchema fails


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| schema (optional) | object |  |
| error (optional) | string |  |



### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| path (optional) | string |  |
| type (optional) | string |  |
| minify (optional) | boolean |  |
| schemaId (optional) | string |  |
| tsconfig (optional) | string |  |
| expose (optional) | string |  |
| topRef (optional) | boolean |  |
| jsDoc (optional) | string |  |
| sortProps (optional) | boolean |  |
| strictTuples (optional) | boolean |  |
| skipTypeCheck (optional) | boolean |  |
| encodeRefs (optional) | boolean |  |
| extraTags (optional) | array |  |
| additionalProperties (optional) | boolean |  |



## typeToSchema

calculates the schema of a type

this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.

NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.

TODO: Test and improve this one



# Interfaces

## CommentRange

## CompleteOperationPathParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| filePath  | string |  |
| relativeOperationBasePathFromProjectRoot  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| srcFileId  | string |  |
| operationName (optional) | string |  |
| operationFolderName  | string |  |
| relativePathFromProjectRoot  | string |  |



## Config

Properties: 

 | Name | Type | Description |
|---|---|---|
| path (optional) | string |  |
| type (optional) | string |  |
| minify (optional) | boolean |  |
| schemaId (optional) | string |  |
| tsconfig (optional) | string |  |
| expose (optional) | string |  |
| topRef (optional) | boolean |  |
| jsDoc (optional) | string |  |
| sortProps (optional) | boolean |  |
| strictTuples (optional) | boolean |  |
| skipTypeCheck (optional) | boolean |  |
| encodeRefs (optional) | boolean |  |
| extraTags (optional) | array |  |
| additionalProperties (optional) | boolean |  |



## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes








## JSONSchema7

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object |  |
| dependencies (optional) | object |  |
| propertyNames (optional) | object |  |
| if (optional) | object |  |
| then (optional) | object |  |
| else (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object |  |



## MaybeInteface

at some point in processing we need this interface where definition can also be null





Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | object |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
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



## MorphInterfaceInfo

Properties: 

 | Name | Type | Description |
|---|---|---|
| raw  | string |  |
| name  | string |  |
| description (optional) | string |  |
| extensions  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |



## OperationPathParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| srcFileId  | string |  |
| operationName (optional) | string |  |
| operationFolderName  | string |  |
| relativePathFromProjectRoot  | string |  |



## Project

Project that holds source files.








## Schema

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object |  |
| dependencies (optional) | object |  |
| propertyNames (optional) | object |  |
| if (optional) | object |  |
| then (optional) | object |  |
| else (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object |  |



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

## ajvMap (unexported const)

## cli (unexported const)

## definitions (unexported const)

## findAndUpsertTsInterfaces (exported const)

## findCommentTypes (exported const)

returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)


## generateSchema (exported const)

If existing schema is not stale, just require it.
Otherwise, generate it for a file

NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!


## getAllComments (exported const)

gets all leading comments and trailing comments raw text, put together, separated with newlines


## getDbStorageMethod (exported const)

Gets db storage method for indexation

1) Frontmatter overrules everything
2) Special extensions are looked at
3)


## getFrontmatterDbStorageMethod (exported const)

if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)


## getFrontmatterFunctionParameters (exported const)

## getIndexId (exported const)

## getMaxIndentationDepth (exported const)

gets the maximum indentation depth of any piece of code

does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.

assumes an indentation contains 2 spaces.


## getMinMaxValidation (exported const)

## getNumberOfLines (exported const)

## getObjectSchema (unexported const)

## getParamSchema (exported const)

## getParametersFromInterfaces (exported const)

## getPossibleRefs (exported const)

## getSizeSummary (exported const)

takes a string and simply returns the amount of characters, the amount of lines and the amount of bytes

TODO: this is not the right place for this function


## getSpecialExtensionDbStorageMethod (exported const)

returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod


## getTsStatements (exported const)

Gets functions and variables from a tsmorph sourcefile


## getTypeInfo (exported const)

takes a ts morph type and returns all info about it

if available, a schema should be provided about the type because it's hard to infer it (probably buggy)


## getValidatedOperationPathParse (exported const)

## indexTypescriptFile (exported const)

## indexTypescript (exported const)

Creates a typescript file index in 3 steps
1) Introspects the file
2) Calculates all needed information about it
3) Saves the result to /db/******.json in the operation root

NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?

TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.


## isPrimitive (exported const)

## makeTsComment (exported const)

this is actually a fundamental part of the OS. How should comments be structured?

I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.


## schemaToTsInterface (exported const)

make a tsInterface from a schema generated from the file


## symbols (exported const)

## test (unexported const)

## toSnack (unexported const)

## tryCreateSchema (exported const)

Try because sometimes generateSchema fails


## typeToSchema (exported const)

calculates the schema of a type

this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.

NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.

TODO: Test and improve this one

