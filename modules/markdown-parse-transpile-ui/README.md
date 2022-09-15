# Markdown parse transpile ui

markdown-parse-transpile-ui (ui-es6 operation)



# Outline

## Functions

- [renderFrontmatter](#renderFrontmatter)
- [renderMarkdownChunk](#renderMarkdownChunk)
- [renderMarkdownContent](#renderMarkdownContent)
- [renderMarkdownParse](#renderMarkdownParse)
- [renderMarkdownTitle](#renderMarkdownTitle)

## Interfaces:

- [Frontmatter](#Frontmatter)
- [MarkdownChunk](#MarkdownChunk)
- [MarkdownParse](#MarkdownParse)



# Functions

## renderFrontmatter

Renders markdown frontmatter parameters (and optionally a spacer)




### Parameters (2)

#### Parameter 1: parameters: object

> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes




#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| renderSpacer (optional) | boolean |  |



## renderMarkdownChunk

renders a MarkdownChunk interface




### Parameters (1)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |



## renderMarkdownContent

renders a markdown striing (without frontmatter)




### Parameters (2)

#### Parameter 1: content: string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| big (optional) | boolean |  |



## renderMarkdownParse

renders the MardkownParse interface (including frontmatter)




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
| parameters  | object | Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |



## renderMarkdownTitle

renders a markdown title (level should be 1 for h1 and 6 for h6)




### Parameters (2)

#### Parameter 1: title: string

#### Parameter 2: level: number

# Interfaces

## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes



> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes




## MarkdownChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number | 0 is a paragraph 1-6 is h1 until h6 |
| content (optional) | string |  |
| markdownEmbed (optional) | object | Anything in the format `![alt](src)`<br /><br />NB: I need to be very clear how this one works |
| markdownLink (optional) | object | Anything in the format `[alt](href)`<br /><br />It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |



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


