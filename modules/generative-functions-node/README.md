# Generative functions node

generative-functions-node (`OperationClassification` node-cjs)



# Api reference

## readerPageGetStaticProps()

| Input      |    |    |
| ---------- | -- | -- |
| context | `GetStaticPropsContext` |  |
| **Output** |    |    |



## 📄 readerPageGetStaticProps (exported const)

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



## 📄 getContextualPromptResults (exported const)

Gets all contextualPromptResults, but only if specific things are true

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.


## 📄 getContextualPrompts (exported const)

Returns all contextual prompts for the selection and for the page with the right context type

# Internal

<details><summary>Show internal (22)</summary>
    
  # augmentMarkdown()

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



## expandFrontmatter()

| Input      |    |    |
| ---------- | -- | -- |
| frontmatter (optional) | `Frontmatter` |  |
| **Output** | {  }   |    |



## findClosestAbsolutePath()

| Input      |    |    |
| ---------- | -- | -- |
| absoluteQueryPath | string |  |
| **Output** |    |    |



## getContextualPromptsArray()

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


| Input      |    |    |
| ---------- | -- | -- |
| scopeProjectRelativePath (optional) | string | If available, will also get the scoped context |
| **Output** |    |    |



## getFirstFile()

Gets the first file in a directory:

Either readme or index, or the first file it finds.


| Input      |    |    |
| ---------- | -- | -- |
| fullPath | string |  |
| **Output** |    |    |



## getFolderRelativeScopeDbFilePath()

Function to centralise the convention of the db file location of a scoped prompt


| Input      |    |    |
| ---------- | -- | -- |
| filename (optional) | string |  |
| **Output** | `String`   |    |



## getReaderPageProps()

NB: this thing doesn't know about the basepath, it allows any path in the project.

Idea: would it be easy to allow for path outside of project as well?


| Input      |    |    |
| ---------- | -- | -- |
| basePath (optional) | string | BasePath for this project |,| queryPath | string | QueryPath as in the URL |,| isAdmin (optional) | boolean | If true, isDev will be overwritten to be false, even in prod |,| absoluteBasePath (optional) | string | If given, will be used instead of basePath, if it exists. |
| **Output** |    |    |



## makeMarkdownLink()

function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## readerPageGetStaticPaths()

NB: I can't do this with a fallback , because next.js doesn't include my docs folder into the bundle.

A solution could be to add the docs folder into the next.js folder or copy it...

https://github.com/vercel/next.js/discussions/32236?sort=new#discussioncomment-3029649

Ther are other workarounds here to make sure it ends up in the bundle.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



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


## 📄 canSeeFileContent (exported const)

## 📄 canSeeFile (exported const)

TODO: use something like this to ensure we have the type safety and not work with strings >.<

```ts
import { frontmatterToObject } from "frontmatter-util";
import webMarkdownFileTsInterface from "markdown-types/db/ts-interfaces/webmarkdownfile.json";
```


## 📄 expandFrontmatter (exported const)

## 📄 findClosestAbsolutePath (exported const)

## 📄 getContextualPromptsArray (exported const)

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


## 📄 getFirstFile (exported const)

Gets the first file in a directory:

Either readme or index, or the first file it finds.


## 📄 getFolderRelativeScopeDbFilePath (exported const)

Function to centralise the convention of the db file location of a scoped prompt


## 📄 getReaderPageProps (exported const)

NB: this thing doesn't know about the basepath, it allows any path in the project.

Idea: would it be easy to allow for path outside of project as well?


## 📄 makeMarkdownLink (exported const)

function that writes markdown for a text + url + alt. This may differ per platform in the end, for now I'll use my own: `["text"(alt)](url)`


## 📄 readerPageGetStaticPaths (exported const)

NB: I can't do this with a fallback , because next.js doesn't include my docs folder into the bundle.

A solution could be to add the docs folder into the next.js folder or copy it...

https://github.com/vercel/next.js/discussions/32236?sort=new#discussioncomment-3029649

Ther are other workarounds here to make sure it ends up in the bundle.
  </details>

