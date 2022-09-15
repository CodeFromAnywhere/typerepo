# K explore

k-explore (node operation)



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

### Parameters (1)

#### Parameter 1: amount (optional): number

## determineFileType

returns the file type or null if it's unknown




## exploreGitRepoFolders

find all active git folders (folders having `.git`)




## exploreMultiple

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now




## exploreOperationFolders

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath (optional) | object |  |



## explorePreset

## explore

this is the safe and friendly version of findFilesRecursively: it




## findAllDotGitFolders

## findAllPackages

Finds all package.json's everywhere. also in /tools, but this is to be expected.

TODO: `stopRecursionAfterMatch` never worked, so I just removed it... the behavior now is that it also explores folders that are in a folder with a `package.json`, unless that foldername is ignored. For now it's fine, but this could easily create an ineficiency if there's a lot of data in an operation or something...

TODO: We should be careful with ignoring all these folders... what if we use those folders outside of operations? This could have unexpected behavior. We either need to lint for these foldernames not to be used, or we need to make sure to only ignore it if we encounter a package.json




## findFilesRecursively

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...




## getArgument

### Parameters (1)

#### Parameter 1: number: number

## getContents

gets needed contents of file path, based on the extension

returns a markdownparse if it's markdown, a json parse for json, or a file content string for anything else




## getOutline

## isMatch

## isSearchContentExtension

type checker for a string to be an extension that can be searched for


### Returns: boolean

