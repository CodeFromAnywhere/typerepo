# Function util

function-util (js operation)

Exposes clis that make it possible to interact with all King OS functions through the CLI in different ways




# Api reference

# Internal

<details><summary>Show internal (15)</summary>
  
  # converse()

this is the `yo` cli. takes a message


| Input      |    |    |
| ---------- | -- | -- |
| searchMessage | string |  |
| **Output** |    |    |



## executeSdkFunction()

| Input      |    |    |
| ---------- | -- | -- |
| operationString | string |  |,| parameters (optional) | string[] |  |
| **Output** |    |    |



## getCachedExportedFunctions()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getMenu()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getSdkFunctionPaths()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getSdkKeys()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { success: boolean, <br />response: {  }, <br /> }   |    |



## listen()

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


| Input      |    |    |
| ---------- | -- | -- |
| {
  instruction,
  context,
} | { instruction: string, <br />context: { instruction: string, <br />output: {  }, <br />references: string[], <br /> }[], <br /> } |  |
| **Output** | { operation: string, <br />input: {  }, <br />certainty: number, <br /> }[]   |    |



## 🔹 FnMatch

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



## 📄 converse (exported const)

this is the `yo` cli. takes a message


## 📄 executeSdkFunction (exported const)

## 📄 getCachedExportedFunctions (exported const)

## 📄 getMenu (exported const)

## 📄 getSdkFunctionPaths (exported const)

## 📄 getSdkKeys (exported const)

## 📄 listen (exported const)

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
  </details>

