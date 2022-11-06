# Db ui

db-ui (ui-es6 operation)

Visual user interface for interacting with all available data in the typebase fs-orm database.




# Outline

## Functions

- [DbMenu](#DbMenu)
- [getDataParameterNames](#getDataParameterNames)
- [getPageTitle](#getPageTitle)
- [IndexInstanceContainer](#IndexInstanceContainer)
- [Layout](#Layout)
- [MenuItem](#MenuItem)
- [ModelComponent](#ModelComponent)
- [Page](#Page)
- [SimplifiedSchemaFormDebug](#SimplifiedSchemaFormDebug)
- [UpsertForm](#UpsertForm)
- [useGetDbModelQuery](#useGetDbModelQuery)
- [useReferencableModelDataQuery](#useReferencableModelDataQuery)
- [useUrl](#useUrl)

## Interfaces

- [FunctionParameter](#functionparameter)
- [SchemaProperty](#schemaproperty)
- [SimplifiedSchema](#simplifiedschema)

## Variables

- [DbMenu](#dbmenu)
- [defaultLimit](#defaultlimit)
- [{ deleteDbModel }](#deletedbmodel)
- [getDataParameterNames](#getdataparameternames)
- [{ getDbModel }](#getdbmodel)
- [getPageTitle](#getpagetitle)
- [IndexInstanceContainer](#indexinstancecontainer)
- [initialValues](#initialvalues)
- [Layout](#layout)
- [MenuItem](#menuitem)
- [ModelComponent](#modelcomponent)
- [pageKeys](#pagekeys)
- [Page](#page)
- [pagesObject](#pagesobject)
- [pages](#pages)
- [SimplifiedSchemaFormDebug](#simplifiedschemaformdebug)
- [StoreProvider](#storeprovider)
- [title](#title)
- [{ upsertDbModel }](#upsertdbmodel)
- [UpsertForm](#upsertform)
- [{ useGetDatabaseMenu }](#usegetdatabasemenu)
- [useGetDbModelQuery](#usegetdbmodelquery)
- [useReferencableModelDataQuery](#usereferencablemodeldataquery)
- [useStore](#usestore)
- [useUrl](#useurl)



# Functions

## DbMenu

## getDataParameterNames

### Parameters (1)

#### Parameter 1: properties: array

- SchemaProperty: object






## getPageTitle

utility function to get a title from a page




## IndexInstanceContainer

container for any index instance that needs to be rendered in the explore page




## Layout

## MenuItem

## ModelComponent

In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows




### Parameters (1)

#### Parameter 1: {  modelName,  highlight,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| modelName (optional) | string |  |
| highlight  | object |  |



## Page

## SimplifiedSchemaFormDebug

### Parameters (1)

#### Parameter 1: {  parameters,  values,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters (optional) | array |  |
| values  | array |  |



## UpsertForm

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`




### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| simplifiedSchema  | object |  |
| instance  | object |  |
| referencableModelNames (optional) | array |  |
| projectRelativeStorageFilePath  | string |  |



## useGetDbModelQuery

### Returns: object

## useReferencableModelDataQuery

### Returns: object

## useUrl

# Interfaces

## FunctionParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| required  | boolean |  |



## SchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |
| required  | boolean |  |



## SimplifiedSchema

JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form





Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |
| type  | string |  |
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |


# Variables

## DbMenu (exported const)

## defaultLimit (unexported const)

## { deleteDbModel } (unexported const)

## getDataParameterNames (exported const)

## { getDbModel } (unexported const)

## getPageTitle (exported const)

utility function to get a title from a page


## IndexInstanceContainer (exported const)

container for any index instance that needs to be rendered in the explore page


## initialValues (exported const)

## Layout (exported const)

## MenuItem (exported const)

## ModelComponent (exported const)

In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


## pageKeys (unexported const)

## Page (unexported const)

## pagesObject (exported const)

## pages (exported const)

## SimplifiedSchemaFormDebug (exported const)

## StoreProvider (exported const)

## title (unexported const)

## { upsertDbModel } (unexported const)

## UpsertForm (exported const)

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`


## { useGetDatabaseMenu } (unexported const)

## useGetDbModelQuery (exported const)

## useReferencableModelDataQuery (exported const)

## useStore (exported const)

## useUrl (exported const)

