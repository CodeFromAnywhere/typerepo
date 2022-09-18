# Watch folders

watch-folders (node operation)



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

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| fullPath  | object |  |
| relativePath  | object |  |
| rootPath  | object |  |



## getSubName

### Returns: string

## initiateWatch

## isClientOk

checks if watchman client is ok. ends client if it's not ok




## isStillPending

checks if pending has items every 5 seconds, resolves after it hasnt

this is a handy thing to have in util, but it can also probably be much more simple




## makeSubscription

## noPending

### Returns: boolean

## watchFoldersFs

watches folder paths and executes a callback when something changes in one of them

uses fs.watch




## watchFolders

watches folder paths and executes a callback when something changes in one of them

TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?



