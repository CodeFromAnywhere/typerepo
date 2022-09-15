# Model types

model-types (js operation)



# Outline

## Functions

- [generateId](#generateId)
- [generatePassword](#generatePassword)
- [generateRandomString](#generateRandomString)
- [generateTime](#generateTime)
- [isEmail](#isEmail)
- [markdownModelTypeToMarkdownString](#markdownModelTypeToMarkdownString)

## Models:

- [CsvModelType](#CsvModelType)
- [SlugModelType](#SlugModelType)

## Interfaces:

- [AnyModelType](#AnyModelType)
- [AugmentedAnyModelType](#AugmentedAnyModelType)
- [CategoryModelType](#CategoryModelType)
- [CategoryStack](#CategoryStack)
- [CreatedAt](#CreatedAt)
- [CreatedFirstAt](#CreatedFirstAt)
- [DbFileLocation](#DbFileLocation)
- [DefaultModelType](#DefaultModelType)
- [DeletedAt](#DeletedAt)
- [Email](#Email)
- [Frontmatter](#Frontmatter)
- [Id](#Id)
- [Index](#Index)
- [Json](#Json)
- [KeyValueMarkdownModelType](#KeyValueMarkdownModelType)
- [KeyValueMarkdownParse](#KeyValueMarkdownParse)
- [KvmdLine](#KvmdLine)
- [Language](#Language)
- [MarkdownModelType](#MarkdownModelType)
- [Markdown](#Markdown)
- [ModelLocation](#ModelLocation)
- [PhoneNumber](#PhoneNumber)
- [RelationType](#RelationType)
- [ShouldNotBeStored](#ShouldNotBeStored)
- [SlugModelProperties](#SlugModelProperties)
- [Slug](#Slug)
- [Text](#Text)
- [TimeTypes](#TimeTypes)
- [Time](#Time)
- [TsIndexModelType](#TsIndexModelType)
- [UpdatedAt](#UpdatedAt)
- [Url](#Url)



# Functions

## generateId

### Returns: string

## generatePassword

/**
 * generates a password. By default, uses a length of 14
 */




### Parameters (1)

#### Parameter 1: passwordLength (optional): number

## generateRandomString

### Returns: string

### Parameters (1)

#### Parameter 1: length: number

## generateTime

### Returns: number

## isEmail

### Parameters (1)

#### Parameter 1: email: string

## markdownModelTypeToMarkdownString

### Returns: string

### Parameters (1)

# Models

## CsvModelType

jsonMultiple model



Use this model for things you want to store in CSV format

TODO: add support for numbers, booleans, null, undefined



> Use this model for things you want to store in CSV format<br /><br />TODO: add support for numbers, booleans, null, undefined

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## SlugModelType

jsonMultiple model



use this model for things with a name that have an unique slug that can be used to identify the model



> use this model for things with a name that have an unique slug that can be used to identify the model

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string |  |
| language  | string | all currently supported languages |
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |


# Interfaces

## AnyModelType

Parameters that every model will always have.

NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.

NB: RelationTypes are also not always included for the same reason



> Parameters that every model will always have.<br /><br />NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.<br /><br />NB: RelationTypes are also not always included for the same reason

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## AugmentedAnyModelType

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## CategoryModelType

TODO: make this be able to hold more than just the KV. If that's not really needed just throw this away...

Simple recursive data structure for hierarchical categories. Should be used to make any category model

Make sure, when extending this, to provide a reference `xxxSlug` and its content `xxx` as optional parameters to its parent categories.

E.g. for a `CountryCategory`, you should provide `countryCategorySlug` and `countryCategory`



> --- isDbModel: false<br />---<br /><br />TODO: make this be able to hold more than just the KV. If that's not really needed just throw this away...<br /><br />Simple recursive data structure for hierarchical categories. Should be used to make any category model<br /><br />Make sure, when extending this, to provide a reference `xxxSlug` and its content `xxx` as optional parameters to its parent categories.<br /><br />E.g. for a `CountryCategory`, you should provide `countryCategorySlug` and `countryCategory`

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | same as slug<br /><br />used for compatibility with some general purpose functions<br /><br />NB: uniqueness is hard to enforce! |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean | Calculated value indicating whether or not the item has children |



## CategoryStack

- null: string






## CreatedAt

> Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now()




## CreatedFirstAt

in some cases, data can be created before it was created in our system. In this case, use CreatedFirstAt if this information is important.



> Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now()




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



## DefaultModelType

Use this model by default



> Use this model by default

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## DeletedAt

> Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now()




## Email

## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes



> Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes




## Id

Should be an unique string
By default, you can use `generateId()` to generate a random string of 16 characters.
If you wish, you can also use any other string, as long as you are sure it's unique.


## Background Info

azAZ09 characters are easy to copy and provide 62 characters.
the goal of an id is to be unique.

the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.

the change of duplicate ids gets bigger once you make them shorter
the change of finding an existing id gets bigger once you make them shorter

An Id with 12 characters would provide 3.22e21 combinations.

What is the change of duplicate ids? This depends on the amount of identifyable items in the data
What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.

Why make an id short? I don't know if there's an important reason.

All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.

An id would look like this:

```
{
"id": "sk2EcW9AkZpksk2EcW9AkZpk"
}
```

Looks good to me!
Don't think about it and just keep it simple.
We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.



> Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.




## Index

used for md files. index is the line



> used for md files. index is the line




## Json

## KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file.
empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug



> handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | same as slug<br /><br />used for compatibility with some general purpose functions<br /><br />NB: uniqueness is hard to enforce! |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean | Calculated value indicating whether or not the item has children |



## KeyValueMarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object | Our version of frontmatter is a bit simpler than regular frontmatter<br /><br />Not sure if this is a good idea, but it keeps it simple for our OS<br /><br />all values parse in a similar way to csv<br /><br />make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array<br /><br />NB: string arrays are comma separated values, where you can put values with special characters in between quotes |
| data  | array |  |



## KvmdLine

all things that can be parsed from a single line



> all things that can be parsed from a single line

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | same as slug, used for model compatibility |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |



## Language

all currently supported languages



> all currently supported languages




## MarkdownModelType

Handy model type for storing stuff in a Markdown file.

1 markdown file will represent 1 MarkdownModelType extended instance

another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content

TODO: see how this relates to MarkdownFile. Make this very clear!



> Handy model type for storing stuff in a Markdown file.<br /><br />1 markdown file will represent 1 MarkdownModelType extended instance<br /><br />another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content<br /><br />TODO: see how this relates to MarkdownFile. Make this very clear!

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |
| name  | string | human readable version of filename |
| slug  | string | slugified filename |
| markdown  | string | the content of the markdown |



## Markdown

a string that is known to contain markdown.



> a string that is known to contain markdown.




## ModelLocation

Parameters that tell you about the location an instance of a model.
Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.



> Parameters that tell you about the location an instance of a model. Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## PhoneNumber

country code without +



> country code without +




## RelationType

This probably doesn't work, but it would be great if it would. This way I'd like to say that any model can have keys that end with "Id". These keys should always refer to Ids from other models.
Also, if a model has a key like this, it is inferred that there is also a key without the Id suffix which does or doesn't cointain the actual model specified by the id.

If this cannot be done in typescript, it can be convention, and we can create a linter for this.

Wooh!

```
const relations: RelationType = {
helloId: "hoi",
byeId: "bye",
};
```

The above seems to be working fine, so it IS possible!

TODO: think about it... should the name of the parameter be dependent on the strategy of how the model is stored? Maybe just call it all id, right? We can also make the index a string by just prepending a string to it.



> This probably doesn't work, but it would be great if it would. This way I'd like to say that any model can have keys that end with "Id". These keys should always refer to Ids from other models. Also, if a model has a key like this, it is inferred that there is also a key without the Id suffix which does or doesn't cointain the actual model specified by the id.<br /><br />If this cannot be done in typescript, it can be convention, and we can create a linter for this.<br /><br />Wooh!<br /><br />``` const relations: RelationType = { helloId: "hoi", byeId: "bye", }; ```<br /><br />The above seems to be working fine, so it IS possible!<br /><br />TODO: think about it... should the name of the parameter be dependent on the strategy of how the model is stored? Maybe just call it all id, right? We can also make the index a string by just prepending a string to it.




## ShouldNotBeStored

Parameters that should not be stored into the database



> Parameters that should not be stored into the database




## SlugModelProperties

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string |  |
| language  | string | all currently supported languages |



## Slug

use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.



> use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.




## Text

text can be in multiple formats.
most texts in data are probably just text
but they can also contain markdown
----
if there is a data model with just a single text and it is clear from the name of the model what it should be, better call it either text or markdown.



> text can be in multiple formats. most texts in data are probably just text but they can also contain markdown<br />---- if there is a data model with just a single text and it is clear from the name of the model what it should be, better call it either text or markdown.




## TimeTypes

TimeTypes is often extended with modelTypes.



> TimeTypes is often extended with modelTypes.

Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |



## Time

Time

Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time.
I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.

It is the amount of ms since 1970.

I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.

Therefore, let's store all time values in the format Date.now()



> Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now()




## TsIndexModelType

identifier of any index type interface



> identifier of any index type interface

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |



## UpdatedAt

> Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now()




## Url

valid url, can be validated



> valid url, can be validated



