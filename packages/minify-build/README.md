# Minify build

minify-build (node operation)



# Outline

## Functions

- [minifyBuild](#minifyBuild)



# Functions

## minifyBuild

takes an operation name or build folder path, then explores all ts files in src folder, finds the matching js file in the build folder, and executes terser from dependency, not from cli




### Parameters (1)

#### Parameter 1: {  operationName,  buildFolderPath,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName (optional) | string |  |
| buildFolderPath (optional) | string |  |


