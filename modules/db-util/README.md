# Db util

db-util (node operation)



# Outline

## Functions

- [filterInterfacesFromOperationNames](#filterInterfacesFromOperationNames)
- [getDbModelsFromOperations](#getDbModelsFromOperations)

## Interfaces:

- [TsInterface](#TsInterface)



# Functions

## filterInterfacesFromOperationNames

### Parameters (2)

#### Parameter 1: tsInterface: object

> --- dbStorageMethod: jsonSingle<br />---<br /><br />TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |



#### Parameter 2: operationNames (optional): array

- null: string






## getDbModelsFromOperations

### Parameters (1)

#### Parameter 1: operationNames: array

- null: string





# Interfaces

## TsInterface

TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.



> --- dbStorageMethod: jsonSingle<br />---<br /><br />TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| type  | object | all info that should always be collected when indexing any type interface |
| description (optional) | string | a string that is known to contain markdown. |
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |
| dbStorageMethod (optional) | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |


