# Matter types

matter-types (`OperationClassification` cjs)



# Api reference

## 🔹 Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes








## frontmatterParseToString()

Parses frontmatter object into a frontmatter string
- includes a newline at the end
- string[] becomes a comma separated string
TODO: maybe parse xxxAt values into human readable dates


| Input      |    |    |
| ---------- | -- | -- |
| frontmatter | `Frontmatter` |  |
| **Output** | `String`   |    |



## 📄 frontmatterParseToString (exported const)

Parses frontmatter object into a frontmatter string
- includes a newline at the end
- string[] becomes a comma separated string
TODO: maybe parse xxxAt values into human readable dates

# Internal

<details><summary>Show internal (8)</summary>
    
  # getFrontmatterValueString()




| Input      |    |    |
| ---------- | -- | -- |
| value (optional) | {  } |  |
| **Output** | {  }   |    |



## quotedOrNot()

For now, simply quote a string if it contains commas

There are probably more edgecases that need to be fixed here


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** | `String`   |    |



## stringifyNewlines()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |



## 🔹 FrontmatterValue

## 📄 getFrontmatterValueString (exported const)

## 📄 quotedOrNot (exported const)

For now, simply quote a string if it contains commas

There are probably more edgecases that need to be fixed here


## 📄 stringifyNewlines (exported const)

## 📄 test (exported const)

  </details>

