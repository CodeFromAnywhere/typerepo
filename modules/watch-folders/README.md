# Watch folders

watch-folders (node operation)

General purpose functions to watch folder(s) for changes on any operating system




# Outline

## Functions

- [initiateWatch](#initiateWatch)
- [makeSubscription](#makeSubscription)
- [pickWatcher](#pickWatcher)
- [watchFoldersChokidar](#watchFoldersChokidar)
- [watchFoldersFs](#watchFoldersFs)
- [watchFolders](#watchFolders)

## Variables

- [initiateWatch](#initiatewatch)
- [pickWatcher](#pickwatcher)
- [watchFoldersChokidar](#watchfolderschokidar)
- [watchFoldersFs](#watchfoldersfs)
- [watchFolders](#watchfolders)



# Functions

## initiateWatch()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## makeSubscription()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## pickWatcher()

based on your os, pick either chokidar or fswatch


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## watchFoldersChokidar()

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## watchFoldersFs()

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## watchFolders()

watches folder paths and executes a callback when something changes in one of them

TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |


# Variables

## 📄 initiateWatch (exported const)

## 📄 pickWatcher (exported const)

## 📄 watchFoldersChokidar (exported const)

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


## 📄 watchFoldersFs (exported const)

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


## 📄 watchFolders (exported const)

watches folder paths and executes a callback when something changes in one of them

TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?

