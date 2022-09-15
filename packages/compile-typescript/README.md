# Compile typescript

compile-typescript (js operation)



# Outline

## Functions

- [getCompileErrors](#getCompileErrors)
- [getTypescriptErrorsFromFiles](#getTypescriptErrorsFromFiles)
- [writeBuildErrors](#writeBuildErrors)

## Interfaces:

- [PackageJson](#PackageJson)



# Functions

## getCompileErrors

gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one

1) get buildErrors for all src files of current operation
2) if build doesn't succeed, only check for build errors in current operation
3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there




### Parameters (2)

#### Parameter 1: operationBasePath: string

#### Parameter 2: onlyDependants (optional): boolean

## getTypescriptErrorsFromFiles

/**
 * uses official typescript compiler to check all given files for compilation errors
 */


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: {  filePaths,  debug,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string |  |
| filePaths  | array |  |
| packageJson  | object | --- dbStorageMethod: jsonSingle operationRelativePath: package.json<br />--- |
| debug (optional) | boolean |  |



## writeBuildErrors

### Parameters (2)

#### Parameter 1: operationBasePath: string

#### Parameter 2: manualProjectRoot (optional): string

# Interfaces

## PackageJson

> --- dbStorageMethod: jsonSingle operationRelativePath: package.json<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| sensible (optional) | object | Sensible-global configurations |
| operation (optional) | object | --- operationRelativePath: OPERATION.md isOperationIndex: true<br />---<br /><br />anything configurable about the operation.<br /><br />Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.<br /><br />Let's try to use OPERATION.md<br /><br />TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention. |


