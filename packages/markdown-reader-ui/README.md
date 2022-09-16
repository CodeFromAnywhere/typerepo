# Markdown reader ui

markdown-reader-ui (ui-es6 operation)

All frontend components can go here



# Outline

## Functions

- [getPageTitle](#getPageTitle)
- [getQueryPath](#getQueryPath)
- [Layout](#Layout)

## Interfaces:

- [MarkdownReaderPage](#MarkdownReaderPage)
- [NextParsedUrlQuery](#NextParsedUrlQuery)



# Functions

## getPageTitle

utility function to get a title from a page




## getQueryPath

### Parameters (1)

#### Parameter 1: parsedUrlQuery (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| amp (optional) | string |  |
| __nextNotFoundSrcPage (optional) | string |  |
| __nextDefaultLocale (optional) | string |  |
| __nextFallback (optional) | string |  |
| __nextLocale (optional) | string |  |
| __nextSsgPath (optional) | string |  |
| _nextBubbleNoFallback (optional) | string |  |
| _nextDataReq (optional) | string |  |



## Layout

### Parameters (1)

#### Parameter 1: {  pages,  children,}: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| pages  | array |  |
| children  | object |  |


# Interfaces

## MarkdownReaderPage

Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string | path to be used as the url |
| filePath (optional) | string | if given, the file md-file will be provided to the frontend |
| isMenuItem (optional) | boolean | if true, this item will be shown in the menu |
| internalLinkWord (optional) | string | If a string is given, every word in every document will automatically be matched against these values. Case sensitive. If there's a match, the word will link to the queryPath.<br /><br />Used to link automatically to functionNames, InterfaceNames, operation-names, and words. |
| wordSlug (optional) | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| statementId (optional) | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## NextParsedUrlQuery

Properties: 

 | Name | Type | Description |
|---|---|---|
| amp (optional) | string |  |
| __nextNotFoundSrcPage (optional) | string |  |
| __nextDefaultLocale (optional) | string |  |
| __nextFallback (optional) | string |  |
| __nextLocale (optional) | string |  |
| __nextSsgPath (optional) | string |  |
| _nextBubbleNoFallback (optional) | string |  |
| _nextDataReq (optional) | string |  |


