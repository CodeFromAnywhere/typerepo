# Find all dependency operations

find-all-dependency-operations (`OperationClassification` node-cjs)



# Api reference

## findDependants()

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 findDependants (exported const)

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.


## findAllDependencyOperations()

to be used when you need to know all dependencies for multiple operation names at once

TODO: NB: this breaks with circular dependencies


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## findDependantsRecursively()

findDependants({

operationName: "js-util",

importName: "notEmpty",

returnOperationName: false,

}).then(console.log);


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 findAllDependencyOperations (exported const)

to be used when you need to know all dependencies for multiple operation names at once

TODO: NB: this breaks with circular dependencies


## 📄 findDependantsRecursively (exported const)

# CLI

<details><summary>Show CLI information (1)</summary>
    
  # 📄 [operationName] (unexported const)


  </details>

# Tests

<details><summary>Show test information(6)</summary>
    
  # findDependantsRecursivelyTest()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test2()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 findDependantsRecursivelyTest (unexported const)

## 📄 test2 (unexported const)

## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (18)</summary>
    
  # findDependenciesRecursively()

finds all dependencies of an operation name


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## findMonorepoExports()

| Input      |    |    |
| ---------- | -- | -- |
| allExports | `TsExport`[] |  |,| operationName | string |  |
| **Output** | string[]   |    |



## findMonorepoImports()

finds all unique imports in an operation name


| Input      |    |    |
| ---------- | -- | -- |
| allImports | `TsImport`[] |  |,| operationName | string |  |
| **Output** |    |    |



## findMonorepoModules()

finds all dependencies of an operation name


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getDependencyObject()

findAllDependencyOperations(["fs-orm"]).then(console.log);

how do I get a format like this?

const x = {

"fs-orm": ["js-util"],

"js-util": [],

}


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getDependencyTree()

| Input      |    |    |
| ---------- | -- | -- |
| allImports | `TsImport`[] |  |,| allExports | `TsExport`[] |  |,| operationName | string |  |,| usedImports | string[] |  |,| alreadySearched (optional) | string[] |  |
| **Output** |    |    |



## getOldDependencyTree()

| Input      |    |    |
| ---------- | -- | -- |
| operationNames | string[] |  |,| stack | string[] |  |
| **Output** |    |    |



## getOperationDependencyReasons()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔹 DependencyTree

## 🔹 DependencyTreeChildObject

Gives a clear overview of why an operation requires every dependency





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | string |  |
| dependencyCount  | number |  |
| usedExports  | array |  |
| usedExportsCount  | number |  |
| cumulativeExportsCount  | number |  |
| cumulativeUsedExportsCount  | number |  |
| allExportsCount  | number |  |
| children (optional) | array |  |



## 📄 findDependenciesRecursively (exported const)

finds all dependencies of an operation name


## 📄 findMonorepoExports (exported const)

## 📄 findMonorepoImports (exported const)

finds all unique imports in an operation name


## 📄 findMonorepoModules (exported const)

finds all dependencies of an operation name


## 📄 getDependencyObject (exported const)

## 📄 getDependencyTree (exported const)

## 📄 getOldDependencyTree (exported const)

## 📄 getOperationDependencyReasons (exported const)

  </details>

