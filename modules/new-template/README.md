# New template

new-template (`OperationClassification` node-cjs)



# Api reference

## newOperationWithFiles()

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness


| Input      |    |    |
| ---------- | -- | -- |
| name | string |  |,| description (optional) | string |  |,| srcFileContentObject | { [key: string]: string } | NB: relative paths must be relative to OPERATION ROOT, not src root! |,| config (optional) | { manualProjectRoot?: string, <br />destinationPath?: string, <br />overwriteIfExists?: boolean, <br />overwriteCurrentOperationIfExists?: boolean, <br />skipYarnInstall?: boolean, <br />skipYarnBuild?: boolean, <br />dryrun?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 newOperationWithFiles (exported const)

Creates a new operation with files with content

Returns the final operation base path (or undefined if something went wrong)

NB: relative paths must be relative to OPERATION ROOT, not src root! They must also lead to files in src, this thing is still buggy otherwise!

TODO: Remove the buggyness


## newTemplate()

Returns either the `basePath` of the created template, or undefined if something went wrong


| Input      |    |    |
| ---------- | -- | -- |
| type | string |  |,| destinationPath (optional) | string |  |
| **Output** |    |    |



## 📄 newTemplate (exported const)

Returns either the `basePath` of the created template, or undefined if something went wrong

# CLI

<details><summary>Show CLI information (4)</summary>
    
  # newOperationCli()

newOperation also works as CLI

example: `newOperation [operation-name] [type]` in the folder where you want to create it. Optionally you can specify the type of operation as the second argument of the CLI

Arguments (all optional):
- name: string
- type: `OperationClassification`
- description: string
- destinationPath: string


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## newTemplateCli()

newTemplate can be used as CLI:

Arguments:
- type (required): a folder from `new-template/assets/templates`
- destinationPath (optional): path where the template should be copied to (uses `cwd` by default)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 newOperationCli (unexported const)

newOperation also works as CLI

example: `newOperation [operation-name] [type]` in the folder where you want to create it. Optionally you can specify the type of operation as the second argument of the CLI

Arguments (all optional):
- name: string
- type: `OperationClassification`
- description: string
- destinationPath: string


## 📄 newTemplateCli (unexported const)

newTemplate can be used as CLI:

Arguments:
- type (required): a folder from `new-template/assets/templates`
- destinationPath (optional): path where the template should be copied to (uses `cwd` by default)
  </details>

# Tests

<details><summary>Show test information(2)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (exported const)

  </details>

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
| name (optional) | string |  |,| config (optional) | { type?: `OperationClassification`, <br />description?: string, <br />destinationPath?: string, <br />manualProjectRoot?: string, <br /> } |  |
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

