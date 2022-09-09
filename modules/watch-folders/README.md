# Watch folders

watch-folders (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [getSubInfo](#getSubInfo)
- [getSubName](#getSubName)
- [initiateWatch](#initiateWatch)
- [isClientOk](#isClientOk)
- [isStillPending](#isStillPending)
- [makeSubscription](#makeSubscription)
- [noPending](#noPending)
- [watchFoldersFs](#watchFoldersFs)
- [watchFolders](#watchFolders)



# Functions

## getSubInfo

Max. indexation depth: 2, 



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| fullPath  | object |  |
| relativePath  | object |  |
| rootPath  | object |  |


## getSubName

Max. indexation depth: 2, 



### Returns: string







## initiateWatch

Max. indexation depth: 5, 



## Returns: unknown

## isClientOk

Max. indexation depth: 5, 

checks if watchman client is ok. ends client if it's not ok

## Returns: unknown

## isStillPending

Max. indexation depth: 4, 

checks if pending has items every 5 seconds, resolves after it hasnt

this is a handy thing to have in util, but it can also probably be much more simple

## Returns: unknown

## makeSubscription

Max. indexation depth: 5, 



## Returns: unknown

## noPending

Max. indexation depth: 0, 



### Returns: boolean







## watchFoldersFs

Max. indexation depth: 5, 

watches folder paths and executes a callback when something changes in one of them

uses fs.watch

## Returns: unknown

## watchFolders

Max. indexation depth: 3, 

watches folder paths and executes a callback when something changes in one of them

TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?

## Returns: unknown

