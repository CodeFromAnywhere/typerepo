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

## Variables

- [DbMenu](#dbmenu)
- [getDataParameterNames](#getdataparameternames)
- [getPageTitle](#getpagetitle)
- [IndexInstanceContainer](#indexinstancecontainer)
- [initialValues](#initialvalues)
- [Layout](#layout)
- [MenuItem](#menuitem)
- [ModelComponent](#modelcomponent)
- [pagesObject](#pagesobject)
- [pages](#pages)
- [SimplifiedSchemaFormDebug](#simplifiedschemaformdebug)
- [StoreProvider](#storeprovider)
- [UpsertForm](#upsertform)
- [useGetDbModelQuery](#usegetdbmodelquery)
- [useReferencableModelDataQuery](#usereferencablemodeldataquery)
- [useStore](#usestore)
- [useUrl](#useurl)



# Functions

## <DbMenu />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## getDataParameterNames()

| Input      |    |    |
| ---------- | -- | -- |
| properties | `SchemaProperty`[] |  |
| **Output** |    |    |



## getPageTitle()

utility function to get a title from a page


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## <IndexInstanceContainer />

container for any index instance that needs to be rendered in the explore page


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <Layout />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <MenuItem />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <ModelComponent />

In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


| Input      |    |    |
| ---------- | -- | -- |
| {
  modelName,
  highlight,
} | { modelName?: string, <br />highlight: { slug?: string, <br />id?: string, <br /> }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <Page />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <SimplifiedSchemaFormDebug />

| Input      |    |    |
| ---------- | -- | -- |
| {
  parameters,
  values,
} | { parameters?: `FunctionParameter`[], <br />values: {  }[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <UpsertForm />

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`


| Input      |    |    |
| ---------- | -- | -- |
| props | { simplifiedSchema: `SimplifiedSchema`, <br />instance: {  }, <br />referencableModelNames?: string[], <br />projectRelativeStorageFilePath: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## useGetDbModelQuery()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## useReferencableModelDataQuery()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## useUrl()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |


# Variables

## 📄 DbMenu (exported const)

## 📄 getDataParameterNames (exported const)

## 📄 getPageTitle (exported const)

utility function to get a title from a page


## 📄 IndexInstanceContainer (exported const)

container for any index instance that needs to be rendered in the explore page


## 📄 initialValues (exported const)

## 📄 Layout (exported const)

## 📄 MenuItem (exported const)

## 📄 ModelComponent (exported const)

In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


## 📄 pagesObject (exported const)

## 📄 pages (exported const)

## 📄 SimplifiedSchemaFormDebug (exported const)

## 📄 StoreProvider (exported const)

## 📄 UpsertForm (exported const)

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`


## 📄 useGetDbModelQuery (exported const)

## 📄 useReferencableModelDataQuery (exported const)

## 📄 useStore (exported const)

## 📄 useUrl (exported const)

