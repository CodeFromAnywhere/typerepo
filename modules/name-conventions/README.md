# Name conventions

name-conventions (js operation)



# Outline

## Functions

- [getParameterContentType](#getParameterContentType)
- [isCalculatedParameter](#isCalculatedParameter)
- [isGeneratedParameterName](#isGeneratedParameterName)

## Interfaces:

- [PatternMatcher](#PatternMatcher)



# Functions

## getParameterContentType

### Parameters (1)

#### Parameter 1: parameterName: string

## isCalculatedParameter

this is part of the database convention




### Parameters (1)

#### Parameter 1: parameterName: string

## isGeneratedParameterName

### Parameters (1)

#### Parameter 1: parameterName: string

# Interfaces

## PatternMatcher

Properties: 

 | Name | Type | Description |
|---|---|---|
| pattern  | string |  |
| matches  | string |  |
| isSingleWord (optional) | boolean | if true, this indicates that all instances of the matched are single words. This makes it possible to use this patternmatcher directly after another patternmatcher without loosing information. |


