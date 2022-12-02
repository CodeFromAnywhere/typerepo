# K dev

k-dev (`OperationClassification` node-cjs)

CLI that starts a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))




# Api reference

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # devCli()

The dev-cli runs the `dev` command which watches your operations with restarts

You can specify a customManualProjectRoot, which can be a relative or absolute path. If relative, it will use your cwd with the relative path to make an absolute path, that will in turn be passed to the `dev` function.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 devCli (unexported const)

The dev-cli runs the `dev` command which watches your operations with restarts

You can specify a customManualProjectRoot, which can be a relative or absolute path. If relative, it will use your cwd with the relative path to make an absolute path, that will in turn be passed to the `dev` function.
  </details>

# Internal

<details><summary>Show internal (2)</summary>
    
  # dev()

Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string | manual project root for finding the operations |
| **Output** |    |    |



## 📄 dev (exported const)

Running this function will start a watcher that watches all your operations for changes and rebuilds the operation on every change (compiling and indexing the altered file(s))
  </details>

