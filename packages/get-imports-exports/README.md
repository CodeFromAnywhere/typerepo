# Get imports exports

get-imports-exports (node operation)



# Outline

## Functions

- [calculatePackageJsonDependencies](#calculatePackageJsonDependencies)
- [findAndWriteImportsExports](#findAndWriteImportsExports)
- [getDefaultSymbolType](#getDefaultSymbolType)
- [getExportSpecifierNames](#getExportSpecifierNames)
- [getExportSymbolTypeRecursive](#getExportSymbolTypeRecursive)
- [getImportSpecifiersWithNames](#getImportSpecifiersWithNames)
- [getImportsExportsTest](#getImportsExportsTest)
- [getImportsExports](#getImportsExports)
- [getPackageNameFromAbsoluteImport](#getPackageNameFromAbsoluteImport)
- [getSymbolDeclarationsOfKind](#getSymbolDeclarationsOfKind)
- [getSymbolTypeDeclarations](#getSymbolTypeDeclarations)
- [getTypeFromImportSpecifierRecursive](#getTypeFromImportSpecifierRecursive)
- [isAbsoluteImportBuiltin](#isAbsoluteImportBuiltin)
- [isAbsoluteImport](#isAbsoluteImport)
- [isImportFromOptionalFile](#isImportFromOptionalFile)
- [test](#test)
- [writeResult](#writeResult)

## Interfaces:

- [PackageInfoObject](#PackageInfoObject)
- [PackageJson](#PackageJson)



# Functions

## calculatePackageJsonDependencies

Calculates new packageJson dependencies object based on imports found in the whole operation.

For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)

Generated packages are not added to dependencies. Instead a sensible config prop is added to state that this operation only works within a monorepo since it has generated operation deps that are not on the npm registry

For external modules, uses the version that was already present in dependencies, or uses "*"

Also keeps the dependencies that were already there, nothing is removed.


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| newDependencies  | object |  |
| hasGeneratedDependencies  | boolean |  |



### Parameters (3)

#### Parameter 1: dependencies (optional): object

#### Parameter 2: imports: array

> All imports found in your operation




#### Parameter 3: packageJsons: array

- PackageJson: object

> All package-json's in your monorepo




## findAndWriteImportsExports

takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes

NB: has a side effect: it also updates the package.json to include all needed dependencies.




### Parameters (2)

#### Parameter 1: operationBasePath: string

#### Parameter 2: manualProjectRoot (optional): string

## getDefaultSymbolType

gets type of a symbol and if the type has a generic, without recursing.


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| hasGeneric (optional) | boolean |  |



## getExportSpecifierNames

## getExportSymbolTypeRecursive

gets type of exportSymbols. recurses if it's an exportsymbol

TODO: NB: exports that come from a destructured initialiser aren't found! fix it


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| hasGeneric (optional) | boolean |  |



## getImportSpecifiersWithNames

get the ImportSpecifier(s) of with a certain name.




## getImportsExportsTest

## getImportsExports

Uses ts-morph to get all exports inside all files in a project or an array of source files.
Doesn't use index, it actually looks in all files except index,
so some of them may not be exported from the package itself depending on your indexing strategy!




## getPackageNameFromAbsoluteImport

parses the absolute import name into the actual package name

- removes internal navigation in the package (everything after the package name)
- assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
- removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`




### Parameters (1)

#### Parameter 1: absoluteImportName: string

## getSymbolDeclarationsOfKind

### Returns: array

- null: object






## getSymbolTypeDeclarations

### Returns: array

- null: object






## getTypeFromImportSpecifierRecursive

Recursive function that gets the type specifier from an import specifier


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| hasGeneric (optional) | boolean |  |



## isAbsoluteImportBuiltin

returns true if the absolute import is built in into node




### Parameters (1)

#### Parameter 1: absoluteImportName: string

## isAbsoluteImport

### Returns: boolean

## isImportFromOptionalFile

returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency


### Returns: boolean

### Parameters (1)

## test

## writeResult

### Parameters (1)

#### Parameter 1: options: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | string |  |
| success  | boolean |  |
| message  | string |  |


# Interfaces

## PackageInfoObject

## PackageJson

> --- dbStorageMethod: jsonSingle operationRelativePath: package.json<br />---

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| sensible (optional) | object | Sensible-global configurations |
| operation (optional) | object | --- operationRelativePath: OPERATION.md isOperationIndex: true<br />---<br /><br />anything configurable about the operation.<br /><br />Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.<br /><br />Let's try to use OPERATION.md<br /><br />TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention. |


