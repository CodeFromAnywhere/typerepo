# Schema util

schema-util (js operation)

It's hard to work with them if you don't know what means what. In this operation I'll summarize everything and give examples.



# Outline

## Functions

- [getPossibleReferenceParameterNames](#getPossibleReferenceParameterNames)
- [getProperties](#getProperties)
- [getRefLink](#getRefLink)
- [getReferencableModels](#getReferencableModels)
- [getReferenceParameterInfo](#getReferenceParameterInfo)
- [getSchemaItems](#getSchemaItems)
- [getSchema](#getSchema)
- [simplifiedSchemaToTypeDefinitionString](#simplifiedSchemaToTypeDefinitionString)
- [simplifySchema](#simplifySchema)

## Interfaces:

- [JSONSchema7](#JSONSchema7)
- [JSONSchema7Definition](#JSONSchema7Definition)
- [ReferenceParameterInfo](#ReferenceParameterInfo)
- [SchemaItem](#SchemaItem)
- [SchemaProperty](#SchemaProperty)
- [Schema](#Schema)
- [SimplifiedSchema](#SimplifiedSchema)



# Functions

## getPossibleReferenceParameterNames

returns the reference parameterNames...


e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: parameterName: string

## getProperties

Gets all the properties of a schema


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: schema (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |



## getRefLink

gets the $ref from a schema and parses the interface name from it




### Parameters (1)

#### Parameter 1: ref (optional): string

## getReferencableModels

based on the object properties in SimplifiedSchema, returns the model names that can be referenced


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: simplifiedSchema (optional): object

> JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |



## getReferenceParameterInfo

Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:

- descriptorName with the suffixing underscore is optional
- referenceKey can be slug, index, or id (or there plural variants)
- modelName should refer to a database model


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameterName  | string |  |
| dataParameterName (optional) | string |  |
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |



### Parameters (1)

#### Parameter 1: parameterName: string

## getSchemaItems

==========




### Parameters (1)

#### Parameter 1: schema (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |



## getSchema

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it


### Returns: object

### Parameters (1)

#### Parameter 1: maybeSchema (optional): object

> JSON Schema v7




## simplifiedSchemaToTypeDefinitionString

Converts a simplifiedSchema definition back into a type interface string

With this, types can be generated in different ways




### Parameters (1)

#### Parameter 1: simplifiedSchema (optional): object

> JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |



## simplifySchema

Return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema.

A SimplifiedSchema is a data structure that allows you to easily define type interfaces that need to build out forms.


## Todo

Dual types aren't done right yet. I probably don't look at `anyOf` yet, which makes it result in an empty object.

For example, this one is problematic:

INPUT:

```json
{
"schema": {
"anyOf": [
{"type": "string"},
{"type": "array","items": {"type": "string"}}
]
},
```

Output:
```json
{
"simplifiedSchema": {
"properties": [],
"type": "object"
},
}
```

To test this one, test `npx rebuildOperation filename-conventions`




### Parameters (4)

#### Parameter 1: name: string

> The name of the type interface, (this could be used as $ref).




#### Parameter 2: schema: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| dependencies (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |



#### Parameter 3: possibleRefs: array

- null: object

> The array of other schemas found when crawling file this schema was found in. this also includes all refs to other type interfaces in all schemas in that file




#### Parameter 4: rootStack: array

- null: string

> This function is recursive. If we find any reference to another schema, we will add the name of the current schema to the rootStack and explore that schema.



# Interfaces

## JSONSchema7

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |



## JSONSchema7Definition

JSON Schema v7



> JSON Schema v7




## ReferenceParameterInfo

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameterName  | string |  |
| dataParameterName (optional) | string | If the parameterName is a reference parameter, this will contain the parameterName that should contain the referenced data, should there be one. |
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |



## SchemaItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string | name in case of it being a reference, otherwise null |
| schema (optional) | object |  |



## SchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |
| required  | boolean |  |



## Schema

schema type interface we use in TsInterface

NB: don't export because this would make this type exist twice.





Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |



## SimplifiedSchema

JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form



> JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |


