# Db crud

db-crud (`OperationClassification` ui-cjs)



# Api reference

# Internal

<details><summary>Show internal (20)</summary>
    
  # `<DbPage />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## getDataParameterNames()

| Input      |    |    |
| ---------- | -- | -- |
| properties | `SchemaProperty`[] |  |
| **Output** |    |    |



## `<IndexInstanceContainer />`

container for any index instance that needs to be rendered in the explore page


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<ModelComponent />`

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



## `<SimplifiedSchemaFormDebug />`

| Input      |    |    |
| ---------- | -- | -- |
| {
  parameters,
  values,
} | { parameters?: `FunctionParameter`[], <br />values: {  }[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<UpsertForm />`

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`


| Input      |    |    |
| ---------- | -- | -- |
| props | { simplifiedSchema: `SimplifiedSchema`, <br />instance: {  }, <br />referencableModelNames?: string[], <br />projectRelativeStorageFilePath: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<UpsertPage />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useGetDbModelQuery()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## useModelQuery()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## useUrl()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 DbPage (exported const)

## 📄 getDataParameterNames (exported const)

## 📄 IndexInstanceContainer (exported const)

container for any index instance that needs to be rendered in the explore page


## 📄 ModelComponent (exported const)

In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


## 📄 SimplifiedSchemaFormDebug (exported const)

## 📄 UpsertForm (exported const)

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`


## 📄 UpsertPage (exported const)

## 📄 useGetDbModelQuery (exported const)

## 📄 useModelQuery (exported const)

## 📄 useUrl (exported const)

  </details>

