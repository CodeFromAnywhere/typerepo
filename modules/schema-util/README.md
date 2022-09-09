# Schema util

schema-util (undefined operation)

It's hard to work with them if you don't know what means what. In this operation I'll summarize everything and give examples.

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [getProperties](#getProperties)
- [getRefLink](#getRefLink)
- [getReferencableModels](#getReferencableModels)
- [getReferenceParameterInfo](#getReferenceParameterInfo)
- [getSchemaItems](#getSchemaItems)
- [getSchema](#getSchema)
- [simplifiedSchemaToTypeDefinitionString](#simplifiedSchemaToTypeDefinitionString)
- [simplifySchema](#simplifySchema)



# Functions

## getProperties

Max. indexation depth: 6, 

Gets all the properties of a schema

### Returns: array

- null: object





## getRefLink

Max. indexation depth: 1, 

gets the $ref from a schema and parses the interface name from it

## Returns: unknown

## getReferencableModels

Max. indexation depth: 3, 

based on the object properties in SimplifiedSchema, returns the model names that can be referenced

### Returns: array

- null: object





## getReferenceParameterInfo

Max. indexation depth: 2, 

Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:

- descriptorName with the suffixing underscore is optional
- referenceKey can be slug, index, or id (or there plural variants)
- modelName should refer to a database model

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |


## getSchemaItems

Max. indexation depth: 1, 

==========

## Returns: unknown

## getSchema

Max. indexation depth: 1, 

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## simplifiedSchemaToTypeDefinitionString

Max. indexation depth: 4, 

Converts a simplifiedSchema definition back into a type interface string

With this, types can be generated in different ways

## Returns: unknown

## simplifySchema

Max. indexation depth: 5, 

return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema

## Returns: unknown

