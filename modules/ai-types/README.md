# Ai types

ai-types (`OperationClassification` cjs)



# Api reference

## 🔸 ContextualPromptResult

jsonMultiple model



A result from a contextual prompt. Doesn't include the full context, for that you can find all results for a certain thread





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| isValidCalculated (optional) | boolean |  |
| isFake (optional) | boolean |  |
| contextualPromptSlug  | string |  |
| prompt_projectRelativePath (optional) | string |  |
| prompt (optional) | string |  |
| selectionString (optional) | string |  |
| isFavorite (optional) | boolean |  |
| resultText (optional) | string |  |
| resultAssets  | array |  |
| thread (optional) | string |  |



## 🔸 ContextualPrompt

jsonSingle model




Model for prompting information from third party sources





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextType (optional) | array |  |
| instantExecution (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| categoryStackCalculated (optional) | array |  |
| pricing (optional) | string |  |
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| title (optional) | string |  |
| scopeProjectRelativePath (optional) | string |  |
| model (optional) | object |  |
| promptContent  | string |  |
| folderContentContext (optional) | string |  |
| usesContext (optional) | boolean |  |
| usesSelection (optional) | boolean |  |
| usesAnyContext (optional) | boolean |  |



## 🔹 ContextualPromptsObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| selectionContextualPrompts  | array |  |
| pageContextualPrompts  | array |  |
| folderContextualPrompts  | array |  |
| databaseContextualPromptSlugs  | array |  |



## 🔹 FolderContent

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| type  | string |  |
| isPrivate (optional) | boolean |  |
| isDraft (optional) | boolean |  |
| isSecret (optional) | boolean |  |
| authorizedGroup (optional) | string |  |
| frontmatter (optional) | object |  |



## 🔹 ReaderProps

This is what we need on the page level. There are many subtleties to it, but this is the core





Properties: 

 | Name | Type | Description |
|---|---|---|
| isFolder  | boolean |  |
| canSeeContent (optional) | boolean |  |
| unauthorizedWarningMessage (optional) | string |  |
| markdown  | string |  |
| contextualPromptsObject  | object |  |
| contextualPromptResults  | object |  |
| projectRelativeFilePath  | string |  |
| navigation  | array |  |



## 🔸 AiDemoApp

jsonSingle model









Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| domain (optional) | string |  |
| headerTitle  | string |  |
| hasImageBoolean (optional) | boolean |  |
| headerSubtitle (optional) | string |  |
| headerCtaHref (optional) | string |  |
| headerCtaText (optional) | string |  |



## 🔹 ContextualContent

Properties: 

 | Name | Type | Description |
|---|---|---|
| contextContent  | string |  |
| contextSelection (optional) | string |  |
| context_projectRelativeFilePath (optional) | string |  |



## 🔹 ProcessPromptFunctionResult

Same result to be expected from executing prompt for any language model





Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message  | string |  |
| result (optional) | object |  |



## 🔹 PromptFunction

Special kind of function that executes a prompt with the use of a language model





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextualPromptInfo  | object |  |


# Internal

<details><summary>Show internal (4)</summary>
    
  # 🔹 ContextualPromptInfo

To be appended to the generated typescript





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextType (optional) | array |  |
| instantExecution (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| categoryStackCalculated (optional) | array |  |
| pricing (optional) | string |  |



## 🔸 GptIdeasUser

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| email  | string |  |
| tier  | string |  |
| newsletter  | string |  |



## 🔸 LanguageModel

jsonMultiple model












## 📄 languageModels (exported const)

  </details>

