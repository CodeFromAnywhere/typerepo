# Find all dependency operations

find-all-dependency-operations (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

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



# Functions

## findAllDependencyOperations

Max. indexation depth: 3, 

to be used when you need to know all dependencies for multiple operation names at once

TODO: NB: this breaks with circular dependencies

## Returns: unknown

## findDependantsRecursivelyTest

Max. indexation depth: 1, 



## Returns: unknown

## findDependantsRecursively

Max. indexation depth: 7, 

findDependants({

operationName: "js-util",

importName: "notEmpty",

returnOperationName: false,

}).then(console.log);

## Returns: unknown

## findDependants

Max. indexation depth: 3, 

getDependencyTree(["k-types", "fs-orm"], []).then((res) =>

console.dir(res, { depth: 999 })

);

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.

## Returns: unknown

## findDependenciesRecursively

Max. indexation depth: 3, 

finds all dependencies of an operation name

## Returns: unknown

## findMonorepoModules

Max. indexation depth: 3, 

finds all dependencies of an operation name

## Returns: unknown

## getDependencyObject

Max. indexation depth: 4, 

findAllDependencyOperations(["fs-orm"]).then(console.log);

how do I get a format like this?

const x = {

"fs-orm": ["js-util"],

"js-util": [],

}

## Returns: unknown

## getDependencyTree

Max. indexation depth: 7, 



## Returns: unknown

## test2

Max. indexation depth: 2, 



## Returns: unknown

## test

Max. indexation depth: 3, 



## Returns: unknown

