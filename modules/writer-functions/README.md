# Writer functions

writer-functions (`OperationClassification` node-cjs)



# Api reference

## getFrontmatterSchema()

Gets the frontmatterSchema of any markdown model. This should contain all elements that are required to be in the frontmatter of the markdown


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getFrontmatterSchema (exported const)

Gets the frontmatterSchema of any markdown model. This should contain all elements that are required to be in the frontmatter of the markdown

# Internal

<details><summary>Show internal (26)</summary>
    
  # copyPath()




| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## deleteFileOrFolder()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## getFileContents()

Gets the contents of a file in the project


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |
| **Output** |    |    |



## getWriterWebPagesMenu()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getWriterWebPages()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## movePath()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string | Can be file only for now |,| projectRelativeNewFolderPath | string |  |
| **Output** |    |    |



## newFile()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |
| **Output** |    |    |



## newFolder()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFolderBasePath | string |  |,| folderName | string |  |
| **Output** |    |    |



## processAssetUpload()

Used for the markdown reader to immediately process a asset upload. If we want to validate this, it would be good to allow a second parameter that checks if you have access to the file


| Input      |    |    |
| ---------- | -- | -- |
| assets | `BackendAsset`[] |  |
| **Output** |    |    |



## renameFileOrFolder()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |,| newName | string |  |
| **Output** |    |    |



## saveFileContents()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |,| newContent | string |  |
| **Output** |    |    |



## trashFileOrFolder()

NB: only would work with an ESM module, but I don't have time for this now. Later this could replace `deleteFileOrFolder`


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** |    |    |



## updateFrontmatter()

Update frontmatter from a markdownfile by overwriting it, keeping old values that you don't change

If you provide a folder as projectRelativePath, it stores it to README.md in that folder, even if that doens't exist.


| Input      |    |    |
| ---------- | -- | -- |
| config | { projectRelativePath: string, <br />frontmatter: { [key: string]: string }, <br /> } |  |
| **Output** |    |    |



## 📄 copyPath (exported const)

## 📄 deleteFileOrFolder (exported const)

## 📄 getFileContents (exported const)

Gets the contents of a file in the project


## 📄 getWriterWebPagesMenu (exported const)

## 📄 getWriterWebPages (exported const)

## 📄 movePath (exported const)

## 📄 newFile (exported const)

## 📄 newFolder (exported const)

## 📄 processAssetUpload (exported const)

Used for the markdown reader to immediately process a asset upload. If we want to validate this, it would be good to allow a second parameter that checks if you have access to the file


## 📄 renameFileOrFolder (exported const)

## 📄 saveFileContents (exported const)

## 📄 trashFileOrFolder (exported const)

NB: only would work with an ESM module, but I don't have time for this now. Later this could replace `deleteFileOrFolder`


## 📄 updateFrontmatter (exported const)

Update frontmatter from a markdownfile by overwriting it, keeping old values that you don't change

If you provide a folder as projectRelativePath, it stores it to README.md in that folder, even if that doens't exist.
  </details>

