# Comment util

comment-util (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [stripCommentEnd](#stripCommentEnd)
- [stripCommentStart](#stripCommentStart)
- [stripComment](#stripComment)
- [stripSlashes](#stripSlashes)
- [stripStar](#stripStar)
- [trimSurroundingNewlines](#trimSurroundingNewlines)
- [trim](#trim)



# Functions

## stripCommentEnd

Max. indexation depth: 2, 

only strip slahes for single-line comments

## Returns: unknown

## stripCommentStart

Max. indexation depth: 2, 



## Returns: unknown

## stripComment

Max. indexation depth: 5, 

parses comments (single line, multiline and doc) and removes the comment syntax

- removes slashes
- removes multiline comment prefix
- removes multiline comment suffix
- removes doccomment stars

example input: `// comment`, output: `comment`

example input:
```

some
multiline
comment *~/
```
output:
```
some
multiline
comment
```

### Returns: string







## stripSlashes

Max. indexation depth: 1, 



## Returns: unknown

## stripStar

Max. indexation depth: 1, 



## Returns: unknown

## trimSurroundingNewlines

Max. indexation depth: 2, 

removes new lines at beginning and end

NB: This function uses a small recursion! I don't know if this is very efficient, but shouldn't be too deep!

NB: it should be noted that a newline apparently seems to be counting as a single character! Strange.

### Returns: string







## trim

Max. indexation depth: 0, 



## Returns: unknown

