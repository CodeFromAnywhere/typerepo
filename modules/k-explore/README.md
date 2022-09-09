# K explore

k-explore (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [benchmark](#benchmark)
- [determineFileType](#determineFileType)
- [exploreGitRepoFolders](#exploreGitRepoFolders)
- [exploreMultiple](#exploreMultiple)
- [exploreOperationFolders](#exploreOperationFolders)
- [explorePreset](#explorePreset)
- [explore](#explore)
- [findAllDotGitFolders](#findAllDotGitFolders)
- [findAllPackages](#findAllPackages)
- [findFilesRecursively](#findFilesRecursively)
- [getArgument](#getArgument)
- [getContents](#getContents)
- [getOutline](#getOutline)
- [isMatch](#isMatch)
- [isSearchContentExtension](#isSearchContentExtension)



# Functions

## benchmark

Max. indexation depth: 2, 



## Returns: unknown

## determineFileType

Max. indexation depth: 2, 

returns the file type or null if it's unknown

## Returns: unknown

## exploreGitRepoFolders

Max. indexation depth: 2, 

find all active git folders (folders having `.git`)

## Returns: unknown

## exploreMultiple

Max. indexation depth: 2, 

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now

## Returns: unknown

## exploreOperationFolders

Max. indexation depth: 2, 

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array

## Returns: unknown

## explorePreset

Max. indexation depth: 6, 



## Returns: unknown

## explore

Max. indexation depth: 3, 

this is the safe and friendly version of findFilesRecursively: it

## Returns: unknown

## findAllDotGitFolders

Max. indexation depth: 2, 



## Returns: unknown

## findAllPackages

Max. indexation depth: 2, 

Finds all package.json's everywhere. also in /tools, but this is to be expected.

TODO: `stopRecursionAfterMatch` never worked, so I just removed it... the behavior now is that it also explores folders that are in a folder with a `package.json`, unless that foldername is ignored. For now it's fine, but this could easily create an ineficiency if there's a lot of data in an operation or something...

TODO: We should be careful with ignoring all these folders... what if we use those folders outside of operations? This could have unexpected behavior. We either need to lint for these foldernames not to be used, or we need to make sure to only ignore it if we encounter a package.json

## Returns: unknown

## findFilesRecursively

Max. indexation depth: 8, 

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...

## Returns: unknown

## getArgument

Max. indexation depth: 1, 



## Returns: unknown

## getContents

Max. indexation depth: 2, 

gets needed contents of file path, based on the extension

returns a markdownparse if it's markdown, a json parse for json, or a file content string for anything else

## Returns: unknown

## getOutline

Max. indexation depth: 1, 



## Returns: unknown

## isMatch

Max. indexation depth: 2, 



## Returns: unknown

## isSearchContentExtension

Max. indexation depth: 2, 

type checker for a string to be an extension that can be searched for

### Returns: boolean







