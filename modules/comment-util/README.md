# Comment util

comment-util (js operation)



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

only strip slahes for single-line comments




### Parameters (1)

#### Parameter 1: trimmedLine: string

## stripCommentStart

### Parameters (1)

#### Parameter 1: trimmedLine: string

## stripComment

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

### Parameters (1)

#### Parameter 1: rawCommentString: string

## stripSlashes

### Parameters (1)

#### Parameter 1: trimmedLine: string

## stripStar

### Parameters (1)

#### Parameter 1: trimmedLine: string

## trimSurroundingNewlines

removes new lines at beginning and end

NB: This function uses a small recursion! I don't know if this is very efficient, but shouldn't be too deep!

NB: it should be noted that a newline apparently seems to be counting as a single character! Strange.


### Returns: string

### Parameters (1)

#### Parameter 1: string: string

## trim

### Parameters (1)

#### Parameter 1: string: string

