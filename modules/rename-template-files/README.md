# Rename template files

rename-template-files (node operation)



# Outline

## Functions

- [findTemplates](#findTemplates)
- [isEqualArray](#isEqualArray)
- [renameTemplateFiles](#renameTemplateFiles)
- [renameTemplateToNormalFile](#renameTemplateToNormalFile)
- [renameToTemplateFile](#renameToTemplateFile)



# Functions

## findTemplates

### Parameters (2)

#### Parameter 1: basePath: string

#### Parameter 2: doNotExploreChildFolders (optional): boolean

## isEqualArray

As long as there are no .template files present in the template folder that DONT need to be changed, it is fine.
If there are, we should warn people.

finds all .template renamed files recursively and returns the paths in an array

should be placed back into sensible, this is sensible-specific.
//
export const findTemplateFiles = (dirName: string): string[] => {
const appTemplateFiles = findTemplates(`${dirName}/apps`);
const packageTemplateFiles = findTemplates(`${dirName}/packages`);
const rootTemplateFiles = findTemplates(dirName, true);
return appTemplateFiles
.concat(packageTemplateFiles)
.concat(rootTemplateFiles);
};




### Parameters (2)

#### Parameter 1: array1: array

- null: object






#### Parameter 2: array2: array

- null: object






## renameTemplateFiles

### Parameters (1)

#### Parameter 1: { appDir }: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| appDir  | string |  |



## renameTemplateToNormalFile

### Parameters (1)

#### Parameter 1: fileName: string

## renameToTemplateFile

### Returns: string

### Parameters (1)

#### Parameter 1: fileName: string

