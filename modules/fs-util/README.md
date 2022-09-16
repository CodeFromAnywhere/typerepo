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

## Interfaces:

- [Dir](#Dir)
- [Dirent](#Dirent)
- [FolderPath](#FolderPath)
- [Fs](#Fs)
- [MarkdownContent](#MarkdownContent)
- [Markdown](#Markdown)
- [PathLike](#PathLike)
- [Path](#Path)
- [Stats](#Stats)
- [UnixTimestamp](#UnixTimestamp)



# Functions

## canAccessSync

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


### Returns: boolean

### Parameters (2)

#### Parameter 2: mode: number

## canAccess

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).




### Parameters (2)

#### Parameter 2: mode: number

## canExecuteSync

File is executable to the calling process


### Returns: boolean

### Parameters (1)

## canExecute

File is executable to the calling process




### Parameters (1)

## canReadSync

File is readable to the calling process


### Returns: boolean

### Parameters (1)

## canRead

File is readable to the calling process




### Parameters (1)

## canSeeSync

File is visible to the calling process




### Parameters (1)

## canSee

File is visible to the calling process




### Parameters (1)

## canWriteSync

File is writable to the calling process


### Returns: boolean

### Parameters (1)

## canWrite

File is writable to the calling process




### Parameters (1)

## findAllMd

DEPRECATED: `k-explore` can be used




## findFileNameCaseInsensitive

returns a path of a fileName




### Parameters (2)

#### Parameter 1: folderPath: string

#### Parameter 2: fileName: string

> fileName with extension




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




### Parameters (1)

#### Parameter 1: fileNameOrPath: string

## getFileName

removes everything before the last slash to get file name


### Returns: string

### Parameters (1)

#### Parameter 1: pathString: string

## getFolder

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)




### Parameters (1)

#### Parameter 1: pathString: string

## getLastFolder

removes everything after the last slash to get folder path

input: /Users/king/Documents/some/folder/xyz
output: xyz

input: /Users/king/Documents/some/folder/xyz.txt
output: folder




### Parameters (1)

#### Parameter 1: pathString: string

## getPathCombinations

gets combinations for paths

input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: chunksSegments: array

- null: object






## getSubExtension

### Returns: string

### Parameters (1)

#### Parameter 1: fileName: string

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




## parseMd

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md




### Parameters (1)

## removeAllExcept

Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself

NB: make this work with subdirectories!




### Parameters (2)

#### Parameter 1: folderPath: string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| ignore (optional) | array | array of relative folder paths and file paths that should not be removed (include the extensions!) |
| typeToRemove (optional) | string |  |



## removeTrailingSlash

### Parameters (1)

#### Parameter 1: p: string

## withoutExtension

removes extension from the filename




### Parameters (1)

#### Parameter 1: fileName: string

## writeJsonToFile

write json to a file

makes the dir and file if they don't exist




### Parameters (1)

## writeStringToFile

write string to a file

makes the dir and file if they don't exist




### Parameters (2)

#### Parameter 2: data: string

## writeToFiles

writes all values in an object to the file that should be specified as key of that value




### Parameters (1)

#### Parameter 1: fileObject: object

# Interfaces

## Dir

A class representing a directory stream.

Created by  {@link  opendir } ,  {@link  opendirSync } , or `fsPromises.opendir()`.

```js import { opendir } from 'fs/promises';

try {   const dir = await opendir('./');   for await (const dirent of dir)     console.log(dirent.name); } catch (err) {   console.error(err); } ```

When using the async iterator, the `fs.Dir` object will be automatically closed after the iterator exits.



> A class representing a directory stream.<br /><br />Created by  {@link  opendir } ,  {@link  opendirSync } , or `fsPromises.opendir()`.<br /><br />```js import { opendir } from 'fs/promises';<br /><br />try {   const dir = await opendir('./');   for await (const dirent of dir)     console.log(dirent.name); } catch (err) {   console.error(err); } ```<br /><br />When using the async iterator, the `fs.Dir` object will be automatically closed after the iterator exits.

Properties: 

 | Name | Type | Description |
|---|---|---|
| path  | string | The read-only path of this directory as was provided to  {@link  opendir } , {@link  opendirSync } , or `fsPromises.opendir()`. |



## Dirent

A representation of a directory entry, which can be a file or a subdirectory within the directory, as returned by reading from an `fs.Dir`. The directory entry is a combination of the file name and file type pairs.

Additionally, when  {@link  readdir }  or  {@link  readdirSync }  is called with the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings or `Buffer` s.



> A representation of a directory entry, which can be a file or a subdirectory within the directory, as returned by reading from an `fs.Dir`. The directory entry is a combination of the file name and file type pairs.<br /><br />Additionally, when  {@link  readdir }  or  {@link  readdirSync }  is called with the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings or `Buffer` s.

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | The file name that this `fs.Dirent` object refers to. The type of this value is determined by the `options.encoding` passed to  {@link  readdir }  or  {@link  readdirSync } . |



## FolderPath

DEPRECATED: just use ParsedPath



> DEPRECATED: just use ParsedPath

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeFolder (optional) | string |  |
| path  | string | unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything. |



## Fs

all handy Fs types



> all handy Fs types

Properties: 

 | Name | Type | Description |
|---|---|---|
| PathLike  | object | Valid types for path values in "fs". |
| Stats  | object | A `fs.Stats` object provides information about a file.<br /><br />Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.<br /><br />```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```<br /><br />`bigint` version:<br /><br />```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ``` |
| Dir  | object | A class representing a directory stream.<br /><br />Created by  {@link  opendir } ,  {@link  opendirSync } , or `fsPromises.opendir()`.<br /><br />```js import { opendir } from 'fs/promises';<br /><br />try {   const dir = await opendir('./');   for await (const dirent of dir)     console.log(dirent.name); } catch (err) {   console.error(err); } ```<br /><br />When using the async iterator, the `fs.Dir` object will be automatically closed after the iterator exits. |
| Dirent  | object | A representation of a directory entry, which can be a file or a subdirectory within the directory, as returned by reading from an `fs.Dir`. The directory entry is a combination of the file name and file type pairs.<br /><br />Additionally, when  {@link  readdir }  or  {@link  readdirSync }  is called with the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings or `Buffer` s. |



## MarkdownContent

## Markdown

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName  | string |  |
| params  | object |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| modifiedAt  | number |  |
| openedAt  | number |  |
| content  | string |  |



## PathLike

Valid types for path values in "fs".



> Valid types for path values in "fs".




## Path

unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.



> unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything.




## Stats

A `fs.Stats` object provides information about a file.

Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.

```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```

`bigint` version:

```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```



> A `fs.Stats` object provides information about a file.<br /><br />Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.<br /><br />```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```<br /><br />`bigint` version:<br /><br />```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```

Properties: 

 | Name | Type | Description |
|---|---|---|
| dev  | number |  |
| ino  | number |  |
| mode  | number |  |
| nlink  | number |  |
| uid  | number |  |
| gid  | number |  |
| rdev  | number |  |
| size  | number |  |
| blksize  | number |  |
| blocks  | number |  |
| atimeMs  | number |  |
| mtimeMs  | number |  |
| ctimeMs  | number |  |
| birthtimeMs  | number |  |
| atime  | string |  |
| mtime  | string |  |
| ctime  | string |  |
| birthtime  | string |  |



## UnixTimestamp

