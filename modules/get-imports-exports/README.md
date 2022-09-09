# Get imports exports

get-imports-exports (node operation)

Size: 670 LOC, 1856 data characters, 5166 text characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: builtinModules, SourceFile, ImportDeclaration, Symbol, TypeAliasDeclaration, InterfaceDeclaration, ImportSpecifier, SyntaxKind
- From Operations: mergeObjectsArray, notEmpty, onlyUnique2, PackageInfoObject, PackageJson, TsImport, Creation, getSrcRelativeFileId, hasSubExtension, getOperationPath, log, db, getAllTsMorphSourceFiles, getLastFolder, kebabCase, exploreOperationFolders, log, TsExport, TsImport, ImportClassification, PackageJson, Creation, generateId, readJsonFile, path, getLastFolder, findOperationBasePath, getOperationPathParse, getPathParse, notEmpty, getHasGeneric, getPackageSourcePaths, getOperationPath, getTsMorphProject, log, makeTest

# Outline

## Functions

- [calculatePackageJsonDependencies](#calculatePackageJsonDependencies)
- [findAndWriteImportsExports](#findAndWriteImportsExports)
- [getDefaultSymbolType](#getDefaultSymbolType)
- [getExportSpecifierNames](#getExportSpecifierNames)
- [getExportSymbolType](#getExportSymbolType)
- [getImportSpecifiersWithNames](#getImportSpecifiersWithNames)
- [getImportsExportsTest](#getImportsExportsTest)
- [getImportsExports](#getImportsExports)
- [getPackageNameFromAbsoluteImport](#getPackageNameFromAbsoluteImport)
- [getSymbolDeclarationsOfKind](#getSymbolDeclarationsOfKind)
- [getSymbolTypeDeclarations](#getSymbolTypeDeclarations)
- [getTypeFromImportSpecifier](#getTypeFromImportSpecifier)
- [isAbsoluteImportBuiltin](#isAbsoluteImportBuiltin)
- [isAbsoluteImport](#isAbsoluteImport)
- [isImportFromOptionalFile](#isImportFromOptionalFile)
- [test](#test)



# Functions

## calculatePackageJsonDependencies

Max. indexation depth: 6, 

Calculates new packageJson dependencies object based on imports found in the whole operation.

For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)

For external modules, uses the version that was already present in dependencies, or uses "*"

Also keeps the dependencies that were already there, nothing is removed.

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## findAndWriteImportsExports

Max. indexation depth: 4, 

takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes

NB: has a side effect: it also updates the package.json to include all needed dependencies.

## Returns: unknown

## getDefaultSymbolType

Max. indexation depth: 5, 

gets type of a symbol and if the type has a generic, without recursing.

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| type (optional) | string |  |
| hasGeneric (optional) | boolean |  |


## getExportSpecifierNames

Max. indexation depth: 3, 



## Returns: unknown

## getExportSymbolType

Max. indexation depth: 5, 

gets type of exportSymbols. recurses if it's an exportsymbol

NB: exports that come from a destructured initialiser aren't found!
TODO: fix this

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| type (optional) | string |  |
| hasGeneric (optional) | boolean |  |


## getImportSpecifiersWithNames

Max. indexation depth: 2, 

get the ImportSpecifier(s) of with a certain name.

## Returns: unknown

## getImportsExportsTest

Max. indexation depth: 2, 



## Returns: unknown

## getImportsExports

Max. indexation depth: 8, 

Uses ts-morph to get all exports inside all files in a project or an array of source files.
Doesn't use index, it actually looks in all files except index,
so some of them may not be exported from the package itself depending on your indexing strategy!

## Returns: unknown

## getPackageNameFromAbsoluteImport

Max. indexation depth: 2, 

parses the absolute import name into the actual package name

- removes internal navigation in the package (everything after the package name)
- assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
- removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`

## Returns: unknown

## getSymbolDeclarationsOfKind

Max. indexation depth: 2, 



### Returns: array

- null: object





## getSymbolTypeDeclarations

Max. indexation depth: 3, 



### Returns: array

- null: object





## getTypeFromImportSpecifier

Max. indexation depth: 4, 



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| type (optional) | string |  |
| hasGeneric (optional) | boolean |  |


## isAbsoluteImportBuiltin

Max. indexation depth: 1, 

returns true if the absolute import is built in into node

## Returns: unknown

## isAbsoluteImport

Max. indexation depth: 1, 



### Returns: boolean







## isImportFromOptionalFile

Max. indexation depth: 2, 

returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency

### Returns: boolean







## test

Max. indexation depth: 2, 



## Returns: unknown

