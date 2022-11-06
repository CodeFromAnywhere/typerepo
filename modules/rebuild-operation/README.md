# Rebuild operation

rebuild-operation (node operation)

Operation that makes it possible to rebuild an operation (re-index, re-build, etc.)




# Outline

## Docs

- [README](#readme)
- [Operation build steps](#operation-build-steps)

## Functions

- [clearTsDatabase](#clearTsDatabase)
- [executeCommandQuietUnlessFail](#executeCommandQuietUnlessFail)
- [exitIfProcessDependenciesChanged](#exitIfProcessDependenciesChanged)
- [generateJsonSchemas](#generateJsonSchemas)
- [getAllDbModels](#getAllDbModels)
- [getFileIds](#getFileIds)
- [getIndexFileIds](#getIndexFileIds)
- [getSrcIds](#getSrcIds)
- [isOperationBuildNeeded](#isOperationBuildNeeded)
- [isSdkOperation](#isSdkOperation)
- [main](#main)
- [rebuildAllOperations](#rebuildAllOperations)
- [rebuildOperation](#rebuildOperation)
- [shouldSkip](#shouldSkip)
- [test](#test)
- [yarnBuild](#yarnBuild)

## Interfaces

- [SearchableExtension](#searchableextension)

## Variables

- [clearTsDatabase](#cleartsdatabase)
- [executeCommandQuietUnlessFail](#executecommandquietunlessfail)
- [exitIfProcessDependenciesChanged](#exitifprocessdependencieschanged)
- [generateJsonSchemas](#generatejsonschemas)
- [getAllDbModels](#getalldbmodels)
- [getFileIds](#getfileids)
- [getIndexFileIds](#getindexfileids)
- [getSrcIds](#getsrcids)
- [isOperationBuildNeeded](#isoperationbuildneeded)
- [isRebuildingProcessUpdated](#isrebuildingprocessupdated)
- [isSdkOperation](#issdkoperation)
- [[isUpdatedString]](#isupdatedstring)
- [main](#main)
- [manualProjectRoot](#manualprojectroot)
- [[operationName]](#operationname)
- [rebuildAllOperations](#rebuildalloperations)
- [rebuildOperation](#rebuildoperation)
- [shouldSkip](#shouldskip)
- [test](#test)
- [yarnBuild](#yarnbuild)



# Docs

## README

Please use `rebuidOperation [operation-name]` and `rebuildAllOperations` to rebuild your operations after you changed things in case you were not running the `k-dev` `dev`-command.

They can be found in the bin: `npx [function-name]`


## Operation build steps

Rebuilding an operation consists of these steps


### Install

Installing is done using `yarn --offline`
If installing fails, it's because packages are missing. Usually this can be solved by using `yarn` with internet.
If installing fails, the script should exit. Also out of `nodemon` **(TODO)**


### Create imports/exports index

This indexes the imports and exports. We can detect here if the imports can be resolved.

Incorrect dependency: a dependency has no `build` folder OR a dependency has no (or empty) `index` file.
When this happens, we can rebuildOperation for that dependency and wait for that to succeed before we continue.

If a dependency is not exporting the thing we need (anymore) or we did something else wrong ourselves, the mistake needs to be fixed on our end. However, this cannot be detected in this step, it will be detected when creating the build errors index.

Be warned. If there is a circular dependency, it could become an infinite loop. For that we are passing a `stack` history as an argument to `rebuildOperation` and make sure it doesn't try to `rebuildOperation` for something in the stack.


### Create build errors index

This uses `ts-morph` to find build-errors and puts them in `index/build-errors`.
If there are build-errors, we shouldn't continue.


### Create other indexes

This creates other indexes in the `index/` folder.
If this fails for any reason, we can't continue and it should be waited for until something changed.


### Lint operation

There are many things we are assuming now, but if we lint it, we can just provide errors whenever something is not up to par with our standards. We probably need our files indexed for some lints, so this would be the best stage to lint.


### Create index ts file

This accumulates all exports from other files and re-exports it as the main entry, but ignores test and cli files.


### Create build folder

It can still fail if the above step fails, but normally shouldn't.


### Create `operation-index.json`

If everything succeded, we can store the `updatedAt` time into our `operation-index.json` here


# Functions

## clearTsDatabase

### Parameters (1)

#### Parameter 1: operationName (optional): string

## executeCommandQuietUnlessFail

Executes a command without showing the result, unless the command fails, then it will log the output.,


### Returns: object

### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| command  | string |  |
| cwd (optional) | string |  |
| description (optional) | string |  |



## exitIfProcessDependenciesChanged

exits the process if our own dependencies change




### Parameters (2)

#### Parameter 1: operationName: string

#### Parameter 2: manualProjectRoot (optional): string

## generateJsonSchemas

generates schemas for db models

Is done every time you run `rebuildOperation` and `generateSdkOperations`

TODO: there are some problems with references that cannot be found with references to generic types... This can probably be solved, but it's not going to be easy!

IDEA:

1) find all referencing definitions in the main schema
2) find those in all other interfaces
3) recursively find references in those as well
4) if you can't find the reference, remove the reference and replace type to "any" (add WARNING to description "reference not found")

This will result in a valid schema that has no unresolved references

TODO: apply Storage<X> to db-models

TODO: apply Array<X> to db-models with json-multiple

TODO: apply special config conventions (MergedDbConfig) like tsconfig.json and package.json

TODO: Make a validator that validates the whole database to this schema.




### Parameters (2)

#### Parameter 1: manualProjectRoot (optional): string

#### Parameter 2: operationName (optional): string

## getAllDbModels

### Parameters (2)

#### Parameter 1: manualProjectRoot (optional): string

#### Parameter 2: operationName (optional): string

## getFileIds

gets all identifiers of files, which are the relative path to a file without the extension




### Parameters (1)

#### Parameter 1: {  operationFolderPath,  pathSuffix,  extension,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationFolderPath  | string |  |
| extension (optional) | object |  |
| pathSuffix  | string |  |



## getIndexFileIds

gets identifiers of ts and tsx files, which are the relative path to a file without the extension




### Parameters (1)

#### Parameter 1: operationFolderPath: string

## getSrcIds

gets identifiers of ts and tsx files, which are the relative path to a file without the extension

in order for them to be unique, we assume here that there's never a file with the ts extension when there's also a tsx file in the same folder with the same name. This would create duplicate ids.




### Parameters (1)

#### Parameter 1: operationFolderPath: string

## isOperationBuildNeeded

returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification




### Parameters (1)

#### Parameter 1: operationBasePath: string

## isSdkOperation

### Returns: object

### Parameters (1)

#### Parameter 1: operationBasePath: string

## main

## rebuildAllOperations

Rebuilds all operations that are needed to be rebuilt




### Parameters (2)

#### Parameter 1: isRebuildingProcessUpdated (optional): boolean

#### Parameter 2: manualProjectRoot (optional): string

## rebuildOperation

This function rebuilds an operation and re-indexes (part of) its files.




### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| updatedAt (optional) | number |  |
| typerepoManualProjectRoot (optional) | string |  |
| operationManualProjectRoot (optional) | string |  |
| operationBasePath  | string |  |
| filePaths (optional) | array |  |
| noUnresolvedRebuilding (optional) | boolean |  |
| force (optional) | boolean |  |
| debug (optional) | boolean |  |
| noExit (optional) | boolean |  |
| stack (optional) | array |  |



## shouldSkip

if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped




### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationBasePath  | string |  |
| debug (optional) | boolean |  |
| force (optional) | boolean |  |
| operationManualProjectRoot (optional) | string |  |
| rebuildUpdatedAt (optional) | number |  |



## test

## yarnBuild

Builds and minifies the src




### Parameters (2)

#### Parameter 1: operationBasePath: string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| rmFirst (optional) | boolean |  |
| skipMinify (optional) | boolean |  |


# Interfaces

## SearchableExtension

# Variables

## clearTsDatabase (exported const)

## executeCommandQuietUnlessFail (exported const)

Executes a command without showing the result, unless the command fails, then it will log the output.,


## exitIfProcessDependenciesChanged (exported const)

exits the process if our own dependencies change


## generateJsonSchemas (exported const)

generates schemas for db models

Is done every time you run `rebuildOperation` and `generateSdkOperations`

TODO: there are some problems with references that cannot be found with references to generic types... This can probably be solved, but it's not going to be easy!

IDEA:

1) find all referencing definitions in the main schema
2) find those in all other interfaces
3) recursively find references in those as well
4) if you can't find the reference, remove the reference and replace type to "any" (add WARNING to description "reference not found")

This will result in a valid schema that has no unresolved references

TODO: apply Storage<X> to db-models

TODO: apply Array<X> to db-models with json-multiple

TODO: apply special config conventions (MergedDbConfig) like tsconfig.json and package.json

TODO: Make a validator that validates the whole database to this schema.


## getAllDbModels (exported const)

## getFileIds (exported const)

gets all identifiers of files, which are the relative path to a file without the extension


## getIndexFileIds (exported const)

gets identifiers of ts and tsx files, which are the relative path to a file without the extension


## getSrcIds (exported const)

gets identifiers of ts and tsx files, which are the relative path to a file without the extension

in order for them to be unique, we assume here that there's never a file with the ts extension when there's also a tsx file in the same folder with the same name. This would create duplicate ids.


## isOperationBuildNeeded (exported const)

returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification


## isRebuildingProcessUpdated (unexported const)

## isSdkOperation (exported const)

## [isUpdatedString] (unexported const)

## main (unexported const)

## manualProjectRoot (unexported const)

## [operationName] (unexported const)

## rebuildAllOperations (exported const)

Rebuilds all operations that are needed to be rebuilt


## rebuildOperation (exported const)

This function rebuilds an operation and re-indexes (part of) its files.


## shouldSkip (exported const)

if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped


## test (unexported const)

## yarnBuild (exported const)

Builds and minifies the src

