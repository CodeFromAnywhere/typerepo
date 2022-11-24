# Marked util

marked-util (`OperationClassification` cjs)



# Api reference

# Internal

<details><summary>Show internal (12)</summary>
    
  # findCodespansFromTokenRecursively()




| Input      |    |    |
| ---------- | -- | -- |
| token | `marked.Token` |  |
| **Output** | string[]   |    |



## findCodespans()

find all backtick-blocks


| Input      |    |    |
| ---------- | -- | -- |
| sectionContent | string |  |
| **Output** | string[]   |    |



## findEmbedsFromTokenRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| token | `marked.Token` |  |
| **Output** | { alt: string, <br />src: string, <br />type: video / audio / image / text / other, <br /> }[]   |    |



## findEmbeds()

find all embedded assets


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | { alt: string, <br />src: string, <br />type: video / audio / image / text / other, <br /> }[]   |    |



## findLinksFromTokenRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| token | `marked.Token` |  |
| **Output** | { alt: string, <br />href: string, <br />type: video / audio / image / text / other, <br /> }[]   |    |



## findLinks()

find all embedded assets


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | { alt: string, <br />href: string, <br />type: video / audio / image / text / other, <br /> }[]   |    |



## 📄 findCodespansFromTokenRecursively (exported const)

## 📄 findCodespans (exported const)

find all backtick-blocks


## 📄 findEmbedsFromTokenRecursively (exported const)

## 📄 findEmbeds (exported const)

find all embedded assets


## 📄 findLinksFromTokenRecursively (exported const)

## 📄 findLinks (exported const)

find all embedded assets
  </details>

