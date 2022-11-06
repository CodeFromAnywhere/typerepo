# Get package source paths

get-package-source-paths (node operation)

Returns an array of absolute file paths of (typescript) files in the src of your operation




# Outline

## Functions

- [getPackageSourcePaths](#getPackageSourcePaths)

## Variables

- [getPackageSourcePaths](#getpackagesourcepaths)



# Functions

## getPackageSourcePaths

Returns an array of absolute file paths of (typescript) files in the src of your operation

TODO: we need a way to explore these glob patterns inside of tsConfig.include.
until then, just assume we use "src" as the only folder




### Parameters (1)

#### Parameter 1: {  operationBasePath,  ignoreIndexFiles,  allTypes,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationBasePath  | string |  |
| ignoreIndexFiles (optional) | boolean |  |
| allTypes (optional) | boolean |  |


# Variables

## getPackageSourcePaths (exported const)

Returns an array of absolute file paths of (typescript) files in the src of your operation

TODO: we need a way to explore these glob patterns inside of tsConfig.include.
until then, just assume we use "src" as the only folder

