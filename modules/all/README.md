# All

all (node operation)

This operation contains a lot of different functions that can help you to execute different things on all operations.




# Outline

## Functions

- [allOperationsRemoveJsSrc](#allOperationsRemoveJsSrc)
- [allOperationsToMarkdown](#allOperationsToMarkdown)
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

## Variables

- [allOperationsRemoveJsSrc](#alloperationsremovejssrc)
- [allOperationsToMarkdown](#alloperationstomarkdown)
- [clearAllTsDatabases](#clearalltsdatabases)
- [codeAll](#codeall)
- [[debug]](#debug)
- [[folderName, basePath]](#foldername-basepath)
- [forAllFiles](#forallfiles)
- [forAllFolders](#forallfolders)
- [getAllOperationClassifications](#getalloperationclassifications)
- [gitShipAllRepos](#gitshipallrepos)
- [mdAllOperations](#mdalloperations)
- [minifyAllOperations](#minifyalloperations)
- [publishAllOperations](#publishalloperations)
- [removeAllFiles](#removeallfiles)
- [removeAllFoldersCli](#removeallfolderscli)
- [removeAllFolders](#removeallfolders)
- [removeAll](#removeall)
- [renameAll](#renameall)
- [runScriptEverywhere](#runscripteverywhere)
- [[script, startIndex]](#script-startindex)
- [[search]](#search)
- [setScriptEverywhere](#setscripteverywhere)
- [test](#test)
- [[type, command, fileName, basePath, folderName, shellString]](#type-command-filename-basepath-foldername-shellstring)



# Functions

## allOperationsRemoveJsSrc

BEWARE! This removes all .d.ts, .js, and .d.ts.map files in your source folder!




### Parameters (1)

#### Parameter 1: debug (optional): boolean

## allOperationsToMarkdown

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
| shell (optional) | boolean |  |



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

# Variables

## allOperationsRemoveJsSrc (exported const)

BEWARE! This removes all .d.ts, .js, and .d.ts.map files in your source folder!


## allOperationsToMarkdown (exported const)

## clearAllTsDatabases (exported const)

## codeAll (exported const)

opens all files in vscode


## [debug] (unexported const)

## [folderName, basePath] (unexported const)

## forAllFiles (exported const)

executes a command or callback for every file

in commands, $LOCATION is provided as env variable, and command is executed in the dir of the file


## forAllFolders (exported const)

executes a command or callback in every folder of a certain type. Supports git repos and operations now


## getAllOperationClassifications (exported const)

## gitShipAllRepos (exported const)

## mdAllOperations (exported const)

## minifyAllOperations (exported const)

minify all operations everywhere. optionally:
- enable the shell
- specify a basepath (tools by default)


## publishAllOperations (exported const)

## removeAllFiles (exported const)

removes all files that have an exact match of the location (folders not because we use rm without -rf)


## removeAllFoldersCli (unexported const)

## removeAllFolders (exported const)

## removeAll (exported const)

removes all xyz for a folder

make sure to specify which type you want.... folder or file most likely


## renameAll (exported const)

renames all files to a new name (optionally a func, based on the old path)


## runScriptEverywhere (exported const)

runs a package script in all tools operations

NB: uses npm insead of yarn, but for scripts this shouldn't matter


## [script, startIndex] (unexported const)

## [search] (unexported const)

## setScriptEverywhere (exported const)

set package.json script to another value in all operations in tools folder


## test (exported const)

## [type, command, fileName, basePath, folderName, shellString] (unexported const)

