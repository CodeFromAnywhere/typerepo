# Rename template files

rename-template-files (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [findTemplates](#findTemplates)
- [isEqualArray](#isEqualArray)
- [renameTemplateFiles](#renameTemplateFiles)
- [renameTemplateToNormalFile](#renameTemplateToNormalFile)
- [renameToTemplateFile](#renameToTemplateFile)



# Functions

## findTemplates

Max. indexation depth: 3, 



## Returns: unknown

## isEqualArray

Max. indexation depth: 1, 

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

## Returns: unknown

## renameTemplateFiles

Max. indexation depth: 2, 



## Returns: unknown

## renameTemplateToNormalFile

Max. indexation depth: 1, 



## Returns: unknown

## renameToTemplateFile

Max. indexation depth: 2, 



### Returns: string







