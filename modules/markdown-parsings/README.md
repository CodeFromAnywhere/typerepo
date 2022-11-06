# Markdown parsings

markdown-parsings (node operation)



# Outline

## Functions

- [bundleFolderWithMarkdown](#bundleFolderWithMarkdown)
- [bundleToBookMarkdown](#bundleToBookMarkdown)
- [bundleToMarkdown](#bundleToMarkdown)
- [deployToVercel](#deployToVercel)
- [emailMarkdownParse](#emailMarkdownParse)
- [generateStaticSite](#generateStaticSite)
- [getFunctionsInfo](#getFunctionsInfo)
- [getMergedMarkdownOutlineUrl](#getMergedMarkdownOutlineUrl)
- [getOutline](#getOutline)
- [getTitlesRecursively](#getTitlesRecursively)
- [makeOutlineMarkdownString](#makeOutlineMarkdownString)
- [makePropertiesTable](#makePropertiesTable)
- [markdownChunkToMarkdownStringRecursive](#markdownChunkToMarkdownStringRecursive)
- [markdownChunksToMarkdownStringRecursive](#markdownChunksToMarkdownStringRecursive)
- [markdownToSayable](#markdownToSayable)
- [mdToPdf](#mdToPdf)
- [mergeMarkdownParse](#mergeMarkdownParse)
- [noNewlines](#noNewlines)
- [operationRadio](#operationRadio)
- [operationToMarkdown](#operationToMarkdown)
- [printNestedTitles](#printNestedTitles)
- [print](#print)
- [projectToMarkdown](#projectToMarkdown)
- [propertyToTableRow](#propertyToTableRow)
- [sayablesToMp3](#sayablesToMp3)
- [selectRandomOperation](#selectRandomOperation)
- [simplifiedSchemaToMarkdownString](#simplifiedSchemaToMarkdownString)
- [test](#test)
- [tsFunctionToMarkdownString](#tsFunctionToMarkdownString)
- [tsInterfaceToMarkdownString](#tsInterfaceToMarkdownString)
- [tsVariableToMarkdownString](#tsVariableToMarkdownString)
- [upMarkdownChunkLevelRecursively](#upMarkdownChunkLevelRecursively)

## Interfaces

- [BundleConfig](#bundleconfig)
- [Json](#json)
- [JsonPart](#jsonpart)
- [MarkdownChunk](#markdownchunk)
- [MarkdownParse](#markdownparse)
- [MergedMarkdownOutlineUrl](#mergedmarkdownoutlineurl)
- [NestedTitle](#nestedtitle)
- [Sayable](#sayable)
- [SimplifiedSchema](#simplifiedschema)
- [SimplifiedSchemaProperty](#simplifiedschemaproperty)
- [TsFunction](#tsfunction)
- [TsInterface](#tsinterface)
- [TsVariable](#tsvariable)

## Variables

- [bundleFolderWithMarkdown](#bundlefolderwithmarkdown)
- [bundleToBookMarkdown](#bundletobookmarkdown)
- [bundleToMarkdown](#bundletomarkdown)
- [deployToVercel](#deploytovercel)
- [emailMarkdownParse](#emailmarkdownparse)
- [generateStaticSite](#generatestaticsite)
- [getFunctionsInfo](#getfunctionsinfo)
- [getMergedMarkdownOutlineUrl](#getmergedmarkdownoutlineurl)
- [getOutline](#getoutline)
- [getTitlesRecursively](#gettitlesrecursively)
- [makeOutlineMarkdownString](#makeoutlinemarkdownstring)
- [makePropertiesTable](#makepropertiestable)
- [markdownChunkToMarkdownStringRecursive](#markdownchunktomarkdownstringrecursive)
- [markdownChunksToMarkdownStringRecursive](#markdownchunkstomarkdownstringrecursive)
- [markdownToSayable](#markdowntosayable)
- [mdToPdf](#mdtopdf)
- [mergeMarkdownParse](#mergemarkdownparse)
- [noNewlines](#nonewlines)
- [operationRadio](#operationradio)
- [operationToMarkdown](#operationtomarkdown)
- [printNestedTitles](#printnestedtitles)
- [print](#print)
- [projectToMarkdown](#projecttomarkdown)
- [propertyToTableRow](#propertytotablerow)
- [sayablesToMp3](#sayablestomp3)
- [selectRandomOperation](#selectrandomoperation)
- [simplifiedSchemaToMarkdownString](#simplifiedschematomarkdownstring)
- [test](#test)
- [tsFunctionToMarkdownString](#tsfunctiontomarkdownstring)
- [tsInterfaceToMarkdownString](#tsinterfacetomarkdownstring)
- [tsVariableToMarkdownString](#tsvariabletomarkdownstring)
- [upMarkdownChunkLevelRecursively](#upmarkdownchunklevelrecursively)



# Functions

## bundleFolderWithMarkdown

finds all md files in a folder and creates a single MarkdownParse

handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way

NB: it recursively structures the files and folders with headings




### Parameters (3)

#### Parameter 1: outlineTitle: string

#### Parameter 2: absoluteFolderPath: string

#### Parameter 3: fileName (optional): string

## bundleToBookMarkdown

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles




### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleConfig  | object |  |
| title (optional) | string |  |
| coverImagePath (optional) | string |  |
| isModulesIncluded (optional) | boolean |  |
| manualProjectRoot (optional) | string |  |



## bundleToMarkdown

creates a summary for a whole bundle

NB: Related to `bundleToBookMd`




### Parameters (1)

#### Parameter 1: {  bundleConfigId,  includeModules,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleConfigId  | string |  |
| includeModules (optional) | boolean |  |



## deployToVercel

NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...

should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api

should return an url where the project will be served and the estimated time when it will be live




## emailMarkdownParse

should email a markdown parse to some email (or multiple)




## generateStaticSite

generates static site from a markdown file, with a menu on the right by default

uses next.js

because it is static, the markdown can be in the frontend assets and there is no need for a backend




### Parameters (1)

#### Parameter 1: {  projectRelativeMdFilePath,  singlePage,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| singlePage (optional) | boolean |  |
| projectRelativeMdFilePath (optional) | string |  |



## getFunctionsInfo

### Parameters (1)

#### Parameter 1: operationName: string

## getMergedMarkdownOutlineUrl

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| title  | string |  |
| hashtagPath  | string |  |



### Parameters (1)

#### Parameter 1: title: string

## getOutline

low-level function that gets the outline for MarkdownParse

NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.


### Returns: string

### Parameters (1)

#### Parameter 1: markdownParse: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string |  |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| content (optional) | array |  |
| raw  | string |  |



## getTitlesRecursively

helper function to get a nested array of the titles and its subtitles




### Parameters (1)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string |  |
| children (optional) | array |  |



## makeOutlineMarkdownString

### Parameters (2)

#### Parameter 1: title: string

#### Parameter 2: urls: array

## makePropertiesTable

### Parameters (1)

#### Parameter 1: properties (optional): array

- SimplifiedSchemaProperty: object






## markdownChunkToMarkdownStringRecursive

### Parameters (1)

#### Parameter 1: markdownChunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string |  |
| children (optional) | array |  |



## markdownChunksToMarkdownStringRecursive

### Parameters (1)

#### Parameter 1: markdownChunks: array

- MarkdownChunk: object






## markdownToSayable

all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: {  markdown,  markdownFilePath,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| markdownFilePath  | string |  |
| markdown  | object |  |



## mdToPdf

Have function `mdToPdf` like the vscode plugin. Probably exists.

However, may be good to do it myself since I want different renderings




### Parameters (1)

#### Parameter 1: {  absoluteFilePath,  markdown,  markdownParse,  pdfAbsoluteFilePath,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| absoluteFilePath (optional) | string |  |
| markdown (optional) | string |  |
| markdownParse (optional) | object |  |
| pdfAbsoluteFilePath (optional) | string |  |



## mergeMarkdownParse

Merges multiple markdown parses to create a new markdown parse




### Parameters (2)

#### Parameter 1: markdownParses: array

- MarkdownParse: object






#### Parameter 2: fileName (optional): string

## noNewlines

### Returns: string

### Parameters (1)

#### Parameter 1: markdown (optional): string

## operationRadio

randomly plays mp3 summaries of operations on the project




## operationToMarkdown

converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.

markdown for reading (so there are no links)




### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | string |  |
| manualProjectRoot (optional) | string |  |
| isSummary (optional) | boolean |  |
| mergeDocsInline (optional) | boolean |  |
| returnType (optional) | string |  |



## printNestedTitles

helper function (recursive) that prints nested titles with .. as prefix and a newline after every title

TODO: allow for numbering titles


### Returns: string

### Parameters (2)

#### Parameter 1: nestedTitles (optional): array

- NestedTitle: object






#### Parameter 2: depth (optional): number

## print

should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)

this function maybe needs "generateStaticSite"




### Parameters (1)

#### Parameter 1: { absoluteFilePath }: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| absoluteFilePath  | string |  |



## projectToMarkdown

summarizes the whole OS project into a markdown string




### Parameters (1)

#### Parameter 1: {  includeTodo,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| includeTodo (optional) | boolean |  |
| includeOperationDetails (optional) | boolean |  |



## propertyToTableRow

### Parameters (1)

#### Parameter 1: property: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| required  | boolean |  |



## sayablesToMp3

Creates a single audiofile of a Sayable[] and stores that in a configured location




### Parameters (1)

#### Parameter 1: {  sayables,  destinationAbsoluteFilePath,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| destinationAbsoluteFilePath  | string |  |
| sayables  | array |  |



## selectRandomOperation

selects a random operation




### Parameters (1)

#### Parameter 1: baseFolderPath (optional): string

## simplifiedSchemaToMarkdownString

Should render a string with one or more markdown tables to represent the simplifiedSchema




### Parameters (4)

#### Parameter 1: simplifiedSchema (optional): object

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
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |



#### Parameter 2: name (optional): string

#### Parameter 3: isRequired: boolean

#### Parameter 4: level (optional): number

## test

## tsFunctionToMarkdownString

TsFunction:
- name and operation
- size
- description (doc-comment)
- input, output




### Parameters (1)

#### Parameter 1: tsFunction: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| parameters (optional) | array |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## tsInterfaceToMarkdownString

properties, their type, and their description

use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)




### Parameters (1)

#### Parameter 1: tsInterface: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |



## tsVariableToMarkdownString

### Parameters (1)

#### Parameter 1: tsVariable: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| description (optional) | string |  |
| value  | string |  |
| classification  | string |  |
| isExported  | boolean |  |
| comments  | array |  |



## upMarkdownChunkLevelRecursively

Ups the levels of the markdownChunk array, recursively.

Can be useful for merging multiple markdown sources




### Parameters (1)

#### Parameter 1: markdownChunks (optional): array

- MarkdownChunk: object





# Interfaces

## BundleConfig

Configuration options for bundles. Used with `generateBundle`

Everything in this model will be copied over to the created bundle, except for `createBundleConfig` and `customisableBundleConfig`.





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| bundleMarkdownReaderConfig (optional) | object |  |
| slug  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| customisableBundleConfig  | object |  |
| createBundleConfig  | object |  |



## Json

## JsonPart

Properties: 

 | Name | Type | Description |
|---|---|---|
| identifier (optional) | string |  |
| json  | object |  |



## MarkdownChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number |  |
| content (optional) | string |  |
| markdownEmbed (optional) | object |  |
| markdownLink (optional) | object |  |
| title (optional) | string |  |
| children (optional) | array |  |



## MarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string |  |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| parameters  | object |  |
| downmatterParameters (optional) | object |  |
| content (optional) | array |  |
| raw  | string |  |



## MergedMarkdownOutlineUrl

Properties: 

 | Name | Type | Description |
|---|---|---|
| title  | string |  |
| hashtagPath  | string |  |



## NestedTitle

## Sayable

Properties: 

 | Name | Type | Description |
|---|---|---|
| sayableText (optional) | string |  |
| voiceFileRelativePath (optional) | string |  |



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



## SimplifiedSchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |
| required  | boolean |  |



## TsFunction

Interface for arrow functions and normal functions





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| runEveryPeriod (optional) | string |  |
| description (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| returnType  | object |  |
| parameters (optional) | array |  |
| size  | object |  |
| commentSize (optional) | object |  |
| codeSize (optional) | object |  |
| cumulativeSize (optional) | object |  |
| cumulativeCommentSize (optional) | object |  |
| cumulativeCodeSize (optional) | object |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## TsInterface

TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| type  | object |  |
| description (optional) | string |  |
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |
| dbStorageMethod (optional) | string |  |



## TsVariable

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| description (optional) | string |  |
| value  | string |  |
| classification  | string |  |
| type  | object |  |
| isExported  | boolean |  |
| comments  | array |  |


# Variables

## bundleFolderWithMarkdown (exported const)

finds all md files in a folder and creates a single MarkdownParse

handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way

NB: it recursively structures the files and folders with headings


## bundleToBookMarkdown (exported const)

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles


## bundleToMarkdown (exported const)

creates a summary for a whole bundle

NB: Related to `bundleToBookMd`


## deployToVercel (exported const)

NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...

should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api

should return an url where the project will be served and the estimated time when it will be live


## emailMarkdownParse (exported const)

should email a markdown parse to some email (or multiple)


## generateStaticSite (exported const)

generates static site from a markdown file, with a menu on the right by default

uses next.js

because it is static, the markdown can be in the frontend assets and there is no need for a backend


## getFunctionsInfo (exported const)

## getMergedMarkdownOutlineUrl (exported const)

## getOutline (exported const)

low-level function that gets the outline for MarkdownParse

NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.


## getTitlesRecursively (exported const)

helper function to get a nested array of the titles and its subtitles


## makeOutlineMarkdownString (exported const)

## makePropertiesTable (exported const)

## markdownChunkToMarkdownStringRecursive (exported const)

## markdownChunksToMarkdownStringRecursive (exported const)

## markdownToSayable (exported const)

all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.


## mdToPdf (exported const)

Have function `mdToPdf` like the vscode plugin. Probably exists.

However, may be good to do it myself since I want different renderings


## mergeMarkdownParse (exported const)

Merges multiple markdown parses to create a new markdown parse


## noNewlines (exported const)

## operationRadio (exported const)

randomly plays mp3 summaries of operations on the project


## operationToMarkdown (exported const)

converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.

markdown for reading (so there are no links)


## printNestedTitles (exported const)

helper function (recursive) that prints nested titles with .. as prefix and a newline after every title

TODO: allow for numbering titles


## print (exported const)

should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)

this function maybe needs "generateStaticSite"


## projectToMarkdown (exported const)

summarizes the whole OS project into a markdown string


## propertyToTableRow (exported const)

## sayablesToMp3 (exported const)

Creates a single audiofile of a Sayable[] and stores that in a configured location


## selectRandomOperation (exported const)

selects a random operation


## simplifiedSchemaToMarkdownString (exported const)

Should render a string with one or more markdown tables to represent the simplifiedSchema


## test (unexported const)

## tsFunctionToMarkdownString (exported const)

TsFunction:
- name and operation
- size
- description (doc-comment)
- input, output


## tsInterfaceToMarkdownString (exported const)

properties, their type, and their description

use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)


## tsVariableToMarkdownString (exported const)

## upMarkdownChunkLevelRecursively (exported const)

Ups the levels of the markdownChunk array, recursively.

Can be useful for merging multiple markdown sources

