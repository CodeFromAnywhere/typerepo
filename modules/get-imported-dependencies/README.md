# Get imported dependencies

get-imported-dependencies (node operation)



# Outline

## Functions

- [getImportedDependencies](#getImportedDependencies)
- [getPackage](#getPackage)
- [isAbsoluteImport](#isAbsoluteImport)



# Functions

## getImportedDependencies

DEPRECATED: should use generated index files with imports instead!

gets all imported packages (dependencies) in a project
doesn't take into account the fact that someone can set up a rule for absolute imports within the package.
this assumes that any absolute package comes from node_modules.




### Parameters (1)

#### Parameter 1: {  operationFolderPath,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationFolderPath  | string |  |



## getPackage

only the first part




### Parameters (1)

#### Parameter 1: absoluteModuleString: string

## isAbsoluteImport

if it doesn't start with a dot it must be an absolute import so most likely a package that needs to be installed


### Returns: boolean

### Parameters (1)

#### Parameter 1: moduleString: string

