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

## Interfaces

- [PackageInfoObject](#packageinfoobject)
- [PackageJson](#packagejson)

## Variables

- [calculatePackageJsonDependencies](#calculatepackagejsondependencies)
- [findAndWriteImportsExports](#findandwriteimportsexports)
- [getDefaultSymbolType](#getdefaultsymboltype)
- [getExportSpecifierNames](#getexportspecifiernames)
- [getExportSymbolTypeRecursive](#getexportsymboltyperecursive)
- [getImportSpecifiersWithNames](#getimportspecifierswithnames)
- [getImportsExportsTest](#getimportsexportstest)
- [getImportsExports](#getimportsexports)
- [getPackageNameFromAbsoluteImport](#getpackagenamefromabsoluteimport)
- [getSymbolDeclarationsOfKind](#getsymboldeclarationsofkind)
- [getSymbolTypeDeclarations](#getsymboltypedeclarations)
- [getTypeFromImportSpecifierRecursive](#gettypefromimportspecifierrecursive)
- [isAbsoluteImportBuiltin](#isabsoluteimportbuiltin)
- [isAbsoluteImport](#isabsoluteimport)
- [isImportFromOptionalFile](#isimportfromoptionalfile)
- [[operationBasePath, manualProjectRoot]](#operationbasepath-manualprojectroot)
- [test](#test)
- [writeResult](#writeresult)



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



### Parameters (4)

#### Parameter 1: dependencies (optional): object

#### Parameter 2: imports: array

#### Parameter 3: packageJsons: array

- PackageJson: object






#### Parameter 4: operationName: string

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

### Returns: object

## isImportFromOptionalFile

returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency


### Returns: object

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
| manualProjectRoot (optional) | string |  |


# Interfaces

## PackageInfoObject

## PackageJson

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository (optional) | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string |  |
| sensible (optional) | object |  |
| operation (optional) | object |  |


# Variables

## calculatePackageJsonDependencies (exported const)

Calculates new packageJson dependencies object based on imports found in the whole operation.

For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)

Generated packages are not added to dependencies. Instead a sensible config prop is added to state that this operation only works within a monorepo since it has generated operation deps that are not on the npm registry

For external modules, uses the version that was already present in dependencies, or uses "*"

Also keeps the dependencies that were already there, nothing is removed.


## findAndWriteImportsExports (exported const)

takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes

NB: has a side effect: it also updates the package.json to include all needed dependencies.


## getDefaultSymbolType (exported const)

gets type of a symbol and if the type has a generic, without recursing.


## getExportSpecifierNames (exported const)

## getExportSymbolTypeRecursive (exported const)

gets type of exportSymbols. recurses if it's an exportsymbol

TODO: NB: exports that come from a destructured initialiser aren't found! fix it


## getImportSpecifiersWithNames (exported const)

get the ImportSpecifier(s) of with a certain name.


## getImportsExportsTest (exported const)

## getImportsExports (exported const)

Uses ts-morph to get all exports inside all files in a project or an array of source files.
Doesn't use index, it actually looks in all files except index,
so some of them may not be exported from the package itself depending on your indexing strategy!


## getPackageNameFromAbsoluteImport (exported const)

parses the absolute import name into the actual package name

- removes internal navigation in the package (everything after the package name)
- assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
- removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`


## getSymbolDeclarationsOfKind (unexported const)

## getSymbolTypeDeclarations (exported const)

## getTypeFromImportSpecifierRecursive (exported const)

Recursive function that gets the type specifier from an import specifier


## isAbsoluteImportBuiltin (exported const)

returns true if the absolute import is built in into node


## isAbsoluteImport (exported const)

## isImportFromOptionalFile (exported const)

returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency


## [operationBasePath, manualProjectRoot] (unexported const)

## test (exported const)

## writeResult (exported const)

