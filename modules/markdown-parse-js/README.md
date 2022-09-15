# Markdown parse js

markdown-parse-js (js operation)



# Outline

## Functions

- [markdownParseToMarkdownString](#markdownParseToMarkdownString)
- [mdContentParseRecursively](#mdContentParseRecursively)
- [mdToJsonParse](#mdToJsonParse)
- [parseFrontmatterMarkdownString](#parseFrontmatterMarkdownString)
- [parseMdToChunks](#parseMdToChunks)
- [removeHeaderPrefix](#removeHeaderPrefix)

## Interfaces:

- [MarkdownParse](#MarkdownParse)



# Functions

## markdownParseToMarkdownString

### Returns: string

### Parameters (1)

#### Parameter 1: markdownParse: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string | if available, this can be the filename of the markdown in this markdown-parse. Can be used for things like merging |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |



## mdContentParseRecursively

recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]

Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets




### Parameters (2)

#### Parameter 1: markdownString: string

#### Parameter 2: level: number

## mdToJsonParse

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!




### Parameters (2)

#### Parameter 1: markdownString: string

#### Parameter 2: fileName (optional): string

## parseFrontmatterMarkdownString

splits a markdown string into its frontmatter object and the raw content (without frontmatter)




### Parameters (1)

#### Parameter 1: markdownWithFrontmatter: string

## parseMdToChunks

should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.




### Parameters (2)

#### Parameter 1: markdownString: string

#### Parameter 2: level: number

## removeHeaderPrefix

removes header prefix (##### etc) and trims whats behind that




### Parameters (1)

#### Parameter 1: string: string

# Interfaces

## MarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string | if available, this can be the filename of the markdown in this markdown-parse. Can be used for things like merging |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| parameters  | object | Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes |
| downmatterParameters (optional) | object |  |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |


