# Read json file

read-json-file (node operation)



# Outline

## Functions

- [readJsonFileSync](#readJsonFileSync)
- [readJsonFile](#readJsonFile)
- [tryParseJson](#tryParseJson)

## Interfaces:

- [Path](#Path)



# Functions

## readJsonFileSync

Reads and parses JSON file

make sure to specify what type the file contains as a generic!


### Returns: string(Enum: ul | )

### Parameters (1)

#### Parameter 1: filePath: string

> unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything.




## readJsonFile

Reads and parses JSON file

make sure to specify what type the file contains as a generic!




### Parameters (1)

#### Parameter 1: filePath (optional): string

> unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything.




## tryParseJson

if text isn't json, returns null


### Returns: string(Enum: ul | )

### Parameters (2)

#### Parameter 1: text: string

#### Parameter 2: logParseError (optional): boolean

# Interfaces

## Path

unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.



> unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything.



