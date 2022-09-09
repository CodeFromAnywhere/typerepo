# Path util

path-util (js operation)

Size: 302 LOC, 1499 data characters, 3466 text characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: parseFrontmatterMarkdownString, path, fs, getLastFolder, getFolder, CategorizedFilePaths, PathMetaData, TsComment, findCommentTypes, getIndexId, getNumberOfLines, getPathParse, determineFileType, explore, SearchableExtension, extensions, determineFileType, CategorizedFilePaths, buildFolderName, databaseFolderName, sumAllKeys, fs, CategorizedFilePaths, FolderSummary, SizeSummary, makeArray

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



# Functions

## byteCount

Max. indexation depth: 1, 

/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 */

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## calculatePathMetaData

Max. indexation depth: 4, 

for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
for files: just calculates the path metadata

## Returns: unknown

## categorizeFiles

Max. indexation depth: 4, 

explores files in an operation within a specified location or from a specified type

## Returns: unknown

## getFolderSummary

Max. indexation depth: 3, 

calculates folder summary from a categorized file paths object

## Returns: unknown

## getPathMainComment

Max. indexation depth: 2, 

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

## Returns: unknown

## getSizeSummary

Max. indexation depth: 2, 

gets a size summary for a file path

## Returns: unknown

## sumSizeSummary

Max. indexation depth: 2, 



## Returns: unknown

## test

Max. indexation depth: 2, 



## Returns: unknown

