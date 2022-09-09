# Matter types

matter-types (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [frontmatterParseToString](#frontmatterParseToString)
- [getFrontmatterValueString](#getFrontmatterValueString)
- [quotedOrNot](#quotedOrNot)
- [stringifyNewlines](#stringifyNewlines)



# Functions

## frontmatterParseToString

Max. indexation depth: 4, 

Parses frontmatter object into a frontmatter string
- includes a newline at the end
- string[] becomes a comma separated string
TODO: maybe parse xxxAt values into human readable dates

### Returns: string







## getFrontmatterValueString

Max. indexation depth: 2, 



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## quotedOrNot

Max. indexation depth: 1, 

For now, simply quote a string if it contains commas

There are probably more edgecases that need to be fixed here

### Returns: string







## stringifyNewlines

Max. indexation depth: 1, 



## Returns: unknown

