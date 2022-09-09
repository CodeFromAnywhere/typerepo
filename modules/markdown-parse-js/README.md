# Markdown parse js

markdown-parse-js (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [markdownParseToMarkdownString](#markdownParseToMarkdownString)
- [mdContentParseRecursively](#mdContentParseRecursively)
- [mdToJsonParse](#mdToJsonParse)
- [parseFrontmatterMarkdownString](#parseFrontmatterMarkdownString)
- [parseMdToChunks](#parseMdToChunks)
- [removeHeaderPrefix](#removeHeaderPrefix)



# Functions

## markdownParseToMarkdownString

Max. indexation depth: 1, 



### Returns: string







## mdContentParseRecursively

Max. indexation depth: 5, 

recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]

Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets

## Returns: unknown

## mdToJsonParse

Max. indexation depth: 2, 

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!

## Returns: unknown

## parseFrontmatterMarkdownString

Max. indexation depth: 3, 

splits a markdown string into its frontmatter object and the raw content (without frontmatter)

## Returns: unknown

## parseMdToChunks

Max. indexation depth: 6, 

should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.

## Returns: unknown

## removeHeaderPrefix

Max. indexation depth: 4, 

removes header prefix (##### etc) and trims whats behind that

## Returns: unknown

