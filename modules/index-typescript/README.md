# Index typescript

index-typescript (node operation)

This repo is used to generate the typescript index.

Some important conventions I'm applying:

1. The generated index doesn't know the absolute location, which makes it possible to move around the Project in the OS

2. The generated index only tells you information about this very operation. All links with other operations should be done in postprocessing

3. Every generated index has an `IndexId`



# Outline

## Functions

- [cli](#cli)
- [findAndUpsertTsInterfaces](#findAndUpsertTsInterfaces)
- [findCommentTypes](#findCommentTypes)
- [generateSchema](#generateSchema)
- [getAllComments](#getAllComments)
- [getDbStorageMethod](#getDbStorageMethod)
- [getFrontmatterDbStorageMethod](#getFrontmatterDbStorageMethod)
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



# Functions

## cli



## Returns: unknown

## findAndUpsertTsInterfaces



## Returns: unknown

## findCommentTypes

returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)

### Returns: array

- null: object





## generateSchema

If existing schema is not stale, just require it.
Otherwise, generate it for a file

NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!

## Returns: unknown

## getAllComments

gets all leading comments and trailing comments raw text, put together, separated with newlines

### Returns: array

- null: object





## getDbStorageMethod



## Returns: unknown

## getFrontmatterDbStorageMethod

if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)

## Returns: unknown

## getIndexId



## Returns: unknown

## getMaxIndentationDepth

gets the maximum indentation depth of any piece of code

does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.

assumes an indentation contains 2 spaces.

## Returns: unknown

## getMinMaxValidation



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## getNumberOfLines



## Returns: unknown

## getObjectSchema



## Returns: unknown

## getParamSchema



## Returns: unknown

## getParametersFromInterfaces



## Returns: unknown

## getPossibleRefs



### Returns: array

- null: object





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


## getSpecialExtensionDbStorageMethod

returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod

## Returns: unknown

## getTsStatements

Gets functions and variables from a tsmorph sourcefile

## Returns: unknown

## getTypeInfo

takes a ts morph type and returns all info about it

if available, a schema should be provided about the type because it's hard to infer it (probably buggy)

## Returns: unknown

## getValidatedOperationPathParse



## Returns: unknown

## handleExplicitValidation



## Returns: unknown

## hasDefinition



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## indexTypescriptFile



## Returns: unknown

## indexTypescript

Creates a typescript file index in 3 steps
1) Introspects the file
2) Calculates all needed information about it
3) Saves the result to /db/******.json in the operation root

NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?

TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.

## Returns: unknown

## isPrimitive

export const getDefinitions = () => definitions;

export const getClass = (name) => allClasses[name];

### Returns: boolean







## makeTsComment

this is actually a fundamental part of the OS. How should comments be structured?

I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.

## Returns: unknown

## schemaToTsInterface

make a tsInterface from a schema generated from the file

## Returns: unknown

## test



## Returns: unknown

## toSnack



## Returns: unknown

## tryCreateSchema

Try because sometimes generateSchema fails

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| schema (optional) | object |  |
| error (optional) | string |  |


## typeToSchema

calculates the schema of a type

this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.

NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.

TODO: Test and improve this one

## Returns: unknown

