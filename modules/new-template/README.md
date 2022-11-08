# New template

new-template (node operation)



## Docs

- [README](#readme)



# Docs

## README

## Creating an app template

Please note you can't add `package.json` and `.gitignore` files to templates! Call them `package.template.json` and `.gitignore.template` repectively in order for everything to function as expected (they will be renamed on installation)


# Api reference

## getOperationConfig()

Either finds the operation config in the database or creates a new one

NB: it does not push it into the database yet because the operation might not exist yet


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| description (optional) | string | If you want to create one, set a description here. |
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



## newTemplate()

Returns either the `basePath` of the created template, or undefined if something went wrong


| Input      |    |    |
| ---------- | -- | -- |
| type | string |  |,| destinationPath (optional) | string |  |
| **Output** |    |    |



## 📄 getOperationConfig (exported const)

Either finds the operation config in the database or creates a new one

NB: it does not push it into the database yet because the operation might not exist yet


## 📄 newOperationWithFiles (exported const)

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness


## 📄 newTemplate (exported const)

Returns either the `basePath` of the created template, or undefined if something went wrong

# Internal

<details><summary>Show internal (6)</summary>
  
  # getAvailableOperationName()

returns folder name

finds the first foldername that is available in this folder but also there is nowhere an operation already with this name

there is also getAvailableFolderPath for non-operation folders


| Input      |    |    |
| ---------- | -- | -- |
| rootFolderPath | string |  |,| preferredFolderName | string |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## main()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## newOperation()

## How to create a package/operation?

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong


| Input      |    |    |
| ---------- | -- | -- |
| name (optional) | string |  |,| config (optional) | { type?: `OperationClassification`, <br />operationConfig?: `OperationConfig`, <br />description?: string, <br />destinationPath?: string, <br />manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## 📄 getAvailableOperationName (exported const)

returns folder name

finds the first foldername that is available in this folder but also there is nowhere an operation already with this name

there is also getAvailableFolderPath for non-operation folders


## 📄 main (exported const)

## 📄 newOperation (exported const)

## How to create a package/operation?

This cli creates the correct tsconfig.json, package.json, .gitignore, folder setup, so you can get started immedeately.

Returns either the `operationBasePath` of the created operation, or undefined if something went wrong
  </details>

