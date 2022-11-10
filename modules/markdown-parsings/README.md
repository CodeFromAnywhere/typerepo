# Markdown parsings

markdown-parsings (node operation)



# Api reference

## operationToMarkdown()

converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.

markdown for reading (so there are no links)


| Input      |    |    |
| ---------- | -- | -- |
| config | { operationName: string, <br />manualProjectRoot?: string, <br />isSummary?: boolean, <br />mergeDocsInline?: boolean, <br />returnType?: parse / string / save, <br /> } |  |
| **Output** |    |    |



## 📄 operationToMarkdown (exported const)

converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.

markdown for reading (so there are no links)

# Internal

<details><summary>Show internal (69)</summary>
  
  # bundleFolderWithMarkdown()

finds all md files in a folder and creates a single MarkdownParse

handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way

NB: it recursively structures the files and folders with headings


| Input      |    |    |
| ---------- | -- | -- |
| outlineTitle | string |  |,| absoluteFolderPath | string |  |,| fileName (optional) | string | filename to include in the final MarkdownParse |
| **Output** |    |    |



## bundleToBookMarkdown()

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles


| Input      |    |    |
| ---------- | -- | -- |
| config | { bundleConfig: `BundleConfig`, <br />title?: string, <br />coverImagePath?: string, <br />isModulesIncluded?: boolean, <br />manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## bundleToMarkdown()

creates a summary for a whole bundle

NB: Related to `bundleToBookMd`


| Input      |    |    |
| ---------- | -- | -- |
| {
  bundleConfigId,
  includeModules,
} | { bundleConfigId: string, <br />includeModules?: boolean, <br /> } |  |
| **Output** | `String`   |    |



## deployToVercel()

NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...

should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api

should return an url where the project will be served and the estimated time when it will be live


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## emailMarkdownParse()

should email a markdown parse to some email (or multiple)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateStaticSite()

generates static site from a markdown file, with a menu on the right by default

uses next.js

because it is static, the markdown can be in the frontend assets and there is no need for a backend


| Input      |    |    |
| ---------- | -- | -- |
| {
  projectRelativeMdFilePath,
  singlePage,
} | { singlePage?: boolean, <br />projectRelativeMdFilePath?: string, <br /> } |  |
| **Output** |    |    |



## getJsonSchemaSummary()

Generates short markdown summary


| Input      |    |    |
| ---------- | -- | -- |
| schema (optional) | `JSONSchema7` |  |,| isMarkdown | boolean |  |
| **Output** | { typeDescriptor: string, <br />description?: string, <br /> }   |    |



## getMergedMarkdownOutlineUrl()

| Input      |    |    |
| ---------- | -- | -- |
| title | string |  |
| **Output** | { title: string, <br />hashtagPath: string, <br /> }   |    |



## getOutline()

low-level function that gets the outline for MarkdownParse

NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.


| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | `MarkdownParse` |  |
| **Output** | string   |    |



## getTitlesRecursively()

helper function to get a nested array of the titles and its subtitles


| Input      |    |    |
| ---------- | -- | -- |
| chunk | `MarkdownChunk` |  |
| **Output** |    |    |



## getTypeDescriptorRecursive()

Returns a single line descriptor of the type of a json schema. Can be used in markdown tables.


| Input      |    |    |
| ---------- | -- | -- |
| schema | `JSONSchema7` |  |,| isMarkdown | boolean | If true, references will be links, otherwise, just the name of the referred interface |
| **Output** | `String`   |    |



## isUpperCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** | {  }   |    |



## makeOutlineMarkdownString()

| Input      |    |    |
| ---------- | -- | -- |
| title | string |  |,| urls | `MergedMarkdownOutlineUrl`[] |  |
| **Output** | `String`   |    |



## makePropertiesTable()

| Input      |    |    |
| ---------- | -- | -- |
| properties (optional) | `SimplifiedSchemaProperty`[] |  |
| **Output** | `String`   |    |



## markdownChunkToMarkdownStringRecursive()

| Input      |    |    |
| ---------- | -- | -- |
| markdownChunk | `MarkdownChunk` |  |
| **Output** | `String`   |    |



## markdownChunksToMarkdownStringRecursive()

| Input      |    |    |
| ---------- | -- | -- |
| markdownChunks | `MarkdownChunk`[] |  |
| **Output** | `String`   |    |



## markdownToSayable()

all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.


| Input      |    |    |
| ---------- | -- | -- |
| {
  markdown,
  markdownFilePath,
} | { markdownFilePath: string, <br />markdown: `MarkdownParse`, <br /> } |  |
| **Output** | { sayableText?: string, <br />voiceFileRelativePath?: string, <br /> }[]   |    |



## mdToPdf()

Have function `mdToPdf` like the vscode plugin. Probably exists.

However, may be good to do it myself since I want different renderings


| Input      |    |    |
| ---------- | -- | -- |
| {
  absoluteFilePath,
  markdown,
  markdownParse,
  pdfAbsoluteFilePath,
} | { absoluteFilePath?: string, <br />markdown?: string, <br />markdownParse?: `MarkdownParse`, <br />pdfAbsoluteFilePath?: string, <br /> } |  |
| **Output** |    |    |



## mergeMarkdownParse()

Merges multiple markdown parses to create a new markdown parse


| Input      |    |    |
| ---------- | -- | -- |
| markdownParses | `MarkdownParse`[] |  |,| fileName (optional) | string |  |
| **Output** |    |    |



## noNewlines()

Replaces newlines with a <br />


| Input      |    |    |
| ---------- | -- | -- |
| markdown (optional) | string |  |
| **Output** | string   |    |



## operationRadio()

randomly plays mp3 summaries of operations on the project


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## printNestedTitles()

helper function (recursive) that prints nested titles with .. as prefix and a newline after every title

TODO: allow for numbering titles


| Input      |    |    |
| ---------- | -- | -- |
| nestedTitles (optional) | `NestedTitle`[] |  |,| depth (optional) | number |  |
| **Output** | string   |    |



## print()

should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)

this function maybe needs "generateStaticSite"


| Input      |    |    |
| ---------- | -- | -- |
| { absoluteFilePath } | { absoluteFilePath: string, <br /> } |  |
| **Output** |    |    |



## projectToMarkdown()

summarizes the whole OS project into a markdown string


| Input      |    |    |
| ---------- | -- | -- |
| {
  includeTodo,
} | { includeTodo?: boolean, <br />includeOperationDetails?: boolean, <br /> } |  |
| **Output** | `String`   |    |



## propertyToTableRow()

| Input      |    |    |
| ---------- | -- | -- |
| property | `SimplifiedSchemaProperty` |  |
| **Output** | `String`   |    |



## sayablesToMp3()

Creates a single audiofile of a Sayable[] and stores that in a configured location


| Input      |    |    |
| ---------- | -- | -- |
| {
  sayables,
  destinationAbsoluteFilePath,
} | { destinationAbsoluteFilePath: string, <br />sayables: `Sayable`[], <br /> } |  |
| **Output** |    |    |



## selectRandomOperation()

selects a random operation


| Input      |    |    |
| ---------- | -- | -- |
| baseFolderPath (optional) | string |  |
| **Output** |    |    |



## simplifiedSchemaToMarkdownString()

Should render a string with one or more markdown tables to represent the simplifiedSchema


| Input      |    |    |
| ---------- | -- | -- |
| simplifiedSchema (optional) | `SimplifiedSchema` |  |,| name (optional) | string | if not given, no title is printed |,| isRequired | boolean |  |,| level (optional) | number | the headers level, defaults to 1 |
| **Output** | `String`   |    |



## tsFunctionToMarkdownString()

TsFunction:
- name and operation
- size
- description (doc-comment)
- input, output


| Input      |    |    |
| ---------- | -- | -- |
| tsFunction | `TsFunction` |  |
| **Output** | `String`   |    |



## tsInterfaceToMarkdownString()

properties, their type, and their description

use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)


| Input      |    |    |
| ---------- | -- | -- |
| tsInterface | `TsInterface` |  |
| **Output** | `String`   |    |



## tsVariableToMarkdownString()

| Input      |    |    |
| ---------- | -- | -- |
| tsVariable | `TsVariable` |  |
| **Output** | `String`   |    |



## upMarkdownChunkLevelRecursively()

Ups the levels of the markdownChunk array, recursively.

Can be useful for merging multiple markdown sources


| Input      |    |    |
| ---------- | -- | -- |
| markdownChunks (optional) | `MarkdownChunk`[] |  |
| **Output** |    |    |



## 🔹 DependantCountObject

interface that lets us count the amount of dependant files in different item types





Properties: 

 | Name | Type | Description |
|---|---|---|
| tsFunction (optional) | object |  |
| tsInterface (optional) | object |  |
| tsVariable (optional) | object |  |
| externalDependantFiles  | array |  |



## 🔹 JsonPart

Properties: 

 | Name | Type | Description |
|---|---|---|
| identifier (optional) | string |  |
| json  | object |  |



## 🔹 MergedMarkdownOutlineUrl

Properties: 

 | Name | Type | Description |
|---|---|---|
| title  | string |  |
| hashtagPath  | string |  |



## 🔹 NestedTitle

## 🔹 Sayable

Properties: 

 | Name | Type | Description |
|---|---|---|
| sayableText (optional) | string |  |
| voiceFileRelativePath (optional) | string |  |



## 📄 bundleFolderWithMarkdown (exported const)

finds all md files in a folder and creates a single MarkdownParse

handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way

NB: it recursively structures the files and folders with headings


## 📄 bundleToBookMarkdown (exported const)

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles


## 📄 bundleToMarkdown (exported const)

creates a summary for a whole bundle

NB: Related to `bundleToBookMd`


## 📄 deployToVercel (exported const)

NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...

should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api

should return an url where the project will be served and the estimated time when it will be live


## 📄 emailMarkdownParse (exported const)

should email a markdown parse to some email (or multiple)


## 📄 generateStaticSite (exported const)

generates static site from a markdown file, with a menu on the right by default

uses next.js

because it is static, the markdown can be in the frontend assets and there is no need for a backend


## 📄 getJsonSchemaSummary (exported const)

Generates short markdown summary


## 📄 getMergedMarkdownOutlineUrl (exported const)

## 📄 getOutline (exported const)

low-level function that gets the outline for MarkdownParse

NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.


## 📄 getTitlesRecursively (exported const)

helper function to get a nested array of the titles and its subtitles


## 📄 getTypeDescriptorRecursive (exported const)

Returns a single line descriptor of the type of a json schema. Can be used in markdown tables.


## 📄 isUpperCase (exported const)

## 📄 makeOutlineMarkdownString (exported const)

## 📄 makePropertiesTable (exported const)

## 📄 markdownChunkToMarkdownStringRecursive (exported const)

## 📄 markdownChunksToMarkdownStringRecursive (exported const)

## 📄 markdownToSayable (exported const)

all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.


## 📄 mdToPdf (exported const)

Have function `mdToPdf` like the vscode plugin. Probably exists.

However, may be good to do it myself since I want different renderings


## 📄 mergeMarkdownParse (exported const)

Merges multiple markdown parses to create a new markdown parse


## 📄 noNewlines (exported const)

Replaces newlines with a <br />


## 📄 operationRadio (exported const)

randomly plays mp3 summaries of operations on the project


## 📄 printNestedTitles (exported const)

helper function (recursive) that prints nested titles with .. as prefix and a newline after every title

TODO: allow for numbering titles


## 📄 print (exported const)

should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)

this function maybe needs "generateStaticSite"


## 📄 projectToMarkdown (exported const)

summarizes the whole OS project into a markdown string


## 📄 propertyToTableRow (exported const)

## 📄 sayablesToMp3 (exported const)

Creates a single audiofile of a Sayable[] and stores that in a configured location


## 📄 selectRandomOperation (exported const)

selects a random operation


## 📄 simplifiedSchemaToMarkdownString (exported const)

Should render a string with one or more markdown tables to represent the simplifiedSchema


## 📄 tsFunctionToMarkdownString (exported const)

TsFunction:
- name and operation
- size
- description (doc-comment)
- input, output


## 📄 tsInterfaceToMarkdownString (exported const)

properties, their type, and their description

use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)


## 📄 tsVariableToMarkdownString (exported const)

## 📄 upMarkdownChunkLevelRecursively (exported const)

Ups the levels of the markdownChunk array, recursively.

Can be useful for merging multiple markdown sources
  </details>

