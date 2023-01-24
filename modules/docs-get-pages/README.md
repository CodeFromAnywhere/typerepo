# Docs get pages

docs-get-pages (`OperationClassification` undefined)



# Api reference

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (15)</summary>
    
  # docsGetPages()




| Input      |    |    |
| ---------- | -- | -- |
| basePaths | { projectRelativeBasePath: string, <br />queryPath: string, <br /> }[] |  |
| **Output** |    |    |



## getMarkdownReaderPages()

Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getPublicMarkdownFilePaths()

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)

Readme is put on top!


| Input      |    |    |
| ---------- | -- | -- |
| baseFolderPath | string |  |,| includeFoldersWithResults (optional) | boolean |  |
| **Output** |    |    |



## removeExtensionsFromPath()

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders


| Input      |    |    |
| ---------- | -- | -- |
| relativePath | string | should also work for filenames |
| **Output** | `String`   |    |



## removeNumberPrefix()

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


| Input      |    |    |
| ---------- | -- | -- |
| fileOrFolderName | string |  |
| **Output** | `String`   |    |



## shouldExposeMarkdownFile()

markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.


| Input      |    |    |
| ---------- | -- | -- |
| parameters | `Frontmatter` |  |
| **Output** | {  }   |    |



## stripReadmeFromFolder()

To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md


| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |
| **Output** | `String`   |    |



## 📄 availableExtensions (exported const)

## 📄 docsGetPages (exported const)

## 📄 getMarkdownReaderPages (exported const)

Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.


## 📄 getPublicMarkdownFilePaths (exported const)

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)

Readme is put on top!


## 📄 removeExtensionsFromPath (exported const)

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders


## 📄 removeNumberPrefix (exported const)

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


## 📄 shouldExposeMarkdownFile (exported const)

markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.


## 📄 stripReadmeFromFolder (exported const)

To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md
  </details>

