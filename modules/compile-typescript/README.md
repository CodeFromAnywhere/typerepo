# Compile typescript

compile-typescript (js operation)



# Outline

## Functions

- [getCompileErrors](#getCompileErrors)
- [getTypescriptErrorsFromFiles](#getTypescriptErrorsFromFiles)
- [writeBuildErrors](#writeBuildErrors)

## Interfaces

- [PackageJson](#packagejson)

## Variables

- [getCompileErrors](#getcompileerrors)
- [[
  operationBasePath,
  operationManualProjectRoot,
  typerepoManualProjectRoot,
]](#operationbasepath-operationmanualprojectroot-typerepomanualprojectroot)
- [writeBuildErrors](#writebuilderrors)



# Functions

## getCompileErrors

gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one

1) get buildErrors for all src files of current operation
2) if build doesn't succeed, only check for build errors in current operation
3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there




### Parameters (3)

#### Parameter 1: operationBasePath: string

#### Parameter 2: onlyDependants (optional): boolean

#### Parameter 3: manualProjectRoot (optional): string

## getTypescriptErrorsFromFiles

/**
 * uses official typescript compiler to check all given files for compilation errors
 */


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: {  filePaths,  debug,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string |  |
| filePaths  | array |  |
| packageJson  | object |  |
| debug (optional) | boolean |  |



## writeBuildErrors

### Parameters (3)

#### Parameter 1: operationBasePath: string

#### Parameter 2: operationManualProjectRoot (optional): string

#### Parameter 3: typerepoManualProjectRoot (optional): string

# Interfaces

## PackageJson

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string |  |
| sensible (optional) | object |  |
| operation (optional) | object |  |


# Variables

## getCompileErrors (exported const)

gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one

1) get buildErrors for all src files of current operation
2) if build doesn't succeed, only check for build errors in current operation
3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there


## [

  operationBasePath,
  operationManualProjectRoot,
  typerepoManualProjectRoot,
] (unexported const)




## writeBuildErrors (exported const)

