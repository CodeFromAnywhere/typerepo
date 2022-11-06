# Function util

function-util (js operation)

Exposes clis that make it possible to interact with all King OS functions through the CLI in different ways




# Outline

## Functions

- [chat](#chat)
- [converse](#converse)
- [doCli](#doCli)
- [executeSdkFunction](#executeSdkFunction)
- [getCachedExportedFunctions](#getCachedExportedFunctions)
- [getMenu](#getMenu)
- [getParametersAndExecute](#getParametersAndExecute)
- [getParameters](#getParameters)
- [getSdkFunctionPaths](#getSdkFunctionPaths)
- [getSdkKeys](#getSdkKeys)
- [listen](#listen)
- [main](#main)

## Interfaces

- [FnMatch](#fnmatch)
- [FunctionParameter](#functionparameter)
- [TsFunction](#tsfunction)

## Variables

- [chat](#chat)
- [converse](#converse)
- [doCli](#docli)
- [executeSdkFunction](#executesdkfunction)
- [exportsArray](#exportsarray)
- [functions](#functions)
- [getCachedExportedFunctions](#getcachedexportedfunctions)
- [getMenu](#getmenu)
- [getParametersAndExecute](#getparametersandexecute)
- [getParameters](#getparameters)
- [getSdkFunctionPaths](#getsdkfunctionpaths)
- [getSdkKeys](#getsdkkeys)
- [listen](#listen)
- [main](#main)
- [message](#message)
- [wordArray](#wordarray)



# Functions

## chat

## converse

this is the `yo` cli. takes a message




### Parameters (1)

#### Parameter 1: searchMessage: string

## doCli

## executeSdkFunction

### Parameters (2)

#### Parameter 1: operationString: string

#### Parameter 2: parameters (optional): array

- null: string






## getCachedExportedFunctions

## getMenu

## getParametersAndExecute

### Parameters (1)

## getParameters

### Parameters (1)

#### Parameter 1: parameters (optional): array

- FunctionParameter: object






## getSdkFunctionPaths

## getSdkKeys

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| success  | boolean |  |
| response  | object |  |



## listen

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






### Parameters (1)

#### Parameter 1: {  instruction,  context,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| instruction  | string |  |
| context  | array |  |



## main

# Interfaces

## FnMatch

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
| matcher  | string |  |
| relativeOperationPath  | string |  |



## FunctionParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |
| simplifiedSchema (optional) | object |  |
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


# Variables

## chat (unexported const)

## converse (exported const)

this is the `yo` cli. takes a message


## doCli (unexported const)

## executeSdkFunction (exported const)

## exportsArray (unexported let)

## functions (unexported let)

## getCachedExportedFunctions (exported const)

## getMenu (exported const)

## getParametersAndExecute (unexported const)

## getParameters (unexported const)

## getSdkFunctionPaths (exported const)

## getSdkKeys (exported const)

## listen (exported const)

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


## main (unexported const)

## message (unexported const)

## wordArray (unexported const)

