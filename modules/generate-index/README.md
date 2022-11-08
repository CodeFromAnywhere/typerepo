# Generate index

generate-index (node operation)



# Api reference

## generateSimpleIndex()

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationName,
  manualProjectRoot,
} | { operationName: string, <br />manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## 📄 generateSimpleIndex (exported const)

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

