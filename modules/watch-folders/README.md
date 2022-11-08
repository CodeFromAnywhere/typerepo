# Watch folders

watch-folders (node operation)

General purpose functions to watch folder(s) for changes on any operating system




# Api reference

## pickWatcher()

based on your os, pick either chokidar or fswatch


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 pickWatcher (exported const)

# Internal

<details><summary>Show internal (9)</summary>
  
  # initiateWatch()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## makeSubscription()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



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



## 📄 initiateWatch (exported const)

## 📄 watchFoldersChokidar (exported const)

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


## 📄 watchFoldersFs (exported const)

watches folder paths and executes a callback when something changes in one of them

uses fs.watch


## 📄 watchFolders (exported const)

watches folder paths and executes a callback when something changes in one of them

TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?
  </details>

