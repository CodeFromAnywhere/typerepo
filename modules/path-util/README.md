# Path util

path-util (js operation)

Gets insightful information about any file or folder (path)




# Api reference

## calculatePathMetaData()

for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
for files: just calculates the path metadata


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## 📄 calculatePathMetaData (exported const)

for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
for files: just calculates the path metadata


## byteCount()

/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 */


| Input      |    |    |
| ---------- | -- | -- |
| s | string |  |
| **Output** | {  }   |    |



## categorizeFiles()

explores files in an operation within a specified location or from a specified type


| Input      |    |    |
| ---------- | -- | -- |
| {
  basePath,
  type,
  ignoreIndexFiles,
} | { basePath: {  }, <br />ignoreIndexFiles?: boolean, <br />type?: code / data / text, <br /> } |  |
| **Output** |    |    |



## getFolderSummary()

calculates folder summary from a categorized file paths object


| Input      |    |    |
| ---------- | -- | -- |
| categorizedFiles | `CategorizedFilePaths` |  |
| **Output** |    |    |



## 📄 categorizeFiles (exported const)

explores files in an operation within a specified location or from a specified type


## 📄 getFolderSummary (exported const)

calculates folder summary from a categorized file paths object

