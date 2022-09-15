# Rebuild operation

rebuild-operation (node operation)



# Outline

## Docs

- [Operation build steps](#operation-build-steps)

## Functions

- [clearTsDatabase](#clearTsDatabase)
- [executeCommandQuietUnlessFail](#executeCommandQuietUnlessFail)
- [exitIfProcessDependenciesChanged](#exitIfProcessDependenciesChanged)
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

## Interfaces:

- [SearchableExtension](#SearchableExtension)



# Docs

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


### Returns: boolean

### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| command  | string |  |
| cwd (optional) | string |  |
| description (optional) | string | if given, will show what is happening and a checkmark if it succeeds |



## exitIfProcessDependenciesChanged

exits the process if our own dependencies change




### Parameters (2)

#### Parameter 1: operationName: string

#### Parameter 2: manualProjectRoot (optional): string

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

### Returns: boolean

### Parameters (1)

#### Parameter 1: operationBasePath: string

## main

## rebuildAllOperations

Rebuilds all operations that are needed to be rebuilt




### Parameters (1)

#### Parameter 1: isRebuildingProcessUpdated (optional): boolean

> If true, you are indicating that the rebuilding process has changed and all operations should be rebuilt after this date.




## rebuildOperation

This function rebuilds an operation and re-indexes (part of) its files.




### Parameters (1)

#### Parameter 1: {  operationBasePath,  manualProjectRoot,  filePaths,  force,  debug,  noExit,  stack = [],  updatedAt,  noUnresolvedRebuilding,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| updatedAt (optional) | number | last date when the rebuild-operation operation was updated (or any of its dependencies) |
| manualProjectRoot (optional) | string | if given, uses this as project root instead of the calculatable one |
| operationBasePath  | string | Full path to operation folder or any file therein |
| filePaths (optional) | array | If not given, explores all files in src folder of the operation. if given, must be an array of absolute file paths. it is not supported to index index files, as this creates duplicate and incorrect interfaces. |
| noUnresolvedRebuilding (optional) | boolean | used for stopping recursion |
| force (optional) | boolean | if true, will not skip if nothing changed |
| debug (optional) | boolean | show logs |
| noExit (optional) | boolean | normally, it exits if the operation that was rebuilt was itself or one of its dependencies. Handy for watchOperations in combination with nodemon. If we don't want this behavior, provide noExit |
| stack (optional) | array | stack of recursion of module names |



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
| rmFirst (optional) | boolean | if true, build folder will be removed first |


# Interfaces

## SearchableExtension

