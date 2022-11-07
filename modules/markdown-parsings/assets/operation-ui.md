# Operation ui

operation-ui (ui-es6 operation)



# Outline

## Functions

- [BreadCrumbs](#BreadCrumbs)
- [BundleViewSelector](#BundleViewSelector)
- [FolderSummaryComponent](#FolderSummaryComponent)
- [Form](#Form)
- [FunctionForm](#FunctionForm)
- [getActivePage](#getActivePage)
- [getArrayType](#getArrayType)
- [getFirstEnum](#getFirstEnum)
- [getFolderExplorationElement](#getFolderExplorationElement)
- [getOneArrayType](#getOneArrayType)
- [getPageTitle](#getPageTitle)
- [getRefLink](#getRefLink)
- [getSchemaItems](#getSchemaItems)
- [getSchema](#getSchema)
- [getTypeDefinitionString](#getTypeDefinitionString)
- [getType](#getType)
- [goToOpenPage](#goToOpenPage)
- [humanReadableDate](#humanReadableDate)
- [IndexInstanceContainer](#IndexInstanceContainer)
- [k](#k)
- [Layout](#Layout)
- [makeField](#makeField)
- [makeItem](#makeItem)
- [MarkdownPage](#MarkdownPage)
- [MarkdownParseEdit](#MarkdownParseEdit)
- [MarkdownParsePresentation](#MarkdownParsePresentation)
- [MenuItem](#MenuItem)
- [OpenPages](#OpenPages)
- [Page](#Page)
- [renderBreadCrumbs](#renderBreadCrumbs)
- [renderIcon](#renderIcon)
- [renderLinkToFile](#renderLinkToFile)
- [renderOpenPage](#renderOpenPage)
- [renderPathMetaData](#renderPathMetaData)
- [renderSchema](#renderSchema)
- [SearchForm](#SearchForm)
- [sendEventToWindow](#sendEventToWindow)
- [SimplifiedSchemaFormDebug](#SimplifiedSchemaFormDebug)
- [Terminal](#Terminal)
- [TreeMenu](#TreeMenu)
- [TsCommentComponent](#TsCommentComponent)
- [TsFunctionComponent](#TsFunctionComponent)
- [TsInterfaceComponent](#TsInterfaceComponent)
- [TsVariableComponent](#TsVariableComponent)
- [TypeDefinition](#TypeDefinition)
- [useExploreProjectQuery](#useExploreProjectQuery)
- [useGetTsFunction](#useGetTsFunction)
- [useHotKey](#useHotKey)
- [useUrl](#useUrl)

## Interfaces

- [FolderSummary](#foldersummary)
- [FolderSummary](#foldersummary)
- [FunctionParameter](#functionparameter)
- [SizeSummary](#sizesummary)
- [SizeSummary](#sizesummary)
- [TypeIconEnum](#typeiconenum)
- [TypeIconEnum](#typeiconenum)

## Variables

- [BreadCrumbs](#breadcrumbs)
- [BundleViewSelector](#bundleviewselector)
- [codeColor](#codecolor)
- [dataColor](#datacolor)
- [date](#date)
- [datetime](#datetime)
- [defaultSize](#defaultsize)
- [{ exploreProject }](#exploreproject)
- [FolderSummaryComponent](#foldersummarycomponent)
- [Form](#form)
- [FunctionForm](#functionform)
- [getActivePage](#getactivepage)
- [getArrayType](#getarraytype)
- [getFirstEnum](#getfirstenum)
- [getFolderExplorationElement](#getfolderexplorationelement)
- [getOneArrayType](#getonearraytype)
- [getPageTitle](#getpagetitle)
- [getRefLink](#getreflink)
- [getSchemaItems](#getschemaitems)
- [getSchema](#getschema)
- [{ getTsFunction }](#gettsfunction)
- [getTypeDefinitionString](#gettypedefinitionstring)
- [getType](#gettype)
- [goToOpenPage](#gotoopenpage)
- [humanReadableDate](#humanreadabledate)
- [IndexInstanceContainer](#indexinstancecontainer)
- [initialValues](#initialvalues)
- [k](#k)
- [labels](#labels)
- [Layout](#layout)
- [makeField](#makefield)
- [makeItem](#makeitem)
- [MarkdownPage](#markdownpage)
- [MarkdownParseEdit](#markdownparseedit)
- [MarkdownParsePresentation](#markdownparsepresentation)
- [maximumStatementLines](#maximumstatementlines)
- [MenuItem](#menuitem)
- [number](#number)
- [OpenPages](#openpages)
- [pageKeys](#pagekeys)
- [Page](#page)
- [pagesObject](#pagesobject)
- [pages](#pages)
- [password](#password)
- [phone](#phone)
- [plugins](#plugins)
- [renderBreadCrumbs](#renderbreadcrumbs)
- [renderIcon](#rendericon)
- [renderLinkToFile](#renderlinktofile)
- [renderOpenPage](#renderopenpage)
- [renderPathMetaData](#renderpathmetadata)
- [renderSchema](#renderschema)
- [SearchForm](#searchform)
- [selectMultiple](#selectmultiple)
- [select](#select)
- [sendEventToWindow](#sendeventtowindow)
- [SimplifiedSchemaFormDebug](#simplifiedschemaformdebug)
- [stars](#stars)
- [StoreProvider](#storeprovider)
- [Terminal](#terminal)
- [textArea](#textarea)
- [textColor](#textcolor)
- [text](#text)
- [time](#time)
- [toggle](#toggle)
- [TreeMenu](#treemenu)
- [TsCommentComponent](#tscommentcomponent)
- [TsFunctionComponent](#tsfunctioncomponent)
- [TsInterfaceComponent](#tsinterfacecomponent)
- [TsVariableComponent](#tsvariablecomponent)
- [TypeDefinition](#typedefinition)
- [typeIcons](#typeicons)
- [useExploreProjectQuery](#useexploreprojectquery)
- [useGetTsFunction](#usegettsfunction)
- [useHotKey](#usehotkey)
- [useStore](#usestore)
- [useUrl](#useurl)
- [{ vscodeOpen, getFolderExplorationDetails }](#vscodeopen-getfolderexplorationdetails)
- [{ vscodeOpen }](#vscodeopen)



# Functions

## <BreadCrumbs />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <BundleViewSelector />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <FolderSummaryComponent />

Render folder summary:

- make piecharts showing distribution of code, data and text
- in files
- in lines
- in characters
- circles should become bigger depending on measured amount
- circles should have label inside saying the X files the K lines (2 numbers e.g. 0.2K) and the K or M characters/bytes (no decimal e.g. 90K)


| Input      |    |    |
| ---------- | -- | -- |
| folderSummary | `FolderSummary` |  |
| **Output** | ?   |    |



## <Form />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <FunctionForm />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getActivePage()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## getArrayType()

gets array type from


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getFirstEnum()

gets the first enum of a property of a definition

(DONT KNOW WHY)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## getFolderExplorationElement()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getOneArrayType()

TODO: Can probably omit this function as it's just passing to another function


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getPageTitle()

utility function to get a title from a page


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getRefLink()

gets the $ref from a schema and parses the interface name from it


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getSchemaItems()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getSchema()

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | object   |    |



## getTypeDefinitionString()

makes a string of a type interface


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## getType()

gets a type string from a schema


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## goToOpenPage()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## humanReadableDate()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <IndexInstanceContainer />

container for any index instance that needs to be rendered in the explore page


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## k()

| Input      |    |    |
| ---------- | -- | -- |
| number | number |  |
| **Output** | ?   |    |



## <Layout />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## makeField()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | object   |    |



## makeItem()

makes an select item for a key


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | object   |    |



## <MarkdownPage />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <MarkdownParseEdit />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <MarkdownParsePresentation />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <MenuItem />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <OpenPages />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <Page />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## renderBreadCrumbs()

| Input      |    |    |
| ---------- | -- | -- |
| chunks | string[] |  |
| **Output** | ?   |    |



## renderIcon()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## renderLinkToFile()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## renderOpenPage()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## renderPathMetaData()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## renderSchema()

renders a schema from a TsInterface type


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <SearchForm />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## sendEventToWindow()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <SimplifiedSchemaFormDebug />

| Input      |    |    |
| ---------- | -- | -- |
| {
  parameters,
  values,
} | { parameters?: `FunctionParameter`[], values: {  }[] } |  |
| **Output** | ?   |    |



## <Terminal />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <TreeMenu />

how to filter a recursive object with children of its own type?

1. if the object has children,


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <TsCommentComponent />

renders a TsComment interface nicely

TODO:

relativePathFromProjectRoot,
firstLine,
lastLine,


... need to be used to open the file at the right location.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <TsFunctionComponent />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <TsInterfaceComponent />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <TsVariableComponent />

renders a TsVariable interface nicely


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## <TypeDefinition />

renders a type definition interface


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## useExploreProjectQuery()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | object   |    |



## useGetTsFunction()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | object   |    |



## useHotKey()

hook that creates an eventlistener for keydown and cleans it up when needed


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |



## useUrl()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | ?   |    |


# Interfaces

## 🔷 FolderSummary

objective size measurements of all files in a folder

summary for a folder should contain file-summaries for different filetypes and an overal file summary



> objective size measurements of all files in a folder<br /><br />summary for a folder should contain file-summaries for different filetypes and an overal file summary

Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | object | type interface that can be used to summarize multiple files |
| textSize  | object | type interface that can be used to summarize multiple files |
| dataSize  | object | type interface that can be used to summarize multiple files |
| codeSize  | object | type interface that can be used to summarize multiple files |



## 🔷 FolderSummary

objective size measurements of all files in a folder

summary for a folder should contain file-summaries for different filetypes and an overal file summary





Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | object |  |
| textSize  | object |  |
| dataSize  | object |  |
| codeSize  | object |  |



## 🔷 FunctionParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| required  | boolean |  |



## 🔷 SizeSummary

type interface that can be used to summarize multiple files



> type interface that can be used to summarize multiple files

Properties: 

 | Name | Type | Description |
|---|---|---|
| numberOfFiles (optional) | number | if this is about multiple files, the number of files is specified here |
| characters  | number | amount of characters |
| lines  | number | amount of lines |
| bytes  | number | amount of bytes |
| linesPerFile  | number | rounded, amount of lines per file (averaged) |
| charactersPerLine  | number | rounded, amount of characters per line (averaged) |
| bytesPerCharacter  | number | rounded, amount of bytes per character |



## 🔷 SizeSummary

type interface that can be used to summarize multiple files





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



## 🔷 TypeIconEnum

## 🔷 TypeIconEnum

# Variables

## 📄 BreadCrumbs (exported const)

## 📄 BundleViewSelector (exported const)

## 📄 codeColor (unexported const)

## 📄 dataColor (unexported const)

## 📄 date (unexported const)

## 📄 datetime (unexported const)

## 📄 defaultSize (unexported const)

## 📄 { exploreProject } (unexported const)

## 📄 FolderSummaryComponent (exported const)

Render folder summary:

- make piecharts showing distribution of code, data and text
- in files
- in lines
- in characters
- circles should become bigger depending on measured amount
- circles should have label inside saying the X files the K lines (2 numbers e.g. 0.2K) and the K or M characters/bytes (no decimal e.g. 90K)


## 📄 Form (exported const)

## 📄 FunctionForm (unexported const)

## 📄 getActivePage (exported const)

## 📄 getArrayType (exported const)

gets array type from


## 📄 getFirstEnum (exported const)

gets the first enum of a property of a definition

(DONT KNOW WHY)


## 📄 getFolderExplorationElement (exported const)

## 📄 getOneArrayType (exported const)

TODO: Can probably omit this function as it's just passing to another function


## 📄 getPageTitle (exported const)

utility function to get a title from a page


## 📄 getRefLink (exported const)

gets the $ref from a schema and parses the interface name from it


## 📄 getSchemaItems (exported const)

## 📄 getSchema (exported const)

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it


## 📄 { getTsFunction } (unexported const)

## 📄 getTypeDefinitionString (exported const)

makes a string of a type interface


## 📄 getType (exported const)

gets a type string from a schema


## 📄 goToOpenPage (unexported const)

## 📄 humanReadableDate (unexported const)

## 📄 IndexInstanceContainer (exported const)

container for any index instance that needs to be rendered in the explore page


## 📄 initialValues (exported const)

## 📄 k (unexported const)

## 📄 labels (unexported const)

## 📄 Layout (exported const)

## 📄 makeField (exported const)

## 📄 makeItem (unexported const)

makes an select item for a key


## 📄 MarkdownPage (exported const)

## 📄 MarkdownParseEdit (unexported const)

## 📄 MarkdownParsePresentation (unexported const)

## 📄 maximumStatementLines (unexported const)

## 📄 MenuItem (exported const)

## 📄 number (unexported const)

## 📄 OpenPages (exported const)

## 📄 pageKeys (unexported const)

## 📄 Page (unexported const)

## 📄 pagesObject (exported const)

## 📄 pages (exported const)

## 📄 password (unexported const)

## 📄 phone (unexported const)

## 📄 plugins (unexported const)

## 📄 renderBreadCrumbs (exported const)

## 📄 renderIcon (unexported const)

## 📄 renderLinkToFile (unexported const)

## 📄 renderOpenPage (exported const)

## 📄 renderPathMetaData (unexported const)

## 📄 renderSchema (exported const)

renders a schema from a TsInterface type


## 📄 SearchForm (exported const)

## 📄 selectMultiple (unexported const)

## 📄 select (unexported const)

## 📄 sendEventToWindow (unexported const)

## 📄 SimplifiedSchemaFormDebug (exported const)

## 📄 stars (unexported const)

## 📄 StoreProvider (exported const)

## 📄 Terminal (unexported const)

## 📄 textArea (unexported const)

## 📄 textColor (unexported const)

## 📄 text (unexported const)

## 📄 time (unexported const)

## 📄 toggle (unexported const)

## 📄 TreeMenu (exported const)

how to filter a recursive object with children of its own type?

1. if the object has children,


## 📄 TsCommentComponent (exported const)

renders a TsComment interface nicely

TODO:

relativePathFromProjectRoot,
firstLine,
lastLine,


... need to be used to open the file at the right location.


## 📄 TsFunctionComponent (exported const)

## 📄 TsInterfaceComponent (exported const)

## 📄 TsVariableComponent (exported const)

renders a TsVariable interface nicely


## 📄 TypeDefinition (exported const)

renders a type definition interface


## 📄 typeIcons (exported const)

## 📄 useExploreProjectQuery (exported const)

## 📄 useGetTsFunction (unexported const)

## 📄 useHotKey (exported const)

hook that creates an eventlistener for keydown and cleans it up when needed


## 📄 useStore (exported const)

## 📄 useUrl (exported const)

## 📄 { vscodeOpen, getFolderExplorationDetails } (unexported const)

## 📄 { vscodeOpen } (unexported const)

