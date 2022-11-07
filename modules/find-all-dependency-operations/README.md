# Find all dependency operations

find-all-dependency-operations (node operation)



# Outline

## Functions

- [findAllDependencyOperations](#findAllDependencyOperations)
- [findDependantsRecursively](#findDependantsRecursively)
- [findDependants](#findDependants)
- [findDependenciesRecursively](#findDependenciesRecursively)
- [findMonorepoModules](#findMonorepoModules)
- [getDependencyObject](#getDependencyObject)
- [getDependencyTree](#getDependencyTree)

## Variables

- [findAllDependencyOperations](#findalldependencyoperations)
- [findDependantsRecursively](#finddependantsrecursively)
- [findDependants](#finddependants)
- [findDependenciesRecursively](#finddependenciesrecursively)
- [findMonorepoModules](#findmonorepomodules)
- [getDependencyObject](#getdependencyobject)
- [getDependencyTree](#getdependencytree)



# Functions

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



## findDependants()

getDependencyTree(["k-types", "fs-orm"], []).then((res) =>

console.dir(res, { depth: 999 })

);

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## findDependenciesRecursively()

finds all dependencies of an operation name


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
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
| - | | |
| **Output** |    |    |


# Variables

## 📄 findAllDependencyOperations (exported const)

to be used when you need to know all dependencies for multiple operation names at once

TODO: NB: this breaks with circular dependencies


## 📄 findDependantsRecursively (exported const)

## 📄 findDependants (exported const)

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.


## 📄 findDependenciesRecursively (exported const)

finds all dependencies of an operation name


## 📄 findMonorepoModules (exported const)

finds all dependencies of an operation name


## 📄 getDependencyObject (exported const)

## 📄 getDependencyTree (exported const)

