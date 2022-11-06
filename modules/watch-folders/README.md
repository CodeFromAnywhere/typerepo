# Watch folders

watch-folders (node operation)

General purpose functions to watch folder(s) for changes on any operating system




# Outline

## Functions

- [getSubInfo](#getSubInfo)
- [getSubName](#getSubName)
- [initiateWatch](#initiateWatch)
- [isClientOk](#isClientOk)
- [isStillPending](#isStillPending)
- [makeSubscription](#makeSubscription)
- [noPending](#noPending)
- [pickWatcher](#pickWatcher)
- [watchFoldersChokidar](#watchFoldersChokidar)
- [watchFoldersFs](#watchFoldersFs)
- [watchFolders](#watchFolders)

## Variables

- [getSubInfo](#getsubinfo)
- [getSubName](#getsubname)
- [initiateWatch](#initiatewatch)
- [isClientOk](#isclientok)
- [isStillPending](#isstillpending)
- [noPending](#nopending)
- [pending](#pending)
- [pickWatcher](#pickwatcher)
- [uniqueAppKey](#uniqueappkey)
- [watchFoldersChokidar](#watchfolderschokidar)
- [watchFoldersFs](#watchfoldersfs)
- [watchFolders](#watchfolders)



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

## initiateWatch

## isClientOk

checks if watchman client is ok. ends client if it's not ok




## isStillPending

checks if pending has items every 5 seconds, resolves after it hasnt

this is a handy thing to have in util, but it can also probably be much more simple




## makeSubscription

## noPending

### Returns: object

## pickWatcher

based on your os, pick either chokidar or fswatch


### Returns: object

## watchFoldersChokidar

watches folder paths and executes a callback when something changes in one of them

uses fs.watch




## watchFoldersFs

watches folder paths and executes a callback when something changes in one of them

uses fs.watch




## watchFolders

watches folder paths and executes a callback when something changes in one of them

TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?



# Variables

## getSubInfo (unexported const)

## getSubName (unexported const)

## initiateWatch (exported const)

## isClientOk (unexported const)

checks if watchman client is ok. ends client if it's not ok


## isStillPending (unexported const)

checks if pending has items every 5 seconds, resolves after it hasnt

this is a handy thing to have in util, but it can also probably be much more simple


## noPending (unexported const)

## pending (unexported let)

## pickWatcher (exported const)

## uniqueAppKey (unexported const)

## watchFoldersChokidar (exported const)

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


## watchFoldersFs (exported const)

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


## watchFolders (exported const)

watches folder paths and executes a callback when something changes in one of them

TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?

