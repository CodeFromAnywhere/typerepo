# Path util

path-util (js operation)



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

## Interfaces:

- [CategorizedFilePaths](#CategorizedFilePaths)



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
| ignoreIndexFiles (optional) | boolean | ignore index files or not |
| type (optional) | string | if given, only search for files of a specific containing data type |



## getFolderSummary

calculates folder summary from a categorized file paths object




### Parameters (1)

#### Parameter 1: categorizedFiles: object

> filepaths categorized based on the filetype. With king os there are only these filetypes:<br /><br />- code: ts, tsx<br />- data: json<br />- text: md, mdx

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


