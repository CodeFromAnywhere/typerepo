# All

all (node operation)



# Outline

## Functions

- [allOperationsRemoveJsSrc](#allOperationsRemoveJsSrc)
- [clearAllTsDatabases](#clearAllTsDatabases)
- [codeAll](#codeAll)
- [forAllFiles](#forAllFiles)
- [forAllFolders](#forAllFolders)
- [getAllOperationClassifications](#getAllOperationClassifications)
- [gitShipAllRepos](#gitShipAllRepos)
- [mdAllOperations](#mdAllOperations)
- [minifyAllOperations](#minifyAllOperations)
- [publishAllOperations](#publishAllOperations)
- [removeAllFiles](#removeAllFiles)
- [removeAllFoldersCli](#removeAllFoldersCli)
- [removeAllFolders](#removeAllFolders)
- [removeAll](#removeAll)
- [renameAll](#renameAll)
- [runScriptEverywhere](#runScriptEverywhere)
- [setScriptEverywhere](#setScriptEverywhere)



# Functions

## allOperationsRemoveJsSrc

BEWARE! This removes all .d.ts, .js, and .d.ts.map files in your source folder!




### Parameters (1)

#### Parameter 1: debug (optional): boolean

## clearAllTsDatabases

## codeAll

opens all files in vscode




### Parameters (1)

#### Parameter 1: search: string

## forAllFiles

executes a command or callback for every file

in commands, $LOCATION is provided as env variable, and command is executed in the dir of the file




## forAllFolders

executes a command or callback in every folder of a certain type. Supports git repos and operations now




## getAllOperationClassifications

## gitShipAllRepos

`gitShipAllPackages` Just ships code everywhere to github, wherever there's a git folder and there are changes.




## mdAllOperations

### Parameters (1)

#### Parameter 1: debug (optional): boolean

## minifyAllOperations

minify all operations everywhere. optionally:
- enable the shell
- specify a basepath (tools by default)




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath (optional) | object |  |
| onlyRoot (optional) | boolean |  |
| shell (optional) | boolean | if you run a command, setting this to true, will make sure the results are shown |



## publishAllOperations

Script to publish all packages everywhere (that also runs prepublish). Only src in git, only build in npm.




## removeAllFiles

removes all files that have an exact match of the location (folders not because we use rm without -rf)




### Parameters (1)

#### Parameter 1: search: string

## removeAllFoldersCli

## removeAllFolders

### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string |  |
| folderNames  | array |  |
| ignore (optional) | object |  |
| onlyRoot (optional) | boolean |  |



## removeAll

removes all xyz for a folder

make sure to specify which type you want.... folder or file most likely




## renameAll

renames all files to a new name (optionally a func, based on the old path)




## runScriptEverywhere

runs a package script in all tools operations

NB: uses npm insead of yarn, but for scripts this shouldn't matter




### Parameters (2)

#### Parameter 1: script: string

#### Parameter 2: startIndex (optional): number

## setScriptEverywhere

set package.json script to another value in all operations in tools folder




### Parameters (2)

#### Parameter 1: script: string

#### Parameter 2: value: string

