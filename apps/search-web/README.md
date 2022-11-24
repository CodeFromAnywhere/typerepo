# Search web

search-web (`OperationClassification` ui-web)


## 🔎 search

Search everywhere

NB: This is an experimental part of typerepo!



# Api reference

# Internal

<details><summary>Show internal (22)</summary>
    
  # getAllSearchResults()

Searches filepaths, then links to any `ui-web` that has this file available as a page, or vscode.

For this we need to get the `MarkdownReaderPage` and other pages that are available in ui's and see the files they are linked to.

I want to be able to:

- search functions, interfaces, variables
- search operations
- search markdown files, anywhere
- search db-ui models

But there's more. To make a good serach...

TODO:
- gather everything i've made before about search


| Input      |    |    |
| ---------- | -- | -- |
| query | string |  |
| **Output** | {  }[]   |    |



## getStaticPaths()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { fallback: string, <br />paths: {  }[], <br /> }   |    |



## getTimelineItems()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## `<HomePage />`

| Input      |    |    |
| ---------- | -- | -- |
| props | `QueryPageProps` |  |
| **Output** | `JSX.Element`   |    |



## `<MyApp />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<SearchBar />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { initialValue?: string, <br />placeholder?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## searchGetStaticProps()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## `<SearchResultComponent />`

If you click on a site that up and running, it should startup via pm2 before being redirected there


| Input      |    |    |
| ---------- | -- | -- |
| props | { searchResult: `SearchResult`, <br />index: number, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<SearchResultPage />`

| Input      |    |    |
| ---------- | -- | -- |
| props | `QueryPageProps` |  |
| **Output** | `JSX.Element`   |    |



## 🔹 QueryPageProps

Properties: 

 | Name | Type | Description |
|---|---|---|
| query  | string |  |
| searchResults  | object |  |
| imagePaths  | array |  |
| timelineItems  | array |  |



## 🔹 SearchResult

## 📄 getAllSearchResults (exported const)

Searches filepaths, then links to any `ui-web` that has this file available as a page, or vscode.

For this we need to get the `MarkdownReaderPage` and other pages that are available in ui's and see the files they are linked to.

I want to be able to:

- search functions, interfaces, variables
- search operations
- search markdown files, anywhere
- search db-ui models

But there's more. To make a good serach...

TODO:
- gather everything i've made before about search


## 📄 getStaticPaths (exported const)

## 📄 getStaticProps (exported const)

## 📄 getTimelineItems (exported const)

## 📄 HomePage (exported const)

## 📄 mindspaces (exported const)

## 📄 SearchBar (exported const)

## 📄 searchGetStaticProps (exported const)

## 📄 SearchResultComponent (exported const)

If you click on a site that up and running, it should startup via pm2 before being redirected there


## 📄 SearchResultPage (exported const)

## 📄 { StoreProvider, useStore } (exported const)

  </details>

