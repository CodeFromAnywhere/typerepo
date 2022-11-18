# Vscode open

vscode-open (`OperationClassification` node-cjs)

function to open a file in VSCode (wraps `code` cli command)




# Api reference

## 🔹 OpenableFile

Properties: 

 | Name | Type | Description |
|---|---|---|
| projectRelativePath (optional) | string |  |
| operationName (optional) | string |  |
| operationRelativeFilePath (optional) | string |  |
| line (optional) | number |  |


# Internal

<details><summary>Show internal (4)</summary>
    
  # getOpenableFilePath()




| Input      |    |    |
| ---------- | -- | -- |
| file | `OpenableFile` |  |
| **Output** |    |    |



## vscodeOpen()

opens a file in vscode through the "code" cli


| Input      |    |    |
| ---------- | -- | -- |
| config | { files?: `OpenableFile`[], <br /> } |  |
| **Output** |    |    |



## 📄 getOpenableFilePath (exported const)

## 📄 vscodeOpen (exported const)

opens a file in vscode through the "code" cli
  </details>

