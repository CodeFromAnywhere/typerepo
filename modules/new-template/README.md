# New template

new-template (node operation)



# Outline

## Functions

- [getAvailableOperationName](#getAvailableOperationName)
- [getOperationConfig](#getOperationConfig)
- [main](#main)
- [newOperationCli](#newOperationCli)
- [newOperationWithFiles](#newOperationWithFiles)
- [newOperation](#newOperation)
- [newTemplateCli](#newTemplateCli)
- [newTemplate](#newTemplate)

## Interfaces

- [OperationClassification](#operationclassification)
- [OperationConfig](#operationconfig)

## Variables

- [getAvailableOperationName](#getavailableoperationname)
- [getOperationConfig](#getoperationconfig)
- [main](#main)
- [newOperationCli](#newoperationcli)
- [newOperationWithFiles](#newoperationwithfiles)
- [newOperation](#newoperation)
- [newTemplateCli](#newtemplatecli)
- [newTemplate](#newtemplate)



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

## main

## newOperationCli

newOperation also works as CLI

example: `newOperation [operation-name] [type]` in the folder where you want to create it. Optionally you can specify the type of operation (js, node, ui-es5, ui-es6, web) as the second argument of the CLI

Arguments (all optional):
- name: string
- type: `OperationClassification`
- description: string
- destinationPath: string




## newOperationWithFiles

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness




### Parameters (3)

#### Parameter 1: operationConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| indirectDependencies (optional) | array |  |
| authors (optional) | array |  |
| contributors (optional) | array |  |
| shortDescriptionText (optional) | string |  |



#### Parameter 2: srcFileContentObject: object

#### Parameter 3: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| destinationPath (optional) | string |  |
| overwriteIfExists (optional) | boolean |  |
| skipYarnInstall (optional) | boolean |  |
| skipYarnBuild (optional) | boolean |  |
| dryrun (optional) | boolean |  |



## newOperation

## How to create a package/operation?

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong




### Parameters (2)

#### Parameter 1: name (optional): string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type (optional) | string |  |
| operationConfig (optional) | object |  |
| description (optional) | string |  |
| destinationPath (optional) | string |  |
| manualProjectRoot (optional) | string |  |



## newTemplateCli

newTemplate can be used as CLI:

Arguments:
- type (required): a folder from `new-template/assets/templates`
- destinationPath (optional): path where the template should be copied to (uses `cwd` by default)




## newTemplate

Returns either the `basePath` of the created template, or undefined if something went wrong




### Parameters (2)

#### Parameter 1: type: string

#### Parameter 2: destinationPath (optional): string

# Interfaces

## OperationClassification

## Classification

TODO: think about what the differences are and how we need to change processes to make it all work good


### Possible values

js: only js (no node) (well, ts of course, but it gets built into js)

ts: non-built ts code

node: includes other node packages, operations, core-imports, or globals.

server: exposes something on some port when it is ran and uses node code

web: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...

app: uses react-native and exposes something on some port when it is ran

DEPRECATED: ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. highly discouraged, please use ui-es5, or, if needed, ui-esm)

ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)

ui-esm: ui which builds to ESM module resolved Javascript








## OperationConfig

anything configurable about the operation.

Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.

Let's try to use OPERATION.md

TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |
| indirectDependencies (optional) | array |  |
| authors (optional) | array |  |
| contributors (optional) | array |  |
| shortDescriptionText (optional) | string |  |


# Variables

## getAvailableOperationName (exported const)

returns folder name

finds the first foldername that is available in this folder but also there is nowhere an operation already with this name

there is also getAvailableFolderPath for non-operation folders


## getOperationConfig (exported const)

Either finds the operation config in the database or creates a new one

NB: it does not push it into the database yet because the operation might not exist yet


## main (exported const)

## newOperationCli (unexported const)

newOperation also works as CLI

example: `newOperation [operation-name] [type]` in the folder where you want to create it. Optionally you can specify the type of operation (js, node, ui-es5, ui-es6, web) as the second argument of the CLI

Arguments (all optional):
- name: string
- type: `OperationClassification`
- description: string
- destinationPath: string


## newOperationWithFiles (exported const)

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness


## newOperation (exported const)

## How to create a package/operation?

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong


## newTemplateCli (unexported const)

newTemplate can be used as CLI:

Arguments:
- type (required): a folder from `new-template/assets/templates`
- destinationPath (optional): path where the template should be copied to (uses `cwd` by default)


## newTemplate (exported const)

Returns either the `basePath` of the created template, or undefined if something went wrong

