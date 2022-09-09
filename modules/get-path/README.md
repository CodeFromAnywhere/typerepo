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


## findOperationBasePath



### Returns: string







## getAllPackageJsonDependencies



### Returns: array

- null: string





## getOperationClassification

Returns OperationClassification if it's an operation, or undefined if it's not

NB: don't confuse this with ProjectType or ImportClassification

## Returns: unknown

## getOperationPathParse

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson

## Returns: unknown

## getOperationPath

Gets a path of any operation in the project

TODO: IDEA: maybe auto-generate key-value JSON where keys are the package-names of all operations and values are paths of their locations in the file system. we can easily generate this ourselves, but maybe it's also easy to use the npm yarn workspace for this, although it may not be available in all circumstances, so better not rely on it. The advantage of this would be that this function becomes sync and is much more efficient. The disadvantage is that every time you move something or add something new, this indexation has to happen, otherwise it fails.

## Returns: unknown

## getOperationRelativePath

something like src/xxx/xxx/x.ts (no slash at start)

## Returns: unknown

## getPathParse

gets all kinds of information that can be inferred from any path (file or folder).

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string |  |


## getPathsWithOperations

returns an array of all paths containing operations

for a sensible project, that means /apps and /packages

for the OS project, that means /tools and /bundles

### Returns: array

- null: string





## getProjectRoot

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point

### Returns: string







## getRelativePath

gets the relative path from a specified root

will start with "/"

## Returns: unknown

## getRootPath

Gets project path, or a folder in the root that is convention

### Returns: string







## getSrcRelativeFileId

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found

## Returns: unknown

## hasDependency



## Returns: unknown

## isSensibleProject



### Returns: boolean







## isWorkspaceRoot

simple sync function to check if a folder is the root of a workspace (not operation but a workspace)

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| isSensibleProject  | boolean |  |
| isWorkspaceRoot  | boolean |  |


## makeRelative

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning

### Returns: string







