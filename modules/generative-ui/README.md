# Generative ui

generative-ui (`OperationClassification` ui-esm)



# Api reference

## `<MyLayout />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { pageProps: {  }, <br />nextPage: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<SettingsPage />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 MyLayout (exported const)

## 📄 SettingsPage (exported const)

## `<Dataset />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<NavButton />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<ReaderPageNext />`

ReaderPage to export for next project. Uses either the props from the next server, or if they're available, the props from the query.


| Input      |    |    |
| ---------- | -- | -- |
| props | `ReaderProps` |  |
| **Output** | `JSX.Element`   |    |



## 📄 Dataset (exported const)

## 📄 NavButton (exported const)

## 📄 ReaderPageNext (exported const)

ReaderPage to export for next project. Uses either the props from the next server, or if they're available, the props from the query.

# Internal

<details><summary>Show internal (23)</summary>
    
  # `<FileActions />`




| Input      |    |    |
| ---------- | -- | -- |
| props | { basePath?: string, <br />navigation?: `FolderContent`[], <br />projectRelativeFilePath?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<Menu />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { notFound?: boolean, <br />projectRelativeFilePath?: string, <br />folderPath?: string, <br />filename?: string, <br />isFolder?: boolean, <br />navigation?: `FolderContent`[], <br />contextualPromptsObject?: {  }, <br />fileContextualPromptResults?: `ContextualPromptResult`[], <br />thePrompts: `ContextualPrompt`[], <br />selectionContextualPromptResults?: `ContextualPromptResult`[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<PromptButton />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { item: `ContextualPrompt`, <br />markdown?: string, <br />contextSelection?: string, <br />projectRelativeFilePath?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<ReaderPage />`

| Input      |    |    |
| ---------- | -- | -- |
| props | `ReaderProps` |  |
| **Output** | `JSX.Element`   |    |



## `<SelectionPrompts />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## setConfig()

| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| disableAdmin | boolean |  |,| customAbsoluteBasePaths | string[] | TITLE: Absolute base path of your file system to show |
| **Output** |    |    |



## useAdmin()

Useful hook to make a static site dynamic for administrator


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { isAdminActive: boolean, <br />isLoading?: boolean, <br />refetch?: {  }, <br /> }   |    |



## useFileActions()

| Input      |    |    |
| ---------- | -- | -- |
| basePath (optional) | string |  |,| navigation (optional) | `FolderContent`[] |  |
| **Output** | { getIsEnabled?: {  }, <br />onClick: {  }, <br />getTitle: {  }, <br /> }[]   |    |



## useQueryPath()

Returns the queryPath of your URL without everything after ? and #


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## useVariantResult()

| Input      |    |    |
| ---------- | -- | -- |
| fileContextualPromptResults (optional) | {  } |  |
| **Output** |    |    |



## `<VariantSelector />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { projectRelativeFilePath?: string, <br />folderPath: string, <br />isFolder?: boolean, <br />filename?: string, <br />contextualPromptResults?: `ContextualPromptResult`[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 FileActions (exported const)

## 📄 Menu (exported const)

## 📄 PromptButton (exported const)

## 📄 ReaderPage (exported const)

## 📄 SelectionPrompts (exported const)

## 📄 setConfig (exported const)

## 📄 { StoreProvider, useStore } (exported const)

## 📄 useAdmin (exported const)

Useful hook to make a static site dynamic for administrator


## 📄 useFileActions (exported const)

## 📄 useQueryPath (exported const)

Returns the queryPath of your URL without everything after ? and #


## 📄 useVariantResult (exported const)

## 📄 VariantSelector (exported const)

  </details>

