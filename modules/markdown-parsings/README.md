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
- [getOutline](#getOutline)
- [getTitlesRecursively](#getTitlesRecursively)
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
- [upMarkdownChunkLevelRecursively](#upMarkdownChunkLevelRecursively)

## Interfaces:

- [BundleConfig](#BundleConfig)
- [JsonPart](#JsonPart)
- [Json](#Json)
- [MarkdownChunk](#MarkdownChunk)
- [MarkdownParse](#MarkdownParse)
- [NestedTitle](#NestedTitle)
- [Sayable](#Sayable)
- [SimplifiedSchemaProperty](#SimplifiedSchemaProperty)
- [SimplifiedSchema](#SimplifiedSchema)
- [TsFunction](#TsFunction)
- [TsInterface](#TsInterface)



# Functions

## bundleFolderWithMarkdown

finds all md files in a folder and creates a single MarkdownParse

handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way

NB: it recursively structures the files and folders with headings




### Parameters (2)

#### Parameter 1: absoluteFolderPath: string

#### Parameter 2: fileName (optional): string

> filename to include in the final MarkdownParse




## bundleToBookMarkdown

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles




### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleConfig  | object | --- dbStorageMethod: jsonSingle<br />--- |
| title (optional) | string |  |
| coverImagePath (optional) | string |  |
| isModulesIncluded (optional) | boolean |  |
| manualProjectRoot (optional) | string |  |



## bundleToMarkdown

creates a summary for a whole bundle

NB: Related to `bundleToBookMd`


### Returns: string

### Parameters (1)

#### Parameter 1: {  bundleConfigId,  includeModules,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleConfigId  | string |  |
| includeModules (optional) | boolean | if true, also includes the private modules |



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

## getOutline

low-level function that gets the outline for MarkdownParse

NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.


### Returns: string

### Parameters (1)

#### Parameter 1: markdownParse: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string | if available, this can be the filename of the markdown in this markdown-parse. Can be used for things like merging |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |



## getTitlesRecursively

helper function to get a nested array of the titles and its subtitles




### Parameters (1)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |



## makePropertiesTable

### Returns: string

### Parameters (1)

#### Parameter 1: properties (optional): array

- SimplifiedSchemaProperty: object






## markdownChunkToMarkdownStringRecursive

### Returns: string

### Parameters (1)

#### Parameter 1: markdownChunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |



## markdownChunksToMarkdownStringRecursive

### Returns: string

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
| isSummary (optional) | boolean | if true, just returns the outline of the operation (function + interface names, size, deps) |
| mergeDocsInline (optional) | boolean | if true, it will merge all docs into the readme, not linking to them (by default, docs will be linked to) |
| returnType (optional) | string | save: saves the result in the operation `README.md` and `CONTRIBUTING.md` and other default md files<br /><br />string: returns the full markdown string<br /><br />parse: returns the markdownparse |



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


### Returns: string

### Parameters (1)

#### Parameter 1: {  includeTodo,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| includeTodo (optional) | boolean |  |
| includeOperationDetails (optional) | boolean |  |



## propertyToTableRow

### Returns: string

### Parameters (1)

#### Parameter 1: property: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| required  | boolean | NB: can't we put this in the SimplifiedSchema itself? |



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


### Returns: string

### Parameters (4)

#### Parameter 1: simplifiedSchema (optional): object

> JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |



#### Parameter 2: name (optional): string

> if not given, no title is printed




#### Parameter 3: isRequired: boolean

#### Parameter 4: level (optional): number

> the headers level, defaults to 1




## test

## tsFunctionToMarkdownString

TsFunction:
- name and operation
- size
- description (doc-comment)
- input, output


### Returns: string

### Parameters (1)

#### Parameter 1: tsFunction: object

> --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |



## tsInterfaceToMarkdownString

properties, their type, and their description

use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)


### Returns: string

### Parameters (1)

#### Parameter 1: tsInterface: object

> --- dbStorageMethod: jsonSingle<br />---<br /><br />TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |



## upMarkdownChunkLevelRecursively

Ups the levels of the markdownChunk array, recursively.

Can be useful for merging multiple markdown sources




### Parameters (1)

#### Parameter 1: markdownChunks (optional): array

- MarkdownChunk: object





# Interfaces

## BundleConfig

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| docsRelativeFolderPath (optional) | string | later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way. |
| readmeRelativeFilePath (optional) | string |  |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |



## JsonPart

Properties: 

 | Name | Type | Description |
|---|---|---|
| identifier (optional) | string |  |
| json  | object |  |



## Json

## MarkdownChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number | 0 is a paragraph 1-6 is h1 until h6 |
| content (optional) | string |  |
| markdownEmbed (optional) | object | Anything in the format `![alt](src)`<br /><br />NB: I need to be very clear how this one works |
| markdownLink (optional) | object | Anything in the format `[alt](href)`<br /><br />It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |



## MarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string | if available, this can be the filename of the markdown in this markdown-parse. Can be used for things like merging |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| parameters  | object | Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes |
| downmatterParameters (optional) | object |  |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |



## NestedTitle

## Sayable

Properties: 

 | Name | Type | Description |
|---|---|---|
| sayableText (optional) | string |  |
| voiceFileRelativePath (optional) | string |  |



## SimplifiedSchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object | JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form |
| required  | boolean | NB: can't we put this in the SimplifiedSchema itself? |



## SimplifiedSchema

JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form



> JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |



## TsFunction

Interface for arrow functions and normal functions



> --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| apiAuthenticationStrategy  | string | Still not sure if the user one is a good idea but there are probably some usecases that would really benefit to have a user-layer embedded in the king os system |
| description (optional) | string | a string that is known to contain markdown. |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| returnType  | object | all info that should always be collected when indexing any type interface |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| size  | object | type interface that can be used to summarize multiple files |
| commentSize (optional) | object | type interface that can be used to summarize multiple files |
| codeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCommentSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCodeSize (optional) | object | type interface that can be used to summarize multiple files |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |



## TsInterface

TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.



> --- dbStorageMethod: jsonSingle<br />---<br /><br />TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| type  | object | all info that should always be collected when indexing any type interface |
| description (optional) | string | a string that is known to contain markdown. |
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |
| dbStorageMethod (optional) | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |


