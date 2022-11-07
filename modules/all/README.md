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
- [forAllFiles](#forallfiles)
- [forAllFolders](#forallfolders)
- [getAllOperationClassifications](#getalloperationclassifications)
- [gitShipAllRepos](#gitshipallrepos)
- [mdAllOperations](#mdalloperations)
- [minifyAllOperations](#minifyalloperations)
- [publishAllOperations](#publishalloperations)
- [removeAllFiles](#removeallfiles)
- [removeAllFolders](#removeallfolders)
- [removeAll](#removeall)
- [renameAll](#renameall)
- [runScriptEverywhere](#runscripteverywhere)
- [setScriptEverywhere](#setscripteverywhere)
- [test](#test)



# Functions

## allOperationsRemoveJsSrc()

BEWARE! This removes all .d.ts, .js, and .d.ts.map files in your source folder!


| Input      |    |    |
| ---------- | -- | -- |
| debug (optional) | boolean |  |
| **Output** |    |    |



## allOperationsToMarkdown()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## clearAllTsDatabases()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## codeAll()

opens all files in vscode


| Input      |    |    |
| ---------- | -- | -- |
| search | string |  |
| **Output** |    |    |



## forAllFiles()

executes a command or callback for every file

in commands, $LOCATION is provided as env variable, and command is executed in the dir of the file


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## forAllFolders()

executes a command or callback in every folder of a certain type. Supports git repos and operations now


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getAllOperationClassifications()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## gitShipAllRepos()

`gitShipAllPackages` Just ships code everywhere to github, wherever there's a git folder and there are changes.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## mdAllOperations()

| Input      |    |    |
| ---------- | -- | -- |
| debug (optional) | boolean |  |
| **Output** |    |    |



## minifyAllOperations()

minify all operations everywhere. optionally:
- enable the shell
- specify a basepath (tools by default)


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { basePath?: {  }, <br />onlyRoot?: boolean, <br />shell?: boolean, <br /> } |  |
| **Output** |    |    |



## publishAllOperations()

Script to publish all packages everywhere (that also runs prepublish). Only src in git, only build in npm.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## removeAllFiles()

removes all files that have an exact match of the location (folders not because we use rm without -rf)


| Input      |    |    |
| ---------- | -- | -- |
| search | string |  |
| **Output** |    |    |



## removeAllFolders()

| Input      |    |    |
| ---------- | -- | -- |
| config | { basePath: string, <br />folderNames: string[], <br />ignore?: {  }, <br />onlyRoot?: boolean, <br /> } |  |
| **Output** |    |    |



## removeAll()

removes all xyz for a folder

make sure to specify which type you want.... folder or file most likely


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## renameAll()

renames all files to a new name (optionally a func, based on the old path)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runScriptEverywhere()

runs a package script in all tools operations

NB: uses npm insead of yarn, but for scripts this shouldn't matter


| Input      |    |    |
| ---------- | -- | -- |
| script | string |  |,| startIndex (optional) | number |  |
| **Output** |    |    |



## setScriptEverywhere()

set package.json script to another value in all operations in tools folder


| Input      |    |    |
| ---------- | -- | -- |
| script | string |  |,| value | string |  |
| **Output** |    |    |


# Variables

## 📄 allOperationsRemoveJsSrc (exported const)

BEWARE! This removes all .d.ts, .js, and .d.ts.map files in your source folder!


## 📄 allOperationsToMarkdown (exported const)

## 📄 clearAllTsDatabases (exported const)

## 📄 codeAll (exported const)

opens all files in vscode


## 📄 forAllFiles (exported const)

executes a command or callback for every file

in commands, $LOCATION is provided as env variable, and command is executed in the dir of the file


## 📄 forAllFolders (exported const)

executes a command or callback in every folder of a certain type. Supports git repos and operations now


## 📄 getAllOperationClassifications (exported const)

## 📄 gitShipAllRepos (exported const)

## 📄 mdAllOperations (exported const)

## 📄 minifyAllOperations (exported const)

minify all operations everywhere. optionally:
- enable the shell
- specify a basepath (tools by default)


## 📄 publishAllOperations (exported const)

## 📄 removeAllFiles (exported const)

removes all files that have an exact match of the location (folders not because we use rm without -rf)


## 📄 removeAllFolders (exported const)

## 📄 removeAll (exported const)

removes all xyz for a folder

make sure to specify which type you want.... folder or file most likely


## 📄 renameAll (exported const)

renames all files to a new name (optionally a func, based on the old path)


## 📄 runScriptEverywhere (exported const)

runs a package script in all tools operations

NB: uses npm insead of yarn, but for scripts this shouldn't matter


## 📄 setScriptEverywhere (exported const)

set package.json script to another value in all operations in tools folder


## 📄 test (exported const)

