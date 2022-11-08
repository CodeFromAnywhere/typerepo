# Comment util

comment-util (js operation)



# Api reference

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

