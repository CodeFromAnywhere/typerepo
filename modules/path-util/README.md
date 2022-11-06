# Path util

path-util (js operation)

Gets insightful information about any file or folder (path)




# Outline

## Functions

- [byteCount](#byteCount)
- [calculatePathMetaData](#calculatePathMetaData)
- [categorizeFiles](#categorizeFiles)
- [getFolderSummary](#getFolderSummary)
- [getPathMainComment](#getPathMainComment)
- [getSizeSummary](#getSizeSummary)
- [sumSizeSummary](#sumSizeSummary)
- [test](#test)

## Interfaces

- [CategorizedFilePaths](#categorizedfilepaths)
- [CategorizedFilePaths](#categorizedfilepaths)

## Variables

- [calculatePathMetaData](#calculatepathmetadata)
- [categorizeFiles](#categorizefiles)
- [getFolderSummary](#getfoldersummary)
- [getPathMainComment](#getpathmaincomment)
- [getSizeSummary](#getsizesummary)
- [sumSizeSummary](#sumsizesummary)
- [test](#test)



# Functions

## byteCount

/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 */


### Returns: object

### Parameters (1)

#### Parameter 1: s: string

## calculatePathMetaData

for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
for files: just calculates the path metadata




### Parameters (1)

#### Parameter 1: absolutePath: string

## categorizeFiles

explores files in an operation within a specified location or from a specified type




### Parameters (1)

#### Parameter 1: {  basePath,  type,  ignoreIndexFiles,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | object |  |
| ignoreIndexFiles (optional) | boolean |  |
| type (optional) | string |  |



## getFolderSummary

calculates folder summary from a categorized file paths object




### Parameters (1)

#### Parameter 1: categorizedFiles: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| code  | array |  |
| data  | array |  |
| text  | array |  |



## getPathMainComment

export const sumFolderSummary = (
firstFolderSummary: FolderSummary,
secondFolderSummary: FolderSummary
): FolderSummary => {
const folderSummaryKeys = Object.keys(
firstFolderSummary
) as (keyof FolderSummary)[];
const sum = mergeObjectsArray(
folderSummaryKeys.map((keyName) => {
return {
[keyName]: sumAllKeys([
firstFolderSummary[keyName],
secondFolderSummary[keyName],
],["bytes","characters","lines","numberOfFiles"]),
};
})
) as FolderSummary;

return sum;
};


takes all PathMetaData of an array that contains all child files, and merges them, taking the newest update date, the earliest created-date, and summing size

export const sumFileGeneralMetaData = async (
childrenMetaDataArray: PathGeneralMetaData[]
): Promise<PathGeneralMetaData | null> => {
const sum = childrenMetaDataArray.reduce(
(sumMetaData, pathMetaData: PathGeneralMetaData) => {
const newPathMetaData: PathGeneralMetaData = {
createdAt:
!sumMetaData || pathMetaData.createdAt < sumMetaData.createdAt
? pathMetaData.createdAt
: sumMetaData.createdAt,
updatedAt:
!sumMetaData || pathMetaData.updatedAt > sumMetaData.updatedAt
? pathMetaData.updatedAt
: sumMetaData.updatedAt,
sizes: !sumMetaData
? pathMetaData.sizes
: sumFolderSummary(sumMetaData.sizes, pathMetaData.sizes),
};

return newPathMetaData;
},
null as PathGeneralMetaData | null
);

return sum;
};




### Parameters (1)

#### Parameter 1: absolutePath: string

## getSizeSummary

gets a size summary for a file path

Does not calculate this for files that are too big (bigger than 1MB)




### Parameters (1)

#### Parameter 1: filePath: string

## sumSizeSummary

### Parameters (1)

#### Parameter 1: filePaths: array

- null: string






## test

# Interfaces

## CategorizedFilePaths

filepaths categorized based on the filetype. With king os there are only these filetypes:

- code: ts, tsx
- data: json
- text: md, mdx



> filepaths categorized based on the filetype. With king os there are only these filetypes:<br /><br />- code: ts, tsx<br />- data: json<br />- text: md, mdx

Properties: 

 | Name | Type | Description |
|---|---|---|
| code  | array |  |
| data  | array |  |
| text  | array |  |



## CategorizedFilePaths

filepaths categorized based on the filetype. With king os there are only these filetypes:

- code: ts, tsx
- data: json
- text: md, mdx





Properties: 

 | Name | Type | Description |
|---|---|---|
| code  | array |  |
| data  | array |  |
| text  | array |  |


# Variables

## calculatePathMetaData (exported const)

for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
for files: just calculates the path metadata


## categorizeFiles (exported const)

explores files in an operation within a specified location or from a specified type


## getFolderSummary (exported const)

calculates folder summary from a categorized file paths object


## getPathMainComment (exported const)

export const sumFolderSummary = (
firstFolderSummary: FolderSummary,
secondFolderSummary: FolderSummary
): FolderSummary => {
const folderSummaryKeys = Object.keys(
firstFolderSummary
) as (keyof FolderSummary)[];
const sum = mergeObjectsArray(
folderSummaryKeys.map((keyName) => {
return {
[keyName]: sumAllKeys([
firstFolderSummary[keyName],
secondFolderSummary[keyName],
],["bytes","characters","lines","numberOfFiles"]),
};
})
) as FolderSummary;

return sum;
};


takes all PathMetaData of an array that contains all child files, and merges them, taking the newest update date, the earliest created-date, and summing size

export const sumFileGeneralMetaData = async (
childrenMetaDataArray: PathGeneralMetaData[]
): Promise<PathGeneralMetaData | null> => {
const sum = childrenMetaDataArray.reduce(
(sumMetaData, pathMetaData: PathGeneralMetaData) => {
const newPathMetaData: PathGeneralMetaData = {
createdAt:
!sumMetaData || pathMetaData.createdAt < sumMetaData.createdAt
? pathMetaData.createdAt
: sumMetaData.createdAt,
updatedAt:
!sumMetaData || pathMetaData.updatedAt > sumMetaData.updatedAt
? pathMetaData.updatedAt
: sumMetaData.updatedAt,
sizes: !sumMetaData
? pathMetaData.sizes
: sumFolderSummary(sumMetaData.sizes, pathMetaData.sizes),
};

return newPathMetaData;
},
null as PathGeneralMetaData | null
);

return sum;
};


## getSizeSummary (exported const)

gets a size summary for a file path

Does not calculate this for files that are too big (bigger than 1MB)


## sumSizeSummary (exported const)

## test (unexported const)

