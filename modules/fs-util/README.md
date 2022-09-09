# Fs util

fs-util (js operation)



# Outline

## Functions

- [canAccessSync](#canAccessSync)
- [canAccess](#canAccess)
- [canExecuteSync](#canExecuteSync)
- [canExecute](#canExecute)
- [canReadSync](#canReadSync)
- [canRead](#canRead)
- [canSeeSync](#canSeeSync)
- [canSee](#canSee)
- [canWriteSync](#canWriteSync)
- [canWrite](#canWrite)
- [findAllMd](#findAllMd)
- [findFileNameCaseInsensitive](#findFileNameCaseInsensitive)
- [findFilesRecursively](#findFilesRecursively)
- [findSensibleFiles](#findSensibleFiles)
- [getExtension](#getExtension)
- [getFileName](#getFileName)
- [getFolder](#getFolder)
- [getLastFolder](#getLastFolder)
- [getPathCombinations](#getPathCombinations)
- [getSubExtension](#getSubExtension)
- [importFromFiles](#importFromFiles)
- [isArrayGuard](#isArrayGuard)
- [parseMd](#parseMd)
- [removeAllExcept](#removeAllExcept)
- [removeTrailingSlash](#removeTrailingSlash)
- [withoutExtension](#withoutExtension)
- [writeJsonToFile](#writeJsonToFile)
- [writeStringToFile](#writeStringToFile)
- [writeToFiles](#writeToFiles)



# Functions

## canAccessSync

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).

### Returns: boolean







## canAccess

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).

## Returns: unknown

## canExecuteSync

File is executable to the calling process

### Returns: boolean







## canExecute

File is executable to the calling process

## Returns: unknown

## canReadSync

File is readable to the calling process

### Returns: boolean







## canRead

File is readable to the calling process

## Returns: unknown

## canSeeSync

File is visible to the calling process

## Returns: unknown

## canSee

File is visible to the calling process

## Returns: unknown

## canWriteSync

File is writable to the calling process

### Returns: boolean







## canWrite

File is writable to the calling process

## Returns: unknown

## findAllMd

DEPRECATED: `k-explore` can be used

## Returns: unknown

## findFileNameCaseInsensitive

returns a path of a fileName

## Returns: unknown

## findFilesRecursively

DEPRECATED: in favour of `explore` from "k-explore"

### Returns: array

- null: object





## findSensibleFiles

DEPRECATED:

this is sensible-specific

### Returns: array

- null: object





## getExtension

returns the extension of the filename or path

NB: not sure, but could be nice to replace this with path.extname(pathString)

## Returns: unknown

## getFileName

removes everything before the last slash to get folder path

### Returns: string







## getFolder

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)

## Returns: unknown

## getLastFolder

removes everything after the last slash to get folder path

input: /Users/king/Documents/some/folder/xyz
output: xyz

input: /Users/king/Documents/some/folder/xyz.txt
output: folder

## Returns: unknown

## getPathCombinations

gets combinations for paths

input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]

### Returns: array

- null: string





## getSubExtension



### Returns: string







## importFromFiles

DEPRECATED:

works fine but this requires us to know exactly what we want from the file, so it requires a very clear convention.
better would be to introspect the code and just require whatever's there
returns T[] where every T is one of:
- the default export (importStrategy "default")
- the export with the name of the extension
- an object with a subset of exports

### Returns: array

- null: object





## isArrayGuard

DEPRECATED

## Returns: unknown

## parseMd

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md

## Returns: unknown

## removeAllExcept

Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself

NB: make this work with subdirectories!

## Returns: unknown

## removeTrailingSlash



## Returns: unknown

## withoutExtension

removes extension from the filename

## Returns: unknown

## writeJsonToFile

write json to a file

makes the dir and file if they don't exist

## Returns: unknown

## writeStringToFile

write string to a file

makes the dir and file if they don't exist

## Returns: unknown

## writeToFiles

writes all values in an object to the file that should be specified as key of that value

## Returns: unknown

