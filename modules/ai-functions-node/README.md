# Ai functions node

ai-functions-node (`OperationClassification` node-cjs)



# Api reference

## getContextualPromptResults()

Gets all contextualPromptResults, but only if specific things are true

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { prompt_projectRelativePath?: string, <br />promptSlugs?: string[], <br /> } |  |
| **Output** |    |    |



## getContextualPrompts()

Returns all contextual prompts for the selection and for the page with the right context type


| Input      |    |    |
| ---------- | -- | -- |
| contextType (optional) | `FileType` | If not given, will return all |,| scopeProjectRelativePath (optional) | string |  |,| isDev (optional) | boolean |  |
| **Output** |    |    |



## getReaderPageProps()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |,| queryPath (optional) | string | If given, knows how to redirect |,| realBasePath (optional) | string |  |
| **Output** |    |    |



## 📄 getContextualPromptResults (exported const)

Gets all contextualPromptResults, but only if specific things are true

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.


## 📄 getContextualPrompts (exported const)

Returns all contextual prompts for the selection and for the page with the right context type


## 📄 getReaderPageProps (exported const)

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

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (100)</summary>
    
  # addStatement()

Adds `Statement`


| Input      |    |    |
| ---------- | -- | -- |
| statement | string | MUST be an english statement |,| importancy (optional) | number | defaults to 0.5 |,| agreement (optional) | number | defaults to 1 |
| **Output** |    |    |



## addWord()

Adds word either to the WordMatrix or to the WordCombination database model


| Input      |    |    |
| ---------- | -- | -- |
| word | string | MUST be an english word or word combination written in the latin alphabet |,| description (optional) | string |  |
| **Output** |    |    |



## augmentMarkdown()

Now that I've written this all down, it seems to be a quite an expensive operation, but we never need to do it for ensire websites, just for one page, and the result can easily be cached. I need to write a regex function that matches all text from a list of searchterms in markdown except if it's part of a link or image, and reduce the matches, creating a new markdown string every time. I think there are algorithms though that are more efficient because if there are like thousands of matches on a 2mb text, the thing would take much longer. Maybe it's more efficient to split up the text in smaller pieces and do the regex for every piece individually. This would have a limitation that you can't select cross-section, but I don't think that's my usecase anyway. If we later add support for making statements about a chapter or subsection and stuff like that, this limitation can also be resolved.

Augments markdown in many ways for multiple purposes.

- Parse the markdown instead of showing the results as React buttons. The link to "#" alt can become the same as a nice AugmentedWord hover, when it's found to be a selection result, we can highlight the selection whenever we hover over a link with that same text as alt as well, and add that hover as a note at the end of the selection.
- ensure the parse parses `WordCombination`, `WordMatrix`, `Statement`, `AugmentedWord`, and `ContextualPromptResult`. It's a lot of work, but definitely worth it. Should be parsed as
- remove the parsing of everything in the markdown render. This is also the end of sending `AugmentedWord`s to the frontend

LATER:

- CTA's, headers, footers, ads (check how I was planning to get those at codestorys-node or so)
- Word frequency occurency styling
- Subtexts and subwords


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## biggestFunctionName()

| Input      |    |    |
| ---------- | -- | -- |
| contextContent | string |  |,| isDeferred (optional) | boolean |  |
| **Output** |    |    |



## canSeeFileContent()

| Input      |    |    |
| ---------- | -- | -- |
| parameters (optional) | `Frontmatter` |  |,| isDev | boolean |  |
| **Output** | {  }   |    |



## canSeeFile()

TODO: use something like this to ensure we have the type safety and not work with strings >.<

```ts
import { frontmatterToObject } from "frontmatter-util";
import webMarkdownFileTsInterface from "markdown-types/db/ts-interfaces/webmarkdownfile.json";
```


| Input      |    |    |
| ---------- | -- | -- |
| parameters (optional) | `FolderContent` |  |,| isDev | boolean |  |
| **Output** | {  }   |    |



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



## controlChatGptWrapper()

| Input      |    |    |
| ---------- | -- | -- |
| prompt | string |  |,| isHeadless (optional) | boolean |  |,| thread (optional) | string |  |,| controller | playwright / puppeteer / faker |  |
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



## expandFrontmatter()

| Input      |    |    |
| ---------- | -- | -- |
| frontmatter (optional) | `Frontmatter` |  |
| **Output** | {  }   |    |



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



## getContextualPromptResultJsonFilePath()

Calculates path where the result json index is supposed to be


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath (optional) | string |  |
| **Output** |    |    |



## getContextualPrompt()

| Input      |    |    |
| ---------- | -- | -- |
| contextualPromptSlug (optional) | string |  |,| customPromptContent (optional) | string |  |,| saveNewPromptWithName | string |  |
| **Output** |    |    |



## getContextualPromptsArray()

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


| Input      |    |    |
| ---------- | -- | -- |
| scopeProjectRelativePath (optional) | string | If available, will also get the scoped context |
| **Output** |    |    |



## getFolderRelativeScopeDbFilePath()

Function to centralise the convention of the db file location of a scoped prompt


| Input      |    |    |
| ---------- | -- | -- |
| filename (optional) | string |  |
| **Output** | `String`   |    |



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



## makeMarkdownLink()

function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



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
| config | { contextContent?: string, <br />selectionContent?: string, <br />contextualPromptSlug?: string, <br />customPromptContent?: string, <br />saveNewPromptWithName?: string, <br />isHeadless?: boolean, <br />prompt_projectRelativePath?: string, <br />thread?: string, <br />isDeferred?: boolean, <br /> } |  |
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



## 📄 addStatement (exported const)

Adds `Statement`


## 📄 addWord (exported const)

Adds word either to the WordMatrix or to the WordCombination database model


## 📄 augmentMarkdown (exported const)

Now that I've written this all down, it seems to be a quite an expensive operation, but we never need to do it for ensire websites, just for one page, and the result can easily be cached. I need to write a regex function that matches all text from a list of searchterms in markdown except if it's part of a link or image, and reduce the matches, creating a new markdown string every time. I think there are algorithms though that are more efficient because if there are like thousands of matches on a 2mb text, the thing would take much longer. Maybe it's more efficient to split up the text in smaller pieces and do the regex for every piece individually. This would have a limitation that you can't select cross-section, but I don't think that's my usecase anyway. If we later add support for making statements about a chapter or subsection and stuff like that, this limitation can also be resolved.

Augments markdown in many ways for multiple purposes.

- Parse the markdown instead of showing the results as React buttons. The link to "#" alt can become the same as a nice AugmentedWord hover, when it's found to be a selection result, we can highlight the selection whenever we hover over a link with that same text as alt as well, and add that hover as a note at the end of the selection.
- ensure the parse parses `WordCombination`, `WordMatrix`, `Statement`, `AugmentedWord`, and `ContextualPromptResult`. It's a lot of work, but definitely worth it. Should be parsed as
- remove the parsing of everything in the markdown render. This is also the end of sending `AugmentedWord`s to the frontend

LATER:

- CTA's, headers, footers, ads (check how I was planning to get those at codestorys-node or so)
- Word frequency occurency styling
- Subtexts and subwords


## 📄 biggestFunctionName (exported const)

## 📄 canSeeFileContent (exported const)

## 📄 canSeeFile (exported const)

TODO: use something like this to ensure we have the type safety and not work with strings >.<

```ts
import { frontmatterToObject } from "frontmatter-util";
import webMarkdownFileTsInterface from "markdown-types/db/ts-interfaces/webmarkdownfile.json";
```


## 📄 cleanup (exported const)

## 📄 controlChatGptCli (exported const)

## 📄 controlChatGptWrapper (exported const)

## 📄 controlChatGpt (exported const)

## 📄 convertTo1337speak (exported const)

## 📄 deletePromptResult (exported const)

## 📄 developersQuote (exported const)

## 📄 diaryToInstagram (exported const)

## 📄 documentationWriting (exported const)

## 📄 emojiAugmentation (exported const)

## 📄 expandFrontmatter (exported const)

## 📄 explainInDutch (exported const)

## 📄 explainInNepali (exported const)

## 📄 explainInPortuguese (exported const)

## 📄 explain (exported const)

## 📄 fixGrammarAndSpellingMistakes (exported const)

## 📄 getContextualPromptResultJsonFilePath (exported const)

Calculates path where the result json index is supposed to be


## 📄 getContextualPrompt (exported const)

## 📄 getContextualPromptsArray (exported const)

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


## 📄 getFolderRelativeScopeDbFilePath (exported const)

Function to centralise the convention of the db file location of a scoped prompt


## 📄 gptIdeasRegisterWithContext (exported const)

TODO: move to gptideas backend package


## 📄 haiku (exported const)

## 📄 improveCode (exported const)

## 📄 keywords (exported const)

## 📄 makeMarkdownLink (exported const)

function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`


## 📄 marcusAurelius (exported const)

## 📄 poem (exported const)

Write a poem


## 📄 processChatGptPrompt (exported const)

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

