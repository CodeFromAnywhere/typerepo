# Operation util

operation-util (js operation)

Operation with utility functions to calculate things about operations and alter operation-index.




# Api reference

## recalculateOperationIndexJson()

relies on import index


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## writeKeyToOperationIndexJson()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string | can be a path to any file in the operation |
| **Output** |    |    |



## 📄 recalculateOperationIndexJson (exported const)

relies on import index


## 📄 writeKeyToOperationIndexJson (exported const)

# Internal

<details><summary>Show internal (5)</summary>
  
  # getDependenciesSummary()




| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## getOperationMetaData()

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string | any path in an operation |
| **Output** |    |    |



## 🔹 OperationMetaData

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationBasePath  | string |  |
| operationIndex (optional) | object |  |
| operationName  | string |  |
| srcPath  | string |  |
| operationFolderName  | string |  |
| relativeOperationLocationPath  | string |  |



## 📄 getDependenciesSummary (exported const)

## 📄 getOperationMetaData (exported const)

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file
  </details>

