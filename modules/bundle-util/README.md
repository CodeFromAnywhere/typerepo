# Bundle util

bundle-util (node operation)



# Outline

## Functions

- [getBundleSummary](#getBundleSummary)
- [getDbModelsForBundle](#getDbModelsForBundle)
- [getDocsMarkdownReaderPages](#getDocsMarkdownReaderPages)
- [getInternalLinks](#getInternalLinks)
- [getMarkdownReaderQueryPaths](#getMarkdownReaderQueryPaths)
- [getPublicMarkdownFilePaths](#getPublicMarkdownFilePaths)
- [removeExtensionsFromPath](#removeExtensionsFromPath)
- [removeNumberPrefix](#removeNumberPrefix)

## Interfaces:

- [BundleConfig](#BundleConfig)
- [BundleSummary](#BundleSummary)
- [Id](#Id)
- [InternalLinkObject](#InternalLinkObject)
- [InternalLink](#InternalLink)
- [MarkdownReaderPage](#MarkdownReaderPage)
- [Slug](#Slug)



# Functions

## getBundleSummary

Summarizes a bundle config so it can be used easily in things like explore project


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| packageNames  | array |  |
| moduleNames  | array |  |
| appNames  | array |  |



### Parameters (1)

#### Parameter 1: bundleConfig: object

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| skipPush (optional) | boolean |  |



## getDbModelsForBundle

Gets all TsInterface's that are used in a bundle according to a BundleConfig




### Parameters (1)

#### Parameter 1: bundleConfig: object

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| skipPush (optional) | boolean |  |



## getDocsMarkdownReaderPages

- Gets all pages of a bundle based on the fs
- README should always be on top in a folder.
- numbers and extensions are omitted from paths, but still connected to the right file
- If the docs doesn't have a readme, the /docs/readme path shows the root readme.

Does not include individual functions, interfaces, statements, word-definitions pages




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |



## getInternalLinks

Returns the internal links taken out of the MarkdownReaderPage[]




### Parameters (1)

#### Parameter 1: pages: array

## getMarkdownReaderQueryPaths

### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |



## getPublicMarkdownFilePaths

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)




### Parameters (1)

#### Parameter 1: baseFolderPath: string

## removeExtensionsFromPath

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders


### Returns: string

### Parameters (1)

#### Parameter 1: relativePath: string

## removeNumberPrefix

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


### Returns: string

### Parameters (1)

#### Parameter 1: fileOrFolderName: string

# Interfaces

## BundleConfig

> --- dbStorageMethod: jsonSingle<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| docsRelativeFolderPath (optional) | string | later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way. |
| readmeRelativeFilePath (optional) | string |  |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |
| skipPush (optional) | boolean |  |



## BundleSummary

Properties: 

 | Name | Type | Description |
|---|---|---|
| packageNames  | array | Haven't found a good usecase for this yet |
| moduleNames  | array |  |
| appNames  | array |  |



## Id

Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.


## Background Info

azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.

the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.

the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter

An Id with 12 characters would provide 3.22e21 combinations.

What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.

Why make an id short? I don't know if there's an important reason.

All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.

An id would look like this:

``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```

Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.



> Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.




## InternalLinkObject

This datastructure is probably needed to make it more efficient.

Should be a lookup table for the querypath for every word



> This datastructure is probably needed to make it more efficient.<br /><br />Should be a lookup table for the querypath for every word




## InternalLink

Internal links should have a small footprint since there can be many of them

An internal link just needs to be a word connected to a different page



> Internal links should have a small footprint since there can be many of them<br /><br />An internal link just needs to be a word connected to a different page

Properties: 

 | Name | Type | Description |
|---|---|---|
| internalLinkWord  | string |  |
| queryPath  | string |  |



## MarkdownReaderPage

Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string | path to be used as the url |
| filePath (optional) | string | if given, the file md-file will be provided to the frontend |
| isMenuItem (optional) | boolean | if true, this item will be shown in the menu |
| internalLinkWord (optional) | string | If a string is given, every word in every document will automatically be matched against these values. Case sensitive. If there's a match, the word will link to the queryPath.<br /><br />Used to link automatically to functionNames, InterfaceNames, operation-names, and words. |
| wordSlug (optional) | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| statementId (optional) | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## Slug

use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.



> use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.



