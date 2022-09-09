# Generate index

generate-index (node operation)

Size: 361 LOC, 1606 data characters, 3876 text characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: fs, path, log, lowerCaseArray, notEmpty, getOperationPath, db, fs, path, log, getOperationPath, getSrcRelativeFileId, getPackageSourcePaths, hasSubExtension, TsFunction, TsInterface, TsVariable, lowerCaseArray, getSrcRelativeFileId

# Outline

## Functions

- [generateNamedIndex](#generateNamedIndex)
- [generateSimpleIndex](#generateSimpleIndex)
- [isTestFn](#isTestFn)
- [mapToImportStatement](#mapToImportStatement)



# Functions

## generateNamedIndex

Max. indexation depth: 5, 

Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

## Returns: unknown

## generateSimpleIndex

Max. indexation depth: 2, 

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

## Returns: unknown

## isTestFn

Max. indexation depth: 1, 



### Returns: boolean







## mapToImportStatement

Max. indexation depth: 2, 



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| srcRelativeFileId  | string |  |


