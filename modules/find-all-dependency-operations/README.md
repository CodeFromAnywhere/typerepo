# Find all dependency operations

find-all-dependency-operations (node operation)



# Outline

## Functions

- [findAllDependencyOperations](#findAllDependencyOperations)
- [findDependantsRecursivelyTest](#findDependantsRecursivelyTest)
- [findDependantsRecursively](#findDependantsRecursively)
- [findDependants](#findDependants)
- [findDependenciesRecursively](#findDependenciesRecursively)
- [findMonorepoModules](#findMonorepoModules)
- [getDependencyObject](#getDependencyObject)
- [getDependencyTree](#getDependencyTree)
- [test2](#test2)
- [test](#test)

## Variables

- [findAllDependencyOperations](#findalldependencyoperations)
- [findDependantsRecursivelyTest](#finddependantsrecursivelytest)
- [findDependantsRecursively](#finddependantsrecursively)
- [findDependants](#finddependants)
- [findDependenciesRecursively](#finddependenciesrecursively)
- [findMonorepoModules](#findmonorepomodules)
- [getDependencyObject](#getdependencyobject)
- [getDependencyTree](#getdependencytree)
- [test2](#test2)
- [test](#test)



# Functions

## findAllDependencyOperations

to be used when you need to know all dependencies for multiple operation names at once

TODO: NB: this breaks with circular dependencies




## findDependantsRecursivelyTest

## findDependantsRecursively

findDependants({

operationName: "js-util",

importName: "notEmpty",

returnOperationName: false,

}).then(console.log);




## findDependants

getDependencyTree(["k-types", "fs-orm"], []).then((res) =>

console.dir(res, { depth: 999 })

);

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.




## findDependenciesRecursively

finds all dependencies of an operation name




## findMonorepoModules

finds all dependencies of an operation name




## getDependencyObject

findAllDependencyOperations(["fs-orm"]).then(console.log);

how do I get a format like this?

const x = {

"fs-orm": ["js-util"],

"js-util": [],

}




## getDependencyTree

## test2

## test

# Variables

## findAllDependencyOperations (exported const)

to be used when you need to know all dependencies for multiple operation names at once

TODO: NB: this breaks with circular dependencies


## findDependantsRecursivelyTest (unexported const)

## findDependantsRecursively (exported const)

## findDependants (exported const)

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.


## findDependenciesRecursively (exported const)

finds all dependencies of an operation name


## findMonorepoModules (exported const)

finds all dependencies of an operation name


## getDependencyObject (exported const)

## getDependencyTree (exported const)

## test2 (unexported const)

## test (unexported const)

