# Nested menu

nested-menu (ui-es5 operation)



# Outline

## Functions

- [NestedMenuItem](#NestedMenuItem)
- [NestedMenu](#NestedMenu)
- [nestedPathObjectToNestedMenuRecursive](#nestedPathObjectToNestedMenuRecursive)
- [queryPathsArrayToNestedPathObject](#queryPathsArrayToNestedPathObject)
- [reduceQueryPathsRecursively](#reduceQueryPathsRecursively)
- [useExpanded](#useExpanded)

## Interfaces:

- [ExpandedObject](#ExpandedObject)
- [NestedPathObject](#NestedPathObject)



# Functions

## NestedMenuItem

General purpose NestedMenuItem

TODO: make style customizable




## NestedMenu

General purpose nested menu component




## nestedPathObjectToNestedMenuRecursive

Transform a nested path object into a nested menu (MenuType), recursively




### Parameters (2)

#### Parameter 1: nestedPathObject: object

> your nested path object that you want to create a menu for




#### Parameter 2: pathStack (optional): array

- null: string

> used for recursion to get the final url (defaults to empty array)




## queryPathsArrayToNestedPathObject

Handy function to transform an array of querypaths into a nested menu, assuming you want to create a new sub-menu for every path


### Returns: object

### Parameters (1)

#### Parameter 1: queryPaths: array

- null: string






## reduceQueryPathsRecursively

### Returns: object

### Parameters (2)

#### Parameter 1: queryPaths: array

- null: string






#### Parameter 2: initialValue: object

> A different way to represent a path array in a nested object of folders




## useExpanded

# Interfaces

## ExpandedObject

## NestedPathObject

A different way to represent a path array in a nested object of folders



> A different way to represent a path array in a nested object of folders



