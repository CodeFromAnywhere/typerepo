# Read kvmd file

read-kvmd-file (node operation)



# Outline

## Functions

- [readKvmdFile](#readKvmdFile)
- [test2](#test2)
- [test](#test)

## Interfaces:

- [DbFileLocation](#DbFileLocation)
- [Path](#Path)



# Functions

## readKvmdFile

Reads and parses a markdown file




### Parameters (2)

#### Parameter 1: filePath: string

> unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything.




#### Parameter 2: dbFileLocation: object

> Object used to hand over all information about the location of a db-file in a structured way

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## test2

## test

# Interfaces

## DbFileLocation

Object used to hand over all information about the location of a db-file in a structured way



> Object used to hand over all information about the location of a db-file in a structured way

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## Path

unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.



> unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything.



