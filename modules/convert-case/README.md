# Convert case

convert-case (js operation)



# Outline

## Functions

- [camelCase](#camelCase)
- [capitalCase](#capitalCase)
- [capitaliseFirstLetter](#capitaliseFirstLetter)
- [convertCase](#convertCase)
- [convertToTargetCasing](#convertToTargetCasing)
- [getDelimiter](#getDelimiter)
- [humanCase](#humanCase)
- [kebabCase](#kebabCase)
- [lowerCaseArray](#lowerCaseArray)
- [pascalCase](#pascalCase)
- [slugify](#slugify)
- [snakeCase](#snakeCase)
- [splitCasingDelimiters](#splitCasingDelimiters)

## Interfaces:

- [Casing](#Casing)



# Functions

## camelCase

### Parameters (1)

#### Parameter 1: text: string

## capitalCase

### Parameters (1)

#### Parameter 1: text: string

## capitaliseFirstLetter

### Parameters (1)

#### Parameter 1: word: string

## convertCase

### Parameters (2)

#### Parameter 1: text: string

> NB: texts of more than a sentence are not supported




#### Parameter 2: target: string(Enum: camel | pascal | snake | kebab | capital | human)

## convertToTargetCasing

### Parameters (3)

#### Parameter 1: word: string

#### Parameter 2: index: number

#### Parameter 3: target: string(Enum: camel | pascal | snake | kebab | capital | human)

## getDelimiter

### Returns: string(Enum: _ |   | - | )

### Parameters (1)

#### Parameter 1: target: string(Enum: camel | pascal | snake | kebab | capital | human)

## humanCase

### Parameters (1)

#### Parameter 1: text: string

## kebabCase

### Parameters (1)

#### Parameter 1: text: string

## lowerCaseArray

converts any string to an array of lowercase words

format ["word1","word2","word3"] from a string of any casing.




### Parameters (1)

#### Parameter 1: text: string

## pascalCase

### Parameters (1)

#### Parameter 1: text: string

## slugify

/**
 * this function does the same as kebabCase but it also does some more transformation on top
 *
 * TODO: make the tranformations that are done here into smaller util functions and make a clean function that can be ran before running every casing conversion (maybe in a config)
 */




### Parameters (1)

#### Parameter 1: string: string

## snakeCase

### Parameters (1)

#### Parameter 1: text: string

## splitCasingDelimiters

### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: word: string

# Interfaces

## Casing

