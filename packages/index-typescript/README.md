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

## Interfaces:

- [CommentRange](#CommentRange)
- [CompleteOperationPathParse](#CompleteOperationPathParse)
- [Config](#Config)
- [Frontmatter](#Frontmatter)
- [JSONSchema7](#JSONSchema7)
- [MaybeInteface](#MaybeInteface)
- [MorphInterfaceInfo](#MorphInterfaceInfo)
- [OperationPathParse](#OperationPathParse)
- [Project](#Project)
- [Schema](#Schema)
- [TsInterface](#TsInterface)



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
| frontmatter  | object | Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes |
| extensions (optional) | array |  |



## getFrontmatterDbStorageMethod

if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)




### Parameters (1)

#### Parameter 1: parameters: object

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




## getValidatedOperationPathParse

### Parameters (1)

#### Parameter 1: filePath: string

## handleExplicitValidation

## hasDefinition

### Returns: object

### Parameters (1)

#### Parameter 1: maybeInterface: object

> at some point in processing we need this interface where definition can also be null

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
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |



## indexTypescriptFile

### Parameters (2)

#### Parameter 1: project: object

> Project that holds source files.






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
| filePaths  | array | filepaths of files to index. must be files from the same operation. |
| manualProjectRoot  | string |  |



## isPrimitive

export const getDefinitions = () => definitions;

export const getClass = (name) => allClasses[name];


### Returns: object

## makeTsComment

this is actually a fundamental part of the OS. How should comments be structured?

I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.




### Parameters (1)

#### Parameter 1: {  commentRange,  rawStatement,  statementName,  fileContent,  operationRelativeTypescriptFilePath,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationRelativeTypescriptFilePath  | string |  |
| commentRange  | object |  |
| statementName (optional) | string | if we can give the statement a name, it should be provided here |
| rawStatement  | string |  |
| fileContent  | string | needed for calculating line numbers |



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
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as operationRelativeTypescriptFilePath but without extension)<br /><br />e.g. "general"<br /><br />TODO: figure out if this can be omitted |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |



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



> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes




## JSONSchema7

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |



## MaybeInteface

at some point in processing we need this interface where definition can also be null



> at some point in processing we need this interface where definition can also be null

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | object | all info that should always be collected when indexing any type interface |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| description (optional) | string | a string that is known to contain markdown. |
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |
| dbStorageMethod (optional) | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |



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
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as operationRelativeTypescriptFilePath but without extension)<br /><br />e.g. "general"<br /><br />TODO: figure out if this can be omitted |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |



## Project

Project that holds source files.



> Project that holds source files.




## Schema

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |



## TsInterface

TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.



> --- dbStorageMethod: jsonSingle<br />---<br /><br />TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.

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
| type  | object | all info that should always be collected when indexing any type interface |
| description (optional) | string | a string that is known to contain markdown. |
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |
| dbStorageMethod (optional) | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |


