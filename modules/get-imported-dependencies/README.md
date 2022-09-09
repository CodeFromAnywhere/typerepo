# Get imported dependencies

get-imported-dependencies (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [getImportedDependencies](#getImportedDependencies)
- [getPackage](#getPackage)
- [isAbsoluteImport](#isAbsoluteImport)



# Functions

## getImportedDependencies

Max. indexation depth: 3, 

DEPRECATED: should use generated index files with imports instead!

gets all imported packages (dependencies) in a project
doesn't take into account the fact that someone can set up a rule for absolute imports within the package.
this assumes that any absolute package comes from node_modules.

## Returns: unknown

## getPackage

Max. indexation depth: 1, 

only the first part

## Returns: unknown

## isAbsoluteImport

Max. indexation depth: 1, 

if it doesn't start with a dot it must be an absolute import so most likely a package that needs to be installed

### Returns: boolean







