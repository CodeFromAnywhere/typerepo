# Minify build

minify-build (node operation)



# Outline

## Functions

- [minifyBuild](#minifyBuild)

## Variables

- [minifyBuild](#minifybuild)



# Functions

## minifyBuild()

takes an operation name or build folder path, then explores all ts files in src folder, finds the matching js file in the build folder, and executes terser from dependency, not from cli


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationName,
  buildFolderPath,
} | { operationName?: string, <br />buildFolderPath?: string, <br /> } |  |
| **Output** |    |    |


# Variables

## 📄 minifyBuild (exported const)

takes an operation name or build folder path, then explores all ts files in src folder, finds the matching js file in the build folder, and executes terser from dependency, not from cli

