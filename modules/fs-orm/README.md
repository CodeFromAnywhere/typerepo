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

## Returns: unknown

## alterAny

low level function that alters data from any storage method at a certain location

comprises all dbStorageMethods

## Returns: unknown

## alterCsv

Alters a csv

## Returns: unknown

## alterJsonMultiple

Alters a json single file

## Returns: unknown

## alterJsonSingle

Alters a json single file

## Returns: unknown

## alterKeyValueMarkdown



## Returns: unknown

## alterMarkdown

Alters a markdown file

## Returns: unknown

## calculateOperationsObject

Needed in case of manual project root, otherwise use SDK!

## Returns: unknown

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







## getAugmentedData

Gets the stored data from any file with any storage method, and augments the modelLocation onto it...

## Returns: unknown

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

## Returns: unknown

## getDatabaseRootFolder

Tries to get the root folder where the database folder can be found.

If an operationName is specified, this will be the operation base path
If not, this will be the project root.

## Returns: unknown

## getDbFileLocation

Applies the convention to get the db-file-location of an item

Based on the merged config:

- if `operationRelativePath` is specified, gets a filePath in the operation
- if `projectRelativePath` is specified, gets a filepath in the project
- otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)

Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.

NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...

## Returns: unknown

## getDbStorageMethodExtension



### Returns: string







## getItemModelLocation



## Returns: unknown

## getLength

Safely gets the length of something

## Returns: unknown

## getLocationPattern

Returns the pattern or an exact relative path that the file(s) should be stored at. A star can be replaced with anything.

Returning relative path has no preceding slash

### Returns: string







## getParentSlug

get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)

can be undefined if the item has no parent

### Returns: string







## groupByFile



## Returns: unknown

## makeStoringItem



## Returns: unknown

## mergeConfigs



## Returns: unknown

## removeKeyValueMarkdown

Takes stored data and a slug to remove

## Returns: unknown

## removeMultiple

Function that lets you remove items from one specific file, for any storage method

## Returns: unknown

## test



## Returns: unknown

## upsertItems

upsert an item into storage in any storage method

## Returns: unknown

## upsertKeyValueMarkdown

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function

- otherwise inserts, at the right category, in the right place in the array

BEWARE:

- the categoryStackCalculated must be existing in the markdownfile.
- you cannot insert a header, always insert an item with `isHeaderCalculated:false`

## Returns: unknown

## upsert

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the id or slug)
- otherwise inserts

NB: this function works for any storage method except for key value markdown

## Returns: unknown

