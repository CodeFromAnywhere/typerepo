# New operation

new-operation (node operation)

Package to create a new King OS Operation



# Outline

## Functions

- [getAvailableOperationName](#getAvailableOperationName)
- [getOperationConfig](#getOperationConfig)
- [main](#main)
- [newOperationWithFiles](#newOperationWithFiles)
- [newOperation](#newOperation)

## Interfaces:

- [OperationConfig](#OperationConfig)



# Functions

## getAvailableOperationName

returns folder name

finds the first foldername that is available in this folder but also there is nowhere an operation already with this name

there is also getAvailableFolderPath for non-operation folders




### Parameters (3)

#### Parameter 1: rootFolderPath: string

#### Parameter 2: preferredFolderName: string

#### Parameter 3: manualProjectRoot (optional): string

## getOperationConfig

Either finds the operation config in the database or creates a new one

NB: it does not push it into the database yet because the operation might not exist yet




### Parameters (2)

#### Parameter 1: operationName: string

#### Parameter 2: description (optional): string

> If you want to create one, set a description here.




## main

## newOperationWithFiles

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness




### Parameters (3)

#### Parameter 1: operationConfig: object

> --- operationRelativePath: OPERATION.md isOperationIndex: true<br />---<br /><br />anything configurable about the operation.<br /><br />Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.<br /><br />Let's try to use OPERATION.md<br /><br />TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| name  | string | human readable version of filename |
| slug  | string | slugified filename |
| markdown  | string | Any descriptions in markdown format<br /><br />- Markdown description of what the operation does.<br />- Installation instructions, if it is possible<br />- Usage instructions (with example), if available<br /><br />This is the main content of the markdown file |
| indirectDependencies (optional) | array | Sometimes you are using function in a UI, which cannot be inferred with imports because they are used indirectly via an api. Here you can specify which operations on the backend are needed for an operation (ui mostly)<br /><br />This array is simply a list of operation names needed for this operation that are not imported.<br /><br />NB: no need to specify things here that you also import in this operation, because these are already automatically detected. |
| authors (optional) | array | A list of authors<br /><br />Should be used to create bundle AUTHORS.md |
| contributors (optional) | array | A list of contributors<br /><br />Can be used to create bundle CONTRIBUTORS.md |
| shortDescriptionText (optional) | string | one-line explanation of what the operation does (no markdown) |



#### Parameter 2: srcFileContentObject: object

> NB: relative paths must be relative to OPERATION ROOT, not src root!




#### Parameter 3: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| destinationPath (optional) | string | folder path without the folder name of the package to be created<br /><br />if given, will place it here, otherwise, will place it in the default location (tools/generated for os projects, packages for sensible projects) |
| overwriteIfExists (optional) | boolean | if true, overwrites the operation if it already exists. It does this in a way that it does not break the OS very long, because it removes the old one only after the new one has been created. The removal and renaming the new one to this target name happens almost instantaneously |
| skipYarnInstall (optional) | boolean | if the operation did not exist before, `yarn install` will usually be ran.<br /><br />If you want to skip that, set this to `true` |
| skipYarnBuild (optional) | boolean | skips yarn build if `true` |
| dryrun (optional) | boolean | don't write anything, just return the files to create with the strings |



## newOperation

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong




### Parameters (2)

#### Parameter 1: name (optional): string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string |  |
| destinationPath (optional) | string | destinationPath without the operation folder itself<br /><br /><br />If not provided, uses the working directory from where the process was executed + an inferred foldername |
| manualProjectRoot (optional) | string | folder path (including if given, uses this project root instead of the project root of the executed process |


# Interfaces

## OperationConfig

anything configurable about the operation.

Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.

Let's try to use OPERATION.md

TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.



> --- operationRelativePath: OPERATION.md isOperationIndex: true<br />---<br /><br />anything configurable about the operation.<br /><br />Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.<br /><br />Let's try to use OPERATION.md<br /><br />TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| name  | string | human readable version of filename |
| slug  | string | slugified filename |
| markdown  | string | Any descriptions in markdown format<br /><br />- Markdown description of what the operation does.<br />- Installation instructions, if it is possible<br />- Usage instructions (with example), if available<br /><br />This is the main content of the markdown file |
| indirectDependencies (optional) | array | Sometimes you are using function in a UI, which cannot be inferred with imports because they are used indirectly via an api. Here you can specify which operations on the backend are needed for an operation (ui mostly)<br /><br />This array is simply a list of operation names needed for this operation that are not imported.<br /><br />NB: no need to specify things here that you also import in this operation, because these are already automatically detected. |
| authors (optional) | array | A list of authors<br /><br />Should be used to create bundle AUTHORS.md |
| contributors (optional) | array | A list of contributors<br /><br />Can be used to create bundle CONTRIBUTORS.md |
| shortDescriptionText (optional) | string | one-line explanation of what the operation does (no markdown) |


