# Get package source paths

get-package-source-paths (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [getPackageSourcePaths](#getPackageSourcePaths)



# Functions

## getPackageSourcePaths

Max. indexation depth: 3, 

Returns an array of absolute file paths of (typescript) files in the src of your operation

TODO: we need a way to explore these glob patterns inside of tsConfig.include.
until then, just assume we use "src" as the only folder

## Returns: unknown

