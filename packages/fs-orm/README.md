# Fs orm

fs-orm (node operation)

ORM that works with JSON and FS



# Outline

## Docs

- [Getting started](#getting-started)

## Functions

- [addDefaultValues](#addDefaultValues)
- [alterAny](#alterAny)
- [alterCsv](#alterCsv)
- [alterJsonMultiple](#alterJsonMultiple)
- [alterJsonSingle](#alterJsonSingle)
- [alterKeyValueMarkdown](#alterKeyValueMarkdown)
- [alterMarkdown](#alterMarkdown)
- [augmentItemWithReferencedDataRecursively](#augmentItemWithReferencedDataRecursively)
- [calculateOperationsObject](#calculateOperationsObject)
- [createDb](#createDb)
- [findParent](#findParent)
- [getAugmentedData](#getAugmentedData)
- [getDatabaseFiles](#getDatabaseFiles)
- [getDatabaseRootFolder](#getDatabaseRootFolder)
- [getDbFileLocation](#getDbFileLocation)
- [getDbStorageMethodExtension](#getDbStorageMethodExtension)
- [getItemModelLocation](#getItemModelLocation)
- [getLength](#getLength)
- [getLocationPattern](#getLocationPattern)
- [getParentSlug](#getParentSlug)
- [groupByFile](#groupByFile)
- [makeStoringItem](#makeStoringItem)
- [mergeConfigs](#mergeConfigs)
- [removeKeyValueMarkdown](#removeKeyValueMarkdown)
- [removeMultiple](#removeMultiple)
- [test](#test)
- [upsertItems](#upsertItems)
- [upsertKeyValueMarkdown](#upsertKeyValueMarkdown)
- [upsert](#upsert)

## Interfaces:

- [AnyModelObject](#AnyModelObject)
- [AnyModelType](#AnyModelType)
- [AugmentedAnyModelType](#AugmentedAnyModelType)
- [CategoryStack](#CategoryStack)
- [CustomQueryConfig](#CustomQueryConfig)
- [DbFileLocation](#DbFileLocation)
- [DbQueryResult](#DbQueryResult)
- [DbStorageMethod](#DbStorageMethod)
- [Frontmatter](#Frontmatter)
- [IncludeConfig](#IncludeConfig)
- [IncludeDataObject](#IncludeDataObject)
- [Include](#Include)
- [KeyValueMarkdownModelType](#KeyValueMarkdownModelType)
- [MergedQueryConfig](#MergedQueryConfig)
- [ModelLocation](#ModelLocation)
- [QueryConfig](#QueryConfig)
- [RootDbFolder](#RootDbFolder)
- [UpsertKeyValueMarkdownItem](#UpsertKeyValueMarkdownItem)
- [UpsertQueryConfig](#UpsertQueryConfig)



# Docs

## Getting started

To get started with fs-orm, please have a look at the `db` package. This package shows you how to initiate a database object.

It is using a package `sdk-db` which you can create yourself (or generate, based on the models found in your monorepo)

From there, it's very easy to use fs-orm. For example, if you want to get all the `Todo` values, simply use something like this

```ts
const todos = await db.get("Todo");
```

Check the `createDb` function to see the exact type definition of all the function on the db-object. Otherwise you can just use Intellisense for it, you can easily understand everything that way.


# Functions

## addDefaultValues

Adds timestamps, id, and a slug IF these things are not already present

NB: for kvmd storage, id will be set to a kebab-case of the name

NB: does not add the ModelLocation parameters




## alterAny

low level function that alters data from any storage method at a certain location

comprises all dbStorageMethods




## alterCsv

Alters a csv




## alterJsonMultiple

Alters a json single file




## alterJsonSingle

Alters a json single file




## alterKeyValueMarkdown

## alterMarkdown

Alters a markdown file




## augmentItemWithReferencedDataRecursively

### Parameters (3)

#### Parameter 1: item: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



#### Parameter 2: includeArray: array

## calculateOperationsObject

Needed in case of manual project root, otherwise use SDK!

Returns project relative operation base paths




### Parameters (1)

#### Parameter 1: manualProjectRoot: string

## createDb

Create your database by passing your models as a generic and some optional configuration


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| get  | object |  |
| getByFile  | object |  |
| set  | object |  |
| remove  | object |  |
| update  | object |  |
| clear  | object |  |
| upsert  | object |  |



## findParent

this location matches any category that equals the categorystack


### Returns: boolean

### Parameters (2)

#### Parameter 2: newCategoryStack: array

- null: string






## getAugmentedData

Gets the stored data from any file with any storage method, and augments the modelLocation onto it...




### Parameters (2)

#### Parameter 1: dbFileLocation: object

> Object used to hand over all information about the location of a db-file in a structured way

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



#### Parameter 2: dbStorageMethod: string(Enum: jsonMultiple | jsonSingle | markdown | keyValueMarkdown | csv)

> The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used




## getDatabaseFiles

This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method.
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)




### Parameters (2)

#### Parameter 1: modelName: string

## getDatabaseRootFolder

Tries to get the root folder where the database folder can be found.

If an operationName is specified, this will be the operation base path
If not, this will be the project root.




### Parameters (2)

#### Parameter 1: operationName (optional): string

#### Parameter 2: manualProjectRoot (optional): string

## getDbFileLocation

Applies the convention to get the db-file-location of an item

Based on the merged config:

- if `operationRelativePath` is specified, gets a filePath in the operation
- if `projectRelativePath` is specified, gets a filepath in the project
- otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)

Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.

NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...




### Parameters (4)

#### Parameter 2: itemModelLocation: object

> Parameters that tell you about the location an instance of a model. Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |





#### Parameter 4: modelName: string

## getDbStorageMethodExtension

### Returns: string

### Parameters (1)

#### Parameter 1: dbStorageMethod: string(Enum: jsonMultiple | jsonSingle | markdown | keyValueMarkdown | csv)

> The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used




## getItemModelLocation

## getLength

Safely gets the length of something




## getLocationPattern

Returns the pattern or an exact relative path that the file(s) should be stored at. A star can be replaced with anything.

Returning relative path has no preceding slash


### Returns: string

### Parameters (3)

#### Parameter 1: dbStorageMethod: string(Enum: jsonMultiple | jsonSingle | markdown | keyValueMarkdown | csv)

> The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used




#### Parameter 2: modelName: string

## getParentSlug

get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)

can be undefined if the item has no parent


### Returns: string

### Parameters (1)

## groupByFile

## makeStoringItem

## mergeConfigs

## removeKeyValueMarkdown

Takes stored data and a slug to remove




### Parameters (2)

#### Parameter 1: storedData: array

#### Parameter 2: slug: string

> slug to remove




## removeMultiple

Function that lets you remove items from one specific file, for any storage method




## test

## upsertItems

upsert an item into storage in any storage method




## upsertKeyValueMarkdown

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function

- otherwise inserts, at the right category, in the right place in the array

BEWARE:

- the categoryStackCalculated must be existing in the markdownfile.
- you cannot insert a header, always insert an item with `isHeaderCalculated:false`




### Parameters (2)

#### Parameter 1: storedData: array

## upsert

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the id or slug)
- otherwise inserts

NB: this function works for any storage method except for key value markdown




### Parameters (2)

#### Parameter 1: storedData: array

> The items that were already there




#### Parameter 2: storingItems: object

> The items that need to be overwritten or inserted



# Interfaces

## AnyModelObject

## AnyModelType

Parameters that every model will always have.

NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.

NB: RelationTypes are also not always included for the same reason



> Parameters that every model will always have.<br /><br />NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.<br /><br />NB: RelationTypes are also not always included for the same reason

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## AugmentedAnyModelType

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## CategoryStack

- null: string






## CustomQueryConfig

NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.

Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.



> NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.<br /><br />Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |



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



## DbQueryResult

TODO: return the inserted id or other reference

Result of any query except `get`. Will not always provide all parameters (depends on the type of query you do)



> TODO: return the inserted id or other reference<br /><br />Result of any query except `get`. Will not always provide all parameters (depends on the type of query you do)

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccesful (optional) | boolean |  |
| message (optional) | string |  |
| isNewFile (optional) | boolean |  |
| amountInserted (optional) | number |  |
| amountUpdated (optional) | number |  |
| amountRemoved (optional) | number |  |



## DbStorageMethod

The following strategies are available to store the data.

- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`

- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`

- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`

- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`

- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`


### Definitions:

- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`
- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used



> The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used




## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes



> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes




## IncludeConfig

All possible ways to include items from references into a get query



> All possible ways to include items from references into a get query




## IncludeDataObject

## Include

Properties: 

 | Name | Type | Description |
|---|---|---|
| referenceKey (optional) | string | The key that contains a reference. The name of this key should follow the convention, e.g. `xxxSlug`. If this is given, `xxx` will be filled with the item of the referenced model. |
| items (optional) | array | If provided, the items will be filled from this array. If not provided, the required model will first be fetched using get. It is often more efficient to provide it yourself if you have already fetched it anyway. Nonetheless, `fs-orm` will try and reuse the fetched data to minimize amount of reads to the file system. |
| include (optional) | object | Optionally, you can provide another include config for this model |



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



## MergedQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| dbStorageMethod  | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |
| manualProjectRoot  | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath (optional) | string | if specified, only this location will be used |
| operationRelativePath (optional) | string | if specified, only this location will be used (also need an `operationName`) |



## ModelLocation

Parameters that tell you about the location an instance of a model. Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.



> Parameters that tell you about the location an instance of a model. Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## QueryConfig

QueryConfig is set on 4 levels, which have increasing priority

- hardcoded in `fs-orm`
- when calling `createDb`, setting `defaultQueryConfig`
- when calling `createDb`, setting `modelQueryConfig`
- when running a query

Not all options are available when running a query.



> QueryConfig is set on 4 levels, which have increasing priority<br /><br />- hardcoded in `fs-orm`<br />- when calling `createDb`, setting `defaultQueryConfig`<br />- when calling `createDb`, setting `modelQueryConfig`<br />- when running a query<br /><br />Not all options are available when running a query.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath (optional) | string | if specified, only this location will be used |
| operationRelativePath (optional) | string | if specified, only this location will be used (also need an `operationName`) |
| dbStorageMethod (optional) | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |



## RootDbFolder

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string | is an operation Base path in case of operationName is not null |
| operationName  | string |  |



## UpsertKeyValueMarkdownItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| item  | object | handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug |



## UpsertQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| removeUntouched (optional) | boolean | Special config for upsert. If you set this to true, all items in the databasefiles that were altered that you didn't specify in the items, will be removed. |
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |


