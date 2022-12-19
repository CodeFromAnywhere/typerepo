---
runEveryPeriod: minute
---
# Ai functions node

ai-functions-node (`OperationClassification` node-cjs)



# Api reference

## controlChatGptWrapper()

| Input      |    |    |
| ---------- | -- | -- |
| prompt | string |  |,| isHeadless (optional) | boolean |  |,| thread (optional) | string |  |,| controller | playwright / puppeteer / faker |  |
| **Output** |    |    |



## 📄 controlChatGptWrapper (exported const)

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # controlChatGptCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 controlChatGptCli (exported const)

  </details>

# Tests

<details><summary>Show test information(4)</summary>
    
  # getCategoriesTest()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getCategoriesTest (exported const)

## 📄 test (unexported const)

  </details>

# Internal

cron that runs every minute for executing new puppeteer queue items. It will open it as child process. You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## cleanup()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## controlChatGptCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## controlChatGpt()

| Input      |    |    |
| ---------- | -- | -- |
| prompt | string |  |,| headless (optional) | boolean |  |
| **Output** |    |    |



## convertTo1337speak()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## deletePromptResult()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |,| id | string |  |
| **Output** |    |    |



## developersQuote()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## diaryToInstagram()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## documentationWriting()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## emojiAugmentation()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## explainInDutch()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## explainInNepali()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## explainInPortuguese()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## explain()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## fixGrammarAndSpellingMistakes()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## getCategoriesTest()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getContextualPromptCategories()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getContextualPromptResultJsonFilePath()

Calculates path where the result json index is supposed to be


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath (optional) | string |  |
| **Output** |    |    |



## getContextualPrompt()

| Input      |    |    |
| ---------- | -- | -- |
| contextualPromptSlug (optional) | string |  |,| customPromptContent (optional) | string |  |,| saveNewPromptWithName | string |  |,| contextType (optional) | `FileType` |  |
| **Output** |    |    |



## getObjectForkKeyRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| stackCount | `StackCount` |  |,| key | string |  |
| **Output** |    |    |



## gptIdeasRegisterWithContext()

TODO: move to gptideas backend package


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| name | string |  |,| email | string |  |,| tier | free / indie / startup / sponsor |  |,| newsletter | daily / weekly / unsubscribe |  |,| message (optional) | string |  |
| **Output** |    |    |



## haiku()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## improveCode()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## keywords()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## marcusAurelius()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## poem()

Write a poem


| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## processChatGptPrompt()

| Input      |    |    |
| ---------- | -- | -- |
| config | `ProcessPromptProps` |  |
| **Output** |    |    |



## processPromptOnFile()

function `processPromptOnFile` to execute `processChatGptPrompt` for a file, so we don't need to store the whole file content and it can be executed later and still have the most recent file contents

In order to keep the file itself as a source of truth for its content, it's useful to have this because you can add this to the queue


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |,| contextualPromptSlug | string |  |
| **Output** |    |    |



## processPromptOnFolder()

function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.


| Input      |    |    |
| ---------- | -- | -- |
| config | { projectRelativeFolderPath: string, <br />promptSlug: string, <br />isRecursive?: boolean, <br />extension?: {  }, <br /> } |  |
| **Output** |    |    |



## removeAllFake()

| Input      |    |    |
| ---------- | -- | -- |
| basePath (optional) | string |  |
| **Output** |    |    |



## rickAndMortyRick()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## rickAndMorty()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## setIsFavoritePromptResult()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |,| id | string |  |,| isFavorite | boolean |  |
| **Output** |    |    |



## socratesAndSnoopDogg()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## storytelling()

Write a story about this code and what's happening in there


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## translateEverythingIntoHindi()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## translateEverythingPortuguese()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## translateEverything()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## translateToPortuguese()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## typescriptExplain()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## williamShakespear()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## writeContextualPromptSdk()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## writeCreatePromptCode()

| Input      |    |    |
| ---------- | -- | -- |
| contextualPrompt | `ContextualPrompt` |  |
| **Output** | `String`   |    |



## ye()

Let Kanye West write a poem about your selection


| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## yodafy()

Let Yoda say your selection in his words


| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## 🔹 CategoryChildObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| category  | string |  |
| count  | number |  |
| children (optional) | array |  |



## 🔹 ProcessPromptProps

Properties: 

 | Name | Type | Description |
|---|---|---|
| contextContent (optional) | string |  |
| selectionContent (optional) | string |  |
| contextualPromptSlug (optional) | string |  |
| customPromptContent (optional) | string | These variables can be used: %context will be replaced by your context, %selection will be replaced by your selection. Provide a good prompt that combines that in a specific format |
| saveNewPromptWithName (optional) | string |  |
| isHeadless (optional) | boolean |  |
| prompt_projectRelativePath (optional) | string |  |
| thread (optional) | string |  |
| isDeferred (optional) | boolean |  |



## 🔹 StackCount

## 📄 addStatement (exported const)

Adds `Statement`


## 📄 addWord (exported const)

Adds word either to the WordMatrix or to the WordCombination database model


## 📄 biggestFunctionName (exported const)

## 📄 checkQueue (exported const)

---
runEveryPeriod: minute
---

cron that runs every minute for executing new puppeteer queue items. It will open it as child process. You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.


## 📄 cleanup (exported const)

## 📄 controlChatGptCli (exported const)

## 📄 controlChatGpt (exported const)

## 📄 convertTo1337speak (exported const)

## 📄 deletePromptResult (exported const)

## 📄 developersQuote (exported const)

## 📄 diaryToInstagram (exported const)

## 📄 documentationWriting (exported const)

## 📄 emojiAugmentation (exported const)

## 📄 explainInDutch (exported const)

## 📄 explainInNepali (exported const)

## 📄 explainInPortuguese (exported const)

## 📄 explain (exported const)

## 📄 fixGrammarAndSpellingMistakes (exported const)

## 📄 getCategoriesTest (exported const)

## 📄 getContextualPromptCategories (exported const)

## 📄 getContextualPromptResultJsonFilePath (exported const)

Calculates path where the result json index is supposed to be


## 📄 getContextualPrompt (exported const)

## 📄 getObjectForkKeyRecursively (exported const)

## 📄 gptIdeasRegisterWithContext (exported const)

TODO: move to gptideas backend package


## 📄 haiku (exported const)

## 📄 improveCode (exported const)

## 📄 keywords (exported const)

## 📄 marcusAurelius (exported const)

## 📄 poem (exported const)

Write a poem


## 📄 processChatGptPrompt (exported const)

## 📄 processPromptOnFile (exported const)

function `processPromptOnFile` to execute `processChatGptPrompt` for a file, so we don't need to store the whole file content and it can be executed later and still have the most recent file contents

In order to keep the file itself as a source of truth for its content, it's useful to have this because you can add this to the queue


## 📄 processPromptOnFolder (exported const)

function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.


## 📄 removeAllFake (exported const)

## 📄 rickAndMortyRick (exported const)

## 📄 rickAndMorty (exported const)

## 📄 setIsFavoritePromptResult (exported const)

## 📄 socratesAndSnoopDogg (exported const)

## 📄 storytelling (exported const)

Write a story about this code and what's happening in there


## 📄 translateEverythingIntoHindi (exported const)

## 📄 translateEverythingPortuguese (exported const)

## 📄 translateEverything (exported const)

## 📄 translateToPortuguese (exported const)

## 📄 typescriptExplain (exported const)

## 📄 williamShakespear (exported const)

## 📄 writeContextualPromptSdk (exported const)

## 📄 writeCreatePromptCode (exported const)

## 📄 ye (exported const)

Let Kanye West write a poem about your selection


## 📄 yodafy (exported const)

Let Yoda say your selection in his words
  </details>

