# Marked util

marked-util (`OperationClassification` cjs)



# Api reference

## findEmbeds()

find all embedded assets


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | { alt: string, <br />src: string, <br />type: video / audio / image / text / other, <br /> }[]   |    |



## 📄 findEmbeds (exported const)

find all embedded assets


## findCodespans()

find all backtick-blocks


| Input      |    |    |
| ---------- | -- | -- |
| sectionContent | string |  |
| **Output** | string[]   |    |



## findLinks()

find all embedded assets


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | {  }[]   |    |



## 📄 findCodespans (exported const)

find all backtick-blocks


## 📄 findLinks (exported const)

find all embedded assets

# Internal

<details><summary>Show internal (6)</summary>
    
  # findCodespansFromTokenRecursively()




| Input      |    |    |
| ---------- | -- | -- |
| token | `marked.Token` |  |
| **Output** | string[]   |    |



## findEmbedsFromTokenRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| token | `marked.Token` |  |
| **Output** | {  }[]   |    |



## findLinksFromTokenRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| token | `marked.Token` |  |
| **Output** | {  }[]   |    |



## 📄 findCodespansFromTokenRecursively (exported const)

## 📄 findEmbedsFromTokenRecursively (exported const)

## 📄 findLinksFromTokenRecursively (exported const)

  </details>

