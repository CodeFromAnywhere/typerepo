# Rename template files

rename-template-files (node operation)

Rename template files to their original name

Useful when you want to apply a template to create a new starting point for something




# Outline

## Functions

- [isEqualArray](#isEqualArray)
- [renameTemplateFiles](#renameTemplateFiles)
- [renameTemplateToNormalFile](#renameTemplateToNormalFile)
- [renameToTemplateFile](#renameToTemplateFile)

## Variables

- [isEqualArray](#isequalarray)
- [renameTemplateFiles](#renametemplatefiles)
- [renameTemplateToNormalFile](#renametemplatetonormalfile)
- [renameToTemplateFile](#renametotemplatefile)
- [test](#test)



# Functions

## isEqualArray()

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


| Input      |    |    |
| ---------- | -- | -- |
| array1 | {  }[] |  |,| array2 | {  }[] |  |
| **Output** |    |    |



## renameTemplateFiles()

| Input      |    |    |
| ---------- | -- | -- |
| { appDir } | { appDir: string, <br /> } |  |
| **Output** |    |    |



## renameTemplateToNormalFile()

| Input      |    |    |
| ---------- | -- | -- |
| fileName | string |  |
| **Output** |    |    |



## renameToTemplateFile()

| Input      |    |    |
| ---------- | -- | -- |
| fileName | string |  |
| **Output** | `String`   |    |


# Variables

## 📄 isEqualArray (exported const)

## 📄 renameTemplateFiles (exported const)

## 📄 renameTemplateToNormalFile (exported const)

## 📄 renameToTemplateFile (exported const)

## 📄 test (exported const)

