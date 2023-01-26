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



## getContextualPromptCategories()

Pretty cool stuff!

I've shown a way to count all nested categories and make a child object based on that

TODO:

- Currently, only supports unique category names due to not checking the full stack
- needs to be formalised, generalised

Another, possibly more direct way, would be to traverse the filesystem, in the case of `fs-orm`, because we have files for every item in json-single.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## shouldAddToQueue()

Checks if system is busy and if so, adds the task to queue


| Input      |    |    |
| ---------- | -- | -- |
| functionName | string |  |,| parameters | {  }[] |  |
| **Output** |    |    |



## 📄 controlChatGptWrapper (exported const)

## 📄 getContextualPromptCategories (exported const)

Pretty cool stuff!

I've shown a way to count all nested categories and make a child object based on that

TODO:

- Currently, only supports unique category names due to not checking the full stack
- needs to be formalised, generalised

Another, possibly more direct way, would be to traverse the filesystem, in the case of `fs-orm`, because we have files for every item in json-single.


## 📄 shouldAddToQueue (exported const)

Checks if system is busy and if so, adds the task to queue

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

Cron that runs every minute for executing queue items.

Regular items: It will execute max `MAX_REGULAR_ITEMS_AMOUNT`

Browser items: You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.

Heavy items: functions with `.isHeavy: true` inside. Will execute max 1 every minute if the system isn't busy already.

- sort on priority high first
- filter out internet items if we are offline
- find single heavy item if it's there and if we're not busy
- find up to N (amount tabs available) queue items that require browser


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## cleanup()

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

Emojify


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
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



## explainLineByLine()

Explain line-by-line


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## explain()

🤔 Explain


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| selectionContent | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## fixGrammarAndSpellingMistakes()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## followUpQuestions()

| Input      |    |    |
| ---------- | -- | -- |
| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## getCategoriesTest()

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
| stackCount | `StackCount` |  |,| key | string |  |,| originalKey | string |  |,| items | `ContextualPrompt`[] |  |
| **Output** |    |    |



## getToolFunctions()

Returns all tool functions to the frontend


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## gptIdeasRegisterWithContext()

TODO: move to gptideas backend package


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| name | string |  |,| email | string |  |,| tier | free / indie / startup / sponsor |  |,| newsletter | daily / weekly / unsubscribe |  |,| message (optional) | string |  |
| **Output** |    |    |



## haiku()

Write a Haiku


| Input      |    |    |
| ---------- | -- | -- |
| anyContext | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## hookOneliners()

| Input      |    |    |
| ---------- | -- | -- |
| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## improveCode()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## investorPitch()

Investor pitch


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## marcusAurelius()

| Input      |    |    |
| ---------- | -- | -- |
| selectionContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## opposite()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## outlineToInvestorPitch()

| Input      |    |    |
| ---------- | -- | -- |
| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## poem()

Write a poem


| Input      |    |    |
| ---------- | -- | -- |
| anyContext | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
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



## processPromptOnFolderWithContext()

function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| config | { projectRelativeFolderPath: string, <br />promptSlug: string, <br />isRecursive?: boolean, <br />extension?: {  }, <br /> } |  |
| **Output** |    |    |



## quiz()

Quiz


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## removeAllFake()

| Input      |    |    |
| ---------- | -- | -- |
| basePath (optional) | string |  |
| **Output** |    |    |



## rickAndMortyRick()

Ricktalk


| Input      |    |    |
| ---------- | -- | -- |
| anyContext | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## rickAndMorty()

Rick teaches Morty


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
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



## summarizeMeetings()

Endpoint that onboards users


| Input      |    |    |
| ---------- | -- | -- |
| email (optional) | string | TITLE: Email (required) |,| phoneNumber (optional) | string | TITLE: Phone number (optional) |,| meetingYoutubeUrl (optional) | string | TITLE: Youtube URL of your meeting (optional) |,| meetingAudio (optional) | `BackendAsset` | TITLE: Audiofile of your meeting (optional) |
| **Output** | { isSuccessful: boolean, <br />message: string, <br /> }   |    |



## toolFunctionWithContext()

Function to be executed straight from the frontend, where details is replaced with actual parameters of the function you want to execute.

`.functionContext` and `.functionName` to be stripped out of the form


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| functionName | string |  |,| email | string |  |,| details | {  } | Needed in this format because we need to show it nicely in the form (maybe not needed, try without also) |
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

Translate to Portuguese


| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| prompt_projectRelativePath | string |  |,| isDeferred (optional) | boolean |  |
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



## 🔹 ProcessPromptProps

Properties: 

 | Name | Type | Description |
|---|---|---|
| contextContent (optional) | string |  |
| selectionContent (optional) | string |  |
| contextualPromptSlug (optional) | string |  |
| anyContext (optional) | string |  |
| customPromptContent (optional) | string | These variables can be used: %context will be replaced by your context, %selection will be replaced by your selection. Provide a good prompt that combines that in a specific format |
| saveNewPromptWithName (optional) | string |  |
| isHeadless (optional) | boolean |  |
| prompt_projectRelativePath (optional) | string |  |
| thread (optional) | string |  |
| isDeferred (optional) | boolean |  |



## 🔹 StackCount

## 📄 addEmojiToEveryWord (exported const)

Emojify++


## 📄 addStatement (exported const)

Adds `Statement`


## 📄 addWord (exported const)

Adds word either to the WordMatrix or to the WordCombination database model


## 📄 biggestFunctionName (exported const)

## 📄 checkQueue (exported const)

---
runEveryPeriod: minute
---


Cron that runs every minute for executing queue items.

Regular items: It will execute max `MAX_REGULAR_ITEMS_AMOUNT`

Browser items: You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.

Heavy items: functions with `.isHeavy: true` inside. Will execute max 1 every minute if the system isn't busy already.

- sort on priority high first
- filter out internet items if we are offline
- find single heavy item if it's there and if we're not busy
- find up to N (amount tabs available) queue items that require browser


## 📄 cleanup (exported const)

## 📄 deletePromptResult (exported const)

## 📄 developersQuote (exported const)

## 📄 diaryToInstagram (exported const)

## 📄 documentationWriting (exported const)

## 📄 emojiAugmentation (exported const)

Emojify


## 📄 explainInDutch (exported const)

## 📄 explainInNepali (exported const)

## 📄 explainInPortuguese (exported const)

## 📄 explainLineByLine (exported const)

Explain line-by-line


## 📄 explain (exported const)

🤔 Explain


## 📄 fixGrammarAndSpellingMistakes (exported const)

## 📄 followUpQuestions (exported const)

## 📄 getCategoriesTest (exported const)

## 📄 getContextualPromptResultJsonFilePath (exported const)

Calculates path where the result json index is supposed to be


## 📄 getContextualPrompt (exported const)

## 📄 getObjectForkKeyRecursively (exported const)

## 📄 getToolFunctions (exported const)

Returns all tool functions to the frontend


## 📄 gptIdeasRegisterWithContext (exported const)

TODO: move to gptideas backend package


## 📄 haiku (exported const)

Write a Haiku


## 📄 hookOneliners (exported const)

## 📄 improveCode (exported const)

## 📄 investorPitch (exported const)

Investor pitch


## 📄 marcusAurelius (exported const)

## 📄 MAX_REGULAR_ITEMS_AMOUNT (exported const)

## 📄 opposite (exported const)

## 📄 outlineToInvestorPitch (exported const)

## 📄 poem (exported const)

Write a poem


## 📄 processChatGptPrompt (exported const)

## 📄 processPromptOnFile (exported const)

function `processPromptOnFile` to execute `processChatGptPrompt` for a file, so we don't need to store the whole file content and it can be executed later and still have the most recent file contents

In order to keep the file itself as a source of truth for its content, it's useful to have this because you can add this to the queue


## 📄 processPromptOnFolderWithContext (exported const)

function that can execute `processPromptOnFile` for all files in a folder, by just upserting the executions to the queue.


## 📄 quiz (exported const)

Quiz


## 📄 removeAllFake (exported const)

## 📄 rickAndMortyRick (exported const)

Ricktalk


## 📄 rickAndMorty (exported const)

Rick teaches Morty


## 📄 setIsFavoritePromptResult (exported const)

## 📄 socratesAndSnoopDogg (exported const)

## 📄 storytelling (exported const)

Write a story about this code and what's happening in there


## 📄 summarizeMeetings (exported const)

Endpoint that onboards users


## 📄 toolFunctionWithContext (exported const)

Function to be executed straight from the frontend, where details is replaced with actual parameters of the function you want to execute.

`.functionContext` and `.functionName` to be stripped out of the form


## 📄 translateEverythingIntoHindi (exported const)

## 📄 translateEverythingPortuguese (exported const)

## 📄 translateEverything (exported const)

## 📄 translateToPortuguese (exported const)

Translate to Portuguese


## 📄 typescriptExplain (exported const)

## 📄 williamShakespear (exported const)

## 📄 writeContextualPromptSdk (exported const)

## 📄 writeCreatePromptCode (exported const)

## 📄 ye (exported const)

Let Kanye West write a poem about your selection


## 📄 yodafy (exported const)

Let Yoda say your selection in his words
  </details>

