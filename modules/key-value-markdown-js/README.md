# Key value markdown js

key-value-markdown-js (js operation)



# Outline

## Functions

- [flattenMarkdownChunks](#flattenMarkdownChunks)
- [getKvmdItemsRecursively](#getKvmdItemsRecursively)
- [getParagraphsRecursively](#getParagraphsRecursively)
- [kvmdDataMap](#kvmdDataMap)
- [kvmdDataToString](#kvmdDataToString)
- [kvmdParseToMarkdownString](#kvmdParseToMarkdownString)
- [markdownStringToKvmdParse](#markdownStringToKvmdParse)
- [parseKvmdLine](#parseKvmdLine)

## Interfaces:

- [CategoryStack](#CategoryStack)
- [DbFileLocation](#DbFileLocation)
- [KeyValueMarkdownModelType](#KeyValueMarkdownModelType)
- [KeyValueMarkdownParse](#KeyValueMarkdownParse)
- [MarkdownChunk](#MarkdownChunk)



# Functions

## flattenMarkdownChunks

### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: markdownChunks: array

- MarkdownChunk: object






## getKvmdItemsRecursively

recursively dives into the Chunk to get all kvmd items

NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name


### Returns: array

- null: object






### Parameters (2)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |



#### Parameter 2: categoryStackCalculatedUntilNow (optional): array

- null: string






## getParagraphsRecursively

recursively dives into the Chunk to get all paragraphs inside


### Returns: array

- null: object






### Parameters (2)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |



#### Parameter 2: categoryStackCalculatedUntilNow (optional): array

- null: string






## kvmdDataMap

DEPRECATED: probably never needed, unless I make it useful

mapper function to give a kvmd data object other parameters.

NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.


### Returns: array

- null: object






### Parameters (2)

#### Parameter 1: data: array

- KeyValueMarkdownModelType: object






#### Parameter 2: {    keyName,    valueName,    categoryStackCalculatedName,    commentName,  }: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| keyName (optional) | string | key by default |
| valueName (optional) | string | value by default |
| commentName (optional) | string | comment by default |
| categoryStackCalculatedName (optional) | string | categoryStackCalculated by default |



## kvmdDataToString

parses KeyValueMarkdownModelType into a string which can be part of a new markdown file

NB: we need to know the previous line as well because the header we need to print depends on it


### Returns: string

### Parameters (2)

#### Parameter 1: kvmdData: object

> handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | same as slug<br /><br />used for compatibility with some general purpose functions<br /><br />NB: uniqueness is hard to enforce! |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| isHeaderCalculated  | boolean | Calculated value indicating whether or not the item has children |



#### Parameter 2: previous (optional): object

> handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | same as slug<br /><br />used for compatibility with some general purpose functions<br /><br />NB: uniqueness is hard to enforce! |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| isHeaderCalculated  | boolean | Calculated value indicating whether or not the item has children |



## kvmdParseToMarkdownString

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file


### Returns: string

### Parameters (1)

#### Parameter 1: keyValueMarkdownParse: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| data  | array |  |



## markdownStringToKvmdParse

parses a key value md string (with support for headings and frontmatter)


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| data  | array |  |



### Parameters (2)

#### Parameter 1: kvMdString: string

#### Parameter 2: dbFileLocation: object

> Object used to hand over all information about the location of a db-file in a structured way

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## parseKvmdLine

parses a kv md line with data into a key, value, and comment (if available)

if the key is an empty string, the line will return undefined


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment (optional) | object |  |



### Parameters (1)

#### Parameter 1: string: string

# Interfaces

## CategoryStack

- null: string






## DbFileLocation

Object used to hand over all information about the location of a db-file in a structured way



> Object used to hand over all information about the location of a db-file in a structured way

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug



> handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | same as slug<br /><br />used for compatibility with some general purpose functions<br /><br />NB: uniqueness is hard to enforce! |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean | Calculated value indicating whether or not the item has children |



## KeyValueMarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object | Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes |
| data  | array |  |



## MarkdownChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number | 0 is a paragraph 1-6 is h1 until h6 |
| content (optional) | string |  |
| markdownEmbed (optional) | object | Anything in the format `![alt](src)`<br /><br />NB: I need to be very clear how this one works |
| markdownLink (optional) | object | Anything in the format `[alt](href)`<br /><br />It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |


