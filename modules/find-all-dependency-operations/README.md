# Find all dependency operations

find-all-dependency-operations (node operation)



# Api reference

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



## 📄 findAllDependencyOperations (exported const)

to be used when you need to know all dependencies for multiple operation names at once

TODO: NB: this breaks with circular dependencies


## 📄 findDependantsRecursively (exported const)

## 📄 findDependants (exported const)

finds all dependants of an operation or a specific import from that operation

normally returns the files where the operation or function is used, unless you specify to return the operationNames only.

