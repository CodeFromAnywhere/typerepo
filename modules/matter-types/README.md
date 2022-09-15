# Matter types

matter-types (js operation)



# Outline

## Functions

- [frontmatterParseToString](#frontmatterParseToString)
- [getFrontmatterValueString](#getFrontmatterValueString)
- [quotedOrNot](#quotedOrNot)
- [stringifyNewlines](#stringifyNewlines)

## Interfaces:

- [Downmatter](#Downmatter)
- [FrontmatterValue](#FrontmatterValue)
- [Frontmatter](#Frontmatter)
- [MarkdownIndex](#MarkdownIndex)



# Functions

## frontmatterParseToString

Parses frontmatter object into a frontmatter string
- includes a newline at the end
- string[] becomes a comma separated string
TODO: maybe parse xxxAt values into human readable dates


### Returns: string

### Parameters (1)

## getFrontmatterValueString

### Returns: object

### Parameters (1)

#### Parameter 1: value (optional): object

## quotedOrNot

For now, simply quote a string if it contains commas

There are probably more edgecases that need to be fixed here


### Returns: string

### Parameters (1)

#### Parameter 1: string: string

## stringifyNewlines

### Parameters (1)

#### Parameter 1: string: string

# Interfaces

## Downmatter

Properties: 

 | Name | Type | Description |
|---|---|---|
| detectedLanguage (optional) | string |  |
| labels (optional) | array |  |



## FrontmatterValue

## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes



> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes




## MarkdownIndex

This could hold anything that we can index about a markdown-file

It should probably also be posted in the markdown file itself as "downmatter", if that's a good idea



> This could hold anything that we can index about a markdown-file<br /><br />It should probably also be posted in the markdown file itself as "downmatter", if that's a good idea

Properties: 

 | Name | Type | Description |
|---|---|---|
| detectedLanguage  | string |  |
| labels  | array |  |


