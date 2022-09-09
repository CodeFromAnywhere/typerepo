# Markdown parsings

markdown-parsings (node operation)

Size: 830 LOC, 1823 data characters, 6958 text characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: getOperationPath, getProjectRoot, log, db, BundleConfig, getBundleSummary, notEmpty, onlyUnique2, databaseFolderName, markdownParseToMarkdownString, mdToJsonParse, fs, path, explore, readMarkdownFile, humanCase, kebabCase, MarkdownParse, OperationIndex, SimplifiedSchema, SimplifiedSchemaProperty, TsFunction, TsInterface, getPackageJson, readJsonFile, Json, MarkdownParse, MarkdownParse, MarkdownParse, MarkdownChunk, MarkdownParse, mergeObjectsArray, humanCase, MarkdownChunk, MarkdownParse, MarkdownChunk

# Outline

## Functions

- [bundleFolderWithMarkdown](#bundleFolderWithMarkdown)
- [bundleToBookMd](#bundleToBookMd)
- [bundleToMd](#bundleToMd)
- [deployToVercel](#deployToVercel)
- [emailMarkdownParse](#emailMarkdownParse)
- [generateStaticSite](#generateStaticSite)
- [getOutline](#getOutline)
- [getTitlesRecursively](#getTitlesRecursively)
- [markdownChunkToMarkdownStringRecursive](#markdownChunkToMarkdownStringRecursive)
- [markdownChunksToMarkdownStringRecursive](#markdownChunksToMarkdownStringRecursive)
- [markdownToSayable](#markdownToSayable)
- [mdToPdf](#mdToPdf)
- [mergeMarkdownParse](#mergeMarkdownParse)
- [operationRadio](#operationRadio)
- [operationToMarkdown](#operationToMarkdown)
- [printNestedTitles](#printNestedTitles)
- [print](#print)
- [projectToMd](#projectToMd)
- [propertyToTableRow](#propertyToTableRow)
- [sayablesToMp3](#sayablesToMp3)
- [selectRandomOperation](#selectRandomOperation)
- [simplifiedSchemaToMarkdownString](#simplifiedSchemaToMarkdownString)
- [test](#test)
- [tsFunctionToMarkdownString](#tsFunctionToMarkdownString)
- [tsInterfaceToMarkdownString](#tsInterfaceToMarkdownString)
- [upMarkdownChunkLevelRecursively](#upMarkdownChunkLevelRecursively)



# Functions

## bundleFolderWithMarkdown

Max. indexation depth: 6, 

finds all md files in a folder and creates a single MarkdownParse

handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way

NB: it recursively structures the files and folders with headings

## Returns: unknown

## bundleToBookMd

Max. indexation depth: 5, 

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles

## Returns: unknown

## bundleToMd

Max. indexation depth: 2, 

creates a summary for a whole bundle

NB: Related to `bundleToBookMd`

### Returns: string







## deployToVercel

Max. indexation depth: 0, 

NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...

should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api

should return an url where the project will be served and the estimated time when it will be live

## Returns: unknown

## emailMarkdownParse

Max. indexation depth: 0, 

should email a markdown parse to some email (or multiple)

## Returns: unknown

## generateStaticSite

Max. indexation depth: 1, 

generates static site from a markdown file, with a menu on the right by default

uses next.js

because it is static, the markdown can be in the frontend assets and there is no need for a backend

## Returns: unknown

## getOutline

Max. indexation depth: 1, 

low-level function that gets the outline for MarkdownParse

NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.

### Returns: string







## getTitlesRecursively

Max. indexation depth: 2, 

helper function to get a nested array of the titles and its subtitles

## Returns: unknown

## markdownChunkToMarkdownStringRecursive

Max. indexation depth: 3, 



### Returns: string







## markdownChunksToMarkdownStringRecursive

Max. indexation depth: 2, 



### Returns: string







## markdownToSayable

Max. indexation depth: 2, 

all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.

### Returns: array

- null: object





## mdToPdf

Max. indexation depth: 1, 

Have function `mdToPdf` like the vscode plugin. Probably exists.

However, may be good to do it myself since I want different renderings

## Returns: unknown

## mergeMarkdownParse

Max. indexation depth: 3, 

Merges multiple markdown parses to create a new markdown parse

## Returns: unknown

## operationRadio

Max. indexation depth: 0, 

randomly plays mp3 summaries of operations on the project

## Returns: unknown

## operationToMarkdown

Max. indexation depth: 5, 

converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.

markdown for reading (so there are no links)

## Returns: unknown

## printNestedTitles

Max. indexation depth: 4, 

helper function (recursive) that prints nested titles with .. as prefix and a newline after every title

TODO: allow for numbering titles

### Returns: string







## print

Max. indexation depth: 2, 

should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)

this function maybe needs "generateStaticSite"

## Returns: unknown

## projectToMd

Max. indexation depth: 1, 

summarizes the whole OS project into a markdown string

### Returns: string







## propertyToTableRow

Max. indexation depth: 2, 



### Returns: string







## sayablesToMp3

Max. indexation depth: 1, 

Creates a single audiofile of a Sayable[] and stores that in a configured location

## Returns: unknown

## selectRandomOperation

Max. indexation depth: 1, 

selects a random operation

## Returns: unknown

## simplifiedSchemaToMarkdownString

Max. indexation depth: 5, 

Should render a string with one or more markdown tables to represent the simplifiedSchema

### Returns: string







## test

Max. indexation depth: 2, 



## Returns: unknown

## tsFunctionToMarkdownString

Max. indexation depth: 7, 

TsFunction:
- name and operation
- size
- description (doc-comment)
- input, output

### Returns: string







## tsInterfaceToMarkdownString

Max. indexation depth: 2, 

properties, their type, and their description

use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)

### Returns: string







## upMarkdownChunkLevelRecursively

Max. indexation depth: 2, 

Ups the levels of the markdownChunk array, recursively.

Can be useful for merging multiple markdown sources

## Returns: unknown

