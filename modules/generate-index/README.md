# Generate index

generate-index (node operation)



# Outline

## Functions

- [generateNamedIndex](#generateNamedIndex)
- [generateSimpleIndex](#generateSimpleIndex)
- [isTestFn](#isTestFn)
- [mapToImportStatement](#mapToImportStatement)

## Interfaces

- [ImportStatement](#importstatement)

## Variables

- [generateNamedIndex](#generatenamedindex)
- [generateSimpleIndex](#generatesimpleindex)
- [isTestFn](#istestfn)
- [mapToImportStatement](#maptoimportstatement)



# Functions

## generateNamedIndex()

Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationName,
  manualProjectRoot,
} | { manualProjectRoot?: string, <br />operationName: string, <br /> } |  |
| **Output** |    |    |



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



## isTestFn()

| Input      |    |    |
| ---------- | -- | -- |
| x | `ImportStatement` |  |
| **Output** | {  }   |    |



## mapToImportStatement()

| Input      |    |    |
| ---------- | -- | -- |
| item | {  } |  |,| type | variable / function / interface |  |
| **Output** | { type: function / variable / interface, <br />name: string, <br />srcRelativeFileId: string, <br /> }   |    |


# Interfaces

## 🔷 ImportStatement

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| srcRelativeFileId  | string |  |


# Variables

## 📄 generateNamedIndex (exported const)

Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


## 📄 generateSimpleIndex (exported const)

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


## 📄 isTestFn (exported const)

## 📄 mapToImportStatement (exported const)

