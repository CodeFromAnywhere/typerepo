# Get path

get-path (js operation)



# Outline

## Functions

- [findFolderWhereMatch](#findFolderWhereMatch)
- [findOperationBasePathWithClassification](#findOperationBasePathWithClassification)
- [findOperationBasePath](#findOperationBasePath)
- [getAllPackageJsonDependencies](#getAllPackageJsonDependencies)
- [getOperationClassification](#getOperationClassification)
- [getOperationPathParse](#getOperationPathParse)
- [getOperationPath](#getOperationPath)
- [getOperationRelativePath](#getOperationRelativePath)
- [getPathParse](#getPathParse)
- [getPathsWithOperations](#getPathsWithOperations)
- [getProjectRoot](#getProjectRoot)
- [getRelativePath](#getRelativePath)
- [getRootPath](#getRootPath)
- [getSrcRelativeFileId](#getSrcRelativeFileId)
- [hasDependency](#hasDependency)
- [isSensibleProject](#isSensibleProject)
- [isWorkspaceRoot](#isWorkspaceRoot)
- [makeRelative](#makeRelative)

## Interfaces:

- [OperationClassification](#OperationClassification)
- [PackageJson](#PackageJson)



# Functions

## findFolderWhereMatch

recursive. goes up a folder until it finds a package.json


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| folderPath  | string |  |
| matchResult  | object |  |



## findOperationBasePathWithClassification

recursive. goes up until it finds a folder that's an operation

because it had to read the package.json anyway, it's returning the operation classification as well


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| folderPath  | string |  |
| classification  | object |  |



### Parameters (1)

#### Parameter 1: startPath: string

## findOperationBasePath

### Returns: string

### Parameters (1)

#### Parameter 1: startPath: string

## getAllPackageJsonDependencies

### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: p: object

> --- dbStorageMethod: jsonSingle operationRelativePath: package.json<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
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
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |



## getOperationClassification

Returns OperationClassification if it's an operation, or undefined if it's not

NB: don't confuse this with ProjectType or ImportClassification




### Parameters (1)

#### Parameter 1: folderPath: string

## getOperationPathParse

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson




### Parameters (1)

#### Parameter 1: absolutePath: string

## getOperationPath

Gets a path of any operation in the project

TODO: IDEA: maybe auto-generate key-value JSON where keys are the package-names of all operations and values are paths of their locations in the file system. we can easily generate this ourselves, but maybe it's also easy to use the npm yarn workspace for this, although it may not be available in all circumstances, so better not rely on it. The advantage of this would be that this function becomes sync and is much more efficient. The disadvantage is that every time you move something or add something new, this indexation has to happen, otherwise it fails.




### Parameters (2)

#### Parameter 1: operationName: string

> specify the operation folder name




#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| notUseSdk (optional) | boolean | if true, will not use sdk (defaults to using it first...) |



## getOperationRelativePath

something like src/xxx/xxx/x.ts (no slash at start)




### Parameters (2)

#### Parameter 1: absolutePath: string

#### Parameter 2: operationBasePath: string

## getPathParse

gets all kinds of information that can be inferred from any path (file or folder).


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string |  |



### Parameters (1)

#### Parameter 1: absolutePath: string

## getPathsWithOperations

returns an array of all (absolute) paths containing operations

for a sensible project, that means /apps and /packages

for the OS project, that means /operations/tools and /operations/bundles


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string | if given, this will be taken as the project root instead of the one that can be found automatically (useful for bundling or working with multiple projects that alter each other) |



## getProjectRoot

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point


### Returns: string

### Parameters (1)

#### Parameter 1: fullSourcePath (optional): string

## getRelativePath

gets the relative path from a specified root

will start with "/"




### Parameters (2)

#### Parameter 1: absolutePath: string

#### Parameter 2: relativeFrom: string

## getRootPath

Gets project path, or a folder in the root that is convention


### Returns: string

## getSrcRelativeFileId

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found




### Parameters (1)

#### Parameter 1: operationRelativePath: string

## hasDependency

### Parameters (2)

#### Parameter 1: packageJson: object

> --- dbStorageMethod: jsonSingle operationRelativePath: package.json<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
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
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |



#### Parameter 2: dependency: string

## isSensibleProject

### Returns: boolean

### Parameters (1)

#### Parameter 1: folderPath (optional): string

## isWorkspaceRoot

simple sync function to check if a folder is the root of a workspace (not operation but a workspace)


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSensibleProject  | boolean |  |
| isWorkspaceRoot  | boolean |  |



### Parameters (1)

#### Parameter 1: folderPath: string

## makeRelative

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning


### Returns: string

### Parameters (2)

#### Parameter 1: absolutePath: string

> absolute path of a file or folder without a slash at the end




#### Parameter 2: baseFolderPath: string

> folder path without a slash at the end



# Interfaces

## OperationClassification

## Classification

TODO: think about what the differences are and how we need to change processes to make it all work good

### Possible values

js: only js (no node) (well, ts of course)

node: includes other node packages, operations, core-imports, or globals.

server: exposes something on some port when it is ran and uses node code

web: uses react and exposes something on some port when it is ran

app: uses react-native and exposes something on some port when it is ran

ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)

ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)



> # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)




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


