# Compile typescript

compile-typescript (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [getCompileErrors](#getCompileErrors)
- [getTypescriptErrorsFromFiles](#getTypescriptErrorsFromFiles)
- [writeBuildErrors](#writeBuildErrors)



# Functions

## getCompileErrors

Max. indexation depth: 4, 

gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one

1) get buildErrors for all src files of current operation
2) if build doesn't succeed, only check for build errors in current operation
3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there

## Returns: unknown

## getTypescriptErrorsFromFiles

Max. indexation depth: 7, 

/**
 * uses official typescript compiler to check all given files for compilation errors
 */

### Returns: array

- null: object





## writeBuildErrors

Max. indexation depth: 1, 



## Returns: unknown

