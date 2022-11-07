# Comment util

comment-util (js operation)



# Outline

## Functions

- [stripCommentEnd](#stripCommentEnd)
- [stripCommentStart](#stripCommentStart)
- [stripComment](#stripComment)
- [stripSlashes](#stripSlashes)
- [stripStar](#stripStar)
- [trim](#trim)

## Variables

- [stripCommentEnd](#stripcommentend)
- [stripCommentStart](#stripcommentstart)
- [stripComment](#stripcomment)
- [stripSlashes](#stripslashes)
- [stripStar](#stripstar)
- [trim](#trim)



# Functions

## stripCommentEnd()

only strip slahes for single-line comments


| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## stripCommentStart()

| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## stripComment()

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


| Input      |    |    |
| ---------- | -- | -- |
| rawCommentString | string |  |
| **Output** | `String`   |    |



## stripSlashes()

| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## stripStar()

| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## trim()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |


# Variables

## 📄 stripCommentEnd (exported const)

## 📄 stripCommentStart (exported const)

## 📄 stripComment (exported const)

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


## 📄 stripSlashes (exported const)

## 📄 stripStar (exported const)

## 📄 trim (exported const)

