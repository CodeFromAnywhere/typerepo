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
- [rebuildAllOperations](#rebuildAllOperations)
- [removeAllFiles](#removeAllFiles)
- [removeAllFolders](#removeAllFolders)
- [removeAll](#removeAll)
- [renameAll](#renameAll)
- [runScriptEverywhere](#runScriptEverywhere)
- [setScriptEverywhere](#setScriptEverywhere)



# Functions

## allOperationsRemoveJsSrc

BEWARE! This removes all .d.ts, .js, and .d.ts.map files in your source folder!

## Returns: unknown

## clearAllTsDatabases



## Returns: unknown

## codeAll

opens all files in vscode

## Returns: unknown

## forAllFiles

executes a command or callback for every file

in commands, $LOCATION is provided as env variable, and command is executed in the dir of the file

## Returns: unknown

## forAllFolders

executes a command or callback in every folder of a certain type. Supports git repos and operations now

## Returns: unknown

## getAllOperationClassifications



## Returns: unknown

## gitShipAllRepos

`gitShipAllPackages` Just ships code everywhere to github, wherever there's a git folder and there are changes.

## Returns: unknown

## mdAllOperations



## Returns: unknown

## minifyAllOperations

minify all operations everywhere. optionally:
- enable the shell
- specify a basepath (tools by default)

## Returns: unknown

## publishAllOperations

Script to publish all packages everywhere (that also runs prepublish). Only src in git, only build in npm.

## Returns: unknown

## rebuildAllOperations



## Returns: unknown

## removeAllFiles

removes all files that have an exact match of the location (folders not because we use rm without -rf)

## Returns: unknown

## removeAllFolders



## Returns: unknown

## removeAll

removes all xyz for a folder

make sure to specify which type you want.... folder or file most likely

## Returns: unknown

## renameAll

renames all files to a new name (optionally a func, based on the old path)

## Returns: unknown

## runScriptEverywhere

runs a package script in all tools operations

NB: uses npm insead of yarn, but for scripts this shouldn't matter

## Returns: unknown

## setScriptEverywhere

set package.json script to another value in all operations in tools folder

## Returns: unknown

