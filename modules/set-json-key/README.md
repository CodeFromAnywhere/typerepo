# Set json key

set-json-key (undefined operation)

Update a JSON using the CLI

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [setJsonKey](#setJsonKey)
- [set](#set)



# Functions

## setJsonKey

Max. indexation depth: 4, 

npx setjsonkey [json-path] key1.key2.[index/latest/push].key3 "value"


collect arguments 1 2 and 3
find file (arg1) in path, import json (or start with empty object in a new file)
reduce keys (arg2) to go deeper into the object and create keys as they don't exist
make sure it works with arrays too
convert value string (arg3) to number, boolean if they seem to be like that

## Returns: unknown

## set

Max. indexation depth: 2, 



## Returns: unknown

