# Sdk util

sdk-util (js operation)

Size: 294 LOC, 2061 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: humanCase, log, ask, oneByOne, FunctionParameter, findSentenceMatches, log, sdk, db, TsExport, TsFunction, exploreOperationFolders, getLastFolder, getPathsWithOperations, getProjectRoot, mergeObjectsArray, TsFunction, sdk

# Outline

## Functions

- [main](#main)
- [getParameters](#getParameters)
- [getParametersAndExecute](#getParametersAndExecute)
- [converse](#converse)
- [listen](#listen)
- [chat](#chat)
- [executeSdkFunction](#executeSdkFunction)
- [getMenu](#getMenu)
- [getSdkFunctionPaths](#getSdkFunctionPaths)
- [getSdkKeys](#getSdkKeys)



# Functions

## main

Max. indexation depth: 2, 



## Returns: unknown

## getParameters

Max. indexation depth: 4, 



## Returns: unknown

### Arguments

#### parameters (optional): array

- FunctionParameter: object





## getParametersAndExecute

Max. indexation depth: 2, 



## Returns: unknown

### Arguments

#### fn: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
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
| matcher  | string |  |
| relativeOperationPath  | string |  |


## converse

Max. indexation depth: 6, 

this is the `yo` cli. takes a message

## Returns: unknown

### Arguments

#### searchMessage: string







## listen

Max. indexation depth: 1, 

generates structured operations based on unstructured instructions

This is huge. we need to start somewhere though. Plan:

- all operations can be formatted as a word[] with specified order
- all words can have synonyms
- some operations can have aliases or different word orders that would mean the exact same
- speech to text is a prerequisite for speaking out instructions
- text to speech is already there

With this in place, we can define a structured way to do things.

1) find the right operation to apply
2) every parameter needs to be filled in (or use default) or we need to use a preset (from previous input logs). this can be some sort of conversation
3) the opo (operation output) can be added to context, if needed
4) the opi (operation input) can be added to presets, if needed

Can you imagine that? I am creating a script that runs all the time and listens and responds to anything I say. My own Siri, but much more powerful. It seems hard, but if you look at it, it's actually just a different UI for all the things I already have. Among other things, it will make it possible to work while doing anything.

The power lies in being able to recursively ask for all the parameters. if you provide a new operation instead of a value, it will ask for all its parameters in order to continue.

This conversation could actually be used to generate code! It's kind of `context.reverse().map(createTsLine);` In fact, if we can make that, we can maybe even reverse code into conversations as well! This is insanely powerful.

### Returns: array

- null: object





### Arguments

#### {  instruction,  context,}: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| instruction  | string |  |
| context  | array | should be in fifo order, so no push but unshift! the further in the array, the less important the context (forgetting) |


## chat

Max. indexation depth: 1, 



## Returns: unknown

## executeSdkFunction

Max. indexation depth: 4, 



## Returns: unknown

### Arguments

#### operationString: string







#### parameters (optional): array

- null: string





## getMenu

Max. indexation depth: 4, 



## Returns: unknown

## getSdkFunctionPaths

Max. indexation depth: 7, 



## Returns: unknown

## getSdkKeys

Max. indexation depth: 1, 



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| success  | boolean |  |
| response  | object |  |


