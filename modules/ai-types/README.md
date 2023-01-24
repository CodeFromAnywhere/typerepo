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
| categoryStack (optional) | array |  |
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
| noteContent (optional) | string |  |



## 🔸 ContextualPrompt

jsonSingle model




Model for prompting information from third party sources





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextType (optional) | array |  |
| instantExecution (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| categoryStack (optional) | array |  |
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
| description (optional) | string |  |
| scopeProjectRelativePath (optional) | string |  |
| model (optional) | object |  |
| promptContent  | string |  |
| folderContentContext (optional) | string |  |
| usesContext (optional) | boolean |  |
| usesSelection (optional) | boolean |  |
| usesAnyContext (optional) | boolean |  |



## 🔹 ReaderProps

This is what we need on the page level. There are many subtleties to it, but this is the core





Properties: 

 | Name | Type | Description |
|---|---|---|
| notFound (optional) | boolean |  |
| notFoundReason (optional) | string |  |
| isFolder (optional) | boolean |  |
| canSeeContent (optional) | boolean |  |
| unauthorizedWarningMessage (optional) | string |  |
| markdown (optional) | string |  |
| contextualPromptsObject (optional) | object |  |
| contextualPromptResults (optional) | object |  |
| actualProjectRelativeFilePath (optional) | string |  |
| navigation (optional) | array |  |
| contextualPromptCategories (optional) | object |  |



## 🔹 CategoryChildObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| category (optional) | string |  |
| categoryStack  | array |  |
| count  | number |  |
| name (optional) | string |  |
| title (optional) | string |  |
| description (optional) | string |  |
| pricing (optional) | string |  |
| children (optional) | array |  |



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
| projectRelativePath  | string |  |
| type  | string |  |
| firstFile (optional) | string |  |
| isPrivate (optional) | boolean |  |
| isDraft (optional) | boolean |  |
| isSecret (optional) | boolean |  |
| authorizedGroup (optional) | string |  |
| frontmatter (optional) | object |  |



## 🔹 ProcessPromptFunctionResult

Same result to be expected from executing prompt for any language model





Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message  | string |  |
| result (optional) | object |  |



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
| categoryStack (optional) | array |  |
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



## 🔹 PromptFunction

Special kind of function that executes a prompt with the use of a language model





Properties: 

 | Name | Type | Description |
|---|---|---|
| version (optional) | string |  |
| versionInfo (optional) | object |  |
| isHeavy (optional) | boolean |  |
| isInternetRequired (optional) | boolean |  |
| isBrowserRequired (optional) | boolean |  |
| isPublic (optional) | boolean |  |
| isApiExposed (optional) | boolean |  |
| domain (optional) | string |  |
| isPaid (optional) | boolean |  |
| price (optional) | number |  |
| allowedRoles (optional) | array |  |
| groupAuthorization (optional) | object |  |
| canCache (optional) | boolean |  |
| runEveryPeriod (optional) | string |  |
| classification (optional) | string |  |
| contextualPromptInfo  | object |  |



## 📄 fileTypePerExtension (exported const)

# Internal

<details><summary>Show internal (6)</summary>
    
  # 🔸 AiDataset

jsonMultiple model



AI datasets
example: https://pile.eleuther.ai/





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
| categoryStack (optional) | array |  |
| name  | string |  |
| company (optional) | string |  |
| dataType  | string |  |
| description (optional) | string |  |
| sizeGb (optional) | number |  |
| url (optional) | string |  |
| isPublic (optional) | boolean |  |



## 🔸 AiModel

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
| categoryStack (optional) | array |  |
| name  | string |  |
| company  | string |  |
| task  | string |  |
| description (optional) | string |  |
| notes (optional) | string |  |
| trainingCostUsd (optional) | number |  |
| isOpenSource (optional) | boolean |  |
| isModelPublic (optional) | boolean |  |
| canRunLocally (optional) | boolean |  |
| isGpuRequired (optional) | boolean |  |
| systemRequirements (optional) | string |  |
| paperUrl (optional) | string |  |
| githubUrl (optional) | string |  |
| hasApi (optional) | boolean |  |
| apiUrls (optional) | array |  |



## 🔹 ContextualPromptInfo

To be appended to the generated typescript





Properties: 

 | Name | Type | Description |
|---|---|---|
| contextType (optional) | array |  |
| instantExecution (optional) | boolean |  |
| isFavorite (optional) | boolean |  |
| categoryStack (optional) | array |  |
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
| categoryStack (optional) | array |  |
| email  | string |  |
| tier  | string |  |
| newsletter  | string |  |



## 🔹 LanguageModelEnum

## 📄 languageModels (exported const)

  </details>

