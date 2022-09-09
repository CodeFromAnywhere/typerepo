# Key value markdown js

key-value-markdown-js (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [flattenMarkdownChunks](#flattenMarkdownChunks)
- [getKvmdItemsRecursively](#getKvmdItemsRecursively)
- [getParagraphsRecursively](#getParagraphsRecursively)
- [kvmdDataMap](#kvmdDataMap)
- [kvmdDataToString](#kvmdDataToString)
- [kvmdParseToMarkdownString](#kvmdParseToMarkdownString)
- [markdownStringToKvmdParse](#markdownStringToKvmdParse)
- [parseKvmdLine](#parseKvmdLine)



# Functions

## flattenMarkdownChunks

Max. indexation depth: 2, 



### Returns: array

- null: object





## getKvmdItemsRecursively

Max. indexation depth: 4, 

recursively dives into the Chunk to get all kvmd items

NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name

### Returns: array

- null: object





## getParagraphsRecursively

Max. indexation depth: 4, 

recursively dives into the Chunk to get all paragraphs inside

### Returns: array

- null: object





## kvmdDataMap

Max. indexation depth: 4, 

DEPRECATED: probably never needed, unless I make it useful

mapper function to give a kvmd data object other parameters.

NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.

### Returns: array

- null: object





## kvmdDataToString

Max. indexation depth: 2, 

parses KeyValueMarkdownModelType into a string which can be part of a new markdown file

NB: we need to know the previous line as well because the header we need to print depends on it

### Returns: string







## kvmdParseToMarkdownString

Max. indexation depth: 4, 

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file

### Returns: string







## markdownStringToKvmdParse

Max. indexation depth: 3, 

parses a key value md string (with support for headings and frontmatter)

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| data  | array |  |


## parseKvmdLine

Max. indexation depth: 2, 

parses a kv md line with data into a key, value, and comment (if available)

if the key is an empty string, the line will return undefined

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment (optional) | object |  |


