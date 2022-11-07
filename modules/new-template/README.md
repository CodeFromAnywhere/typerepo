# New template

new-template (node operation)



# Outline

## Docs

- [README](#readme)

## Functions

- [getAvailableOperationName](#getAvailableOperationName)
- [getOperationConfig](#getOperationConfig)
- [main](#main)
- [newOperationWithFiles](#newOperationWithFiles)
- [newOperation](#newOperation)
- [newTemplate](#newTemplate)

## Variables

- [getAvailableOperationName](#getavailableoperationname)
- [getOperationConfig](#getoperationconfig)
- [main](#main)
- [newOperationWithFiles](#newoperationwithfiles)
- [newOperation](#newoperation)
- [newTemplate](#newtemplate)



# Docs

## README

## Creating an app template

Please note you can't add `package.json` and `.gitignore` files to templates! Call them `package.template.json` and `.gitignore.template` repectively in order for everything to function as expected (they will be renamed on installation)


# Functions

## getAvailableOperationName()

returns folder name

finds the first foldername that is available in this folder but also there is nowhere an operation already with this name

there is also getAvailableFolderPath for non-operation folders


| Input      |    |    |
| ---------- | -- | -- |
| rootFolderPath | string |  |,| preferredFolderName | string |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## getOperationConfig()

Either finds the operation config in the database or creates a new one

NB: it does not push it into the database yet because the operation might not exist yet


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| description (optional) | string | If you want to create one, set a description here. |
| **Output** |    |    |



## main()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## newOperationWithFiles()

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness


| Input      |    |    |
| ---------- | -- | -- |
| operationConfig | `OperationConfig` |  |,| srcFileContentObject | { [key: string]: string } | NB: relative paths must be relative to OPERATION ROOT, not src root! |,| config (optional) | { manualProjectRoot?: string, <br />destinationPath?: string, <br />overwriteIfExists?: boolean, <br />skipYarnInstall?: boolean, <br />skipYarnBuild?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## newOperation()

## How to create a package/operation?

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong


| Input      |    |    |
| ---------- | -- | -- |
| name (optional) | string |  |,| config (optional) | { type?: `OperationClassification`, <br />operationConfig?: `OperationConfig`, <br />description?: string, <br />destinationPath?: string, <br />manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## newTemplate()

Returns either the `basePath` of the created template, or undefined if something went wrong


| Input      |    |    |
| ---------- | -- | -- |
| type | string |  |,| destinationPath (optional) | string |  |
| **Output** |    |    |


# Variables

## 📄 getAvailableOperationName (exported const)

returns folder name

finds the first foldername that is available in this folder but also there is nowhere an operation already with this name

there is also getAvailableFolderPath for non-operation folders


## 📄 getOperationConfig (exported const)

Either finds the operation config in the database or creates a new one

NB: it does not push it into the database yet because the operation might not exist yet


## 📄 main (exported const)

## 📄 newOperationWithFiles (exported const)

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness


## 📄 newOperation (exported const)

## How to create a package/operation?

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong


## 📄 newTemplate (exported const)

Returns either the `basePath` of the created template, or undefined if something went wrong

