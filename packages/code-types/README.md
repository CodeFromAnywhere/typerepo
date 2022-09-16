# Code types

code-types (js operation)



# Outline

## Functions

- [markdownParseToMarkdownModelType](#markdownParseToMarkdownModelType)
- [parseMarkdownModelTimestamp](#parseMarkdownModelTimestamp)
- [tryParseDate](#tryParseDate)

## Models:

- [MarkdownFileConfig](#MarkdownFileConfig)
- [OperationConfig](#OperationConfig)
- [OperationIndex](#OperationIndex)
- [PackageJson](#PackageJson)
- [TsBuildError](#TsBuildError)
- [TsComment](#TsComment)
- [TsConfig](#TsConfig)
- [TsExport](#TsExport)
- [TsFunction](#TsFunction)
- [TsImport](#TsImport)
- [TsInterface](#TsInterface)
- [TsLintWarning](#TsLintWarning)
- [TsVariable](#TsVariable)

## Interfaces:

- [AnyModelType](#AnyModelType)
- [ApiAuthenticationStrategy](#ApiAuthenticationStrategy)
- [CategorizedFilePaths](#CategorizedFilePaths)
- [CategoryStack](#CategoryStack)
- [CommentType](#CommentType)
- [CompilerOptions](#CompilerOptions)
- [DbStorageMethod](#DbStorageMethod)
- [Downmatter](#Downmatter)
- [ExplorationDetails](#ExplorationDetails)
- [FolderExploration](#FolderExploration)
- [FolderSummary](#FolderSummary)
- [Frontmatter](#Frontmatter)
- [FunctionParameter](#FunctionParameter)
- [GeneralOperationIndex](#GeneralOperationIndex)
- [ImportClassification](#ImportClassification)
- [IndexModels](#IndexModels)
- [JSONSchema7Type](#JSONSchema7Type)
- [MarkdownAssetType](#MarkdownAssetType)
- [MarkdownChunk](#MarkdownChunk)
- [MarkdownContentLevel](#MarkdownContentLevel)
- [MarkdownEmbed](#MarkdownEmbed)
- [MarkdownFile](#MarkdownFile)
- [MarkdownHeader](#MarkdownHeader)
- [MarkdownIndex](#MarkdownIndex)
- [MarkdownLink](#MarkdownLink)
- [MarkdownModelType](#MarkdownModelType)
- [MarkdownParagraph](#MarkdownParagraph)
- [MarkdownParse](#MarkdownParse)
- [Markdown](#Markdown)
- [MaybeInteface](#MaybeInteface)
- [ModelInfo](#ModelInfo)
- [OperationClassification](#OperationClassification)
- [OperationPathParse](#OperationPathParse)
- [PackageInfoObject](#PackageInfoObject)
- [ParameterName](#ParameterName)
- [PathMetaData](#PathMetaData)
- [PathParse](#PathParse)
- [ProjectType](#ProjectType)
- [Schema](#Schema)
- [SensibleConfig](#SensibleConfig)
- [SimplifiedSchemaItem](#SimplifiedSchemaItem)
- [SimplifiedSchemaProperty](#SimplifiedSchemaProperty)
- [SimplifiedSchemaType](#SimplifiedSchemaType)
- [SimplifiedSchema](#SimplifiedSchema)
- [SizeSummary](#SizeSummary)
- [SlugModelType](#SlugModelType)
- [Slug](#Slug)
- [Stats](#Stats)
- [TextJson](#TextJson)
- [TsIndexModelType](#TsIndexModelType)
- [TypeCoverage](#TypeCoverage)
- [TypeInfo](#TypeInfo)
- [TypescriptIndex](#TypescriptIndex)



# Functions

## markdownParseToMarkdownModelType

makes a markdownModelType from a markdownParse.




### Parameters (1)

#### Parameter 1: markdownParse: object

## parseMarkdownModelTimestamp

First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent

If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system

If that doesn't succeed, sometimes we'll set it to  the current timestamp


### Returns: number

### Parameters (3)

#### Parameter 1: parameters: object

> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes






#### Parameter 3: parameterName: string(Enum: createdAt | createdFirstAt | updatedAt | deletedAt | openedAt)

## tryParseDate

Tries to parse a date from a string
- implements default behavior of `new Date` with a try catch
- returns a unix timestamp (ms since 1970 AD)

TODO: put in a better location... date-util?


### Returns: number

### Parameters (1)

#### Parameter 1: dateString: string

# Models

## MarkdownFileConfig

markdown model



every markdown file should have these optional parameters that can be declared as its frontmatter

NB: can't this just be part of MarkdownModelType? no, I think it's better if MarkdownModelType is very barebones, this would make it too connected



> every markdown file should have these optional parameters that can be declared as its frontmatter<br /><br />NB: can't this just be part of MarkdownModelType? no, I think it's better if MarkdownModelType is very barebones, this would make it too connected

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| name  | string | human readable version of filename |
| slug  | string | slugified filename |
| markdown  | string | the content of the markdown |
| isDraft (optional) | boolean |  |
| privacy  | string |  |
| itemId (optional) | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| cta (optional) | string | `[button text](url)` |
| headerImage (optional) | string | `![alt](url)` |
| headerTitle (optional) | string |  |
| headerSubTitle (optional) | string |  |



## OperationConfig

markdown model




anything configurable about the operation.

Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.

Let's try to use OPERATION.md

TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.



> --- operationRelativePath: OPERATION.md isOperationIndex: true<br />---<br /><br />anything configurable about the operation.<br /><br />Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.<br /><br />Let's try to use OPERATION.md<br /><br />TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| name  | string | human readable version of filename |
| slug  | string | slugified filename |
| markdown  | string | Any descriptions in markdown format<br /><br />- Markdown description of what the operation does.<br />- Installation instructions, if it is possible<br />- Usage instructions (with example), if available<br /><br />This is the main content of the markdown file |
| indirectDependencies (optional) | array | Sometimes you are using function in a UI, which cannot be inferred with imports because they are used indirectly via an api. Here you can specify which operations on the backend are needed for an operation (ui mostly)<br /><br />This array is simply a list of operation names needed for this operation that are not imported.<br /><br />NB: no need to specify things here that you also import in this operation, because these are already automatically detected. |
| authors (optional) | array | A list of authors<br /><br />Should be used to create bundle AUTHORS.md |
| contributors (optional) | array | A list of contributors<br /><br />Can be used to create bundle CONTRIBUTORS.md |
| shortDescriptionText (optional) | string | one-line explanation of what the operation does (no markdown) |



## OperationIndex

jsonSingle model




contains all calculated info about an operation that needs to be retreived often:
some package-only things, but also a collection of all indexes of all files

should be able to be found in operaiton folder in /db/operation-index.json



> --- dbStorageMethod: jsonSingle operationRelativePath: db/operation-index.json<br />---<br /><br />contains all calculated info about an operation that needs to be retreived often: some package-only things, but also a collection of all indexes of all files<br /><br />should be able to be found in operaiton folder in /db/operation-index.json

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string | all currently supported languages |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | here for compatibility, should implement... |
| packageName  | string | name of the package in package.json |
| folderName  | string | name of the operation folder |
| relativeOperationLocationPath  | string | relative path to the operation (does not include operation folder itself)<br /><br />relative from project root |
| classification  | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| packageDependencies  | array | package dependency names (non-operation) |
| operationDependencies  | array | operation dependency names |
| coreDependencies  | array | core dependencies (e.g. `path` and `fs`) |
| buildSucceeded  | boolean |  |
| dependenciesBuildsFailed  | boolean |  |
| indexImportExportError  | string |  |
| lintProblems  | array |  |
| indexInteracesErrors  | array |  |
| indexErrors  | array |  |
| size  | object | objective size measurements of all files in a folder<br /><br />summary for a folder should contain file-summaries for different filetypes and an overal file summary |



## PackageJson

jsonSingle model







> --- dbStorageMethod: jsonSingle operationRelativePath: package.json<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| sensible (optional) | object | Sensible-global configurations |
| operation (optional) | object | --- operationRelativePath: OPERATION.md isOperationIndex: true<br />---<br /><br />anything configurable about the operation.<br /><br />Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.<br /><br />Let's try to use OPERATION.md<br /><br />TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention. |



## TsBuildError

jsonMultiple model









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
| line (optional) | number |  |
| character (optional) | number |  |
| message  | string |  |



## TsComment

jsonMultiple model



comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.

special line prefixes:
- TODO:
- DISCUSSION:
- IDEA:
- LATER:
- NB:

The convention should be that single-line comments should start with that. This then becomes the type of the comment.
You can also put multiple prefixes at the start.

Example:

`// TODO: NB: this is a todo but its also important`

Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.



There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.
- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...
- privacy
- ...?

NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!

NB: comments are part of the code, so they should always be in English!



> comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.<br /><br />special line prefixes:<br />- TODO:<br />- DISCUSSION:<br />- IDEA:<br />- LATER:<br />- NB:<br /><br />The convention should be that single-line comments should start with that. This then becomes the type of the comment. You can also put multiple prefixes at the start.<br /><br />Example:<br /><br />`// TODO: NB: this is a todo but its also important`<br /><br />Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.<br /><br /><br /><br />There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.<br />- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...<br />- privacy<br />- ...?<br /><br />NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!<br /><br />NB: comments are part of the code, so they should always be in English!

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
| comment  | string | a string that is known to contain markdown. |
| parameters  | object | Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes |
| types  | array | These are the type indicators that were found in this single or multiline comment. Can be multiple. |
| firstLine  | number | first line of the comment |
| lastLine  | number | last line of the comment |
| statementName (optional) | string | statement name the comment belongs to |
| rawStatement (optional) | string | raw statement text the comment belongs to |



## TsConfig

jsonSingle model




would be nice if we have a type interface for this, just like package.json
for now just type the stuff we need



> --- dbStorageMethod: jsonSingle operationRelativePath: tsconfig.json<br />---<br /><br />would be nice if we have a type interface for this, just like package.json for now just type the stuff we need

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| include (optional) | array |  |
| exclude (optional) | array |  |
| compilerOptions  | object |  |



## TsExport

jsonMultiple model









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
| comments  | array | surrounding comments and comments inside of the import |
| type (optional) | string |  |
| alias (optional) | string | used for duplicate export names |
| hasGeneric (optional) | boolean | only for type exports. tells you whether or not the type has one or more generic parameter(s) |



## TsFunction

jsonSingle model




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



## TsImport

jsonMultiple model









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
| comments  | array | surrounding comments and comments inside of the import |
| module  | string |  |
| alias (optional) | string | TODO: not sure, but I believe alias should be defined at the import, not at the export, right? |
| classification  | string | node: node core packages like fs and path<br /><br />react: react standard packages like react, react-native, expo, react-dom, etc.<br /><br />package: packages from npm that are not classified as operations<br /><br />operation: operations from our monorepo<br /><br />internal: imports from other places in the same operation<br /><br />NB: don't confuse this with OperationClassification |
| type (optional) | string | sometimes the import statement module referenced cannot be found, in that case it cannot be known whether the import should contain a type or value, so it will be undefined. |
| hasGeneric (optional) | boolean | only for type exports. tells you whether or not the type has one or more generic parameter(s) |
| isAbsolute  | boolean |  |
| isModuleResolved  | boolean |  |
| isModuleFromMonorepo  | boolean |  |



## TsInterface

jsonSingle model




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



## TsLintWarning

jsonMultiple model









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
| line  | number |  |
| character  | number |  |
| message  | string |  |



## TsVariable

jsonSingle model







> --- dbStorageMethod: jsonSingle<br />---

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
| value  | string |  |
| classification  | string |  |
| type  | object | all info that should always be collected when indexing any type interface |
| isExported  | boolean |  |
| comments  | array | surrounding comments and comments inside of the variable |


# Interfaces

## AnyModelType

Parameters that every model will always have.

NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.

NB: RelationTypes are also not always included for the same reason



> Parameters that every model will always have.<br /><br />NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.<br /><br />NB: RelationTypes are also not always included for the same reason

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## ApiAuthenticationStrategy

Still not sure if the user one is a good idea but there are probably some usecases that would really benefit to have a user-layer embedded in the king os system



> Still not sure if the user one is a good idea but there are probably some usecases that would really benefit to have a user-layer embedded in the king os system




## CategorizedFilePaths

filepaths categorized based on the filetype. With king os there are only these filetypes:

- code: ts, tsx
- data: json
- text: md, mdx



> filepaths categorized based on the filetype. With king os there are only these filetypes:<br /><br />- code: ts, tsx<br />- data: json<br />- text: md, mdx

Properties: 

 | Name | Type | Description |
|---|---|---|
| code  | array |  |
| data  | array |  |
| text  | array |  |



## CategoryStack

- null: string






## CommentType

## CompilerOptions

Properties: 

 | Name | Type | Description |
|---|---|---|
| allowJs (optional) | boolean |  |
| allowSyntheticDefaultImports (optional) | boolean |  |
| allowUmdGlobalAccess (optional) | boolean |  |
| allowUnreachableCode (optional) | boolean |  |
| allowUnusedLabels (optional) | boolean |  |
| alwaysStrict (optional) | boolean |  |
| baseUrl (optional) | string |  |
| charset (optional) | string |  |
| checkJs (optional) | boolean |  |
| declaration (optional) | boolean |  |
| declarationMap (optional) | boolean |  |
| emitDeclarationOnly (optional) | boolean |  |
| declarationDir (optional) | string |  |
| disableSizeLimit (optional) | boolean |  |
| disableSourceOfProjectReferenceRedirect (optional) | boolean |  |
| disableSolutionSearching (optional) | boolean |  |
| disableReferencedProjectLoad (optional) | boolean |  |
| downlevelIteration (optional) | boolean |  |
| emitBOM (optional) | boolean |  |
| emitDecoratorMetadata (optional) | boolean |  |
| exactOptionalPropertyTypes (optional) | boolean |  |
| experimentalDecorators (optional) | boolean |  |
| forceConsistentCasingInFileNames (optional) | boolean |  |
| importHelpers (optional) | boolean |  |
| importsNotUsedAsValues (optional) | number |  |
| inlineSourceMap (optional) | boolean |  |
| inlineSources (optional) | boolean |  |
| isolatedModules (optional) | boolean |  |
| jsx (optional) | number |  |
| keyofStringsOnly (optional) | boolean |  |
| lib (optional) | array |  |
| locale (optional) | string |  |
| mapRoot (optional) | string |  |
| maxNodeModuleJsDepth (optional) | number |  |
| module (optional) | number |  |
| moduleResolution (optional) | number |  |
| moduleSuffixes (optional) | array |  |
| moduleDetection (optional) | number |  |
| newLine (optional) | number |  |
| noEmit (optional) | boolean |  |
| noEmitHelpers (optional) | boolean |  |
| noEmitOnError (optional) | boolean |  |
| noErrorTruncation (optional) | boolean |  |
| noFallthroughCasesInSwitch (optional) | boolean |  |
| noImplicitAny (optional) | boolean |  |
| noImplicitReturns (optional) | boolean |  |
| noImplicitThis (optional) | boolean |  |
| noStrictGenericChecks (optional) | boolean |  |
| noUnusedLocals (optional) | boolean |  |
| noUnusedParameters (optional) | boolean |  |
| noImplicitUseStrict (optional) | boolean |  |
| noPropertyAccessFromIndexSignature (optional) | boolean |  |
| assumeChangesOnlyAffectDirectDependencies (optional) | boolean |  |
| noLib (optional) | boolean |  |
| noResolve (optional) | boolean |  |
| noUncheckedIndexedAccess (optional) | boolean |  |
| out (optional) | string |  |
| outDir (optional) | string |  |
| outFile (optional) | string |  |
| paths (optional) | object | Type of objects whose values are all of the same type. The `in` and `for-in` operators can *not* be safely used, since `Object.prototype` may be modified by outside code. |
| preserveConstEnums (optional) | boolean |  |
| noImplicitOverride (optional) | boolean |  |
| preserveSymlinks (optional) | boolean |  |
| preserveValueImports (optional) | boolean |  |
| project (optional) | string |  |
| reactNamespace (optional) | string |  |
| jsxFactory (optional) | string |  |
| jsxFragmentFactory (optional) | string |  |
| jsxImportSource (optional) | string |  |
| composite (optional) | boolean |  |
| incremental (optional) | boolean |  |
| tsBuildInfoFile (optional) | string |  |
| removeComments (optional) | boolean |  |
| rootDir (optional) | string |  |
| rootDirs (optional) | array |  |
| skipLibCheck (optional) | boolean |  |
| skipDefaultLibCheck (optional) | boolean |  |
| sourceMap (optional) | boolean |  |
| sourceRoot (optional) | string |  |
| strict (optional) | boolean |  |
| strictFunctionTypes (optional) | boolean |  |
| strictBindCallApply (optional) | boolean |  |
| strictNullChecks (optional) | boolean |  |
| strictPropertyInitialization (optional) | boolean |  |
| stripInternal (optional) | boolean |  |
| suppressExcessPropertyErrors (optional) | boolean |  |
| suppressImplicitAnyIndexErrors (optional) | boolean |  |
| target (optional) | number |  |
| traceResolution (optional) | boolean |  |
| useUnknownInCatchVariables (optional) | boolean |  |
| resolveJsonModule (optional) | boolean |  |
| types (optional) | array |  |
| typeRoots (optional) | array | Paths used to compute primary types search locations |
| esModuleInterop (optional) | boolean |  |
| useDefineForClassFields (optional) | boolean |  |



## DbStorageMethod

The following strategies are available to store the data.

- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`

- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`

- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`

- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`

- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`


### Definitions:

- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`
- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used



> The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used




## Downmatter

Properties: 

 | Name | Type | Description |
|---|---|---|
| detectedLanguage (optional) | string |  |
| labels (optional) | array |  |



## ExplorationDetails

Properties: 

 | Name | Type | Description |
|---|---|---|
| tsBuildErrors (optional) | array |  |
| tsLintWarnings (optional) | array |  |
| tsFunctions (optional) | array |  |
| tsVariables (optional) | array |  |
| tsInterfaces (optional) | array |  |
| tsComments (optional) | array |  |
| tsImports (optional) | array |  |
| tsExports (optional) | array |  |
| success (optional) | boolean |  |
| response (optional) | string |  |
| markdown (optional) | object |  |
| pathMetaData (optional) | object | All interesting metadata about any path (files and folders) |
| operationIndexes (optional) | array |  |
| index  | array |  |



## FolderExploration

suggested type for menu is FolderExploration[]

NB: recursive!



> suggested type for menu is FolderExploration[]<br /><br />NB: recursive!

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| relativeProjectPath  | string | path to the folder, operation, operationFolder, or file. functions, interfaces or variables direct to the file they are defined in |
| children (optional) | array | Every FolderExploration has children, which are simply the files/folders that can be found in there. The children of files are functions, interfaces and variables for typescript files. Markdownfiles don't get any children (although we could childify the outline of the file, maybe, later...) |



## FolderSummary

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



## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes



> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes




## FunctionParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |
| simplifiedSchema (optional) | object | JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form |
| required  | boolean |  |



## GeneralOperationIndex

Properties: 

 | Name | Type | Description |
|---|---|---|
| updatedAt  | number |  |
| name  | string |  |
| slug  | string |  |
| packageName  | string | name of the package in package.json |
| folderName  | string | name of the operation folder |
| relativeOperationLocationPath  | string | relative path to the operation (does not include operation folder itself)<br /><br />relative from project root |
| classification  | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| packageDependencies  | array | package dependency names (non-operation) |
| operationDependencies  | array | operation dependency names |
| coreDependencies  | array | core dependencies (e.g. `path` and `fs`) |



## ImportClassification

node: node core packages like fs and path

react: react standard packages like react, react-native, expo, react-dom, etc.

package: packages from npm that are not classified as operations

operation: operations from our monorepo

internal: imports from other places in the same operation

NB: don't confuse this with OperationClassification



> node: node core packages like fs and path<br /><br />react: react standard packages like react, react-native, expo, react-dom, etc.<br /><br />package: packages from npm that are not classified as operations<br /><br />operation: operations from our monorepo<br /><br />internal: imports from other places in the same operation<br /><br />NB: don't confuse this with OperationClassification




## IndexModels

Properties: 

 | Name | Type | Description |
|---|---|---|
| TsBuildError  | object |  |
| TsLintWarning  | object |  |
| TsFunction  | object | --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions |
| TsVariable  | object | --- dbStorageMethod: jsonSingle<br />--- |
| TsInterface  | object | --- dbStorageMethod: jsonSingle<br />---<br /><br />TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell. |
| TsComment  | object | comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.<br /><br />special line prefixes:<br />- TODO:<br />- DISCUSSION:<br />- IDEA:<br />- LATER:<br />- NB:<br /><br />The convention should be that single-line comments should start with that. This then becomes the type of the comment. You can also put multiple prefixes at the start.<br /><br />Example:<br /><br />`// TODO: NB: this is a todo but its also important`<br /><br />Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.<br /><br /><br /><br />There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.<br />- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...<br />- privacy<br />- ...?<br /><br />NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!<br /><br />NB: comments are part of the code, so they should always be in English! |
| TsImport  | object |  |
| TsExport  | object |  |



## JSONSchema7Type

Primitive type



> Primitive type




## MarkdownAssetType

type of asset that is being embedded



> type of asset that is being embedded




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



## MarkdownContentLevel

0 is a paragraph
1-6 is h1 until h6



> 0 is a paragraph 1-6 is h1 until h6




## MarkdownEmbed

Anything in the format `![alt](src)`

NB: I need to be very clear how this one works



> Anything in the format `![alt](src)`<br /><br />NB: I need to be very clear how this one works

Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| src  | string |  |
| type  | string | type of asset that is being embedded |



## MarkdownFile

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| name  | string | human readable version of filename |
| slug  | string | slugified filename |
| markdown  | string | the content of the markdown |
| isDraft (optional) | boolean |  |
| privacy  | string |  |
| itemId (optional) | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| cta (optional) | string | `[button text](url)` |
| headerImage (optional) | string | `![alt](url)` |
| headerTitle (optional) | string |  |
| headerSubTitle (optional) | string |  |
| detectedLanguage  | string |  |
| labels  | array |  |



## MarkdownHeader

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number | 0 is a paragraph 1-6 is h1 until h6 |
| title  | string |  |



## MarkdownIndex

This could hold anything that we can index about a markdown-file

It should probably also be posted in the markdown file itself as "downmatter", if that's a good idea



> This could hold anything that we can index about a markdown-file<br /><br />It should probably also be posted in the markdown file itself as "downmatter", if that's a good idea

Properties: 

 | Name | Type | Description |
|---|---|---|
| detectedLanguage  | string |  |
| labels  | array |  |



## MarkdownLink

Anything in the format `[alt](href)`

It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here



> Anything in the format `[alt](href)`<br /><br />It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here

Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| href  | string |  |
| type  | string | type of asset that is being embedded |



## MarkdownModelType

Handy model type for storing stuff in a Markdown file.

1 markdown file will represent 1 MarkdownModelType extended instance

another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content

TODO: see how this relates to MarkdownFile. Make this very clear!



> Handy model type for storing stuff in a Markdown file.<br /><br />1 markdown file will represent 1 MarkdownModelType extended instance<br /><br />another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content<br /><br />TODO: see how this relates to MarkdownFile. Make this very clear!

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| name  | string | human readable version of filename |
| slug  | string | slugified filename |
| markdown  | string | the content of the markdown |



## MarkdownParagraph

Properties: 

 | Name | Type | Description |
|---|---|---|
| paragraph  | string | the raw text of this paragraph |
| categoryStackCalculated  | array |  |
| level (optional) | number | 0 is a paragraph 1-6 is h1 until h6 |



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



## Markdown

a string that is known to contain markdown.



> a string that is known to contain markdown.




## MaybeInteface

at some point in processing we need this interface where definition can also be null



> at some point in processing we need this interface where definition can also be null

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | object | all info that should always be collected when indexing any type interface |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
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



## ModelInfo

used to show a list of models available in a menu structure



> used to show a list of models available in a menu structure

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| slug  | string |  |
| rows  | number |  |



## OperationClassification

## Classification

TODO: think about what the differences are and how we need to change processes to make it all work good

### Possible values

js: only js (no node) (well, ts of course)

node: includes other node packages, operations, core-imports, or globals.

server: exposes something on some port when it is ran and uses node code

web: uses react and exposes something on some port when it is ran

app: uses react-native and exposes something on some port when it is ran

ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)

ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)



> # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)




## OperationPathParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as operationRelativeTypescriptFilePath but without extension)<br /><br />e.g. "general"<br /><br />TODO: figure out if this can be omitted |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |



## PackageInfoObject

## ParameterName

Properties: 

 | Name | Type | Description |
|---|---|---|
| pattern  | string |  |
| example  | string |  |
| description  | string |  |
| type  | string |  |
| secondaryType (optional) | string |  |
| contentType  | array |  |



## PathMetaData

All interesting metadata about any path (files and folders)



> All interesting metadata about any path (files and folders)

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| mainComment (optional) | object | comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.<br /><br />special line prefixes:<br />- TODO:<br />- DISCUSSION:<br />- IDEA:<br />- LATER:<br />- NB:<br /><br />The convention should be that single-line comments should start with that. This then becomes the type of the comment. You can also put multiple prefixes at the start.<br /><br />Example:<br /><br />`// TODO: NB: this is a todo but its also important`<br /><br />Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.<br /><br /><br /><br />There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.<br />- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...<br />- privacy<br />- ...?<br /><br />NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!<br /><br />NB: comments are part of the code, so they should always be in English! |
| fullFileName (optional) | string | filename including extension, if the path is not a folder |
| isFolder  | boolean |  |
| updatedAt  | number | unix time this file was last updated (or for folders: unix time of last modifiation of any file in this folder, recursively)<br /><br />TODO: renames also count as updates, I guess. Needs to be clear! |
| createdAt  | number | unix time this file was created (or for folders: unix time of creation of the first file in this folder)<br /><br />TODO: figure out if we can get the creation date of the folder itself? |
| sizes  | object | objective size measurements of all files in a folder<br /><br />summary for a folder should contain file-summaries for different filetypes and an overal file summary |



## PathParse

object to represent a folder or file path in different ways

NB: doesn't include the absolute path so the indexes can be exported easily witout creating incorrect paths



> object to represent a folder or file path in different ways<br /><br />NB: doesn't include the absolute path so the indexes can be exported easily witout creating incorrect paths

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |



## ProjectType

DEPRECATED: TODO: should use OperationClassification



> DEPRECATED: TODO: should use OperationClassification




## Schema

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |



## SensibleConfig

Sensible-global configurations



> Sensible-global configurations

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSensibleProject (optional) | boolean |  |
| hasGeneratedDependencies (optional) | boolean |  |



## SimplifiedSchemaItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | name in case of it being a reference, otherwise null |
| schema  | object | JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form |



## SimplifiedSchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object | JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form |
| required  | boolean | NB: can't we put this in the SimplifiedSchema itself? |



## SimplifiedSchemaType

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



## SizeSummary

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



## SlugModelType

use this model for things with a name that have an unique slug that can be used to identify the model



> use this model for things with a name that have an unique slug that can be used to identify the model

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string |  |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## Slug

use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.



> use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.




## Stats

A `fs.Stats` object provides information about a file.

Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.

```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```

`bigint` version:

```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```



> A `fs.Stats` object provides information about a file.<br /><br />Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.<br /><br />```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```<br /><br />`bigint` version:<br /><br />```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```

Properties: 

 | Name | Type | Description |
|---|---|---|
| dev  | number |  |
| ino  | number |  |
| mode  | number |  |
| nlink  | number |  |
| uid  | number |  |
| gid  | number |  |
| rdev  | number |  |
| size  | number |  |
| blksize  | number |  |
| blocks  | number |  |
| atimeMs  | number |  |
| mtimeMs  | number |  |
| ctimeMs  | number |  |
| birthtimeMs  | number |  |
| atime  | string |  |
| mtime  | string |  |
| ctime  | string |  |
| birthtime  | string |  |



## TextJson

Properties: 

 | Name | Type | Description |
|---|---|---|
| json (optional) | object | only available if it's a json file |
| typescriptJson (optional) | object | only available if it's a typescript file |
| markdownJson (optional) | object |  |
| path  | string | full path to the file or folder |
| isFolder  | boolean |  |
| stats (optional) | object | A `fs.Stats` object provides information about a file.<br /><br />Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.<br /><br />```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```<br /><br />`bigint` version:<br /><br />```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ``` |
| metaData (optional) | object | All interesting metadata about any path (files and folders) |
| isCancelRecursionResult (optional) | boolean | if true, this means this path is given back because it was the last opened base path that searching was canceled on because of the cancelRecursionOn prop |



## TsIndexModelType

identifier of any index type interface



> identifier of any index type interface

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



## TypeCoverage

quantification of coverage of the specified type or subtypes in our database.



> quantification of coverage of the specified type or subtypes in our database.




## TypeInfo

all info that should always be collected when indexing any type interface



> all info that should always be collected when indexing any type interface

Properties: 

 | Name | Type | Description |
|---|---|---|
| typeDefinition (optional) | object |  |
| simplifiedSchema (optional) | object | JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form |
| isObject  | boolean | if the type is an object, this is true. false if it's an array |
| isArray  | boolean | if the type is an array, this is true |
| isPrimitive  | boolean | if it's a primitive type like "string", "number", "boolean", "null" | "undefined" |
| isEnum  | boolean | will be true for any primitive conjunction types |
| isEnumLiteral  | boolean | will be true for string conjunction types |
| typeCoverage  | number | quantification of coverage of the specified type or subtypes in our database. |
| rawType  | string | raw type string |



## TypescriptIndex

Typescript file metadata (all indexes from typescript files, together)



> --- isDbModel: false<br />---<br /><br />Typescript file metadata (all indexes from typescript files, together)

Properties: 

 | Name | Type | Description |
|---|---|---|
| tsBuildErrors  | array |  |
| tsLintWarnings  | array |  |
| tsFunctions  | array |  |
| tsVariables  | array |  |
| tsInterfaces  | array |  |
| tsComments  | array |  |
| tsImports  | array |  |
| tsExports  | array |  |


