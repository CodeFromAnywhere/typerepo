# Set json key

set-json-key (node operation)

Update a JSON using the CLI



# Outline

## Functions

- [setJsonKey](#setJsonKey)
- [set](#set)



# Functions

## setJsonKey

npx setjsonkey [json-path] key1.key2.[index/latest/push].key3 "value"


collect arguments 1 2 and 3
find file (arg1) in path, import json (or start with empty object in a new file)
reduce keys (arg2) to go deeper into the object and create keys as they don't exist
make sure it works with arrays too
convert value string (arg3) to number, boolean if they seem to be like that




### Parameters (1)

#### Parameter 1: {  jsonPath,  keyLocation,  value,  debug,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| jsonPath  | string |  |
| keyLocation  | string |  |
| value  | string |  |
| debug (optional) | boolean |  |



## set

### Parameters (3)

#### Parameter 1: path: string

#### Parameter 2: value: string

#### Parameter 3: object: object

